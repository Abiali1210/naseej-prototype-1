# Naseej Prototype 1

**Live app:** <https://abiali1210.github.io/naseej-prototype-1/>

A self-contained, offline-capable family app prototype for grandparents and grandchildren. It uses vanilla HTML, CSS and JavaScript, local starter assets and no build step, framework, package manager, server requirement or internet connection.

## Open the prototype

Unzip the folder and open `index.html` in a current Chrome, Edge, Firefox or Safari browser. Keep `assets/` beside the HTML file.

On desktop, the app is a centered **390×884** phone canvas, uniformly scaled to fit the browser window. On narrow screens it fills the viewport. Use the **عربي / English** toggle in the top-right of the app header to change language; Arabic switches the interface to right-to-left. The choice is remembered in that browser. The demonstration role selector and reset controls sit outside the app; desktop shows them automatically. Add `?demo=1` to the address to show the controls on a narrow screen. The role switch simulates a family using one browser; it does not sync between devices.

Microphone recording works when the browser permits `getUserMedia` for the opened file. If the browser blocks file-origin microphone access, a local server is an optional fallback:

```bash
python3 -m http.server 4173
```

Open <http://localhost:4173/>. No server is needed for the rest of the app.

## Current interactions

- **Home, Today and Memories:** tap or keyboard-activate a moment/story card to open its detail. The Today card's audio controls play separately from card navigation.
- **Media details:** image attachments open the full-screen viewer with Previous/Next and a small magnifier control. Swipe navigation is supported in that viewer. Videos play inline with browser controls. Voice notes and audio attachments use the shared audio player.
- **Add a moment:** select multiple photos, videos and audio attachments; remove items before sharing; optionally record a voice note. Saved moments appear in Today and can be browsed in detail.
- **Skills:** open a lesson and complete steps one at a time. Add a skill with an editable prefilled name, short description, multiple steps and optional photo/audio/video attachments per step. Each displayed step presents its media with its instruction.
- **Recipes:** open a recipe for its ingredients and toggleable step checklist. Mark it as cooked; then add finished-dish media, review it, and explicitly share it with family. The shared item is added to Today and Memories. When adding a recipe, written ingredients and steps are optional if a voice recording is attached; a voice recording can be the whole recipe.
- **Answer journey:** open the prompt, answer with a voice recording or a saved photo, optionally point at the photo, and confirm on both sides. The role selector simulates the second person on the same device.

Sample family stories, recipes, lesson text and generated/sample narration are synthetic demonstration content, not real family accounts or recordings.

## Local data and browser APIs

Role, user-created item metadata, recipe checklist state, cooked state and lesson state are saved in `localStorage`. User-selected binary media is stored in the browser's IndexedDB database (`naseej-local-media`) and shown from local object URLs. This browser data is **not** copied when the project folder is shared or unzipped elsewhere. There is no cloud service or cross-device sync.

The app uses browser-native file inputs, `localStorage`, IndexedDB, `URL.createObjectURL`, HTML video controls, `MediaRecorder`/`getUserMedia`, `speechSynthesis` and (where available) Web Audio for narration. No added JavaScript libraries or network services are required. Nunito Sans, the DejaVu Sans Arabic font and image assets are bundled locally; Stitch exports are references only and are not loaded at runtime.

## Known limits and next user test

- Microphone access and user-media storage depend on browser permissions and the local browser profile. Those technical paths are not part of the current usability focus; localhost is the optional microphone fallback.
- The role switch is a same-device simulation. A high-contrast theme and cloud family sharing are not implemented.
- Fixed interface labels support English and Arabic, with RTL layout. User-entered family titles, descriptions and step text remain in the language the family entered them.
- Sample stories, sample recipes, sample lessons and sample narration must remain identified as synthetic.

For round 1, test one grandparent and one grandchild separately first, then together. Focus on whether they can find and understand a family moment without help, whether the grandparent can follow a recipe and understand “Mark as cooked,” and whether they understand where a finished-dish share appears. Record hesitation and their own words; use the results to set the next prototype changes before round 2.
