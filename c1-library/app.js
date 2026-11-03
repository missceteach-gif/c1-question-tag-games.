(function setupC1(){
"use strict";
const data=window.GAME_DATA;
const units=data.units, writing=data.writing;
const root=document.getElementById("app");
const state={view:"home",unitId:1,writingId:"proposal",quiz:[],quizType:"vocab",index:0,score:0,answered:null,matchItems:[],matchDefinitions:[],matchWords:[],matchSelected:null,matched:new Set(),matchNote:"",speakingCards:[],speakIndex:0,support:false,flash:[],flashIndex:0,flashOpen:false,writingAnswers:{},draft:"",checklist:new Set(),toast:""};
const e=s=>String(s===undefined||s===null?"":s).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const random=arr=>{let a=arr.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const unit=()=>units.find(u=>u.id===state.unitId)||units[0];
const writingItem=()=>writing.find(w=>w.id===state.writingId)||writing[0];
const countWords=s=>(s.trim().match(/\b[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu)||[]).length;
const nav=`<header class="topbar"><div class="wrap nav"><button class="brand" data-action="home" aria-label="C1.2 Games Home"><span class="brand-mark">✨</span><span><strong>C1.2 GAME LAB</strong><small>MISS C · LEARN • PLAY • SPEAK</small></span></button><nav class="navlinks" aria-label="Main"><button data-action="home">🏠 Units</button><button data-action="writingList">✍️ Writing</button><button data-action="homophones">🔊 Homophones</button><button data-action="roulette">🎲 Mix it up</button></nav></div></header>`;
function layout(html){root.innerHTML=nav+`<main class="wrap" id="content">${html}</main>`+`<footer class="footer"><div class="wrap">C1.2 Game Lab · Original interactive practice adapted from the course vocabulary and grammar topics. No login, timer or student data submission. Made for adult learners. 💜</div></footer>`;const t=document.getElementById("draft");if(t)t.value=state.draft;}
function go(view,id){
 state.view=view;
 if(view==="unit"){state.unitId=Number(id||state.unitId);window.location.hash="unit-"+state.unitId;}
 else if(view==="writing"){window.location.hash="writing";}
 else if(view==="write"){state.writingId=String(id||"proposal");state.draft="";state.writingAnswers={};state.checklist=new Set();state.toast="";window.location.hash="write-"+state.writingId;}
 else if(view==="home"){window.location.hash="home";}
 render();window.scrollTo({top:0,behavior:"instant"});
}
function renderHome(){
const cards=units.map(u=>`<article class="unit-card"><div class="card-icon">${u.icon}</div><div class="eyebrow">UNIT ${u.id}</div><h3>${e(u.title)}</h3><p>${e(u.subtitle)}</p><div class="pills"><span class="pill peach">${u.vocab.length} words</span><span class="pill mint">${u.grammar.length} grammar</span></div><button class="btn" data-action="unit" data-id="${u.id}">Open this unit →</button></article>`).join("");
layout(`<section class="hero"><div><span class="eyebrow">ENGLISH C1.2 · INTERACTIVE REVISION</span><h1>Serious English.<br>Ridiculously fun practice. 💜</h1><p>Pick a unit. Learn real C1 vocabulary, crack grammar traps, and talk through entertaining situations. Big text, instant feedback, and no countdown clocks.</p><div class="row" style="margin-top:22px"><button class="btn accent" data-action="roulette">🎲 Surprise me</button><button class="btn secondary" data-action="writingList">✍️ Writing studio</button></div></div><div class="hero-emoji" aria-hidden="true">🎮</div></section><div class="feature-row"><div class="feature-card"><strong>🎯 Self-correcting</strong><p>Explanations after every vocabulary or grammar answer.</p></div><div class="feature-card"><strong>🗣️ Actual speaking</strong><p>Guided pair tasks — no writing required.</p></div><div class="feature-card"><strong>📱 Made for phones</strong><p>Large, readable cards you can practise anywhere.</p></div></div><div class="section-title"><h2>Choose your unit</h2><small>10 themes · C1.2</small></div><div class="unit-grid">${cards}</div><div class="section-title"><h2>Beyond the units</h2></div><div class="mode-grid"><div class="mode-card"><div class="card-icon">✍️</div><h3>Writing studio</h3><p>Essay, report, proposal, review, emails, letters, and mediation. Guides, useful phrases, practice and mini-checks.</p><button class="btn" data-action="writingList">Open writing studio</button></div><div class="mode-card"><div class="card-icon">🔊</div><h3>Homophone showdown</h3><p>Spot C1 sound-alikes in context: complement/compliment, ascent/assent and more.</p><button class="btn" data-action="homophones">Play homophones</button></div></div>`);
}
function modeCard(icon,title,desc,mode){return `<article class="mode-card"><div class="card-icon">${icon}</div><h3>${title}</h3><p>${desc}</p><button class="btn" data-action="launch" data-mode="${mode}">Let's play →</button></article>`;}
function renderUnit(){
const u=unit();layout(`<div class="breadcrumbs"><button class="back" data-action="home">← All units</button><span class="tiny">Unit ${u.id}</span></div><section class="unit-hero"><div class="big">${u.icon}</div><span class="eyebrow">UNIT ${u.id} • C1.2</span><h1>${e(u.title)}</h1><p>${e(u.subtitle)}. Pick a game and start practising. Each game works alone or with a partner.</p><div class="pills"><span class="pill peach">${u.vocab.length} target expressions</span><span class="pill">${u.grammar.length} grammar traps</span><span class="pill mint">${u.speaking.length} speaking missions</span></div></section><h2>Pick your mission ✨</h2><div class="mode-grid">${modeCard("🕵️","Word Hunt","Read a definition and find the right advanced expression. Instant corrections.", "vocab")}${modeCard("🧩","Match Maker","Match five C1 expressions to their meanings. Tap once on each side.","match")}${modeCard("🧠","Grammar Escape","Choose the correct form; see the real rule even when you're wrong.","grammar")}${modeCard("🎤","Speak & Swap","Funny but clear partner scenarios, with target words and a sentence starter.","speaking")}${modeCard("🃏","Memory Flip","See the target phrase, predict its meaning, then reveal the answer.","flash")}${u.id===3?modeCard("🔊","Homophone Showdown","Test those tricky C1 sound-alikes in full sentences.","homophones"):""}</div><p class="fineprint" style="margin-top:24px">Speaking missions: work in pairs or small groups. No written answers, timer or student names needed.</p>`);
}
function vocabQuiz(u){
return random(u.vocab).slice(0,Math.min(10,u.vocab.length)).map(([term,definition,example])=>{
let distractors=random(u.vocab.filter(x=>x[0]!==term)).slice(0,3).map(x=>x[0]);let opts=random([term,...distractors]);return {q:"Which expression means: "+definition,options:opts,a:opts.indexOf(term),why:"“"+term+"” means "+definition,extra:example,tag:"VOCABULARY · UNIT "+u.id};
});
}
function grammarQuiz(u){return random(u.grammar).map(x=>{let shuffled=random(x.options.map((option,i)=>({text:option,original:i})));return{q:x.q,options:shuffled.map(a=>a.text),a:shuffled.findIndex(a=>a.original===x.a),why:x.why,extra:"",tag:"GRAMMAR · UNIT "+u.id};});}
const homophones=[
["She walked down the ___ to her seat.","aisle","I'll","An aisle is a passage between rows of seats."],
["The committee gave its ___ to the proposal.","assent","ascent","Assent means agreement; ascent means an upward climb."],
["What a lovely ___ about my presentation!","compliment","complement","Compliment = praise; complement = make something complete."],
["A new motion ___ triggered the alarm.","sensor","censor","A sensor detects changes; a censor removes material."],
["After speaking for three hours, her voice was ___.","hoarse","horse","Hoarse means rough-sounding; a horse is an animal."],
["We haven't decided ___ to attend the meeting.","whether","weather","Whether introduces alternatives or uncertainty."],
["The queen's ___ lasted four decades.","reign","rein","Reign = time in power; rein = strap for controlling a horse."],
["Don't ___ money on a useless subscription.","waste","waist","Waste = use carelessly; waist = part of the body."],
["The baker had to ___ the dough for ten minutes.","knead","need","Knead means work dough with your hands."],
["The mountain ___ took almost six hours.","ascent","assent","Ascent means the act of climbing upward."],
["The editor refused to ___ the article.","censor","sensor","Censor means remove or suppress content."],
["The blue jacket perfectly ___ the trousers.","complements","compliments","Complement = go well with or complete; compliment = praise."]
];
function homophoneQuiz(){return random(homophones).map(([q,correct,wrong,why])=>{const opts=random([correct,wrong]);return {q,options:opts,a:opts.indexOf(correct),why,extra:"",tag:"C1 HOMOPHONES"};});}
function startQuiz(type){
 state.quizType=type;state.index=0;state.score=0;state.answered=null;
 if(type==="vocab")state.quiz=vocabQuiz(unit());
 else if(type==="grammar")state.quiz=grammarQuiz(unit());
 else if(type==="homophones")state.quiz=homophoneQuiz();
 else if(type==="roulette"){const all=units.flatMap(u=>[...vocabQuiz(u).slice(0,3),...grammarQuiz(u).slice(0,3)]);state.quiz=random(all).slice(0,20);}
 state.view="quiz";render();window.scrollTo({top:0,behavior:"instant"});
}
function renderQuiz(){
let title={vocab:"Word Hunt 🕵️",grammar:"Grammar Escape 🧠",homophones:"Homophone Showdown 🔊",roulette:"Mixed Revision Roulette 🎲"}[state.quizType];
const total=state.quiz.length;
if(state.index>=total){
const pct=Math.round(state.score/Math.max(1,total)*100);layout(`<div class="game-shell"><button class="back" data-action="${state.quizType==="roulette"||state.quizType==="homophones"?"home":"unitBack"}">← Back</button><div class="game-card finish"><div class="trophy">${pct>=80?"🏆":pct>=50?"🎉":"💪"}</div><span class="eyebrow">MISSION COMPLETE</span><h1>${state.score} / ${total}</h1><h2>${pct>=80?"C1 champion!":pct>=50?"You're getting there!":"Practice makes progress."}</h2><p>You can replay with shuffled questions, or choose another skill. Keep an eye on the explanations — they're the real learning.</p><div class="row" style="justify-content:center;margin-top:25px"><button class="btn accent" data-action="retry">🔁 Play again</button><button class="btn secondary" data-action="${state.quizType==="roulette"||state.quizType==="homophones"?"home":"unitBack"}">Choose another game</button></div></div></div>`);return;
}
const q=state.quiz[state.index],done=state.answered!==null,correct=done&&state.answered===q.a;
const opts=q.options.map((o,i)=>`<button class="option ${done?(i===q.a?"correct":i===state.answered?"wrong":""):""}" data-action="answer" data-index="${i}" ${done?"disabled":""}>${e(o)}</button>`).join("");
layout(`<div class="game-shell"><button class="back" data-action="${state.quizType==="roulette"||state.quizType==="homophones"?"home":"unitBack"}">← Back to ${state.quizType==="roulette"||state.quizType==="homophones"?"home":"unit"}</button><div class="game-card"><div class="game-top"><span class="counter">QUESTION ${state.index+1} OF ${total}</span><span class="score">⭐ ${state.score} points</span></div><div class="progress" role="progressbar" aria-label="Game progress" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${state.index}"><div style="width:${Math.round(state.index/total*100)}%"></div></div><p class="eyebrow" style="margin-top:26px">${e(q.tag)}</p><h1 class="question">${e(q.q)}</h1><div class="options">${opts}</div>${done?`<div class="feedback ${correct?"good":"bad"}" role="status"><strong>${correct?"✅ Exactly!":"💡 Not quite — here's why"}</strong><p>${e(q.why)}</p>${q.extra?`<p><em>In context:</em> ${e(q.extra)}</p>`:""}</div><div class="next-row"><button class="btn accent" data-action="nextQuestion">${state.index===total-1?"See my result 🏁":"Next challenge →"}</button></div>`:`<p class="fineprint">Tap one answer to check it. You'll always see a short explanation.</p>`}</div></div>`);
}
function startMatch(){
const items=random(unit().vocab).slice(0,5).map((v,i)=>({id:i,word:v[0],def:v[1]}));
state.matchItems=items;state.matchDefinitions=random(items);state.matchWords=random(items);state.matchSelected=null;state.matched=new Set();state.matchNote="";state.view="match";render();window.scrollTo({top:0,behavior:"instant"});
}
function renderMatch(){
const total=state.matchItems.length;const done=state.matched.size===total;
const choices=(items,side)=>items.map(v=>{let found=state.matched.has(v.id),selected=state.matchSelected&&state.matchSelected.id===v.id&&state.matchSelected.side===side;return `<button class="match-btn ${found?"matched":selected?"selected":""}" data-action="matchChoice" data-side="${side}" data-id="${v.id}" ${found?"disabled":""}>${e(side==="def"?v.def:v.word)}${found?" ✓":""}</button>`;}).join("");
layout(`<div class="game-shell"><button class="back" data-action="unitBack">← Back to unit</button><div class="game-card"><div class="game-top"><span class="eyebrow">MATCH MAKER 🧩</span><span class="score">${state.matched.size} / ${total} pairs</span></div><h1>Find their match</h1><p class="sub">Tap a definition on the left and its expression on the right. Wrong matches can be retried without penalty.</p><div class="progress"><div style="width:${Math.round(state.matched.size/total*100)}%"></div></div><div class="match-grid"><div class="match-col"><h3>MEANINGS</h3>${choices(state.matchDefinitions,"def")}</div><div class="match-col"><h3>EXPRESSIONS</h3>${choices(state.matchWords,"word")}</div></div>${state.matchNote?`<div class="feedback ${done?"good":""}" role="status">${e(state.matchNote)}</div>`:""}${done?`<div class="next-row"><button class="btn accent" data-action="match">🔁 New set</button><button class="btn secondary" data-action="unitBack">Other games</button></div>`:`<div class="row"><button class="btn small secondary" data-action="match">Shuffle new cards</button></div>`}</div></div>`);
}
function handleMatch(side,id){
if(state.matched.has(id))return;
const current={side,id};
if(!state.matchSelected||state.matchSelected.side===side){state.matchSelected=current;state.matchNote="";render();return;}
if(state.matchSelected.id===id){state.matched.add(id);state.matchNote=state.matched.size===state.matchItems.length?"🎉 All five matched! Great work.":"✅ You found a pair!";}
else state.matchNote="❌ Not this one — check the meaning and try again.";
state.matchSelected=null;render();
}
function startSpeak(){state.speakingCards=random(unit().speaking);state.speakIndex=0;state.support=false;state.view="speak";render();window.scrollTo({top:0,behavior:"instant"});}
function renderSpeak(){
let c=state.speakingCards[state.speakIndex],num=state.speakIndex+1,total=state.speakingCards.length;
layout(`<div class="game-shell"><button class="back" data-action="unitBack">← Back to unit</button><div class="game-card"><div class="game-top"><span class="eyebrow">SPEAK & SWAP 🎤</span><span class="counter">CARD ${num} / ${total}</span></div><h1>Talk it out!</h1><p class="sub">Work with a partner or small group. Explain, disagree, negotiate or persuade. Aim for 60–90 seconds each, then swap roles naturally.</p><div class="speak-card"><div class="speak-title">${e(c.title)}</div><p class="speak-prompt">${e(c.prompt)}</p><div class="eyebrow">TRY TO USE</div><div class="pills">${c.targets.map(t=>`<span class="pill mint">${e(t)}</span>`).join("")}</div></div>${state.support?`<div class="support"><strong>💡 You could start with:</strong><div style="margin-top:7px">${e(c.starter)}</div></div>`:""}<div class="row"><button class="btn secondary" data-action="toggleSupport">${state.support?"Hide starter":"💡 Give me a starter"}</button><button class="btn accent" data-action="nextSpeak">${num===total?"Shuffle again 🔀":"Next speaking card →"}</button></div><p class="fineprint">Speaking only — no sentence writing or microphone needed.</p></div></div>`);
}
function startFlash(){state.flash=random(unit().vocab);state.flashIndex=0;state.flashOpen=false;state.view="flash";render();window.scrollTo({top:0,behavior:"instant"});}
function renderFlash(){
const cards=state.flash;const i=state.flashIndex;
if(i>=cards.length){layout(`<div class="game-shell"><button class="back" data-action="unitBack">← Unit</button><div class="game-card finish"><div class="trophy">🃏</div><h1>You've seen all ${cards.length} expressions!</h1><p>Try Word Hunt next to test whether you can recognise the meanings.</p><div class="row" style="justify-content:center"><button class="btn accent" data-action="launch" data-mode="vocab">Try Word Hunt →</button><button class="btn secondary" data-action="flash">Shuffle again</button></div></div></div>`);return;}
const v=cards[i];
layout(`<div class="game-shell"><button class="back" data-action="unitBack">← Back to unit</button><div class="game-card"><div class="game-top"><span class="eyebrow">MEMORY FLIP 🃏</span><span class="counter">${i+1} / ${cards.length}</span></div><div class="progress"><div style="width:${Math.round(i/cards.length*100)}%"></div></div><p class="sub" style="margin-top:20px">Say the meaning aloud before revealing it.</p><div class="speak-card"><p class="eyebrow">WHAT DOES THIS MEAN?</p><h1 style="font-size:clamp(30px,5vw,48px);margin:18px 0">${e(v[0])}</h1>${state.flashOpen?`<div class="support"><strong>✅ Meaning</strong><p>${e(v[1])}</p><strong>In context</strong><p>${e(v[2])}</p></div>`:""}</div><div class="row">${!state.flashOpen?`<button class="btn accent" data-action="flip">Reveal the meaning 👀</button>`:`<button class="btn accent" data-action="nextFlash">${i===cards.length-1?"Finish 🏁":"Next card →"}</button>`}</div></div></div>`);
}
function renderWritingList(){
layout(`<div class="breadcrumbs"><button class="back" data-action="home">← Home</button></div><section class="unit-hero"><div class="big">✍️</div><span class="eyebrow">C1.2 WRITING STUDIO</span><h1>Write like a C1 pro.</h1><p>Choose a text type to explore its purpose, paragraph map, useful expressions, common mistakes and guided practice. No automated essay grading or made-up marks.</p></section><div class="writing-grid">${writing.map(w=>`<article class="writing-card"><div class="card-icon">${w.icon}</div><h3>${e(w.title)}</h3><p>${e(w.goal)}</p><div class="pills"><span class="pill peach">${e(w.register)}</span></div><button class="btn" data-action="write" data-id="${e(w.id)}">Practise this type →</button></article>`).join("")}</div>`);
}
function renderWriting(){
const w=writingItem();
const checks=w.checks.map((g,i)=>{
const selected=state.writingAnswers[i];const wasAnswered=selected!==undefined;
return `<section class="miniquiz"><span class="eyebrow">QUICK CHECK ${i+1}</span><h3>${e(g.q)}</h3><div class="mini-options">${g.options.map((o,j)=>`<button data-action="writingAnswer" data-question="${i}" data-index="${j}" ${wasAnswered?"disabled":""} class="${wasAnswered?(j===g.a?"correct":j===selected?"wrong":""):""}">${e(o)}</button>`).join("")}</div>${wasAnswered?`<p class="mini-answer"><strong>${selected===g.a?"✅ Correct!":"💡 The better answer is highlighted."}</strong> ${e(g.why)}</p>`:""}</section>`;
}).join("");
const list=["I have addressed every point in the task.","My register matches the audience.","My paragraphs follow a clear purpose and sequence.","I have checked grammar, collocations and punctuation."];
layout(`<div class="breadcrumbs"><button class="back" data-action="writingList">← All writing types</button><span class="tiny">${e(w.title)}</span></div><section class="unit-hero"><div class="big">${w.icon}</div><span class="eyebrow">C1.2 WRITING</span><h1>${e(w.title)}</h1><p><strong>${e(w.register)}</strong> · ${e(w.goal)}</p></section><div class="writing-detail"><div><section class="writing-panel"><h2>1. Your paragraph map 🧭</h2><ol class="steps">${w.structure.map(s=>`<li>${e(s)}</li>`).join("")}</ol></section><section class="writing-panel"><h2>2. Your exam-style mission 🎯</h2><div class="task"><strong>THE TASK</strong><p>${e(w.task)}</p></div><p class="warning"><strong>⚠️ Common trap:</strong> ${e(w.pitfall)}</p></section><section class="writing-panel writing-work"><h2>3. Give it a go ✍️</h2><p class="sub">Draft here if you wish. Your text stays in this browser tab — it is not submitted, stored in a teacher database or automatically marked.</p><label class="eyebrow" for="draft">YOUR DRAFT</label><textarea id="draft" placeholder="Write your opening and build your text here…" spellcheck="true"></textarea><div class="counterline"><span id="wordCount">${countWords(state.draft)} words</span><span>Follow your exam task's word limit</span></div><div class="row"><button class="btn secondary" data-action="copyDraft">📋 Copy my draft</button><button class="btn secondary" data-action="clearDraft">Clear</button></div>${state.toast?`<p class="feedback" role="status">${e(state.toast)}</p>`:""}</section></div><div><section class="writing-panel"><h2>Useful C1 language 💎</h2><ul class="phrase-list">${w.phrases.map(p=>`<li><strong>${e(p)}</strong></li>`).join("")}</ul></section><section class="writing-panel"><h2>Spot the best choice 🧠</h2><p class="sub">Two short checks to test genre and register.</p>${checks}</section><section class="writing-panel"><h2>My final checklist ✅</h2><div class="checklist">${list.map((t,i)=>`<label><input type="checkbox" data-check="${i}" ${state.checklist.has(i)?"checked":""}>${e(t)}</label>`).join("")}</div></section></div></div>`);
const ta=document.getElementById("draft");if(ta)ta.value=state.draft;
}
function render(){
if(state.view==="home")renderHome();
else if(state.view==="unit")renderUnit();
else if(state.view==="quiz")renderQuiz();
else if(state.view==="match")renderMatch();
else if(state.view==="speak")renderSpeak();
else if(state.view==="flash")renderFlash();
else if(state.view==="writing")renderWritingList();
else if(state.view==="write")renderWriting();
}
root.addEventListener("click",async ev=>{
const target=ev.target.closest("[data-action]");
if(!target)return;
const a=target.dataset.action, id=target.dataset.id;
if(a==="home")go("home");
else if(a==="unit")go("unit",id);
else if(a==="unitBack")go("unit",state.unitId);
else if(a==="writingList")go("writing");
else if(a==="write")go("write",id);
else if(a==="homophones")startQuiz("homophones");
else if(a==="roulette")startQuiz("roulette");
else if(a==="launch"){
const mode=target.dataset.mode;
if(["vocab","grammar","homophones"].includes(mode))startQuiz(mode);
else if(mode==="match")startMatch();
else if(mode==="speaking")startSpeak();
else if(mode==="flash")startFlash();
}
else if(a==="answer"){
if(state.answered!==null)return;state.answered=Number(target.dataset.index);if(state.answered===state.quiz[state.index].a)state.score++;render();
}
else if(a==="nextQuestion"){state.index++;state.answered=null;render();window.scrollTo({top:0,behavior:"instant"});}
else if(a==="retry")startQuiz(state.quizType);
else if(a==="match")startMatch();
else if(a==="matchChoice")handleMatch(target.dataset.side,Number(target.dataset.id));
else if(a==="toggleSupport"){state.support=!state.support;render();}
else if(a==="nextSpeak"){state.speakIndex++;if(state.speakIndex>=state.speakingCards.length){state.speakingCards=random(unit().speaking);state.speakIndex=0;}state.support=false;render();}
else if(a==="flip"){state.flashOpen=true;render();}
else if(a==="nextFlash"){state.flashIndex++;state.flashOpen=false;render();}
else if(a==="flash")startFlash();
else if(a==="writingAnswer"){const q=Number(target.dataset.question);if(state.writingAnswers[q]!==undefined)return;state.writingAnswers[q]=Number(target.dataset.index);render();}
else if(a==="copyDraft"){
if(!state.draft.trim()){state.toast="Write something first, then copy it.";render();return;}
try{await navigator.clipboard.writeText(state.draft);state.toast="✅ Copied! You can paste it into your own document.";}catch(err){state.toast="Clipboard access wasn't available. Select your draft and copy it manually.";}
render();
}
else if(a==="clearDraft"){state.draft="";state.toast="Draft cleared.";render();}
});
root.addEventListener("input",ev=>{if(ev.target.id==="draft"){state.draft=ev.target.value;const el=document.getElementById("wordCount");if(el)el.textContent=countWords(state.draft)+" words";}});
root.addEventListener("change",ev=>{if(ev.target.matches("[data-check]")){const i=Number(ev.target.dataset.check);if(ev.target.checked)state.checklist.add(i);else state.checklist.delete(i);}});
window.addEventListener("hashchange",()=>{
const h=decodeURIComponent(window.location.hash.slice(1));
if(/^unit-\d+$/.test(h)){state.unitId=Number(h.split("-")[1]);state.view="unit";render();}
else if(h==="home"||h===""){state.view="home";render();}
else if(h==="writing"){state.view="writing";render();}
else if(h.startsWith("write-")){const id=h.substring(6);if(writing.some(w=>w.id===id)){state.writingId=id;state.view="write";render();}}
});
const initial=decodeURIComponent(window.location.hash.slice(1));
if(/^unit-\d+$/.test(initial)){state.unitId=Number(initial.split("-")[1]);state.view="unit";}
else if(initial==="writing")state.view="writing";
else if(initial.startsWith("write-")&&writing.some(w=>w.id===initial.substring(6))){state.writingId=initial.substring(6);state.view="write";}
render();
})();
