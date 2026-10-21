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
const query=new URLSearchParams(location.search);
if(query.get('g')==='sales')state.game='sales';
const n=Number(query.get('n'));if(Number.isInteger(n)&&n>=1&&n<=15)state.id=n;
if(query.get('r')==='b')state.role='b';
const $=id=>document.getElementById(id);
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cards=()=>DATA.filter(x=>x.game===state.game).sort((a,b)=>a.id-b.id);
const current=()=>DATA.find(x=>x.game===state.game&&x.id===state.id);
const shareLink=()=>{const url=new URL(location.href);url.searchParams.set('g',state.game);url.searchParams.set('n',state.id);url.searchParams.set('r',state.role==='a'?'b':'a');return url.href;};
const currentLink=()=>{const url=new URL(location.href);url.searchParams.set('g',state.game);url.searchParams.set('n',state.id);url.searchParams.set('r',state.role);return url.href;};
let toastTimeout;
function toast(message){const el=$('toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('visible'),2600)}
function change(game,id,role){if(game)state.game=game;if(id)state.id=id;if(role)state.role=role;render();window.scrollTo({top:0,behavior:'smooth'});}
function cueHTML(item,i){const g=GRAMMAR[item[0]],hint=item[1];if(!g)return '';
return '<article class="cue"><div class="cue-head"><span class="cue-number">'+(i+1)+'</span><span class="cue-category">'+escape(g.label)+'</span></div>'+
'<p class="cue-stem">'+escape(g.stem)+'</p>'+
'<div class="cue-clue"><span>💡</span><span>'+escape(hint)+'</span></div>'+
'<details class="grammar-details"><summary>Grammar help</summary><p>'+escape(g.rule)+'</p><p><strong>Example:</strong> '+escape(g.example)+'</p></details></article>';
}
function render(){
const card=current();if(!card){$('loadError').hidden=false;return;}$('loadError').hidden=true;
const person=card[state.role];
document.body.dataset.game=state.game;
$('gameService').setAttribute('aria-pressed',String(state.game==='service'));
$('gameSales').setAttribute('aria-pressed',String(state.game==='sales'));
$('roleA').setAttribute('aria-pressed',String(state.role==='a'));
$('roleB').setAttribute('aria-pressed',String(state.role==='b'));
$('roleA').title=state.game==='service'?'Student A — customer':'Student A — salesperson';
$('roleB').title=state.game==='service'?'Student B — employee':'Student B — shopper';
$('caseSelect').innerHTML=cards().map(x=>'<option value="'+x.id+'">'+String(x.id).padStart(2,'0')+' · '+escape(x.title)+'</option>').join('');
$('caseSelect').value=String(card.id);
$('caseNumber').textContent=(state.game==='service'?'COMPLAINT ':'PRODUCT ')+String(card.id).padStart(2,'0')+' / 15';
$('storyEmoji').textContent=card.emoji;
$('storyTitle').textContent=card.title;
$('premise').textContent=card.premise;
$('roleFlag').textContent='STUDENT '+state.role.toUpperCase();
$('roleTitle').textContent=person.name;
$('mission').textContent=person.goal;
$('secret').textContent=person.secret;
$('promptGrid').innerHTML=person.prompts.map(cueHTML).join('');
$('speakingAction').textContent=state.game==='service'?'Complain, defend your position and try to reach an agreement.':'Sell your ridiculous product — or challenge every absurd claim!';
$('nextBtn').textContent=state.id===15?'↻ Back to scenario 1':'Next scenario →';
try{history.replaceState(null,'',currentLink())}catch(e){}
}
async function sharePartner(){
const url=shareLink();
if(navigator.share){try{await navigator.share({title:'Your C1 speaking role',url});return}catch(e){if(e?.name==='AbortError')return;}}
if(navigator.clipboard?.writeText){try{await navigator.clipboard.writeText(url);toast("Partner's card link copied!");return}catch(e){}}
window.prompt("Copy your partner's role link:",url);
}
$('gameService').addEventListener('click',()=>change('service',1,'a'));
$('gameSales').addEventListener('click',()=>change('sales',1,'a'));
$('roleA').addEventListener('click',()=>change(null,null,'a'));
$('roleB').addEventListener('click',()=>change(null,null,'b'));
$('caseSelect').addEventListener('change',e=>change(null,Number(e.target.value)));
$('randomBtn').addEventListener('click',()=>{const choices=cards().filter(c=>c.id!==state.id);if(choices.length)change(null,choices[Math.floor(Math.random()*choices.length)].id)});
$('nextBtn').addEventListener('click',()=>change(null,state.id===15?1:state.id+1));
$('partnerBtn').addEventListener('click',sharePartner);
if(DATA.length===30)render();else $('loadError').hidden=false;
})();
