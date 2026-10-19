(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const storageKey = 'naseej-prototype-1-v2';
  const languageKey = 'naseej-language';
  const names = ['Grandma', 'Grandson'];
  let language = localStorage.getItem(languageKey) === 'ar' ? 'ar' : 'en';
  const arabic = {
    'Naseej — family moments, skills and stories':'نسيج — لحظات العائلة ومهاراتها وحكاياتها',
    'Switch to Arabic':'التبديل إلى العربية','Switch to English':'التبديل إلى الإنجليزية',
    'Demonstration only':'للعرض فقط','Preview controls':'أدوات المعاينة','View as':'العرض بصفة','Grandparent':'جد أو جدة','Parent':'أحد الوالدين','Grandchild':'حفيد أو حفيدة','Reset local demo':'إعادة ضبط العرض','Change role':'تغيير الدور','Version':'الإصدار','Prototype 1':'النموذج ١','Prototype 2':'النموذج ٢','Prototype 3':'النموذج ٣',
    'Back':'رجوع','Close':'إغلاق','Home':'الرئيسية','Today':'اليوم','Skills':'المهارات','Memories':'الذكريات','Recipes':'الوصفات',
    'Grandma':'الجدة','Grandson':'الحفيد','Relationship':'صلة القرابة','Our family':'عائلتنا',
    'Family moments woven':'لحظات عائلية مترابطة','Baking':'الخبز','Garden':'الحديقة','Old house':'البيت القديم','Linked with clay and pine threads':'خيوط تجمعنا','A new moment joined the weave.':'انضمت لحظة جديدة إلى نسيج العائلة.','Recent moments':'لحظات أخيرة','Baking together':'نخبز معًا','Looking at the garden':'نتأمل الحديقة','See today\'s moments':'شاهد لحظات اليوم',
    'Photos and optional voice notes from both sides of the family.':'صور ومقاطع صوتية من أفراد العائلة.','No moments yet.':'لا توجد لحظات بعد.','Add a moment':'أضف لحظة','Share a photo. Add your voice if you want.':'شارك صورة وأضف صوتك إن رغبت.','Your family media':'وسائط العائلة','Choose photos, videos or audio':'اختر صورًا أو مقاطع فيديو أو صوتية','Choose photos or videos':'اختر صورًا أو مقاطع فيديو','Use a sample photo':'جرّب صورة','Voice note (optional)':'ملاحظة صوتية','Voice note':'ملاحظة صوتية','Tap to start recording':'اضغط لبدء التسجيل','Tap again to stop':'اضغط مجددًا للإيقاف','Your voice note is ready.':'ملاحظتك الصوتية جاهزة.','Listen before sharing.':'استمع قبل المشاركة.','Share with the family':'شارك مع العائلة','Choose a photo to share.':'اختر صورة للمشاركة.','Nothing leaves this device.':'تبقى ملفاتك على هذا الجهاز.','Photo selected for this moment':'الصورة المختارة لهذه اللحظة','Photo shared by Grandma':'صورة شاركتها الجدة','Photo shared by Grandson':'صورة شاركها الحفيد',
    'My day':'يومي','Your family moments, all in one place.':'لحظات العائلة في مكان واحد.','See what the family shared':'شاهد ما شاركته العائلة','A photo from Grandma is here to see.':'هناك صورة من الجدة لمشاهدتها.','A photo from Grandson is here to see.':'هناك صورة من الحفيد لمشاهدتها.','Family photos and voice notes appear here.':'ستظهر هنا صور العائلة ومقاطعها الصوتية.','Your moments':'لحظاتك','Open today\'s moments':'افتح لحظات اليوم',
    'A moment from Grandma':'لحظة من الجدة','A moment from Grandson':'لحظة من الحفيد','Grandma left a voice note with this photo.':'أرفقت الجدة ملاحظة صوتية بهذه الصورة.','Grandson left a voice note with this photo.':'أرفق الحفيد ملاحظة صوتية بهذه الصورة.','This morning':'هذا الصباح','Yesterday':'الأمس','Last week':'الأسبوع الماضي','Play':'تشغيل','Pause':'إيقاف مؤقت','Resume':'متابعة','Stop':'إيقاف','Ready':'جاهز','Playing':'قيد التشغيل','Paused':'متوقف مؤقتًا','Stopped':'متوقف','Finished':'انتهى','Move through audio':'تقديم أو إرجاع الصوت',
    'The prompt':'اللحظة','Answer with my voice':'أجب بصوتي','Answer from my photos':'أجب من صوري','Later':'لاحقًا','Answer with my voice instead':'أجب بصوتي بدلًا من ذلك','Tap to start speaking. Tap again to stop.':'اضغط لبدء التحدث، واضغط مجددًا للإيقاف.','Listening. Speak now.':'جارٍ الاستماع. تحدث الآن.','Your voice':'صوتك','Nothing to type.':'لا حاجة للكتابة.','Your voice note is ready.':'ملاحظتك الصوتية جاهزة.','Listen once more, then keep it.':'استمع مرة أخرى ثم احتفظ بها.','Record a voice note first.':'سجّل ملاحظة صوتية أولًا.','Keep this':'احتفظ بهذا','Answer from my photos instead':'أجب من صوري بدلًا من ذلك','The microphone is not available. Choose a photo instead.':'الميكروفون غير متاح. اختر صورة بدلًا من ذلك.','My photos and recipes':'صوري ووصفاتي','Choose one photo to share with Grandson.':'اختر صورة لمشاركتها مع الحفيد.','Choose one photo to share with Grandma.':'اختر صورة لمشاركتها مع الجدة.','Take a photo now':'التقط صورة الآن','Old family photo':'صورة عائلية قديمة','Garden path':'ممر الحديقة','Cardamom coffee':'قهوة بالهيل','Family recipe book':'كتاب وصفات العائلة','Point at the photo':'أشر إلى الصورة','Tap the part you mean.':'اضغط على الجزء الذي تقصده.','Done':'تم','Confirm and send':'راجع وأرسل','Review what Grandma will see.':'راجع ما ستراه الجدة.','Review what Grandson will see.':'راجع ما سيراه الحفيد.','A voice note from Grandma':'ملاحظة صوتية من الجدة','A voice note from Grandson':'ملاحظة صوتية من الحفيد','Shared photo preview':'معاينة الصورة المشتركة','Selected photo to send':'الصورة المختارة للإرسال','I sent this':'أرسلت هذا','Sent':'تم الإرسال','Ticking this lets them see it.':'يتيح التأكيد للطرف الآخر رؤية ما أرسلته.','Your confirmation is saved on this device.':'تم حفظ تأكيدك على هذا الجهاز.','Send to Grandma':'أرسل إلى الجدة','Send to Grandson':'أرسل إلى الحفيد','Confirm above before sending.':'أكّد أعلاه قبل الإرسال.','Grandma shared a photo':'شاركت الجدة صورة','Grandson shared a photo':'شارك الحفيد صورة','A moment from your family.':'لحظة من عائلتك.','I saw this':'رأيت هذا','Seen':'تمت المشاهدة','Ticking this lets Grandma know you saw it.':'يُعلم التأكيد الجدة بأنك شاهدت الصورة.','Ticking this lets Grandson know you saw it.':'يُعلم التأكيد الحفيد بأنك شاهدت الصورة.','You saw this. The family weave has grown.':'شاهدت اللحظة، وأصبح نسيج العائلة أغنى.','Answer back':'أجب','Finish':'إنهاء','Confirm that you saw this first.':'أكّد أنك شاهدت هذا أولًا.',
    'Learn one, then teach one back.':'تعلّموا من بعضكم وعلّموا بعضكم.','Add a skill':'أضف مهارة','Cardamom coffee':'قهوة بالهيل','Make a warm cup with spice.':'حضّر كوبًا دافئًا مع التوابل.','Send a voice message':'أرسل رسالة صوتية','Record a short voice message for the family.':'سجّل رسالة صوتية قصيرة للعائلة.','A garden cutting':'إكثار نبات من غصن','Give a small plant a new home.':'امنح نبتة صغيرة مكانًا جديدًا.','Make a video call':'أجرِ مكالمة فيديو','See and hear family on the phone.':'شاهد العائلة وتحدث معها عبر الهاتف.','Grandma is showing you.':'تعلّمك الجدة.','Grandson is showing you.':'يعلّمك الحفيد.','Step 1':'الخطوة 1','Step 2':'الخطوة 2','Step 3':'الخطوة 3','Crush the cardamom pods gently.':'اسحق حبات الهيل برفق.','Warm milk with coffee and cardamom.':'سخّن الحليب مع القهوة والهيل.','Pour into a cup and add a pinch of saffron.':'اسكبها في كوب وأضف قليلًا من الزعفران.','Take your time as the milk warms.':'تمهّل بينما يسخن الحليب.','Open a family conversation.':'افتح محادثة العائلة.','Tap the microphone and speak.':'اضغط على الميكروفون وتحدث.','Tap again when you are finished, then listen.':'اضغط مجددًا عند الانتهاء ثم استمع.','Choose a healthy stem from the garden.':'اختر غصنًا سليمًا من الحديقة.','Place the stem in a small jar of water.':'ضع الغصن في وعاء صغير من الماء.','Set it near a bright window.':'ضعه قرب نافذة مضيئة.','A little light helps it grow.':'يساعده بعض الضوء على النمو.','Open the family video call.':'افتح مكالمة فيديو العائلة.','Tap Grandma’s picture to call.':'اضغط على صورة الجدة للاتصال بها.','Say hello when the call connects.':'ألقِ التحية عند اتصال المكالمة.','Ask for help if a screen looks different.':'اطلب المساعدة إذا بدت الشاشة مختلفة.','I did this step':'أنجزت هذه الخطوة','Step completed':'اكتملت الخطوة','A family skill':'مهارة عائلية','Share something you know.':'شارك ما تعرفه.','Show the first step.':'اعرض الخطوة الأولى.','Show the next step.':'اعرض الخطوة التالية.','Short description':'وصف قصير','Instruction':'التعليمات','Add supporting media':'أضف وسائط مساعدة','Add a step':'أضف خطوة','Save skill':'احفظ المهارة',
    'Old photos and the stories behind them.':'صور قديمة وحكاياتها.','Old seaside house':'البيت القديم على الساحل','The recipe book':'كتاب الوصفات','A day in the garden':'يوم في الحديقة','Afternoon baking':'خبز بعد الظهر','Add a memory':'أضف ذكرى','Brewed mint tea together':'حضّرنا شاي النعناع معًا','Looked at the garden':'تأملنا الحديقة',
    'Family recipes, in the voice of the person who taught them.':'وصفات العائلة بصوت من علّمها.','Add a recipe':'أضف وصفة','Open recipe →':'افتح الوصفة ←','My family recipe':'وصفة عائلية','Recipe name':'اسم الوصفة','Ingredients':'المكونات','Steps':'الخطوات','Family media':'وسائط الوصفة','Voice recording':'تسجيل صوتي','Tap to record':'اضغط للتسجيل','Tap to record another':'اضغط لتسجيل مقطع آخر','Save recipe':'احفظ الوصفة','Narration':'السرد الصوتي','Voice recordings':'تسجيلات صوتية','Mark as cooked':'ضع علامة تم الطهي','✓ Cooked':'✓ تم الطهي','Clear cooked status':'إزالة علامة الطهي','Share what you made':'شارك ما أعددته','Choose photos or videos.':'اختر صورًا أو مقاطع فيديو.','Choose a photo or video.':'اختر صورة أو مقطع فيديو.','No recipes yet.':'لا توجد وصفات بعد.','Photo of Cardamom coffee':'صورة قهوة بالهيل','Cardamom coffee':'قهوة بالهيل','Date biscuits':'بسكويت بالتمر','Garden salad':'سلطة الحديقة','Grandma taught this recipe':'علّمت الجدة هذه الوصفة','Grandson taught this recipe':'علّم الحفيد هذه الوصفة','Grandma shared this recipe':'شاركت الجدة هذه الوصفة','Grandson shared this recipe':'شارك الحفيد هذه الوصفة','Fresh water, roasted coffee beans, crushed cardamom pods, and a pinch of saffron.':'ماء، وحبوب قهوة محمصة، وهيل مطحون، وقليل من الزعفران.','Soft wheat flour, clarified butter, sweet date paste, and a touch of warm cinnamon.':'دقيق قمح ناعم، وسمن، ومعجون تمر حلو، ولمسة قرفة.','Crisp lettuce, garden herbs, fresh cucumbers, lemon juice, and olive oil.':'خس طازج، وأعشاب الحديقة، وخيار، وعصير ليمون، وزيت زيتون.','Water':'ماء','Coffee':'قهوة','Cardamom':'هيل','Saffron':'زعفران','Flour':'دقيق','Date paste':'معجون تمر','Butter':'زبدة','Cinnamon':'قرفة','Lettuce':'خس','Cucumber':'خيار','Olive oil':'زيت زيتون','Lemon':'ليمون','Warm the water slowly.':'سخّن الماء ببطء.','Stir in the coffee and crushed cardamom.':'أضف القهوة والهيل المطحون وحرّك.','Pour into a small cup and add saffron.':'اسكبها في كوب صغير وأضف الزعفران.','Mix the flour and butter.':'اخلط الدقيق والزبدة.','Fold in the date paste and cinnamon.':'أضف معجون التمر والقرفة وامزج.','Bake until lightly golden.':'اخبز حتى يصبح لونه ذهبيًا.','Wash the vegetables and herbs.':'اغسل الخضروات والأعشاب.','Cut them into small pieces.':'قطّعها إلى قطع صغيرة.','Mix with lemon and olive oil.':'اخلطها مع الليمون وزيت الزيتون.','Made by the family':'من إعداد العائلة',
    'Share what you made':'شارك ما أعددته','Share with the family':'شارك مع العائلة','Remove':'إزالة','Recording 1':'التسجيل 1','Recording 2':'التسجيل 2','Recording 3':'التسجيل 3','Your family story':'حكاية عائلية','A family moment':'لحظة عائلية','This family story is no longer available.':'لم تعد هذه الحكاية متاحة.','There is no photo or video in this story.':'لا توجد صورة أو مقطع فيديو في هذه الحكاية.','Tap to view':'اضغط للمشاهدة','Photo':'صورة','Video':'مقطع فيديو','Previous':'السابق','Next':'التالي','Magnify image':'تكبير الصورة','Fit image to screen':'ملاءمة الصورة للشاشة','Family photo':'صورة عائلية','Photo selected to share':'الصورة المختارة للمشاركة','Family media':'وسائط العائلة','Choose a photo, video or audio':'اختر صورة أو مقطع فيديو أو مقطعًا صوتيًا',
    'No memories yet.':'لا توجد ذكريات بعد.','Nothing here yet.':'لا يوجد شيء هنا بعد.','No moments yet.':'لا توجد لحظات بعد.','Share with the family':'شارك مع العائلة','This morning':'هذا الصباح','Yesterday':'الأمس','This is your voice. Tap to play it.':'هذا صوتك. اضغط لتشغيله.','Playing narration.':'جارٍ تشغيل السرد الصوتي.','Playing voice recording.':'جارٍ تشغيل التسجيل الصوتي.','Audio paused.':'تم إيقاف الصوت مؤقتًا.','Audio playing.':'الصوت قيد التشغيل.','This could not be saved. Try again.':'تعذّر الحفظ. حاول مجددًا.','The microphone is not available. You can still share a photo.':'الميكروفون غير متاح. يمكنك مشاركة صورة.','The microphone is not available. Choose a photo instead.':'الميكروفون غير متاح. اختر صورة بدلًا من ذلك.','The microphone is not available. The written recipe still works.':'الميكروفون غير متاح. يمكنك إضافة الوصفة كتابةً.','Your skill is saved on this device.':'تم حفظ المهارة على هذا الجهاز.','Your recipe is saved on this device.':'تم حفظ الوصفة على هذا الجهاز.','Your moment was shared on this device.':'تمت مشاركة اللحظة على هذا الجهاز.','Your recipe was shared in Today and Memories.':'تمت مشاركة الوصفة في اليوم والذكريات.','Family media (optional)':'وسائط الوصفة','Voice note (optional)':'ملاحظة صوتية','Optional':'اختياري','Photo':'صورة','Video':'فيديو','Audio':'صوت',
    'Main navigation':'التنقل الرئيسي','Family relationships':'روابط العائلة','Shared exchanges':'لحظات مشتركة','Naseej Home':'الرئيسية — نسيج','Naseej, Our family':'نسيج، عائلتنا','A family photo':'صورة عائلية','A family photo from this morning':'صورة عائلية من هذا الصباح','A family story to enjoy together.':'حكاية عائلية نتشاركها.','A family recipe to make together.':'وصفة عائلية نحضّرها معًا.','Family recipe shared together.':'وصفة عائلية نتشاركها.','Family recipe shared by Grandma.':'وصفة عائلية شاركتها الجدة.','Family recipe shared by Grandson.':'وصفة عائلية شاركها الحفيد.','Family recipes, in the voice of the person who taught them.':'وصفات العائلة بصوت من علّمها.','Choose photos, videos or audio from this device':'اختر صورًا أو مقاطع فيديو أو صوتية من هذا الجهاز','Selected photo to send':'الصورة المختارة للإرسال','Shared photo preview':'معاينة الصورة المشتركة','Tap the photo to point to a detail':'اضغط على الصورة لتحديد جزء منها','Start voice recording':'ابدأ التسجيل الصوتي','Stop voice recording':'أوقف التسجيل الصوتي','Start another voice recording':'ابدأ تسجيلًا صوتيًا آخر','Stop another voice recording':'أوقف التسجيل الصوتي','Recording':'التسجيل','Recording is unavailable here. The written recipe still works.':'التسجيل الصوتي غير متاح هنا. يمكنك كتابة الوصفة.','Voice recording is unavailable here. The written recipe still works.':'التسجيل الصوتي غير متاح هنا. يمكنك كتابة الوصفة.','Add written steps or a voice recording.':'أضف خطوات مكتوبة أو تسجيلًا صوتيًا.','You can still share a photo.':'لا يزال بإمكانك مشاركة صورة.','No photo or video in this story.':'لا توجد صورة أو مقطع فيديو في هذه الحكاية.','A family story':'حكاية عائلية','Family photo from the family':'صورة عائلية','Family photo':'صورة عائلية','Tap to view':'اضغط للمشاهدة','Open':'افتح','English':'English',
    'Coffee, cardamom, milk':'قهوة، هيل، حليب','Milk, coffee, cardamom':'حليب، قهوة، هيل','Warm the milk.\nStir in the coffee.':'سخّن الحليب.\nأضف القهوة وحرّك.','Recipe voice recording':'تسجيل وصفة صوتيًا','A recorded voice note.':'ملاحظة صوتية مسجلة.','A recorded voice reply.':'رد صوتي مسجل.','Nothing to type.':'لا حاجة للكتابة.','Listen before sharing.':'استمع قبل المشاركة.','The family weave has grown.':'أصبح نسيج العائلة أغنى.','The family can see this.':'يمكن للعائلة مشاهدة هذا.','You can also send this photo without pointing.':'يمكنك إرسال الصورة دون تحديد جزء منها.','Grandma sees this.':'سترى الجدة هذا.','Grandson sees this.':'سيرى الحفيد هذا.','A voice note from Parent':'ملاحظة صوتية من أحد الوالدين','Parent shared a photo':'شارك أحد الوالدين صورة','Parent is showing you.':'يعلّمك أحد الوالدين.','Parent taught this recipe':'علّم أحد الوالدين هذه الوصفة','Parent shared this recipe':'شارك أحد الوالدين هذه الوصفة','Parent shared this':'شارك أحد الوالدين هذا','Parent left a voice note with this photo.':'أرفق أحد الوالدين ملاحظة صوتية بهذه الصورة.','Parent shares a family moment.':'يشارك أحد الوالدين لحظة عائلية.','A photo from Parent is here to see.':'هناك صورة من أحد الوالدين لمشاهدتها.',
    'Who is using this?':'من يستخدم التطبيق؟','Choose how you are joining the family today.':'اختر صفتك في العائلة اليوم.','Grandma is showing you':'تعلّمك الجدة','Grandson is showing you':'يعلّمك الحفيد','Parent is showing you':'يعلّمك أحد الوالدين','Open a family conversation':'افتح محادثة العائلة','Main navigation':'التنقل الرئيسي','Photo selected to share':'الصورة المختارة للمشاركة','No photo or video in this story.':'لا توجد صورة أو مقطع فيديو في هذه الحكاية.','Tap to start speaking. Tap again to stop.':'اضغط لبدء التحدث، واضغط مجددًا للإيقاف.','Your voice':'صوتك','No moments yet.':'لا توجد لحظات بعد.','Recipe name':'اسم الوصفة','My family recipe':'وصفة عائلية','A family skill':'مهارة عائلية','Share something you know.':'شارك ما تعرفه.','Show the first step.':'اعرض الخطوة الأولى.','Show the next step.':'اعرض الخطوة التالية.','Coffee, cardamom, milk':'قهوة، هيل، حليب'
  };
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();

  function translateText(value){
    const text=String(value||'');const trimmed=text.trim();
    if(arabic[trimmed])return text.replace(trimmed,arabic[trimmed]);
    let match;
    if((match=trimmed.match(/^Step (\d+) of (\d+)$/)))return text.replace(trimmed,`الخطوة ${match[1]} من ${match[2]}`);
    if((match=trimmed.match(/^(\d+) sec$/)))return text.replace(trimmed,`${match[1]} ث`);
    if((match=trimmed.match(/^(\d+) of (\d+)$/)))return text.replace(trimmed,`${match[1]} من ${match[2]}`);
    if((match=trimmed.match(/^(\d+:\d\d) of (\d+:\d\d)$/)))return text.replace(trimmed,`${match[1]} من ${match[2]}`);
    if((match=trimmed.match(/^Open (.+) family story$/)))return text.replace(trimmed,`افتح حكاية العائلة: ${translateText(match[1]).trim()}`);
    if((match=trimmed.match(/^Open lesson (.+)$/)))return text.replace(trimmed,`افتح درس ${translateText(match[1]).trim()}`);
    if((match=trimmed.match(/^Open (.+) recipe$/)))return text.replace(trimmed,`افتح وصفة ${translateText(match[1]).trim()}`);
    if((match=trimmed.match(/^Open (.+) story$/)))return text.replace(trimmed,`افتح حكاية ${translateText(match[1]).trim()}`);
    if((match=trimmed.match(/^View (.+) step (\d+) image full screen$/)))return text.replace(trimmed,`اعرض صورة ${translateText(match[1]).trim()} للخطوة ${match[2]} بملء الشاشة`);
    if((match=trimmed.match(/^View (.+) image full screen$/)))return text.replace(trimmed,`اعرض صورة ${translateText(match[1]).trim()} بملء الشاشة`);
    if((match=trimmed.match(/^View (.+) full screen$/)))return text.replace(trimmed,`اعرض ${translateText(match[1]).trim()} بملء الشاشة`);
    if((match=trimmed.match(/^A photo from (.+) is here to see\.$/)))return text.replace(trimmed,`هناك صورة من ${translateText(match[1]).trim()} لمشاهدتها.`);
    if((match=trimmed.match(/^Voice recording (\d+) for (.+)\.$/)))return text.replace(trimmed,`التسجيل الصوتي ${match[1]} لوصفة ${translateText(match[2]).trim()}.`);
    if((match=trimmed.match(/^Audio attachment (\d+)\.$/)))return text.replace(trimmed,`المقطع الصوتي ${match[1]}.`);
    if((match=trimmed.match(/^Step (\d+) audio$/)))return text.replace(trimmed,`صوت الخطوة ${match[1]}`);
    if((match=trimmed.match(/^Open (.+)'s moment from (.+)$/)))return text.replace(trimmed,`افتح لحظة ${translateText(match[1]).trim()} — ${translateText(match[2]).trim()}`);
    if((match=trimmed.match(/^A moment from (.+)$/)))return text.replace(trimmed,`لحظة من ${translateText(match[1]).trim()}`);
    if((match=trimmed.match(/^(.+) left a voice note with this photo\.$/)))return text.replace(trimmed,`أرفق ${translateText(match[1]).trim()} ملاحظة صوتية بهذه الصورة.`);
    if((match=trimmed.match(/^(.+) shares a family moment from (.+)\.$/)))return text.replace(trimmed,`تشارك ${translateText(match[1]).trim()} لحظة عائلية من ${translateText(match[2]).trim()}.`);
    if((match=trimmed.match(/^(.+) shares a story about (.+)\.$/)))return text.replace(trimmed,`تحكي ${translateText(match[1]).trim()} قصة عن ${translateText(match[2]).trim()}.`);
    if((match=trimmed.match(/^(.+) is showing you\.$/)))return text.replace(trimmed,`تعلّمك ${translateText(match[1]).trim()}.`);
    if((match=trimmed.match(/^(.+) taught this recipe$/)))return text.replace(trimmed,`علّمت ${translateText(match[1]).trim()} هذه الوصفة`);
    if((match=trimmed.match(/^(.+) shared this recipe$/)))return text.replace(trimmed,`شاركت ${translateText(match[1]).trim()} هذه الوصفة`);
    if((match=trimmed.match(/^(.+) shared a photo$/)))return text.replace(trimmed,`شاركت ${translateText(match[1]).trim()} صورة`);
    if((match=trimmed.match(/^(.+) shared this$/)))return text.replace(trimmed,`شاركت ${translateText(match[1]).trim()} هذا`);
    if((match=trimmed.match(/^(.+) shared a family photo: (.+)$/)))return text.replace(trimmed,`صورة عائلية شاركتها ${translateText(match[1]).trim()} — ${translateText(match[2]).trim()}`);
    if((match=trimmed.match(/^(.+) shared a family moment$/)))return text.replace(trimmed,`شاركت ${translateText(match[1]).trim()} لحظة عائلية`);
    if((match=trimmed.match(/^(.+) shared this recipe$/)))return text.replace(trimmed,`شاركت ${translateText(match[1]).trim()} هذه الوصفة`);
    return text;
  }
  function localize(value){return language==='ar'?translateText(value):String(value??'');}
  function applyLanguage(){
    const appFrame=$('#app-frame');const toggle=$('#language-toggle');
    document.documentElement.lang=language;appFrame?.setAttribute('dir',language==='ar'?'rtl':'ltr');
    if(toggle){toggle.textContent=language==='ar'?'English':'عربي';toggle.setAttribute('aria-label',language==='ar'?'Switch to English':'Switch to Arabic');toggle.setAttribute('aria-pressed',String(language==='ar'));}
    const title=$('title');if(title)title.textContent=language==='ar'?'نسيج — لحظات العائلة ومهاراتها وحكاياتها':'Naseej — family moments, skills and stories';
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
    while((node=walker.nextNode())){
      if(node.parentElement?.closest('#language-toggle'))continue;
      if(!originalTextNodes.has(node))originalTextNodes.set(node,node.nodeValue);
      const original=originalTextNodes.get(node);node.nodeValue=language==='ar'?translateText(original):original;
    }
    const attrs=['aria-label','aria-valuetext','placeholder','title','alt'];
    document.querySelectorAll('body *').forEach((element)=>{
      if(element.closest('#language-toggle'))return;
      let saved=originalAttributes.get(element);if(!saved){saved={};originalAttributes.set(element,saved);}
      attrs.forEach((name)=>{
        if(!element.hasAttribute(name))return;
        const current=element.getAttribute(name);
        if(!saved[name])saved[name]={value:current,last:current};
        else if(current!==saved[name].last&&current!==translateText(saved[name].value))saved[name].value=current;
        const next=language==='ar'?translateText(saved[name].value):saved[name].value;
        element.setAttribute(name,next);saved[name].last=next;
      });
      if(element.matches('input:not([type="file"]),textarea')){
        const current=element.value;let saved=element.dataset.languageEnglishValue;const last=element.dataset.languageLastValue;
        if(saved===undefined){saved=current;element.dataset.languageEnglishValue=saved;}
        else if(current!==last&&current!==saved){saved=current;element.dataset.languageEnglishValue=saved;}
        const next=language==='ar'?translateText(saved):saved;element.value=next;element.dataset.languageLastValue=next;
      }
    });
  }
  function setLocalizedText(element,english){if(!element)return;element.textContent=english;const node=element.firstChild;if(node?.nodeType===Node.TEXT_NODE){originalTextNodes.set(node,english);if(language==='ar')node.nodeValue=translateText(english);}}
  function setLocalizedAttribute(element,name,english){if(!element)return;let saved=originalAttributes.get(element);if(!saved){saved={};originalAttributes.set(element,saved);}const translated=localize(english);saved[name]={value:english,last:translated};element.setAttribute(name,translated);}
  const sample = (file) => `assets/images/${file}.jpg`;
  const photos = {
    garden: sample('family-garden'), baking: sample('baking-together'), dayGarden: sample('moment-garden'),
    family: sample('grandma-grandson-profile'), recipe: sample('recipe-book'), memory: sample('vintage-family-photo'),
    coffee: sample('coffee-pot'), skill: sample('coffee-skill'), gardenPath: sample('garden-path'),
    digital: sample('digital-skill'), school: sample('school-art'), house: sample('old-stone-house'),
    book: sample('book-response'), bread: sample('family-bread'), practice: sample('recipe-practice'),
    shelf: sample('shelf-garden'), photoGarden: sample('family-garden'), voiceGarden: sample('family-garden-voice')
  };
  const localMediaUrls = new Map();
  const demoMode = new URLSearchParams(location.search).get('demo') === '1';
  const showDemoControls = demoMode || innerWidth >= 1000;
  let state = loadState();
  let route = 'home';
  let routeStack = [];
  let currentView = 'home';
  let chosenPhoto = null;
  let chosenMedia = [];
  let pickerPurpose = '';
  let activeMediaIndex = 0;
  let zoomed = false;
  let pinchStart = 0;
  let recording = null;
  let mediaRecorder = null;
  let mediaStream = null;
  let recordingStarted = 0;
  let recordTimer = null;
  let recipeTimers = [];
  let audioContext = null;
  let activeAudio = null;
  let audioTimer = null;
  const audioOffsets = new Map();
  const audioDurations = new Map();
  const audioUrls = new Map();
  const roleScreen = $('#role-screen');
  const screenRoot = $('#screen-root');
  const viewContent = $('#view-content');
  const actionBar = $('#action-bar');
  const tabBar = $('#tab-bar');
  const backButton = $('#back-button');
  const liveRegion = $('#live-region');

  const standardBrandMarkup=$('.brand').innerHTML;
  function defaultState() {
    return {
      role: null,
      moments: [
        { id: 'seed-grandma', person: 'Grandma', when: 'This morning', image: photos.baking, sample: true, voice: true },
        { id: 'seed-grandson', person: 'Grandson', when: 'This morning', image: photos.garden, sample: true, voice: true },
        { id: 'seed-afternoon', person: 'Grandma', when: 'Yesterday', image: photos.dayGarden, sample: true, voice: false },
        { id: 'seed-school', person: 'Grandson', when: 'Yesterday', image: photos.school, sample: true, voice: false }
      ],
      exchanges: [],
      skillStep: 0,
      memoryAdditions: [],
      customRecipes: [],
      customSkills: [],
      recipeChecks: {},
      recipeCooked: {},
      audioData: {}
    };
  }
  function loadState() {
    try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(storageKey) || '{}') }; }
    catch { return defaultState(); }
  }
  function persist() {
    try {
      const safe = { ...state, audioData: {}, answer: state.answer ? { ...state.answer, url: null } : null, recipeDraft: null, skillDraft: null };
      localStorage.setItem(storageKey, JSON.stringify(safe));
    } catch { announce('This could not be saved. Try again.'); }
  }
  function announce(text) { liveRegion.textContent = ''; setTimeout(() => { setLocalizedText(liveRegion,text); }, 20); }
  function esc(value) { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char])); }
  function personClass(person) { return person === 'Grandma' ? 'grandma' : person === 'Grandson' ? 'grandson' : 'parent'; }
  function viewerName() { return state.role === 'Grandparent' ? 'Grandma' : state.role === 'Grandchild' ? 'Grandson' : 'Parent'; }
  function partnerName(person = viewerName()) { return person === 'Grandma' ? 'Grandson' : 'Grandma'; }
  function isGrandma() { return viewerName() === 'Grandma'; }
  function img(file, alt, className = '') { const source=localMediaUrls.get(file)||file; return `<img class="${className}" src="${source}" alt="${esc(alt)}">`; }
  function heading(title, description = '') { return `<div class="screen-heading"><h1>${title}</h1>${description ? `<p>${description}</p>` : ''}</div>`; }
  function button(label, action, cls = 'primary-button', extra = '') { return `<button type="button" class="${cls}" data-action="${action}" ${extra}>${label}</button>`; }
  function micGlyph(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3m-4 0h8"/></svg>';}
  function formatTime(seconds){if(!Number.isFinite(seconds)||seconds<0)return '0:00';const value=Math.floor(seconds);return `${Math.floor(value/60)}:${String(value%60).padStart(2,'0')}`;}
  function estimateDuration(text){return Math.max(3,Math.ceil(String(text||'').trim().split(/\s+/).filter(Boolean).length/2.5));}
  function audioPlayerMarkup(id,text,audioKey=null,recipeId=null){
    const safeId=esc(id);const duration=audioKey?(audioDurations.get(audioKey)||estimateDuration(text)):estimateDuration(text);
    if(audioKey)ensureAudioDuration(audioKey,id);
    return `<section class="family-audio" data-audio-player="${safeId}" data-audio-text="${esc(text||'')}" data-audio-key="${esc(audioKey||'')}" data-recipe-id="${esc(recipeId||'')}" data-duration="${duration||0}">
      <div class="audio-player-row"><button type="button" class="audio-toggle" data-action="audio-toggle" data-audio-id="${safeId}"><span class="audio-control-icon" data-audio-icon aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg></span><span data-audio-toggle-label>Play</span></button><button type="button" class="audio-stop" data-action="audio-stop" data-audio-id="${safeId}" disabled><span class="audio-control-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="6.5" y="6.5" width="11" height="11" rx="2"/></svg></span><span>Stop</span></button><span class="audio-wave" aria-hidden="true">${Array.from({length:9},()=>'<i></i>').join('')}</span></div>
      <label class="sr-only" for="audio-seek-${safeId}">Move through audio</label><input class="audio-seek" id="audio-seek-${safeId}" type="range" min="0" max="${duration||1}" step="0.1" value="${audioOffsets.get(id)||0}" data-audio-seek="${safeId}" aria-label="Move through audio">
      <div class="audio-time-row"><span data-audio-status>Ready</span><span><time data-audio-current>0:00</time><span aria-hidden="true"> / </span><time data-audio-duration>${duration?formatTime(duration):'--:--'}</time></span></div>
    </section>`;
  }
  function roleOf(item) { return item.person || 'Grandma'; }
  function setAction(label, action, cls = 'primary-button', caption = '') {
    actionBar.innerHTML = `${button(label, action, cls)}${caption ? `<p class="action-caption">${caption}</p>` : ''}`;
    actionBar.hidden = false;
    viewContent.classList.remove('no-action');
  }
  function noAction() { actionBar.hidden = true; actionBar.replaceChildren(); viewContent.classList.add('no-action'); }
  function go(next, options = {}) {
    closeAllAudio();
    if (!options.replace && route !== next) routeStack.push(route);
    route = next;
    render();
    viewContent.scrollTop = 0;
  }
  function back() {
    closeAllAudio();
    const previous = routeStack.pop() || (route === 'skill-detail' ? 'skills' : route === 'my-day' ? 'home' : route === 'point-photo' ? 'answer-photos' : route === 'confirm-send' ? 'answer-photos' : 'home');
    route = previous;
    render();
    viewContent.scrollTop = 0;
  }
  function goTab(tab) { routeStack = []; route = tab; render(); viewContent.scrollTop = 0; }
  function render() {
    $('#app-frame').classList.toggle('has-sheet',route==='add-moment');
    $('#tab-bar').hidden=route==='add-moment';
    const brand=$('.brand');
    if(route==='home'){
      brand.classList.add('home-brand');brand.setAttribute('aria-label','Naseej, Our family');
      brand.innerHTML=`${img(photos.family,'Family photo','home-avatar')}<span class="home-brand-copy"><strong>Naseej</strong><small>Our family</small></span>`;
      $('#role-label').textContent='';
    }else{brand.classList.remove('home-brand');brand.setAttribute('aria-label','Naseej Home');brand.innerHTML=standardBrandMarkup;}
    roleScreen.hidden = true;
    screenRoot.hidden = false;
    tabBar.hidden = route==='add-moment';
    backButton.hidden = !(['add-moment','my-day','prompt','answer-voice','answer-photos','point-photo','confirm-send','receive','skill-detail','skill-create','moment-detail','content-detail','media-viewer','recipe-create','recipe-detail','recipe-share'].includes(route));
    $('#role-label').textContent = demoMode && state.role && route!=='home' ? state.role : '';
    $$('#tab-bar button').forEach((tab) => {
      const active = tab.dataset.tab === route;
      if (active) tab.setAttribute('aria-current', 'page'); else tab.removeAttribute('aria-current');
    });
    switch (route) {
      case 'home': renderHome(); break;
      case 'today': renderToday(); break;
      case 'add-moment': renderAddMoment(); break;
      case 'my-day': renderMyDay(); break;
      case 'prompt': renderPrompt(); break;
      case 'answer-voice': renderVoiceAnswer(); break;
      case 'answer-photos': renderAnswerPhotos(); break;
      case 'point-photo': renderPointPhoto(); break;
      case 'confirm-send': renderConfirmSend(); break;
      case 'receive': renderReceive(); break;
      case 'skills': renderSkills(); break;
      case 'skill-detail': renderSkillDetail(); break;
      case 'memories': renderMemories(); break;
      case 'recipes': renderRecipes(); break;
      case 'recipe-create': renderRecipeCreate(); break;
      case 'recipe-detail': renderRecipeDetail(); break;
      case 'recipe-share': renderRecipeShare(); break;
      case 'moment-detail': renderMomentDetail(); break;
      case 'content-detail': renderContentDetail(); break;
      case 'media-viewer': renderMediaViewer(); break;
      case 'skill-create': renderSkillCreate(); break;
      default: route = 'home'; renderHome();
    }
    currentView = route;
    viewContent.scrollTop = 0;
    applyLanguage();
  }
  function renderHome() {
    noAction();
    const wovenItems=[['Baking',photos.baking,'seed-grandma'],['Garden',photos.garden,'seed-grandson'],['Old house',photos.house,'memory-0']];
    const recent=[['Grandma','Baking together','seed-grandma'],['Grandson','Looking at the garden','seed-grandson']];
    viewContent.innerHTML = `
      <div class="relationship-row" aria-label="Family relationships">
        <div class="relationship-card"><span class="person-dot grandma"></span><span><small>Relationship</small><strong>Grandma</strong></span></div>
        <div class="relationship-card"><span class="person-dot grandson"></span><span><small>Relationship</small><strong>Grandson</strong></span></div>
      </div>
      <section class="woven-panel"><h1>Family moments woven</h1>
        <div class="woven-photos">${wovenItems.map(([label,photo,id])=>`<button type="button" class="woven-photo content-card" data-content-type="${id.startsWith('memory-')?'memory':'moment'}" data-content-id="${id}" aria-label="Open ${label} family story">${img(photo,`${label} family photo`)}<span>${label}</span></button>`).join('')}</div>
        <p class="thread-caption"><span class="thread-swatch clay-swatch"></span>${state.exchanges.some((item)=>item.kind==='answer-seen')?'A new moment joined the weave.':'Linked with clay and pine threads'}<span class="thread-swatch gold-swatch"></span></p>
      </section>
      <section class="recent-panel"><h2>Recent moments</h2>${recent.map(([person,line,id])=>`<button type="button" class="recent-row content-card" data-content-type="moment" data-content-id="${id}"><span class="person-dot ${personClass(person)}"></span><span><small>${person}</small><strong>${line}</strong></span></button>`).join('')}</section>
      <div class="exchange-list" aria-label="Shared exchanges">${state.exchanges.map((x) => `<p>${esc(x.summary)} — Grandma and Grandson</p>`).join('')}</div>`;
    setAction("See today's moments", 'tab-today', 'primary-button');
  }
  function momentCard(item, index) {
    const person = roleOf(item);
    const cover=item.attachments?.find((attachment)=>attachment.type==='image'||attachment.type==='video')|| (item.image?{type:'image',key:item.image}:null);
    const coverUrl=cover&&(localMediaUrls.get(cover.key)||cover.key);
    const coverMarkup=cover?.type==='video'?`<video class="moment-cover-video" src="${esc(coverUrl)}" muted playsinline preload="metadata"></video>`:cover?img(coverUrl, `${person}'s family photo from ${item.when}`):'<div class="photo-placeholder">A family moment</div>';
    return `<article class="moment-card content-card" data-content-type="moment" data-content-id="${esc(item.id)}" tabindex="0" role="button" aria-label="Open ${person}'s moment from ${esc(item.when)}">${coverMarkup}<div class="card-meta"><span class="person-dot ${personClass(person)}"></span><span>${person}</span><span class="moment-time">${esc(item.when)}</span></div>${item.recipeTitle?`<p class="recipe-moment-label">Made ${esc(item.recipeTitle)}</p>`:''}${item.voice ? audioPlayerMarkup(`moment-${item.id}`,`${person} shares a family moment from ${item.when}.`,item.id) : ''}</article>`;
  }
  function renderToday() {
    noAction();
    const moments = [...state.moments].sort((a,b)=>{
      const dayRank=(item)=>item.when==='This morning'?0:item.when==='Yesterday'?1:2;
      return dayRank(a)-dayRank(b)||(a.person==='Grandma'?-1:1);
    });
    viewContent.innerHTML = `${heading('Today','Photos and optional voice notes from both sides of the family.')}${moments.length ? `<div class="moment-list">${moments.map(momentCard).join('')}</div>` : '<p class="empty-note">No moments yet.</p>'}`;
    setAction('Add a moment','open-add-moment');
  }
  function renderAddMoment() {
    const imageMarkup = chosenMedia.length ? renderPendingMedia(chosenMedia,'moment') : chosenPhoto ? img(chosenPhoto, 'Photo selected for this moment', 'photo-preview') : '<div class="photo-placeholder">Choose photos, videos or audio from this device</div>';
    viewContent.innerHTML = `<div class="moment-underlay" aria-hidden="true"><h2>Today</h2>${img(photos.baking,'','')}${img(photos.garden,'','')}</div><div class="moment-scrim"></div>
      <section class="moment-sheet" aria-labelledby="add-moment-title"><div class="moment-sheet-heading"><div><h1 id="add-moment-title">Add a moment</h1><p>Share a photo. Add your voice if you want.</p></div>${button('Close','go-back','sheet-close')}</div>
      <section class="sheet-panel"><h2>Your family media</h2>${imageMarkup}<div class="button-stack" style="margin-top:12px">${button('Choose photos, videos or audio','choose-photo','secondary-button')}${button('Use a sample photo','sample-photo','secondary-button')}</div></section>
      <section class="sheet-panel"><h2>Voice note (optional)</h2><div class="recording-box"><button class="mic-button ${mediaRecorder?.state === 'recording' ? 'recording' : ''}" type="button" data-action="toggle-record" aria-label="${mediaRecorder?.state === 'recording' ? 'Stop voice recording' : 'Start voice recording'}">${mediaRecorder?.state === 'recording' ? '<span class="stop-mark" aria-hidden="true"></span>' : micGlyph()}</button><div class="mic-copy">${mediaRecorder?.state === 'recording' ? 'Tap again to stop' : recording ? 'Your voice note is ready.' : 'Tap to start recording'}<small id="record-time">${mediaRecorder?.state === 'recording' ? elapsedTime() : recording ? 'Listen before sharing.' : '00:00'}</small></div></div>
      ${recording?.url ? audioPlayerMarkup('recording-preview','A recorded voice note.','recording-preview') : ''}
      ${!window.MediaRecorder ? '<p class="calm-note">Voice recording is not available here. You can still share a photo.</p>' : ''}<p id="mic-message" class="calm-note" hidden></p></section>
      </section>`;
    setAction('Share with the family','share-moment','primary-button');
    $('[data-action="share-moment"]', actionBar).disabled = !(chosenPhoto||chosenMedia.length);
  }
  function renderMyDay() {
    noAction();
    const mine = state.moments.filter((item) => item.person === viewerName() || item.person === 'Parent');
    const incoming = state.moments.find((item) => item.person !== viewerName());
    viewContent.innerHTML = `${heading('My day','Your family moments, all in one place.')}
      <button type="button" class="myday-card" data-action="open-prompt"><strong>See what the family shared</strong><br><span>${incoming ? `A photo from ${esc(incoming.person)} is here to see.` : 'Family photos and voice notes appear here.'}</span></button>
      <h2 style="margin:20px 0 12px">Your moments</h2><div class="person-moments">${mine.length ? mine.slice(-3).reverse().map(momentCard).join('') : '<p class="empty-note">No moments yet.</p>'}</div>`;
    setAction("Open today's moments",'tab-today');
  }
  function activePrompt() { return { id: 'prompt-garden', person: partnerName(), image: photos.family, sample: true, voice: true, when: 'This morning' }; }
  function renderPrompt() {
    const prompt = activePrompt();
    viewContent.innerHTML = `${img(prompt.image, 'Family photo to answer', 'prompt-photo')}${heading(`A moment from ${prompt.person}`,`${prompt.person} left a voice note with this photo.`)}
      <div class="prompt-card"><div class="card-meta"><span class="person-dot ${personClass(prompt.person)}"></span><span>${prompt.person}</span><span class="moment-time">This morning</span></div>${audioPlayerMarkup('prompt-audio',`${prompt.person} shares a family moment.`)}</div>
      <div class="prompt-actions">${button('Answer with my voice','answer-voice','secondary-button')}${button('Answer from my photos','answer-photos','secondary-button')}</div>${button('Later','go-back','quiet-button later-action')}`;
    noAction();
  }
  function renderVoiceAnswer() {
    viewContent.innerHTML = `${heading('Answer with my voice','Tap to start speaking. Tap again to stop.')}${img(activePrompt().image,'Family photo','skill-detail-photo')}
      <section class="sheet-panel"><div class="recording-box"><button class="mic-button ${mediaRecorder?.state === 'recording' ? 'recording' : ''}" type="button" data-action="toggle-record" aria-label="${mediaRecorder?.state === 'recording' ? 'Stop voice recording' : 'Start voice recording'}">${mediaRecorder?.state === 'recording' ? '<span class="stop-mark" aria-hidden="true"></span>' : micGlyph()}</button><div class="mic-copy">${mediaRecorder?.state === 'recording' ? 'Listening. Speak now.' : recording ? 'Your voice note is ready.' : 'Your voice'}<small id="record-time">${mediaRecorder?.state === 'recording' ? elapsedTime() : 'Nothing to type.'}</small></div></div>
      ${recording?.url ? audioPlayerMarkup('recording-preview','A recorded voice reply.','recording-preview') : ''}
      ${!window.MediaRecorder ? '<p class="calm-note">The microphone is not available. Choose a photo instead.</p>' : ''}<p id="mic-message" class="calm-note" hidden></p></section>
      ${button('Answer from my photos instead','answer-photos','secondary-button')}`;
    setAction(recording?.url?'Keep this':'Keep this','keep-voice','primary-button',recording?.url?'Listen once more, then keep it.':'Record a voice note first.');
    $('[data-action="keep-voice"]',actionBar).disabled=!recording?.url;
  }
  function renderAnswerPhotos() {
    const items = [
      ['Old family photo',photos.memory],['Garden path',photos.gardenPath],['Cardamom coffee',photos.coffee],['Family recipe book',photos.recipe]
    ];
    viewContent.innerHTML = `${heading('My photos and recipes',`Choose one photo to share with ${partnerName()}.`)}${button('Take a photo now','choose-photo','secondary-button')}
      <div class="shelf-grid" style="margin-top:14px">${items.map(([title,image],index) => `<button class="shelf-item" type="button" data-action="choose-answer-photo" data-index="${index}">${img(image,title)}${title}</button>`).join('')}</div>`;
    noAction();
  }
  function renderPointPhoto() {
    viewContent.innerHTML = `${heading('Point at the photo','Tap the part you mean.')}
      <button type="button" class="photo-target" data-action="point-photo" aria-label="Tap the photo to point to a detail">${img(state.answer?.image || photos.memory,'Photo selected to share')}${state.answer?.point ? `<span class="point-dot" style="left:${state.answer.point.x}%;top:${state.answer.point.y}%"></span>` : ''}</button>
      `;
    setAction('Done','done-point','secondary-button');
  }
  function renderConfirmSend() {
    const answer = state.answer || { image: photos.memory, type: 'photo', point: null };
    viewContent.innerHTML = `${heading('Confirm and send',`Review what ${partnerName()} will see.`)}
      ${answer.type === 'voice' ? `<section class="answer-summary"><p>A voice note from ${esc(viewerName())}</p>${audioPlayerMarkup('answer-to-send',`${viewerName()} recorded a voice reply.`,answer.mediaId||null)}</section>` : `<button type="button" class="photo-target" aria-label="Shared photo preview">${img(answer.image,'Selected photo to send')}${answer.point ? `<span class="point-dot" style="left:${answer.point.x}%;top:${answer.point.y}%"></span>` : ''}</button>`}
      <p style="margin-top:15px">${partnerName()} sees this.</p><button class="confirm-card" type="button" data-action="toggle-sent" aria-pressed="${!!state.senderConfirmed}"><span class="checkbox" aria-hidden="true">${state.senderConfirmed ? '✓' : ''}</span><span><span class="confirm-main">${state.senderConfirmed ? 'Sent' : 'I sent this'}</span><span class="confirm-help">Ticking this lets them see it.</span></span></button>
      ${state.senderConfirmed ? '<p class="success-note">Your confirmation is saved on this device.</p>' : ''}`;
    setAction(state.senderConfirmed?'Done':'Send to '+partnerName(),state.senderConfirmed?'finish-sender':'noop','primary-button',state.senderConfirmed?'':'Confirm above before sending.');
    $('[data-action="finish-sender"]',actionBar).disabled=!state.senderConfirmed;
  }
  function renderReceive() {
    const answer = state.answer || { image: photos.memory, type: 'photo', point: null };
    const sender = state.senderName || 'Grandma';
    viewContent.innerHTML = `${heading(`${sender} shared a photo`,'A moment from your family.')}
      ${answer.type === 'voice' ? `<section class="answer-summary"><p>A voice note from ${sender}</p>${audioPlayerMarkup('answer-received',`${sender} recorded a voice reply.`,answer.mediaId||null)}</section>` : `<div class="photo-target">${img(answer.image,'Photo shared by Grandma')}${answer.point ? `<span class="point-dot" style="left:${answer.point.x}%;top:${answer.point.y}%"></span>` : ''}</div>${audioPlayerMarkup('received-photo-audio',`${sender} shared a family photo with you.`)}`}
      <button class="confirm-card" type="button" data-action="toggle-seen" aria-pressed="${!!state.recipientConfirmed}"><span class="checkbox" aria-hidden="true">${state.recipientConfirmed ? '✓' : ''}</span><span><span class="confirm-main">${state.recipientConfirmed ? 'Seen' : 'I saw this'}</span><span class="confirm-help">Ticking this lets ${sender} know you saw it.</span></span></button>
      ${state.recipientConfirmed ? '<p class="success-note">You saw this. The family weave has grown.</p>' : ''}${button('Answer back','open-prompt','secondary-button','')}`;
    setAction(state.recipientConfirmed?'Finish':'Finish','finish-recipient','primary-button',state.recipientConfirmed?'':'Confirm that you saw this first.');
    $('[data-action="finish-recipient"]',actionBar).disabled=!state.recipientConfirmed;
  }
  const skills = [
    { title:'Cardamom coffee', teacher:'Grandma', description:'Make a warm cup with spice.', image:photos.skill, steps:['Crush the cardamom pods gently.','Warm milk with coffee and cardamom.','Pour into a cup and add a pinch of saffron.'], tip:'Take your time as the milk warms.' },
    { title:'Send a voice message', teacher:'Grandson', description:'Record a short voice message for the family.', image:photos.digital, steps:['Open a family conversation.','Tap the microphone and speak.','Tap again when you are finished, then listen.'], tip:'If the microphone is unavailable, you can still share a photo.' },
    { title:'A garden cutting', teacher:'Grandma', description:'Give a small plant a new home.', image:photos.gardenPath, steps:['Choose a healthy stem from the garden.','Place the stem in a small jar of water.','Set it near a bright window.'], tip:'A little light helps it grow.' },
    { title:'Make a video call', teacher:'Grandson', description:'See and hear family on the phone.', image:photos.school, steps:['Open the family video call.','Tap Grandma’s picture to call.','Say hello when the call connects.'], tip:'Ask for help if a screen looks different.' }
  ];
  function renderSkills() {
    viewContent.innerHTML = `${heading('Skills','Learn one, then teach one back.')}
      ${button('Add a skill','open-skill-create','secondary-button recipe-add-button')}<div class="skill-list">${allSkills().map((skill,index) => `<article class="skill-card content-card" data-content-type="skill" data-content-id="${index}" tabindex="0" role="button" aria-label="Open lesson ${esc(skill.title)}">${img(skill.image,skill.title)}<div class="skill-card-copy"><h2>${esc(skill.title)}</h2><span class="skill-teacher"><span class="person-dot ${personClass(skill.teacher)}"></span>${skill.teacher} is showing you</span><p>${esc(skill.description)}</p></div></article>`).join('')}</div>`;
    noAction();
  }
  function allSkills(){return [...skills,...(state.customSkills||[])];}
  function selectedSkill() { return allSkills()[state.selectedSkill || 0]; }
  function renderSkillDetail() {
    const skill = selectedSkill();
    const step = Math.min(state.skillStep || 0,skill.steps.length - 1);
    const attachments=skill.stepMedia?.[step]||[];
    const visuals=attachments.filter((entry)=>entry.type==='image'||entry.type==='video');
    const audio=attachments.filter((entry)=>entry.type==='audio');
     const leadMarkup=visuals.length?visuals.map((entry,index)=>entry.type==='video'?`<video class="skill-step-video" src="${esc(localMediaUrls.get(entry.key)||entry.key)}" controls playsinline preload="metadata" aria-label="${esc(entry.name||`${skill.title} step ${step+1} video`)}"></video>`:`<button type="button" class="detail-image-button skill-image-open" data-action="open-media" data-media-index="${index}" aria-label="View ${esc(skill.title)} step ${step+1} image full screen">${img(localMediaUrls.get(entry.key)||entry.key,`${skill.title}, step ${step+1}`,'skill-step-photo')}<span>Tap to view</span></button>`).join(''):skill.image?`<button type="button" class="detail-image-button skill-image-open" data-action="open-media" data-media-index="0" aria-label="View ${esc(skill.title)} image full screen">${img(skill.image,skill.title,'skill-detail-photo')}<span>Tap to view</span></button>`:'';
    viewContent.innerHTML = `${heading(esc(skill.title),`${skill.teacher} is showing you.`)}${leadMarkup}
      <p class="step-position">Step ${step + 1} of ${skill.steps.length}</p><div class="step-copy">${esc(skill.steps[step])}</div><p>${esc(skill.tip||'')}</p>${audio.map((attachment,index)=>`<section class="detail-attachment-audio"><strong>${esc(attachment.name||`Step ${step+1} audio`)}</strong>${audioPlayerMarkup(`skill-step-audio-${attachment.id}`,attachment.name||'Step audio',attachment.id)}</section>`).join('')}`;
    if (step >= skill.steps.length - 1 && state.skillFinished) setAction('Step completed','noop','secondary-button');
    else setAction('I did this step','complete-skill-step');
  }
  const memories = [
    ['Old seaside house',photos.house,'Grandma'],['The recipe book',photos.book,'Grandma'],['A day in the garden',photos.photoGarden,'Grandson'],['Afternoon baking',photos.bread,'Grandma']
  ];
  function renderMemories() {
    viewContent.innerHTML = `${heading('Memories','Old photos and the stories behind them.')}
      <div class="memory-grid">${[...memories,...state.memoryAdditions].map(([title,image,person,attachments],index) => {const cover=attachments?.find((entry)=>entry.type==='image'||entry.type==='video');const coverUrl=cover&&localMediaUrls.get(cover.key);return `<article class="story-card content-card" data-content-type="memory" data-content-id="memory-${index}" tabindex="0" role="button" aria-label="Open ${esc(title)} story">${cover?.type==='video'?`<video class="story-cover-video" src="${esc(coverUrl||cover.key)}" controls playsinline></video>`:cover?img(coverUrl||cover.key,`Family media: ${title}`):img(image,title)}<h3>${esc(title)}</h3><div class="card-meta"><span class="person-dot ${personClass(person)}"></span><span>${person}</span></div>${audioPlayerMarkup(`memory-${index}`,`${person} shares a story about ${title}.`)}</article>`;}).join('')}</div>`;
    setAction('Add a memory','open-add-memory');
  }
  const recipes = [
    { id:'sample-coffee', title:'Cardamom coffee', teacher:'Grandma', description:'Fresh water, roasted coffee beans, crushed cardamom pods, and a pinch of saffron.', ingredients:['Water','Coffee','Cardamom','Saffron'], steps:['Warm the water slowly.','Stir in the coffee and crushed cardamom.','Pour into a small cup and add saffron.'], art:'coffee', lines:[['Ingredient','Water and coffee'],['Ingredient','A pinch of cardamom and saffron'],['Step','Warm the water slowly'],['Step','Stir in coffee and spice'],['Step','Pour into a small cup']] },
    { id:'sample-biscuits', title:'Date biscuits', teacher:'Grandma', description:'Soft wheat flour, clarified butter, sweet date paste, and a touch of warm cinnamon.', ingredients:['Flour','Date paste','Butter','Cinnamon'], steps:['Mix the flour and butter.','Fold in the date paste and cinnamon.','Bake until lightly golden.'], art:'biscuits', lines:[['Ingredient','Flour and date paste'],['Ingredient','Butter and cinnamon'],['Step','Mix the flour with butter'],['Step','Fold in the date paste'],['Step','Bake until lightly golden']] },
    { id:'sample-salad', title:'Garden salad', teacher:'Grandson', description:'Crisp lettuce, garden herbs, fresh cucumbers, lemon juice, and olive oil.', ingredients:['Lettuce','Cucumber','Olive oil','Lemon'], steps:['Wash the vegetables and herbs.','Cut them into small pieces.','Mix with lemon and olive oil.'], art:'salad', lines:[['Ingredient','Lettuce and cucumber'],['Ingredient','Olive oil and lemon'],['Step','Wash the vegetables'],['Step','Cut into small pieces'],['Step','Mix with herbs']] }
  ];
  function recipeArt(kind){
    if(kind==='coffee')return `<svg viewBox="0 0 320 144" aria-hidden="true"><rect width="320" height="144" fill="#eadcc9"/><path d="M0 100C80 120 240 120 320 100v44H0Z" fill="#d7c2ba" opacity=".55"/><path d="M140 40h40l5 50c0 15-10 20-25 20s-25-5-25-20Z" fill="#985f42"/><path d="m160 30 10 10h-20Z" fill="#d3a24b"/><path d="M180 50c15 0 25 10 25 25s-20 20-20 20" fill="none" stroke="#985f42" stroke-width="4"/><ellipse cx="100" cy="90" rx="12" ry="8" transform="rotate(-30 100 90)" fill="#3e6b59"/><ellipse cx="220" cy="85" rx="12" ry="8" transform="rotate(25 220 85)" fill="#3e6b59"/></svg>`;
    if(kind==='biscuits')return `<svg viewBox="0 0 320 144" aria-hidden="true"><rect width="320" height="144" fill="#e8e2d7"/><path d="M0 100c80 20 240 20 320 0v44H0Z" fill="#d7c2ba" opacity=".55"/><ellipse cx="140" cy="85" rx="35" ry="15" fill="#d3a24b"/><ellipse cx="140" cy="80" rx="33" ry="14" fill="#e0b46e"/><ellipse cx="170" cy="70" rx="35" ry="15" fill="#d3a24b"/><ellipse cx="170" cy="65" rx="33" ry="14" fill="#e0b46e"/><ellipse cx="165" cy="65" rx="8" ry="5" fill="#52301b"/><ellipse cx="135" cy="80" rx="8" ry="5" fill="#52301b"/></svg>`;
    return `<svg viewBox="0 0 320 144" aria-hidden="true"><rect width="320" height="144" fill="#dde5df"/><path d="M0 100c80 20 240 20 320 0v44H0Z" fill="#c5d1c8"/><path d="M100 70h120l-15 40h-90Z" fill="#f7f0e5"/><circle cx="140" cy="75" r="18" fill="#3e6b59"/><circle cx="170" cy="70" r="22" fill="#4b7b66"/><circle cx="160" cy="85" r="15" fill="#3e6b59"/><circle cx="130" cy="85" r="12" fill="#5a8c75"/><circle cx="150" cy="65" r="7" fill="#ba1a1a"/><circle cx="185" cy="80" r="6" fill="#ba1a1a"/></svg>`;
  }
  function renderRecipes() {
    viewContent.innerHTML = `${heading('Recipes','Family recipes, in the voice of the person who taught them.')}
      ${button('Add a recipe','open-recipe-create','secondary-button recipe-add-button')}
      <div class="recipe-list">${allRecipes().map((recipe) => `<article class="recipe-card recipe-link" data-recipe-card data-recipe-id="${esc(recipe.id)}" tabindex="0" role="link" aria-label="Open ${esc(recipe.title)} recipe"><div class="recipe-art">${recipe.image?img(recipe.image,`Photo of ${recipe.title}`):recipeArt(recipe.art||'coffee')}</div><div class="recipe-copy"><p class="recipe-byline ${personClass(recipe.teacher)}">${recipe.teacher} taught this recipe</p><h2>${esc(recipe.title)}</h2><p class="recipe-description">${esc(recipe.description||'Family recipe shared together.')}</p></div><div class="recipe-bottom"><div class="ingredient-list">${(recipe.ingredients||[]).slice(0,4).map((ingredient)=>`<span class="ingredient-chip">${esc(ingredient)}</span>`).join('')}</div><span class="recipe-open-label">Open recipe →</span></div></article>`).join('')}</div>`;
    noAction();
  }
  function allRecipes(){return [...recipes,...(state.customRecipes||[])];}
  function getRecipe(id){return allRecipes().find((recipe)=>recipe.id===id)||recipes[0];}
  function parseLines(text){return String(text||'').split(/\n|,/).map((line)=>line.trim().replace(/^[-•\d.)\s]+/, '')).filter(Boolean);}
  function renderRecipeCreate(){
    const draft=state.recipeDraft||{title:'My family recipe',ingredients:'',steps:'',media:[],recordings:[]};
    draft.recordings ||= [];
    viewContent.innerHTML=`${heading('Add a recipe')}
      <section class="recipe-editor">
        <label class="recipe-field">Recipe name<input id="recipe-title" type="text" maxlength="60" value="${esc(draft.title)}" autocomplete="off"></label>
        <label class="recipe-field">Ingredients<textarea id="recipe-ingredients" rows="2" placeholder="Milk, coffee, cardamom">${esc(draft.ingredients)}</textarea></label>
        <label class="recipe-field">Steps<textarea id="recipe-steps" rows="4" placeholder="Warm the milk.&#10;Stir in the coffee.">${esc(draft.steps)}</textarea></label>
        <section class="recipe-upload-panel"><h2>Family media</h2>${renderPendingMedia(draft.media,'recipe')}${button('Choose photos, videos or audio','choose-recipe-photo','secondary-button')}</section>
        <section class="recipe-upload-panel"><h2>Voice recording</h2><div class="recording-box"><button class="mic-button ${mediaRecorder?.state==='recording'?'recording':''}" type="button" data-action="toggle-record" aria-label="${mediaRecorder?.state==='recording'?'Stop voice recording':'Start voice recording'}">${mediaRecorder?.state==='recording'?'<span class="stop-mark" aria-hidden="true"></span>':micGlyph()}</button><span class="mic-copy">${mediaRecorder?.state==='recording'?'Tap again to stop':draft.recordings.length?'Tap to record another':'Tap to record'}<small id="record-time">${mediaRecorder?.state==='recording'?elapsedTime():draft.recordings.length?`${draft.recordings.length} recording${draft.recordings.length===1?'':'s'} attached`:''}</small></span></div><div class="recipe-recording-list">${draft.recordings.map((take,index)=>`<div class="recipe-recording-item"><span>Recording ${index+1}</span>${audioPlayerMarkup(`recipe-editor-${take.id}`,`Recipe voice recording ${index+1}.`,take.id)}${button('Remove','remove-recipe-recording','quiet-button',`data-recording-index="${index}"`)}</div>`).join('')}</div>${!window.MediaRecorder?'<p class="calm-note">Voice recording is unavailable here. The written recipe still works.</p>':''}<p id="recipe-mic-message" class="calm-note" hidden></p></section>
      </section>`;
    setAction('Save recipe','save-recipe');
    const title=$('#recipe-title',viewContent)?.value.trim();
    const hasRecipeContent=()=>parseLines(draft.steps).length>0||(draft.recordings||[]).length>0||(draft.media||[]).some((entry)=>entry.type==='audio');
    $('[data-action="save-recipe"]',actionBar).disabled=!title||!hasRecipeContent()||mediaRecorder?.state==='recording';
    const syncSave=()=>{$('[data-action="save-recipe"]',actionBar).disabled=!draft.title.trim()||!hasRecipeContent()||mediaRecorder?.state==='recording';};
    $('#recipe-title',viewContent)?.addEventListener('input',(event)=>{draft.title=event.target.value;syncSave();});
    $('#recipe-ingredients',viewContent)?.addEventListener('input',(event)=>{draft.ingredients=event.target.value;});
    $('#recipe-steps',viewContent)?.addEventListener('input',(event)=>{draft.steps=event.target.value;syncSave();});
    state.recipeDraft=draft;
  }
  function renderRecipeDetail(){
    const recipe=getRecipe(state.selectedRecipeId);
    const voiceKeys=recipe.audioIds||[];
    const recordedVoiceKeys=voiceKeys.filter((key)=>audioUrls.has(key));
    const completed=state.recipeChecks?.[recipe.id]||[];
    const ingredients=recipe.ingredients||[];
    const steps=recipe.steps||[];
     viewContent.innerHTML=`${heading(esc(recipe.title),recipe.description||'A family recipe to make together.')}${state.recipeCooked?.[recipe.id]?'<button type="button" class="recipe-cooked-mark" data-action="toggle-recipe-cooked" aria-pressed="true" aria-label="Clear cooked status">✓ Cooked</button>':''}
      <article class="recipe-detail-card"><div class="recipe-detail-media">${(recipe.attachments||[]).filter((attachment)=>attachment.type==='image'||attachment.type==='video').map((attachment,index)=>mediaMarkup({...attachment,url:localMediaUrls.get(attachment.key)||attachment.key,viewerIndex:index},index)).join('')||`<div class="recipe-art recipe-detail-art">${recipeArt(recipe.art||'coffee')}</div>`}</div><p class="recipe-byline ${personClass(recipe.teacher)}">${esc(recipe.teacher)} shared this recipe</p>${ingredients.length?`<h2>Ingredients</h2><div class="recipe-detail-ingredients">${ingredients.map((item)=>`<span class="ingredient-chip">${esc(item)}</span>`).join('')}</div>`:''}
       ${steps.length?`<h2 class="recipe-steps-heading">Steps</h2><div class="recipe-checklist">${steps.map((step,index)=>`<button type="button" class="recipe-step" data-action="toggle-recipe-step" data-step="${index}" aria-pressed="${completed.includes(index)}"><span class="check-mark" aria-hidden="true">${completed.includes(index)?'✓':''}</span><span>${esc(step)}</span></button>`).join('')}</div>`:''}
       <section class="recipe-narration"><h2>${recordedVoiceKeys.length?'Voice recordings':'Narration'}</h2>${recordedVoiceKeys.length?recordedVoiceKeys.map((key,index)=>audioPlayerMarkup(`recipe-voice-${recipe.id}-${index}`,`Voice recording ${index+1} for ${recipe.title}.`,key)).join(''):audioPlayerMarkup(`recipe-sample-${recipe.id}`,steps.join(' '),null,recipe.id)}</section>
      ${(recipe.sharedPhotos||[]).length?`<section class="recipe-shared-photos"><h2>Made by the family</h2><div class="recipe-shared-grid">${recipe.sharedPhotos.map((photo)=>img(photo,`Photo made from ${recipe.title}`)).join('')}</div></section>`:''}</article>`;
    setAction(state.recipeCooked?.[recipe.id]?'Share what you made':'Mark as cooked',state.recipeCooked?.[recipe.id]?'open-recipe-share':'mark-recipe-cooked','primary-button');
  }
  function renderRecipeShare(){const items=state.recipeShareDraft||[];viewContent.innerHTML=`${heading('Share what you made')}${items.length?`<div class="pending-media-list">${renderPendingMedia(items,'recipe-share')}</div>`:''}${button('Choose photos or videos','choose-recipe-photo','secondary-button')}`;setAction('Share with the family','share-recipe-photo','primary-button');$('[data-action="share-recipe-photo"]',actionBar).disabled=!items.length;}
  function saveRecipe(){
    const draft=state.recipeDraft||{};
    const steps=parseLines(draft.steps);
    const title=String(draft.title||'').trim();
    const takes=draft.recordings||[];const audioMedia=(draft.media||[]).some((entry)=>entry.type==='audio');
    if(!title||(!steps.length&&!takes.length&&!audioMedia)){announce('Add written steps or a voice recording.');return;}
    const id=`family-recipe-${Date.now()}`;
    const media=commitPendingMedia(draft.media||[],id);
    const audioIds=[...takes.map((_,index)=>`${id}:voice:${index}`),...media.filter((entry)=>entry.type==='audio').map((entry)=>entry.id)];
    const recipe={id,title,teacher:viewerName(),description:`A family recipe shared by ${viewerName()}.`,ingredients:parseLines(draft.ingredients),steps,art:'coffee',image:media.find((entry)=>entry.type==='image')?.key||null,attachments:media,audioIds,sharedPhotos:[]};
    const mediaWrites=[];
    takes.forEach((take,index)=>{const audioId=audioIds[index];audioUrls.set(audioId,take.url);mediaWrites.push(storeBinary('audio',audioId,take.blob));});
    state.customRecipes.push(recipe);state.recipeChecks ||= {};state.recipeChecks[id]=[];state.selectedRecipeId=id;state.recipeDraft=null;
    persist();recording=null;route='recipe-detail';render();
    Promise.all(mediaWrites).then(()=>announce('Your recipe is saved on this device.')).catch(()=>announce('The recipe is saved for this session. Media storage is unavailable in this browser.'));
  }
  function saveSkill(){const draft=state.skillDraft;const title=String(draft?.title||'').trim();const steps=(draft?.steps||[]).map((step)=>({...step,text:String(step.text||'').trim()})).filter((step)=>step.text);if(!title||!steps.length){announce('Add a skill name and at least one step.');return;}const id=`family-skill-${Date.now()}`;const stepMedia=steps.map((step,index)=>commitPendingMedia(step.media||[],`${id}-step-${index}`));state.customSkills.push({id,title,teacher:viewerName(),description:draft.description||'A family skill shared together.',steps:steps.map((step)=>step.text),tip:'Take your time with each step.',image:stepMedia.flat().find((entry)=>entry.type==='image')?.key||null,stepMedia});state.selectedSkill=allSkills().length-1;state.skillStep=0;state.skillFinished=false;state.skillDraft=null;persist();route='skill-detail';render();announce('Your skill is saved on this device.');}
  function shareRecipePhoto(file){
    const recipe=getRecipe(state.recipePhotoTarget);if(!recipe)return;
    const items=state.recipeShareDraft||[];if(!items.length)return;
    const id=`recipe-photo-${Date.now()}`;const attachments=commitPendingMedia(items,id);
    const moment={id,person:viewerName(),when:'This morning',image:attachments.find((entry)=>entry.type==='image')?.key||null,attachments,sample:false,voice:false,recipeTitle:recipe.title};
    state.moments.push(moment);state.memoryAdditions.push([`Made ${recipe.title}`,moment.image||photos.recipe,viewerName(),moment.attachments]);recipe.sharedPhotos||=[];recipe.sharedPhotos.push(...attachments.filter((entry)=>entry.type==='image').map((entry)=>entry.key));state.recipePhotoTarget=null;state.recipeShareDraft=null;routeStack.pop();route='recipe-detail';persist();render();announce(`${recipe.title} was shared in Today and Memories.`);
  }
  function renderMomentDetail() {
    const item = state.moments.find((m) => m.id === state.selectedMoment) || state.moments[0];
    if (!item) { viewContent.innerHTML = '<p class="empty-note">No moments yet.</p>'; noAction(); return; }
    viewContent.innerHTML = `${heading(`${esc(item.person)} shared this`,'A photo from the family.')}${img(item.image,'A family photo','prompt-photo')}${item.voice ? audioPlayerMarkup(`moment-detail-${item.id}`,`${item.person} shares a family moment.`,item.id) : ''}`;
    noAction();
  }
  function renderContentDetail(){
    const item=state.selectedContentType==='memory'?getMemory(state.selectedContentId):state.moments.find((moment)=>moment.id===state.selectedContentId);
    if(!item){viewContent.innerHTML='<p class="empty-note">This family story is no longer available.</p>';noAction();return;}
    const media=contentAttachments(item);
    viewContent.innerHTML=`${heading(esc(item.title||`${item.person} shared this`),item.when||'')}${item.description?`<p>${esc(item.description)}</p>`:''}<div class="detail-media-list">${media.map((attachment,index)=>mediaMarkup({...attachment,viewerIndex:media.filter((entry)=>entry.type==='image'||entry.type==='video').indexOf(attachment)},index)).join('')||'<p class="photo-placeholder">There is no photo or video in this story.</p>'}</div>${item.voice?audioPlayerMarkup(`detail-voice-${item.id}`,`${item.person} shares a family moment.`,item.id):''}${(item.audioIds||[]).map((key,index)=>audioPlayerMarkup(`detail-audio-${item.id}-${index}`,`Audio attachment ${index+1}.`,key)).join('')}`;
    noAction();
  }
  function getMemory(id){const index=Number(String(id).replace('memory-',''));const row=[...memories,...state.memoryAdditions][index];return row?{id,title:row[0],person:row[2],image:row[1],sample:index<memories.length,attachments:row[3]||[],voice:index<memories.length} : null;}
  function contentAttachments(item){const attachments=(item.attachments||[]).map((entry)=>({...entry,url:localMediaUrls.get(entry.key)||entry.url||entry.key}));if(!attachments.length&&item.image)attachments.push({type:'image',url:localMediaUrls.get(item.image)||item.image,name:'Family photo'});return attachments;}
  function mediaMarkup(attachment,index){const url=attachment.url||localMediaUrls.get(attachment.key)||attachment.key;return attachment.type==='video'?`<video class="detail-video" src="${esc(url)}" controls playsinline preload="metadata" aria-label="${esc(attachment.name||`Video ${index+1}`)}"></video>`:attachment.type==='audio'?`<div class="detail-attachment-audio"><strong>${esc(attachment.name||`Audio ${index+1}`)}</strong>${audioPlayerMarkup(`attachment-${attachment.key}`,attachment.name||'Family audio',attachment.key)}</div>`:`<button type="button" class="detail-image-button" data-action="open-media" data-media-index="${attachment.viewerIndex??index}" aria-label="View ${esc(attachment.name||'photo')} full screen">${img(url,attachment.name||'Family photo','detail-image')}<span>Tap to view</span></button>`;}
  function viewerItem(){if(state.selectedContentType==='memory')return getMemory(state.selectedContentId);if(state.selectedContentType==='recipe')return getRecipe(state.selectedRecipeId);if(state.selectedContentType==='skill'){const skill=allSkills()[state.selectedSkill];return skill?.stepMedia?.[state.skillStep]?.length?skill.stepMedia[state.skillStep]:skill?.image?[{type:'image',key:skill.image,name:skill.title}]:[];}return state.moments.find((moment)=>moment.id===state.selectedContentId);}
  function renderMediaViewer(){const item=viewerItem();const raw=Array.isArray(item)?item:contentAttachments(item||{});const attachments=raw.filter((entry)=>entry.type==='image'||entry.type==='video').map((entry)=>({...entry,url:localMediaUrls.get(entry.key)||entry.url||entry.key}));if(!attachments.length){back();return;}activeMediaIndex=Math.max(0,Math.min(activeMediaIndex,attachments.length-1));const media=attachments[activeMediaIndex];const url=media.url||media.key;const magnifier='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m15.5 15.5 5 5M10.8 7.5v6.6M7.5 10.8h6.6"/></svg>';viewContent.innerHTML=`<div class="media-viewer" data-zoomed="${zoomed}"><div class="media-viewer-toolbar"><button type="button" class="secondary-button" data-action="go-back">Back</button><span>${esc(media.name||`${media.type==='video'?'Video':'Photo'} ${activeMediaIndex+1}`)}</span></div>${media.type==='video'?`<video class="viewer-video" src="${esc(url)}" controls playsinline autoplay></video>`:`<div class="viewer-image-wrap"><img class="viewer-image ${zoomed?'is-zoomed':''}" src="${esc(url)}" alt="${esc(media.name||'Family photo')}"><button type="button" class="media-zoom-control" data-action="toggle-zoom" aria-label="${zoomed?'Fit image to screen':'Magnify image'}">${magnifier}</button></div>`}<div class="media-viewer-controls"><button type="button" class="secondary-button" data-action="previous-media" ${activeMediaIndex===0?'disabled':''}>Previous</button><span>${activeMediaIndex+1} of ${attachments.length}</span><button type="button" class="secondary-button" data-action="next-media" ${activeMediaIndex>=attachments.length-1?'disabled':''}>Next</button></div></div>`;noAction();}
  function renderPendingMedia(items=[],kind='media'){return items.map((entry,index)=>`<div class="pending-media-item">${entry.type==='image'?`<img src="${esc(entry.url)}" alt="Selected photo ${index+1}">`:entry.type==='video'?`<video src="${esc(entry.url)}" controls playsinline></video>`:`<audio src="${esc(entry.url)}" controls></audio>`}<span>${esc(entry.name||`${entry.type} ${index+1}`)}</span>${button('Remove','remove-pending-media','quiet-button',`data-media-kind="${kind}" data-media-index="${index}"`)}</div>`).join('');}
  function makeAttachment(file,id){const type=file.type.startsWith('video/')?'video':file.type.startsWith('audio/')?'audio':'image';const key=type==='audio'?id:`local-media:${id}`;const url=URL.createObjectURL(file);localMediaUrls.set(key,url);if(type==='audio')audioUrls.set(id,url);return {id,key,type,name:file.name||`${type} attachment`,url,blob:file};}
  function commitPendingMedia(items,parentId){return items.map((item,index)=>{const entry=makeAttachment(item.file||item.blob,`${parentId}-media-${index}`);storeBinary(entry.type==='audio'?'audio':'photos',entry.id,entry.blob).catch(()=>announce('Media is available for this session, but local storage was unavailable.'));return {id:entry.id,key:entry.key,type:entry.type,name:entry.name};});}
  function addSelectedFiles(files,purpose){const entries=[...files].filter((file)=>file.type.startsWith('image/')||file.type.startsWith('video/')||file.type.startsWith('audio/')).map((file)=>({file,...makeAttachment(file,`upload-${Date.now()}-${Math.random().toString(16).slice(2)}`)}));if(purpose==='moment'){chosenMedia.push(...entries);chosenPhoto=entries.find((entry)=>entry.type==='image')?.url||chosenPhoto;}else if(purpose==='recipe'){state.recipeDraft ||= {title:'My family recipe',ingredients:'',steps:'',media:[],recordings:[]};state.recipeDraft.media ||= [];state.recipeDraft.media.push(...entries);}else if(purpose==='recipe-share'){state.recipeShareDraft||=[];state.recipeShareDraft.push(...entries);}else if(purpose.startsWith('skill-step-')){const index=Number(purpose.slice('skill-step-'.length));state.skillDraft.steps[index].media.push(...entries);}render();}
  function renderSkillCreate(){const draft=state.skillDraft||{title:'A family skill',description:'Share something you know.',steps:[{text:'Show the first step.',media:[]}]};state.skillDraft=draft;viewContent.innerHTML=`${heading('Add a skill')}<section class="recipe-editor"><label class="recipe-field">Skill name<input id="skill-title" maxlength="60" value="${esc(draft.title)}"></label><label class="recipe-field">Short description<textarea id="skill-description" rows="2">${esc(draft.description)}</textarea></label>${draft.steps.map((step,index)=>`<section class="recipe-upload-panel skill-step-editor"><h2>Step ${index+1}</h2><label class="recipe-field">Instruction<textarea data-skill-step-text="${index}" rows="2">${esc(step.text)}</textarea></label>${renderPendingMedia(step.media,'skill-step-'+index)}${button('Add supporting media','choose-skill-media','secondary-button',`data-skill-step="${index}"`)}</section>`).join('')}${button('Add a step','add-skill-step','secondary-button')}</section>`;setAction('Save skill','save-skill');$('#skill-title',viewContent).addEventListener('input',(event)=>draft.title=event.target.value);$('#skill-description',viewContent).addEventListener('input',(event)=>draft.description=event.target.value);$$('[data-skill-step-text]',viewContent).forEach((field)=>field.addEventListener('input',(event)=>draft.steps[Number(event.target.dataset.skillStepText)].text=event.target.value));}
  function elapsedTime() { return `${Math.floor((Date.now() - recordingStarted) / 1000)} sec`; }
  async function toggleRecipeRecording(){
    if(mediaRecorder?.state==='recording'){mediaRecorder.stop();return;}
    if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){const note=$('#recipe-mic-message');if(note){note.hidden=false;note.textContent='Voice recording is not available. The written recipe still works.';}return;}
    try{
      mediaStream=await navigator.mediaDevices.getUserMedia({audio:true});
      const mimeType=['audio/webm;codecs=opus','audio/webm','audio/mp4'].find((type)=>MediaRecorder.isTypeSupported?.(type));
      mediaRecorder=new MediaRecorder(mediaStream,mimeType?{mimeType}:undefined);
      const recorder=mediaRecorder;const chunks=[];
      recorder.ondataavailable=(event)=>{if(event.data.size)chunks.push(event.data);};
      recorder.onstop=()=>{
        const blob=new Blob(chunks,{type:recorder.mimeType||'audio/webm'});
        state.recipeDraft ||= {title:'My family recipe',ingredients:'',steps:'',image:null,recordings:[]};
        state.recipeDraft.recordings ||= [];
        const take={id:`take-${Date.now()}`,blob,url:URL.createObjectURL(blob)};
        state.recipeDraft.recordings.push(take);audioUrls.set(take.id,take.url);
        mediaStream?.getTracks().forEach((track)=>track.stop());mediaStream=null;mediaRecorder=null;clearInterval(recordTimer);
        render();announce('Voice recording attached. You can record another or remove a take.');
      };
      recorder.start();recordingStarted=Date.now();
      recordTimer=setInterval(()=>setLocalizedText($('#record-time'),elapsedTime()),1000);
      render();announce('Recording. Tap again to stop.');
    }catch{
      mediaStream?.getTracks().forEach((track)=>track.stop());mediaStream=null;mediaRecorder=null;
      const note=$('#recipe-mic-message');if(note){note.hidden=false;note.textContent='The microphone is not available. The written recipe still works.';}
      announce('The microphone is not available. The written recipe still works.');
    }
  }
  async function toggleRecording() {
    if(route==='recipe-create')return toggleRecipeRecording();
    if (mediaRecorder?.state === 'recording') { mediaRecorder.stop(); return; }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      const message = route==='recipe-create'?$('#recipe-mic-message'):$('#mic-message'); if (message) { message.hidden = false; message.textContent = route==='recipe-create'?'The microphone is not available. You can still save the written recipe.':'The microphone is not available. You can share a photo, or add a voice note later.'; }
      announce('The microphone is not available. You can share a photo.');
      return;
    }
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = ['audio/webm;codecs=opus','audio/webm','audio/mp4'].find((type) => MediaRecorder.isTypeSupported?.(type));
      mediaRecorder = new MediaRecorder(mediaStream, mimeType ? { mimeType } : undefined);
      const chunks = [];
      mediaRecorder.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data); };
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: mediaRecorder.mimeType || 'audio/webm' });
        if (recording?.url) URL.revokeObjectURL(recording.url);
        recording = { blob, url: URL.createObjectURL(blob), sample: false };
        audioUrls.set('recording-preview',recording.url);
        mediaStream?.getTracks().forEach((track) => track.stop()); mediaStream = null;
        clearInterval(recordTimer); render(); announce('Your voice note is ready to play.');
      };
      mediaRecorder.start(); recordingStarted = Date.now();
      recordTimer = setInterval(() => setLocalizedText($('#record-time'),elapsedTime()), 1000);
      render(); announce('Listening. Speak now. Tap the microphone again to stop.');
    } catch {
      mediaStream?.getTracks().forEach((track) => track.stop()); mediaStream = null;
      const message = route==='recipe-create'?$('#recipe-mic-message'):$('#mic-message'); if (message) { message.hidden = false; message.textContent = route==='recipe-create'?'The microphone is not available. You can still save the written recipe.':'The microphone is not available. You can share a photo, or add a voice note later.'; }
      announce('The microphone is not available. You can share a photo.');
    }
  }
  function closeAllAudio() {
    clearInterval(recordTimer); recipeTimers.forEach(clearTimeout); recipeTimers = [];stopAudioPlayback();
    try{window.speechSynthesis?.cancel();}catch{}
    if(mediaRecorder?.state==='recording'){
      mediaRecorder.onstop=null;
      try{mediaRecorder.stop();}catch{}
      mediaStream?.getTracks().forEach((track)=>track.stop());mediaStream=null;mediaRecorder=null;recording=null;
    }
    $$('audio').forEach((audio) => { try { audio.pause(); audio.currentTime = 0; } catch {} });
    $$('.is-playing').forEach((node) => node.classList.remove('is-playing'));
    $$('.recipe-details').forEach((node)=>{node.hidden=true;node.querySelectorAll('.active').forEach((line)=>line.classList.remove('active'));});
    $$('.ingredient-chip.active').forEach((node)=>node.classList.remove('active'));
  }
  function getAudioPlayer(id){return $$('[data-audio-player]').find((node)=>node.dataset.audioPlayer===id);}
  const durationProbes=new Map();
  function ensureAudioDuration(key,id){
    const url=audioUrls.get(key);if(!url||audioDurations.has(key)||durationProbes.has(key))return;
    try{const probe=new Audio();durationProbes.set(key,probe);probe.preload='metadata';probe.src=url;probe.onloadedmetadata=()=>{if(Number.isFinite(probe.duration)){audioDurations.set(key,probe.duration);updateAudioPlayer(id);}durationProbes.delete(key);};probe.onerror=()=>durationProbes.delete(key);}catch{}
  }
  function updateAudioPlayer(id){
    const player=getAudioPlayer(id);if(!player)return;
    const active=activeAudio?.id===id?activeAudio:null;
    const state=active?.state||'ready';
    const duration=active?.duration||audioDurations.get(player.dataset.audioKey)||Number(player.dataset.duration)||0;
    const current=active?active.current:(audioOffsets.get(id)||0);
    const toggle=$('[data-audio-toggle-label]',player);const status=$('[data-audio-status]',player);
    const stop=$('[data-action="audio-stop"]',player);const slider=$('[data-audio-seek]',player);
    if(toggle)setLocalizedText(toggle,state==='playing'?'Pause':state==='paused'?'Resume':'Play');
    const icon=$('[data-audio-icon]',player);
    if(icon)icon.innerHTML=state==='playing'?'<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM15 5h4v14h-4z"/></svg>':'<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg>';
    if(status)setLocalizedText(status,state==='playing'?'Playing':state==='paused'?'Paused':state==='stopped'?'Stopped':state==='ended'?'Finished':'Ready');
    if(stop)stop.disabled=!active||!['playing','paused'].includes(state);
    if(slider){slider.max=String(Math.max(1,duration));slider.value=String(Math.min(current,duration||current));setLocalizedAttribute(slider,'aria-valuetext',`${formatTime(current)} of ${duration?formatTime(duration):'audio'}`);}
    const currentLabel=$('[data-audio-current]',player);const durationLabel=$('[data-audio-duration]',player);
    if(currentLabel)currentLabel.textContent=formatTime(current);
    if(durationLabel)durationLabel.textContent=duration?formatTime(duration):'--:--';
    player.classList.toggle('is-playing',state==='playing');
    const recipeId=player.dataset.recipeId;
    if(recipeId){
      const steps=$$('.recipe-step',viewContent);steps.forEach((step)=>step.classList.remove('is-speaking'));
      if(steps.length&&['playing','paused'].includes(state)){const at=Math.min(steps.length-1,Math.floor((current/Math.max(duration,1))*steps.length));steps[at]?.classList.add('is-speaking');}
    }
  }
  function updateAllAudioPlayers(){ $$('[data-audio-player]').forEach((player)=>updateAudioPlayer(player.dataset.audioPlayer)); }
  function startAudioTicker(){
    clearInterval(audioTimer);
    audioTimer=setInterval(()=>{
      if(!activeAudio||activeAudio.state!=='playing'||activeAudio.kind==='file')return;
      activeAudio.current=Math.min(activeAudio.duration,activeAudio.startCurrent+(Date.now()-activeAudio.startedAt)/1000);
      audioOffsets.set(activeAudio.id,activeAudio.current);updateAudioPlayer(activeAudio.id);
      if(activeAudio.speechEnded&&activeAudio.current>=activeAudio.duration)finishAudioPlayback();
    },100);
  }
  function finishAudioPlayback(){
    if(!activeAudio)return;
    clearInterval(audioTimer);audioTimer=null;activeAudio.state='ended';activeAudio.current=activeAudio.duration;
    audioOffsets.set(activeAudio.id,activeAudio.current);updateAudioPlayer(activeAudio.id);
  }
  function startSampleSpeech(id,text,offset=0){
    const player=getAudioPlayer(id);const duration=Number(player?.dataset.duration)||estimateDuration(text);
    activeAudio={id,kind:'speech',text,duration,current:offset,state:'playing',startedAt:Date.now(),startCurrent:offset};
    const speechSupported=window.speechSynthesis&&window.SpeechSynthesisUtterance&&window.speechSynthesis.getVoices().length>0;
    if(speechSupported){
      const words=String(text||'Sample audio').trim().split(/\s+/);const startIndex=Math.min(words.length-1,Math.floor((offset/duration)*words.length));
      try{window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(words.slice(startIndex).join(' '));utterance.lang=language==='ar'?'ar-AE':'en-US';utterance.rate=.92;utterance.onend=()=>{if(activeAudio?.id===id){activeAudio.speechEnded=true;if(activeAudio.current>=activeAudio.duration&&activeAudio.state==='playing')finishAudioPlayback();}};utterance.onerror=()=>{if(activeAudio?.id===id){activeAudio.speechEnded=true;if(activeAudio.current>=activeAudio.duration&&activeAudio.state==='playing')finishAudioPlayback();}};window.speechSynthesis.speak(utterance);}catch{}
    }else{
      activeAudio.toneTimer=setInterval(playSampleTone,1400);playSampleTone();
      activeAudio.fallbackTimer=setTimeout(()=>{if(activeAudio?.id===id&&activeAudio.state==='playing')finishAudioPlayback();},Math.max(1,duration-offset)*1000);
    }
     audioOffsets.set(id,offset);startAudioTicker();updateAudioPlayer(id);announce('Playing narration.');
  }
  function startFileAudio(id,key,url,offset=0){
    const player=getAudioPlayer(id);const audio=new Audio(url);audio.preload='metadata';
    const duration=audioDurations.get(key)||Number(player?.dataset.duration)||0;
    activeAudio={id,kind:'file',key,audio,duration,current:offset,state:'playing'};
    audio.onloadedmetadata=()=>{activeAudio&&(activeAudio.duration=audio.duration,audioDurations.set(key,audio.duration),updateAudioPlayer(id));};
    audio.ontimeupdate=()=>{if(activeAudio?.id===id){activeAudio.current=audio.currentTime;audioOffsets.set(id,audio.currentTime);updateAudioPlayer(id);}};
    audio.onended=finishAudioPlayback;
    audio.onpause=()=>{if(activeAudio?.id===id&&activeAudio.state==='playing'){activeAudio.current=audio.currentTime;activeAudio.state='paused';updateAudioPlayer(id);}};
    audio.onerror=()=>{if(activeAudio?.id===id){activeAudio.state='stopped';updateAudioPlayer(id);announce('This recording could not be played.');}};
    audio.currentTime=offset;audio.play().then(()=>{if(activeAudio?.id===id){activeAudio.state='playing';updateAudioPlayer(id);announce('Playing voice recording.');}}).catch(()=>{if(activeAudio?.id===id){activeAudio.state='paused';updateAudioPlayer(id);announce('Tap Play to start this recording.');}});
    updateAudioPlayer(id);
  }
  function toggleAudioPlayback(id){
    if(activeAudio?.id===id&&activeAudio.state==='playing'){
      activeAudio.current=activeAudio.kind==='file'?activeAudio.audio.currentTime:Math.min(activeAudio.duration,activeAudio.startCurrent+(Date.now()-activeAudio.startedAt)/1000);
      activeAudio.state='paused';clearInterval(audioTimer);audioTimer=null;
      if(activeAudio.kind==='file')activeAudio.audio.pause();else if(window.speechSynthesis)window.speechSynthesis.pause();
      audioOffsets.set(id,activeAudio.current);updateAudioPlayer(id);announce('Audio paused.');return;
    }
    if(activeAudio?.id===id&&activeAudio.state==='paused'){
      activeAudio.state='playing';activeAudio.startCurrent=activeAudio.current;activeAudio.startedAt=Date.now();
      if(activeAudio.kind==='file')activeAudio.audio.play().catch(()=>{});else if(activeAudio.needsRestart)startSampleSpeech(id,activeAudio.text,activeAudio.current);else if(window.speechSynthesis)window.speechSynthesis.resume();
      startAudioTicker();updateAudioPlayer(id);announce('Audio playing.');return;
    }
    const player=getAudioPlayer(id);if(!player)return;
    stopAudioPlayback();
    const key=player.dataset.audioKey;const url=key&&audioUrls.get(key);const offset=audioOffsets.get(id)||0;
    if(url)startFileAudio(id,key,url,offset);else startSampleSpeech(id,player.dataset.audioText,offset);
  }
  function stopAudioPlayback(id=activeAudio?.id){
    if(!activeAudio||activeAudio.id!==id){if(id)audioOffsets.set(id,0);updateAudioPlayer(id);return;}
    clearInterval(audioTimer);audioTimer=null;clearInterval(activeAudio.toneTimer);clearTimeout(activeAudio.fallbackTimer);
    if(activeAudio.kind==='file'){try{activeAudio.audio.pause();activeAudio.audio.currentTime=0;}catch{}}
    else{try{window.speechSynthesis?.cancel();}catch{}}
    activeAudio.state='stopped';activeAudio.current=0;activeAudio.startCurrent=0;audioOffsets.set(id,0);updateAudioPlayer(id);
  }
  function seekAudio(id,value){
    const seconds=Number(value)||0;audioOffsets.set(id,seconds);
    if(activeAudio?.id===id){
      if(activeAudio.kind==='file'){activeAudio.audio.currentTime=seconds;activeAudio.current=seconds;updateAudioPlayer(id);return;}
      const {text,state}=activeAudio;clearInterval(audioTimer);audioTimer=null;try{window.speechSynthesis?.cancel();}catch{}
      if(state==='playing')startSampleSpeech(id,text,seconds);else{activeAudio.current=seconds;activeAudio.startCurrent=seconds;activeAudio.needsRestart=true;updateAudioPlayer(id);}return;
    }
    updateAudioPlayer(id);
  }
  function playSampleTone() {
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator(); const gain = audioContext.createGain();
      oscillator.type = 'sine'; oscillator.frequency.value = 330; gain.gain.value = .035;
      oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start();
      setTimeout(() => { oscillator.stop(); oscillator.disconnect(); gain.disconnect(); }, 450);
    } catch { /* Playback remains represented by the sample transcript and highlighted step. */ }
  }
  function saveMoment() {
    const id=`moment-${Date.now()}`;
    const prior=routeStack.at(-1);
    const destination=prior === 'memories' ? 'memories' : 'today';
    const uploaded=chosenMedia.length?commitPendingMedia(chosenMedia,id):[];
    const photoIsLocal=chosenPhoto?.startsWith('blob:')&&!chosenMedia.length;
    if(photoIsLocal)localMediaUrls.set(`local-media:${id}`,chosenPhoto);
    const attachments=uploaded.length?uploaded:photoIsLocal?[{id,key:`local-media:${id}`,type:'image',name:'Family photo'}]:chosenPhoto?[{id:null,key:chosenPhoto,type:'image',name:'Sample family photo'}]:[];
    const item = { id, person:viewerName(), when:'This morning', image:attachments.find((entry)=>entry.type==='image')?.key||null, attachments, sample:!photoIsLocal&&!uploaded.length, voice:!!recording };
    const binaryPromises=[];
    if (photoIsLocal) binaryPromises.push(fetch(chosenPhoto).then((response)=>response.blob()).then((blob)=>storeBinary('photos',id,blob)));
    if (recording?.blob) {
      audioUrls.set(item.id,recording.url);
      binaryPromises.push(storeBinary('audio',id,recording.blob));
    }
    state.moments.push(item);
    if(destination==='memories')state.memoryAdditions.push(['A family photo',item.image,viewerName()]);
    persist(); chosenPhoto = null; chosenMedia.forEach((entry)=>{try{URL.revokeObjectURL(entry.url);}catch{}});chosenMedia=[]; recording = null;
    if(routeStack.length)routeStack.pop(); route=destination;render();viewContent.scrollTop=0;
    Promise.all(binaryPromises).then(()=>announce('Your moment was shared on this device.')).catch(()=>announce('This could not be saved. Try again.'));
  }
  function storeBinary(storeName,key,blob) {
    return new Promise((resolve,reject)=>{
      if(!window.indexedDB)return reject(new Error('Local media storage unavailable'));
      const request=indexedDB.open('naseej-local-media',1);
      request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains('audio'))db.createObjectStore('audio');if(!db.objectStoreNames.contains('photos'))db.createObjectStore('photos');};
      request.onerror=()=>reject(request.error);
      request.onsuccess=()=>{const db=request.result;const transaction=db.transaction(storeName,'readwrite');transaction.objectStore(storeName).put(blob,key);transaction.oncomplete=()=>resolve();transaction.onerror=()=>reject(transaction.error);};
    });
  }
  function restoreMedia() {
    if(!window.indexedDB)return;
    let request;
    try{request=indexedDB.open('naseej-local-media',1);}catch{return;}
    request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains('audio'))db.createObjectStore('audio');if(!db.objectStoreNames.contains('photos'))db.createObjectStore('photos');};
    request.onsuccess=()=>{
      const db=request.result;
      for(const item of state.moments){
        if(item.image?.startsWith('local-media:')){
          const source=item.image;const key=source.slice('local-media:'.length);const get=db.transaction('photos','readonly').objectStore('photos').get(key);
          get.onsuccess=()=>{if(get.result){localMediaUrls.set(source,URL.createObjectURL(get.result));item.sample=false;render();}};
        }
        if(item.voice){const get=db.transaction('audio','readonly').objectStore('audio').get(item.id);get.onsuccess=()=>{if(get.result){audioUrls.set(item.id,URL.createObjectURL(get.result));render();}};}
        for(const attachment of item.attachments||[]){const store=attachment.type==='audio'?'audio':'photos';const get=db.transaction(store,'readonly').objectStore(store).get(attachment.id);get.onsuccess=()=>{if(get.result){const url=URL.createObjectURL(get.result);localMediaUrls.set(attachment.key,url);if(store==='audio')audioUrls.set(attachment.id,url);render();}};}
      }
      for(const recipe of state.customRecipes||[]){
        if(recipe.photoMediaId){const source=recipe.image;const get=db.transaction('photos','readonly').objectStore('photos').get(recipe.photoMediaId);get.onsuccess=()=>{if(get.result){localMediaUrls.set(source,URL.createObjectURL(get.result));render();}};}
        for(const audioId of recipe.audioIds||[]){const get=db.transaction('audio','readonly').objectStore('audio').get(audioId);get.onsuccess=()=>{if(get.result){audioUrls.set(audioId,URL.createObjectURL(get.result));render();}};}
        for(const attachment of recipe.attachments||[]){const store=attachment.type==='audio'?'audio':'photos';const get=db.transaction(store,'readonly').objectStore(store).get(attachment.id);get.onsuccess=()=>{if(get.result){const url=URL.createObjectURL(get.result);localMediaUrls.set(attachment.key,url);if(store==='audio')audioUrls.set(attachment.id,url);render();}};}
      }
      for(const skill of state.customSkills||[])for(const set of skill.stepMedia||[])for(const attachment of set||[]){const store=attachment.type==='audio'?'audio':'photos';const get=db.transaction(store,'readonly').objectStore(store).get(attachment.id);get.onsuccess=()=>{if(get.result){const url=URL.createObjectURL(get.result);localMediaUrls.set(attachment.key,url);if(store==='audio')audioUrls.set(attachment.id,url);render();}};}
      if(state.answer?.photoMediaId){const get=db.transaction('photos','readonly').objectStore('photos').get(state.answer.photoMediaId);get.onsuccess=()=>{if(get.result){state.answer.image=URL.createObjectURL(get.result);render();}};}
      if(state.answer?.mediaId){const get=db.transaction('audio','readonly').objectStore('audio').get(state.answer.mediaId);get.onsuccess=()=>{if(get.result){state.answer.url=URL.createObjectURL(get.result);audioUrls.set(state.answer.mediaId,state.answer.url);render();}};}
    };
  }
  function setRole(role) {
    state.role = role;persist();routeStack=[];
    const receivingRole=state.senderName==='Grandma'?'Grandchild':state.senderName==='Grandson'?'Grandparent':null;
    route=state.senderConfirmed&&role===receivingRole?'receive':'home';render();
    if(showDemoControls)$('#role-switch').value=role;
  }
  function showRoleChoice(){
    state.role=null;persist();routeStack=[];route='home';
    screenRoot.hidden=true;roleScreen.hidden=false;roleScreen.scrollTop=0;
    tabBar.hidden=true;actionBar.hidden=true;backButton.hidden=true;$('#role-label').textContent='';
    if(showDemoControls)$('#role-switch').value='Grandparent';
    const brand=$('.brand');brand.classList.remove('home-brand');brand.setAttribute('aria-label','Naseej Home');brand.innerHTML=standardBrandMarkup;
    applyLanguage();
  }
  function clickAction(action, element, eventObject) {
    if(action==='audio-toggle')return toggleAudioPlayback(element.dataset.audioId);
    if(action==='audio-stop')return stopAudioPlayback(element.dataset.audioId);
    if (action === 'tab-today') return goTab('today');
    if (action === 'open-add-moment') { chosenPhoto=null;chosenMedia=[]; recording=null; return go('add-moment'); }
    if (action === 'open-add-memory') { chosenPhoto=null;chosenMedia=[]; recording=null; return go('add-moment'); }
    if (action === 'open-recipe-create') { state.recipeDraft={title:'My family recipe',ingredients:'',steps:'',media:[],recordings:[]};recording=null;return go('recipe-create'); }
    if (action === 'mark-recipe-cooked') {state.recipeCooked||={};state.recipeCooked[state.selectedRecipeId]=true;persist();return render();}
    if (action === 'toggle-recipe-cooked') {state.recipeCooked||={};delete state.recipeCooked[state.selectedRecipeId];persist();return render();}
    if (action === 'open-recipe-share') {state.recipePhotoTarget=state.selectedRecipeId;state.recipeShareDraft=[];pickerPurpose='recipe-share';go('recipe-share');$('#media-input').click();return;}
    if (action === 'open-skill-create') { state.skillDraft={title:'A family skill',description:'Share something you know.',steps:[{text:'Show the first step.',media:[]}]};return go('skill-create'); }
    if (action === 'choose-photo') { pickerPurpose='moment';$('#media-input').click(); return; }
    if (action === 'choose-recipe-photo') { pickerPurpose=route==='recipe-detail'?'recipe-share':'recipe';$('#media-input').click(); return; }
    if (action === 'choose-skill-media') {pickerPurpose=`skill-step-${element.dataset.skillStep}`;$('#media-input').click();return;}
    if (action === 'add-skill-step') {state.skillDraft.steps.push({text:'Show the next step.',media:[]});return render();}
    if (action === 'save-skill') return saveSkill();
    if (action === 'remove-pending-media') {const list=element.dataset.mediaKind==='moment'?chosenMedia:element.dataset.mediaKind==='recipe'?state.recipeDraft?.media:element.dataset.mediaKind==='recipe-share'?state.recipeShareDraft:state.skillDraft?.steps[Number(element.dataset.mediaKind.slice(11))]?.media;const [removed]=list?.splice(Number(element.dataset.mediaIndex),1)||[];if(removed?.url)URL.revokeObjectURL(removed.url);if(route==='add-moment'&&!chosenMedia.length)chosenPhoto=null;return render();}
    if (action === 'open-media') {if(route==='recipe-detail')state.selectedContentType='recipe';if(route==='skill-detail')state.selectedContentType='skill';activeMediaIndex=Number(element.dataset.mediaIndex)||0;zoomed=false;return go('media-viewer');}
    if (action === 'toggle-zoom') {zoomed=!zoomed;return render();}
    if (action === 'previous-media'||action==='next-media') {activeMediaIndex+=action==='next-media'?1:-1;zoomed=false;return render();}
    if (action === 'viewer-image') {zoomed=!zoomed;return render();}
    if (action === 'sample-photo') { chosenPhoto=photos.dayGarden;chosenMedia=[]; return render(); }
    if (action === 'share-moment') return saveMoment();
    if (action === 'save-recipe') return saveRecipe();
    if (action === 'share-recipe-photo') return shareRecipePhoto();
    if (action === 'remove-recipe-recording') {
      const takes=state.recipeDraft?.recordings||[];const index=Number(element.dataset.recordingIndex);const [take]=takes.splice(index,1);
      if(take?.url)URL.revokeObjectURL(take.url);if(take?.id)audioUrls.delete(take.id);return render();
    }
    if (action === 'toggle-recipe-step') {
      const id=state.selectedRecipeId;state.recipeChecks ||= {};state.recipeChecks[id] ||= [];
      const index=Number(element.dataset.step);const checked=state.recipeChecks[id];
      state.recipeChecks[id]=checked.includes(index)?checked.filter((item)=>item!==index):[...checked,index];
      const scrollTop=viewContent.scrollTop;persist();render();viewContent.scrollTop=scrollTop;
      $$('[data-action="toggle-recipe-step"]',viewContent).find((button)=>Number(button.dataset.step)===index)?.focus({preventScroll:true});
      return;
    }
    if (action === 'toggle-record') return toggleRecording();
    if (action === 'open-prompt') return go('prompt');
    if (action === 'open-my-day') return go('my-day');
    if (action === 'answer-voice') { recording=null; return go('answer-voice'); }
    if (action === 'answer-photos') return go('answer-photos');
    if (action.startsWith('choose-answer-photo')) {
      const files=[photos.memory,photos.gardenPath,photos.coffee,photos.recipe];
      state.answer={type:'photo',image:files[Number(element.dataset.index)]||files[0],point:null};
      return go('point-photo');
    }
    if (action === 'point-photo') {
      const rect=element.getBoundingClientRect();
      state.answer ||= {type:'photo',image:photos.memory,point:null};
      state.answer.point={x:Math.round(((eventObject.clientX-rect.left)/rect.width)*100),y:Math.round(((eventObject.clientY-rect.top)/rect.height)*100)};
      render(); return;
    }
    if (action === 'done-point') return go('confirm-send');
    if (action === 'keep-voice') {
      const mediaId=`answer-${Date.now()}`;
      state.answer={type:'voice',url:recording?.url||null,sample:!!recording?.sample,mediaId:recording?.blob?mediaId:null};
      if(recording?.blob){audioUrls.set(mediaId,recording.url);storeBinary('audio',mediaId,recording.blob).catch(()=>announce('This could not be saved. Try again.'));}
      persist();return go('confirm-send');
    }
    if (action === 'toggle-sent') {
      state.senderConfirmed=!state.senderConfirmed;
      if (state.senderConfirmed) { state.senderName=viewerName(); state.exchanges=state.exchanges.filter((x) => x.kind !== 'answer-sent'); state.exchanges.push({kind:'answer-sent',summary:`${state.senderName} shared a family photo`}); }
      else state.exchanges=state.exchanges.filter((x) => x.kind !== 'answer-sent');
      persist(); return render();
    }
    if (action === 'toggle-seen') {
      state.recipientConfirmed=!state.recipientConfirmed;
      state.exchanges=state.exchanges.filter((x) => x.kind !== 'answer-seen');
      if (state.recipientConfirmed) { state.exchanges.push({kind:'answer-seen',summary:`${viewerName()} saw ${state.senderName||'Grandma'}’s photo`}); }
      persist(); return render();
    }
    if (action === 'finish-sender') return goTab('home');
    if (action === 'finish-recipient') return goTab('home');
    if (action.startsWith('open-skill-')) { state.selectedSkill=Number(action.slice('open-skill-'.length));state.skillStep=0;state.skillFinished=false;return go('skill-detail'); }
    if (action === 'complete-skill-step') { if (state.skillStep < selectedSkill().steps.length-1) state.skillStep++; else state.skillFinished=true; persist(); return render(); }
    if (action === 'go-back') return back();
    if (action === 'noop') return;
  }
  document.addEventListener('click',(event) => {
    const roleButton=event.target.closest('[data-role]');
    if (roleButton) return setRole(roleButton.dataset.role);
    const tab=event.target.closest('[data-tab]');
    if (tab) return goTab(tab.dataset.tab);
    const recipeCard=event.target.closest('[data-recipe-card]');
    if(recipeCard&&!event.target.closest('[data-action]')){state.selectedRecipeId=recipeCard.dataset.recipeId;return go('recipe-detail');}
    const contentCard=event.target.closest('[data-content-type]');
    if(contentCard&&!event.target.closest('[data-action],button.audio-toggle,button.audio-stop,input.audio-seek,video,audio')){state.selectedContentType=contentCard.dataset.contentType;state.selectedContentId=contentCard.dataset.contentId;if(contentCard.dataset.contentType==='skill'){state.selectedSkill=Number(contentCard.dataset.contentId);state.skillStep=0;state.skillFinished=false;return go('skill-detail');}return go('content-detail');}
    const back=event.target.closest('#back-button');
    if (back) return;
    const confirm=event.target.closest('[data-action="toggle-sent"],[data-action="toggle-seen"]');
    if (confirm) return clickAction(confirm.dataset.action,confirm,event);
    const actionEl=event.target.closest('[data-action]');
    if (actionEl) return clickAction(actionEl.dataset.action,actionEl,event);
  });
  document.addEventListener('keydown',(event)=>{
    const card=event.target.closest('[data-recipe-card],[data-content-type]');
    if(card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();if(card.dataset.recipeCard!==undefined){state.selectedRecipeId=card.dataset.recipeId;go('recipe-detail');}else{state.selectedContentType=card.dataset.contentType;state.selectedContentId=card.dataset.contentId;if(card.dataset.contentType==='skill'){state.selectedSkill=Number(card.dataset.contentId);state.skillStep=0;state.skillFinished=false;go('skill-detail');}else go('content-detail');}}
  });
  $('#media-input').addEventListener('change',(event) => {
    const files=[...(event.target.files||[])];if(!files.length)return;
    if(route==='answer-photos'){
      const file=files.find((entry)=>entry.type.startsWith('image/'));if(!file){event.target.value='';return;}
      const mediaId=`answer-photo-${Date.now()}`;
      state.answer={type:'photo',image:URL.createObjectURL(file),photoMediaId:mediaId,point:null};
      storeBinary('photos',mediaId,file).catch(()=>{});
      go('point-photo');
      event.target.value='';return;
    }
    addSelectedFiles(files,pickerPurpose);event.target.value='';
  });
  document.addEventListener('input',(event)=>{const slider=event.target.closest('[data-audio-seek]');if(slider)seekAudio(slider.dataset.audioSeek,slider.value);});
  backButton.addEventListener('click',back);
  $('#role-switch')?.addEventListener('change',(event)=>{if(window.naseejPreviewVersion==='v1')setRole(event.target.value);});
  $('#language-toggle')?.addEventListener('click',()=>{language=language==='ar'?'en':'ar';try{localStorage.setItem(languageKey,language);}catch{}applyLanguage();});
  $('#show-role-choice')?.addEventListener('click',()=>{if(window.naseejPreviewVersion==='v1')showRoleChoice();});
  $('#reset-demo')?.addEventListener('click',()=>{if(window.naseejPreviewVersion!=='v1')return;localStorage.removeItem(storageKey);state=defaultState();routeStack=[];route='home';chosenPhoto=null;chosenMedia=[];recording=null;audioUrls.clear();localMediaUrls.clear();try{window.indexedDB?.deleteDatabase('naseej-local-media');}catch{}showRoleChoice();announce('The local demonstration has been reset.');});
  document.addEventListener('touchstart',(event)=>{if(route==='media-viewer'&&event.touches.length===2)pinchStart=Math.hypot(event.touches[0].clientX-event.touches[1].clientX,event.touches[0].clientY-event.touches[1].clientY);},{passive:true});
  document.addEventListener('touchmove',(event)=>{if(route==='media-viewer'&&pinchStart&&event.touches.length===2){const distance=Math.hypot(event.touches[0].clientX-event.touches[1].clientX,event.touches[0].clientY-event.touches[1].clientY);if(Math.abs(distance-pinchStart)>20){zoomed=distance>pinchStart;const image=$('.viewer-image');if(image)image.classList.toggle('is-zoomed',zoomed);pinchStart=distance;}}},{passive:true});
  document.addEventListener('touchend',(event)=>{if(route!=='media-viewer')return;if(pinchStart&&event.touches.length<2)pinchStart=0;const touch=event.changedTouches[0];if(!touch)return;const start=window.__naseejTouchStart;if(start&&Math.abs(touch.clientX-start.x)>65&&Math.abs(touch.clientY-start.y)<80){const action=touch.clientX<start.x?'next-media':'previous-media';clickAction(action,{dataset:{}});}}, {passive:true});
  document.addEventListener('touchstart',(event)=>{if(route==='media-viewer'&&event.touches.length===1)window.__naseejTouchStart={x:event.touches[0].clientX,y:event.touches[0].clientY};},{passive:true});
  if(showDemoControls){$('#demo-tools').hidden=false;$('#show-role-choice').hidden=innerWidth<1000;if(demoMode&&!state.role)state.role='Grandparent';$('#role-switch').value=state.role||'Grandparent';}
  restoreMedia();
  if(!state.role){roleScreen.hidden=false;screenRoot.hidden=true;tabBar.hidden=true;backButton.hidden=true;$('#role-label').textContent='';}
  else render();
  applyLanguage();
  roleScreen.scrollTop=0;
  function fitPhonePreview(){
    if(innerWidth<700){document.documentElement.style.removeProperty('--phone-scale');return;}
    const scale=Math.min((innerWidth-32)/390,(innerHeight-32)/884,1);
    document.documentElement.style.setProperty('--phone-scale',String(Math.max(.1,scale)));
  }
  fitPhonePreview();
  window.addEventListener('resize',fitPhonePreview,{passive:true});
})();
