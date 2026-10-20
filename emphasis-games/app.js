
(()=>{'use strict';
const DATA=window.C1_CASES||[];
const GRAMMAR={
 asked:{label:'WHAT-CLEFT',stem:'What I specifically asked for was…',example:'What I asked for was a seat near the window.',rule:'Focus attention on exactly what you requested.'},
 understand:{label:'WHAT-CLEFT',stem:'What you need to understand is that…',example:'What you need to understand is that the museum closes at six.',rule:'Put your explanation or defence in focus.'},
 special:{label:'WHAT-CLEFT',stem:'What makes this so special is…',example:'What makes our club special is the friendly atmosphere.',rule:'Follow with a noun phrase or a that-clause.'},
 need:{label:'WHAT-CLEFT',stem:'What I actually need is…',example:'What I need is a quiet place to concentrate.',rule:'Explain what matters to you rather than what is being offered.'},
 itWas:{label:'IT-CLEFT',stem:'It was … that …',example:'It was the unexpected delay that ruined the trip.',rule:'Put the detail you want to emphasise after was; complete the that-clause.'},
 itNot:{label:'CONTRASTIVE IT-CLEFT',stem:"It isn't / wasn't … that bothers / bothered me; it's / it was …",example:"It wasn't the noise that upset me; it was the lack of warning.",rule:'Contrast the less important issue with the real problem.'},
 did:{label:'EMPHATIC DID',stem:'I DID …',example:'I DID check the opening hours before leaving.',rule:'After DID, use the base form of the verb (check, ask, explain).'},
 weDo:{label:'EMPHATIC DO',stem:'We DO …',example:'We DO take customer feedback seriously.',rule:'After DO, use the base form of the verb (understand, care, offer).'},
 does:{label:'EMPHATIC DOES',stem:'It DOES …',example:'The device DOES make a difference.',rule:'After DOES, use a base verb (work, help, save), not -s.'},
 neg:{label:'EMPHATIC NEGATIVE',stem:"I'm not the slightest bit …",example:"I'm not the slightest bit worried about tomorrow's test.",rule:'Complete with an adjective or participle: impressed, convinced, happy.'},
 ever:{label:'EMPHATIC -EVER',stem:'Whatever made you think …?',example:'Whatever made you think I enjoy getting up at five?',rule:'Question an assumption. Follow with a full clause.'},
 repeated:{label:'REPETITION FOR EMPHASIS',stem:'I tried and tried to …, but …',example:'I tried and tried to explain the rules, but nobody listened.',rule:'Use repeated words to emphasise persistence or frustration.'},
 allWant:{label:'ALL-CLEFT',stem:'All I want is …',example:'All I want is a little peace and quiet.',rule:'Highlight your one essential demand.'},
 allOffer:{label:'ALL-CLEFT',stem:'All I can offer is …',example:'All I can offer is a replacement ticket.',rule:'Introduce the most you are able to provide.'},
 allNeed:{label:'ALL-CLEFT',stem:'All you have to do is …',example:'All you have to do is press this button.',rule:'Follow is with a base verb such as press, contact, check.'},
 own:{label:'OWN / VERY OWN',stem:'With your very own …, you could …',example:'With your very own studio, you could practise whenever you liked.',rule:'Emphasise that something belongs personally or exclusively to someone.'},
 very:{label:'VERY + NOUN',stem:'The very …',example:'The very reason I came was to speak to you.',rule:'Continue with an emphasised noun such as reason, moment, detail or thing.'}
};
const state={game:'service',id:1,role:'a'};
const p=new URLSearchParams(location.search);
if(p.get('g')==='sales')state.game='sales';
const wanted=parseInt(p.get('n'),10);if(Number.isInteger(wanted)&&wanted>=1&&wanted<=15)state.id=wanted;
if(p.get('r')==='b')state.role='b';
const $=id=>document.getElementById(id);
const clean=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const key=()=> 'c1emphasis-v1:'+state.game+':'+state.id+':'+state.role;
const read=(key,fallback)=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch(e){return fallback}};
const store=(key,v)=>{try{localStorage.setItem(key,JSON.stringify(v))}catch(e){}};
const data=()=>DATA.find(d=>d.game===state.game&&d.id===state.id);
const role=()=>data()?.[state.role];
const roleLabel=()=>state.role==='a'?'STUDENT A':'STUDENT B';
const link=(r=state.role)=>{const url=new URL(location.href);url.searchParams.set('g',state.game);url.searchParams.set('n',state.id);url.searchParams.set('r',r);return url.href};
const saveUrl=()=>{try{history.replaceState({},'',link())}catch(e){}};
const notify=msg=>{let el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>el.classList.remove('show'),3100)};
function allCases(){return DATA.filter(d=>d.game===state.game).sort((a,b)=>a.id-b.id)}
function choose(game,id,roleId){if(game)state.game=game;if(id)state.id=id;if(roleId)state.role=roleId;render();window.scrollTo({top:0,behavior:'smooth'})}
function renderSelectors(){
$('gameService').setAttribute('aria-pressed',String(state.game==='service'));
$('gameSales').setAttribute('aria-pressed',String(state.game==='sales'));
$('roleA').setAttribute('aria-pressed',String(state.role==='a'));
$('roleB').setAttribute('aria-pressed',String(state.role==='b'));
$('caseSelect').innerHTML=allCases().map(x=>'<option value="'+x.id+'">'+x.id.toString().padStart(2,'0')+' · '+clean(x.title)+'</option>').join('');
$('caseSelect').value=String(state.id);
$('gameInstruction').textContent=state.game==='service'?'A complaint. Two sides. Can you reach a fair agreement?':'One absurd invention. One shameless seller. One extremely sceptical shopper.';
}
function promptHTML(item,i,answers,used){
const [code,hint]=item;const g=GRAMMAR[code]||GRAMMAR.need;
return '<article class="prompt"><div class="prompt-head"><span class="grammar-chip">'+clean(g.label)+'</span><span class="prompt-number">0'+(i+1)+' / 04</span></div><p class="stem">'+clean(g.stem)+'</p><p class="hint"><b>YOUR CLUE</b> '+clean(hint)+'.</p><label class="sr-only" for="answer-'+i+'">Complete sentence '+(i+1)+'</label><textarea class="answer" id="answer-'+i+'" data-idx="'+i+'" spellcheck="true" placeholder="Write your own full C1 sentence here…">'+clean(answers[i]||'')+'</textarea><div class="prompt-bottom"><button type="button" class="help-link" data-help="'+i+'" aria-expanded="false">✦ Grammar SOS</button><label class="used"><input type="checkbox" data-used="'+i+'" '+(used[i]?'checked':'')+'> I used this</label></div><div class="help-box" id="help-'+i+'" aria-hidden="true"><strong>Pattern tip:</strong> '+clean(g.rule)+'<br><strong>Unrelated example:</strong> '+clean(g.example)+'</div></article>';
}
function render(){
if(!data()){document.querySelector('main').innerHTML='<p>Could not load the case cards. Please refresh the page.</p>';return;}
renderSelectors();saveUrl();
const c=data(),r=role();const answers=read(key()+':answers',['','','','']);const used=read(key()+':used',[false,false,false,false]);
$('caseNumber').textContent=(state.game==='service'?'CASE ':'PRODUCT ')+String(c.id).padStart(2,'0')+' / 15';
$('storyEmoji').textContent=c.emoji;$('storyTitle').textContent=c.title;$('premise').textContent=c.premise;
$('roleFlag').textContent=roleLabel();$('roleFlag').classList.toggle('role-b',state.role==='b');
$('roleTitle').textContent=r.name;$('mission').textContent=r.goal;$('secret').textContent=r.secret;
$('secretHeading').textContent='🔒 YOUR PRIVATE INFORMATION — DON\'T SHOW YOUR PARTNER';
$('sentenceArea').innerHTML=r.prompts.map((x,i)=>promptHTML(x,i,answers,used)).join('');
$('workTitle').textContent='Build your own sentences';
$('workSubtitle').textContent='Complete the four structures using the clues. These are YOUR ideas, not model answers.';
$('roleTarget').textContent=roleLabel()+' · '+r.name;
$('speakingAction').textContent=state.game==='service'?'Explain, challenge, negotiate and reach a solution.':'Pitch, challenge, defend and try to make the sale.';
const opts=state.game==='service'?[['resolved','🤝 Agreement reached'],['partial','🧩 Partial compromise'],['failed','💥 No agreement']]:[['bought','🛍️ Sold!'],['deal','🤝 Negotiated deal'],['walk','🚶 No sale']];
const selected=read(key()+':result','');
$('verdictButtons').innerHTML=opts.map(([id,label])=>'<button type="button" class="verdict" data-verdict="'+id+'" aria-pressed="'+(selected===id)+'">'+label+'</button>').join('');
$('verdictText').textContent=selected?'Decision saved on this device. Explain your result to your partner.':'Discuss your result when you are ready.';
$('roleB').textContent=state.game==='service'?'Student B · Employee':'Student B · Buyer';$('roleA').textContent=state.game==='service'?'Student A · Customer':'Student A · Seller';
updateProgress(answers,used);
}
function updateProgress(answers,used){
const done=answers.filter(s=>s.trim().length>0).length;const spoken=used.filter(Boolean).length;
$('counter').textContent=done+' of 4 written';
$('speakingProgress').textContent=spoken?spoken+' / 4 structures marked as used. Keep going!':'Keep your sentences visible while you speak. Tick each structure as you use it.';
}
async function copyLink(url){try{await navigator.clipboard.writeText(url);notify('Partner link copied!');return}catch(e){prompt('Copy this link:',url)}}
function saveNotes(){
const c=data(),r=role(),answers=read(key()+':answers',['','','','']);
const text=['C1 EMPHASIS CHALLENGE',state.game==='service'?'Customer Service from Hell':'The World\'s Worst Salesperson',c.title,roleLabel()+' — '+r.name,'YOUR MISSION: '+r.goal,'YOUR PRIVATE INFORMATION: '+r.secret,'',...r.prompts.map((item,i)=>{const g=GRAMMAR[item[0]];return(i+1)+'. '+g.label+' | '+g.stem+'\nCLUE: '+item[1]+'\nYOUR SENTENCE: '+(answers[i]||'(not written yet)')+'\n'})].join('\n');
const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download='c1-emphasis-'+state.game+'-'+state.id+'-role-'+state.role+'.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),600);
notify('Your notes are ready to save.');
}
function attach(){
$('gameService').addEventListener('click',()=>choose('service',1,'a'));
$('gameSales').addEventListener('click',()=>choose('sales',1,'a'));
$('caseSelect').addEventListener('change',e=>choose(null,Number(e.target.value)));
$('randomBtn').addEventListener('click',()=>{const arr=allCases().filter(c=>c.id!==state.id);const next=arr[Math.floor(Math.random()*arr.length)];if(next)choose(null,next.id)});
$('roleA').addEventListener('click',()=>choose(null,null,'a'));
$('roleB').addEventListener('click',()=>choose(null,null,'b'));
$('nextBtn').addEventListener('click',()=>choose(null,state.id===15?1:state.id+1));
$('switchBtn').addEventListener('click',()=>choose(null,null,state.role==='a'?'b':'a'));
$('copyPartnerBtn').addEventListener('click',()=>copyLink(link(state.role==='a'?'b':'a')));
$('copyRoleBtn').addEventListener('click',()=>copyLink(link()));
$('saveNotesBtn').addEventListener('click',saveNotes);
$('printBtn').addEventListener('click',()=>window.print());
$('howBtn').addEventListener('click',()=>{$('howModal').classList.add('open');$('howModal').setAttribute('aria-hidden','false');$('closeModal').focus()});
const close=()=>{$('howModal').classList.remove('open');$('howModal').setAttribute('aria-hidden','true');$('howBtn').focus()};
$('closeModal').addEventListener('click',close);
$('howModal').addEventListener('click',e=>{if(e.target===$('howModal'))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('howModal').classList.contains('open'))close()});
$('sentenceArea').addEventListener('input',e=>{if(!e.target.matches('.answer'))return;const idx=Number(e.target.dataset.idx);const answers=read(key()+':answers',['','','','']);answers[idx]=e.target.value;store(key()+':answers',answers);updateProgress(answers,read(key()+':used',[false,false,false,false]))});
$('sentenceArea').addEventListener('change',e=>{if(!e.target.matches('[data-used]'))return;const idx=Number(e.target.dataset.used);const used=read(key()+':used',[false,false,false,false]);used[idx]=e.target.checked;store(key()+':used',used);updateProgress(read(key()+':answers',['','','','']),used)});
$('sentenceArea').addEventListener('click',e=>{const btn=e.target.closest('[data-help]');if(!btn)return;const i=btn.dataset.help;const el=$('help-'+i),next=el.getAttribute('aria-hidden')==='true'?'false':'true';el.setAttribute('aria-hidden',next);btn.setAttribute('aria-expanded',String(next==='false'));btn.textContent=next==='false'?'✕ Hide example':'✦ Grammar SOS'});
$('verdictButtons').addEventListener('click',e=>{const b=e.target.closest('[data-verdict]');if(!b)return;store(key()+':result',b.dataset.verdict);document.querySelectorAll('[data-verdict]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));$('verdictText').textContent='Decision saved on this device. Explain your result to your partner.'});
}
if(DATA.length) {attach();render()} else {$('loadingError').hidden=false}
})();
