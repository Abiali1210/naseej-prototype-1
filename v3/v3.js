(() => {
  'use strict';
  const base=document.getElementById('v3-base');
  const allowed=new Set(['naseej:role','naseej:role-choice','naseej:reset','naseej:deactivate']);
  const roles=new Set(['Grandparent','Parent','Grandchild']);
  const targetOrigin=location.origin==='null'?'*':location.origin;
  let helloSent=false,observer=null;

  function strings(lang){return lang==='ar'?{send:'أرسل تحية إلى الجدة',hint:'لمسة واحدة لإرسال تحية عائلية.',received:'علي يفكر بك',sent:'تحية صغيرة من حفيدك.',aria:'أرسل تحية عائلية'}:{send:'Send Grandma a hello',hint:'One tap to send a family hello.',received:'Ali is thinking of you',sent:'A little hello from your grandchild.',aria:'Send Grandma a hello'};}
  function drawHello(doc){
    const grid=doc.querySelector('#v2-main .v2-hub-grid');if(!grid)return;
    const screen=grid.closest('.v2-screen');screen.classList.add('v3-has-hello');
    let card=screen.querySelector('.v3-thinking-card');
    if(!card){card=doc.createElement('button');card.type='button';card.className='v3-thinking-card';card.innerHTML='<span class="v3-thinking-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 11.2c0 4.4-4 7.3-8 9.3-4-2-8-4.9-8-9.3A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 8 3.2Z"/><path d="M8 13h8M12 10v6"/></svg></span><span class="v3-thinking-copy"><strong></strong><span></span></span>';screen.insertBefore(card,grid);}
    const lang=doc.documentElement.lang,copy=strings(lang),state=helloSent?'sent':'offer';
    if(card.dataset.state===state&&card.dataset.lang===lang)return;
    card.dataset.state=state;card.dataset.lang=lang;card.setAttribute('aria-label',helloSent?`${copy.received}. ${copy.sent}`:copy.aria);
    card.querySelector('strong').textContent=helloSent?copy.received:copy.send;
    card.querySelector('.v3-thinking-copy span').textContent=helloSent?copy.sent:copy.hint;
  }
  function connectBase(){
    const doc=base.contentDocument;if(!doc)return;
    const style=doc.createElement('link');style.rel='stylesheet';style.href=new URL('v3.css',location.href).href;doc.head.appendChild(style);
    const main=doc.querySelector('#v2-main');
    main.addEventListener('click',(event)=>{if(!event.target.closest('.v3-thinking-card'))return;helloSent=true;drawHello(doc);});
    observer?.disconnect();observer=new MutationObserver(()=>drawHello(doc));observer.observe(main,{childList:true,subtree:true});drawHello(doc);
  }
  base.addEventListener('load',connectBase);
  if(base.contentDocument?.readyState==='complete')connectBase();
  window.addEventListener('message',(event)=>{
    if(event.source===base.contentWindow&&event.data?.type==='naseej:role-selected'&&roles.has(event.data.role)){
      window.parent.postMessage(event.data,targetOrigin);return;
    }
    if(event.source!==window.parent||!event.data||!allowed.has(event.data.type))return;
    if(event.data.type==='naseej:role'&&!roles.has(event.data.role))return;
    if(event.data.type==='naseej:reset')helloSent=false;
    base.contentWindow?.postMessage(event.data,targetOrigin);
  });
})();
