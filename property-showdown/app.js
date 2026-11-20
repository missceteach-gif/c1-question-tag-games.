/* Property Showdown — original C1.2 pair-work scenarios inspired by the user's
   Unit 36 (English Vocabulary in Use) and Unit 37 (English Phrasal Verbs in Use).
   All listings, prices and plot twists are fictional. */

const vocabulary = {
  'cottage':['A small house in the countryside or a village.','The cottage looks idyllic, but who owns the land behind it?'],
  'cellar':['A room below ground, generally without windows, often used for storage.','The cellar is ideal for storing wine—and, apparently, mysterious footsteps.'],
  'basement':['A room below ground, sometimes with windows, that can be used as living or working space.','The basement could be converted into a recording studio.'],
  'attic':['A room in the roof space, which may be suitable for living in.','The attic could double as a quiet study.'],
  'loft':['Roof space generally used for storage, rather than as a fully furnished room.','The loft is accessible by a rather alarming ladder.'],
  'shed':['A small, separate building for storing tools and garden equipment.','There is a shed at the far end of the garden.'],
  'pantry':['A small room or large walk-in cupboard used for storing food; also called a larder.','The pantry is spacious enough for your entire biscuit collection.'],
  'larder':['A food-storage cupboard or small room, especially in older homes.','There is a traditional larder just off the kitchen.'],
  'porch':['A covered area immediately outside an entrance door.','The porch shelters visitors from the rain.'],
  'bedsit':['A rented room combining bedroom and living room, typically with limited facilities.','At this price, the bedsit should at least have a working window.'],
  'study':['A room used for reading, writing or working.','I need a study where I can hold online meetings in peace.'],
  'landing':['The level area at the top of a staircase.','The landing is so narrow that you have to walk sideways.'],
  'power socket':['A point in the wall where an electrical device can be plugged in (also power point in some varieties).','Is there a power socket near the desk?'],
  'utility room':['A room used for laundry, appliances or other household tasks.','The utility room has space for a washing machine and tumble-dryer.'],
  'semi-detached house':['A house joined to exactly one other house.','The semi-detached house shares a wall with the neighbour.'],
  'patio':['A paved outdoor area beside a home, often used for eating or relaxing.','The patio would be perfect for summer dinners.'],
  'washing-up liquid':['Liquid detergent used to wash plates and dishes by hand.','The previous owner has left 40 bottles of washing-up liquid.'],
  'grater':['A kitchen tool for cutting food such as cheese into very small pieces.','There is a gold-plated grater in the kitchen.'],
  'dustpan and brush':['A pair of cleaning tools used to sweep up small pieces of dirt or broken objects.','A dustpan and brush would come in handy after the ceiling crumbles.'],
  'villa':['A large house, often with a garden, or a holiday house in a resort.','The villa has a sea view and a mysteriously locked garden gate.'],
  'terrace':['A paved outdoor space, often raised, used for sitting and entertaining.','The terrace is large enough for a dinner party.'],
  'corkscrew':['A tool used for pulling corks out of bottles.','The kitchen includes a corkscrew, but apparently no doors.'],
  'coaster':['A small mat placed under a drink to protect a surface.','Please use a coaster on the antique table.'],
  'remote control':['A hand-held device used to operate a TV or another appliance from a distance.','Nobody can locate the remote control for the smart blinds.'],
  'terraced house':['A house joined to others in a continuous row.','This terraced house has very close neighbours.'],
  'table mat':['A protective mat placed beneath a plate at the table; also placemat.','The owner insists each guest use a table mat.'],
  'bin liners':['Disposable bags used to line rubbish bins.','The seller generously includes 200 bin liners.'],
  'time-share':['An arrangement giving several people the right to use a holiday property at different times of the year.','The time-share gives you access for only one week a year.'],
  'detached house':['A house that does not share a wall with another building.','A detached house offers more independence from the neighbours.'],
  'bungalow':['A house with only one storey.','A bungalow would suit someone who wants to avoid stairs.'],
  'ironing board':['A narrow, padded folding board used when ironing clothes.','Even the ironing board has its own cupboard.'],
  'mop':['A long-handled cleaning tool used to wash floors.','You will need a mop after every storm.'],
  'settle in':['To become comfortable and feel at home in a new place.','It took us a few weeks to settle in.'],
  'smarten up':['To improve the appearance of a room or building, often through small changes.','A fresh coat of paint would smarten up the entrance.'],
  'do out':['To decorate a room or building, usually in a particular colour or style.','They had the bedroom done out in dark green.'],
  'straighten up':['To make a messy space neat and tidy.','We need to straighten up the lounge before the viewing.'],
  'pull up a chair':['To move a chair closer to someone or something (also draw up a chair).','Pull up a chair and let us discuss the asking price.'],
  'chuck away':['To throw away something no longer wanted; informal.','I would chuck away that broken armchair.'],
  'part with':['To give away or relinquish something, often reluctantly.','The owner refuses to part with the antique sofa.'],
  'clutter up':['To fill a space with too many things, making it messy.','The boxes are cluttering up the hallway.'],
  'put away':['To return something to its proper storage place.','Please put away the kitchen equipment after using it.'],
  'put the rubbish out':['To take household waste outside for collection.','Have you put the rubbish out yet?'],
  'clear away':['To remove items from a surface after they have been used.','We can clear away the breakfast things after the viewing.'],
  'wash down':['To clean a surface thoroughly with water or a wet cloth.','We had to wash down the kitchen walls.'],
  'mop up':['To soak up or remove liquid that has been spilt.','Someone needs to mop up the water by the sink.'],
  'stop up':['To block or fill a hole so nothing can pass through it.','The landlord promised to stop up the hole in the wall.'],
  'put up':['To fix something, such as shelves, to a wall.','We plan to put up shelves in the study.'],
  'clean up after':['To clean a mess created by another person.','I am tired of cleaning up after my flatmates.'],
  'lock up':['To lock the doors and windows when leaving a building.','Who is responsible for locking up at night?'],
  'plump up':['To make a cushion or pillow look fuller and softer.','The agent plumped up the cushions before the photographs.'],
  'pull the door to':['To close or almost close a door by pulling it towards you.','Could you pull the door to? There is a draught.'],
  'put out':['To place something outside, especially rubbish, ready for collection.','The agent forgot to put the empty boxes out.'],
  'clear up after':['To tidy a mess left by somebody else.','I spend all Sunday clearing up after my housemates.']
};

const listings = {
  36: [
    {
      title:'The Haunted Heritage Cottage',kind:'COUNTRY COTTAGE',price:'€285,000',label:'HISTORIC CHARACTER',
      blurb:'A storybook countryside retreat with exposed beams, glorious views and a suspiciously lively past.',
      tags:['Stone cottage','Quiet village','Very old neighbours'],
      words:['cottage','cellar','attic','shed','pantry','porch'],
      agentTag:'You specialise in “properties with character”. What could possibly go wrong?',
      agentTasks:['Give a compelling tour of the porch, pantry, attic and garden shed.','Distinguish the windowless cellar from a habitable basement.','Justify the asking price without describing anything as “haunted”.'],
      buyerTag:'You want rural peace, storage space and absolutely no supernatural roommates.',
      buyerTasks:['Ask at least four precise questions about the rooms and outbuildings.','Find out what exactly is below ground and whether it has windows.','Negotiate a substantial discount if the agent seems evasive.'],
      agentSecret:'At 2:13 a.m. every night, someone hums in the cellar and screams three times. The house sits on an old cemetery. You must tell the truth if asked directly.',
      buyerSecret:'You run a podcast called “Definitely Not Haunted”. You will only buy if you can record in the attic and investigate the cellar.',
      twist:'A delivery driver arrives with a coffin-shaped parcel addressed to “The New Occupant”. The estate agent must explain why it is included in the sale.'
    },
    {
      title:'The Millionaire’s Micro-Bedsit',kind:'URBAN BEDSIT',price:'€189,000',label:'COMPACT CITY LIVING',
      blurb:'A chic, minimalist city home. Every centimetre has a purpose. Several centimetres have two.',
      tags:['One room','Central location','Space-saving genius'],
      words:['bedsit','loft','power socket','study','landing','utility room'],
      agentTag:'You believe the words “cosy” and “innovative” can solve any spatial problem.',
      agentTasks:['Convince the buyer a bedsit can double as a bedroom, living room and study.','Show off a tiny loft reached by a ladder.','Answer questions about the lack of a separate utility room and very few power sockets.'],
      buyerTag:'You are a remote-working lawyer who owns 200 books and a large coffee machine.',
      buyerTasks:['Find out whether there is a genuine study or just a desk beside the bed.','Ask how the loft differs from an attic suitable for living in.','Demand practical details: sockets, laundry facilities and any shared landing.'],
      agentSecret:'The flat’s advertised “second floor” is actually a fold-down shelf. The power socket is behind the washing machine, which is in the shower.',
      buyerSecret:'You plan to move in with your 1.9-metre-tall partner and a Great Dane. You refuse to give up your two-person desk.',
      twist:'The bed unfolds only when the front door is closed—and the owner has just announced a mandatory “no doors after 8 p.m.” building policy.'
    },
    {
      title:'The Semi-Detached “Eco” Experiment',kind:'SEMI-DETACHED',price:'€345,000',label:'SUSTAINABLE(ISH)',
      blurb:'A picture-perfect family home with a sunny patio, endless practical extras and an unexpected electrical view.',
      tags:['Suburban semi','Sunny patio','Bonus pylons'],
      words:['semi-detached house','utility room','patio','washing-up liquid','grater','dustpan and brush'],
      agentTag:'You represent this house as the greenest property on the street.',
      agentTasks:['Explain exactly what “semi-detached” means and show the patio.','Describe the utility room and three extravagant household freebies.','Turn the enormous electricity pylon into an “energy-forward amenity”.'],
      buyerTag:'You are an environmental consultant with an obsession with household details.',
      buyerTasks:['Ask what the property shares with its neighbours.','Inspect the utility room and request details of the kitchen equipment.','Challenge the “eco-friendly” claim and negotiate the price.'],
      agentSecret:'The seller bought 600 bottles of washing-up liquid in a clearance sale; they fill the utility room. The electric pylon is 12 metres from the patio.',
      buyerSecret:'You have a collection of 47 graters and insist on a dedicated grater cupboard. You are very suspicious of greenwashing.',
      twist:'The neighbour announces that they are turning their half of the semi into a 24-hour karaoke academy. They invite you to the opening.'
    },
    {
      title:'The Villa of Vanishing Objects',kind:'LUXURY VILLA',price:'€1,280,000',label:'EXCEPTIONAL LIFESTYLE',
      blurb:'A breathtaking Mediterranean villa where everything is top-of-the-range—when you can actually find it.',
      tags:['Sea view','Designer terrace','Mystery included'],
      words:['villa','terrace','pantry','corkscrew','coaster','remote control'],
      agentTag:'You are marketing a world-class property to a buyer with extremely high standards.',
      agentTasks:['Sell the villa’s terrace, walk-in pantry and luxury lifestyle.','Explain how a collection of bizarre premium household objects adds value.','Respond to increasingly pointed questions about what is actually included.'],
      buyerTag:'You are a celebrity chef who values details almost as much as privacy.',
      buyerTasks:['Ask to see the pantry and outdoor entertaining areas.','Check whether the corkscrew, coasters and remote controls work or even exist.','Threaten to walk away unless the inventory is itemised.'],
      agentSecret:'Everything “smart” is controlled by one remote control that vanished last summer. The previous owner claims a mysterious cleaner hides all the household accessories.',
      buyerSecret:'You collect antique corkscrews and will reject any villa that does not have exactly six matching coasters.',
      twist:'During the viewing, the terrace lights flash and a robotic voice announces: “Please return the missing corkscrew or face consequences.”'
    },
    {
      title:'The Terraced House With No Privacy',kind:'VICTORIAN TERRACE',price:'€412,000',label:'VIBRANT COMMUNITY',
      blurb:'Timeless redbrick charm, a welcoming porch and neighbours who are VERY keen to get acquainted.',
      tags:['Period features','Five neighbours','Shared gossip'],
      words:['terraced house','landing','porch','basement','table mat','bin liners'],
      agentTag:'You insist that “community spirit” is the property’s greatest selling point.',
      agentTasks:['Describe the terraced layout, porch and unusual staircase landing.','Explain the difference between the basement and the cellar in the brochure.','Find a way to make mandatory neighbourhood dinners sound appealing.'],
      buyerTag:'You are an introverted novelist who needs a silent home office.',
      buyerTasks:['Check how many walls are shared with neighbouring properties.','Ask about the landing, basement and noise insulation.','Investigate why the house comes with 120 table mats and industrial bin liners.'],
      agentSecret:'Every Friday, the five neighbours hold a compulsory potluck dinner on the shared landing. The previous owner moved out after their 76th “surprise” party.',
      buyerSecret:'You are writing an exposé called “The Neighbours Next Door”. If they are noisy enough, you might buy the place as research.',
      twist:'All the neighbours appear at the porch with matching table mats and announce that your interview for “Resident of the Year” starts now.'
    },
    {
      title:'The One-Week Dream Villa',kind:'HOLIDAY TIME-SHARE',price:'€72,000',label:'A LIFESTYLE INVESTMENT',
      blurb:'Private pool, sunset terrace, five-star surroundings—and one tiny detail hidden in the paperwork.',
      tags:['Resort setting','Pool access','Limited availability'],
      words:['time-share','villa','detached house','bungalow','terrace','ironing board','mop'],
      agentTag:'You specialise in holiday properties and think the price looks irresistible.',
      agentTasks:['Explain what a time-share arrangement gives the buyer—and what it does not.','Compare the villa with owning a detached house or bungalow outright.','Make the terrace and luxurious household facilities sound like a brilliant deal.'],
      buyerTag:'You think €72,000 is a bargain for a permanent seaside home.',
      buyerTasks:['Clarify whether this is full ownership or a time-share.','Ask how many weeks each year you can stay and who uses the villa at other times.','Insist on practical information, including cleaning supplies and storage.'],
      agentSecret:'The buyer gets exactly one week a year: the first week of February. The famous “private pool” is shared with 96 other families.',
      buyerSecret:'You intend to move here permanently with your entire extended family and an industrial-size ironing board.',
      twist:'The resort manager calls: your allocated February week is now “subject to a compulsory annual maintenance shutdown”. Offer an alternative.'
    }
  ],
  37: [
    {
      title:'The Poltergeist Makeover',kind:'FRESHLY RENOVATED',price:'€298,000',label:'JUST SMARTENED UP',
      blurb:'New paint, elegant furniture and a helpful, unseen presence who takes an interest in interior design.',
      tags:['Period lounge','Recent makeover','Night-time activity'],
      words:['settle in','smarten up','do out','straighten up','pull up a chair'],
      agentTag:'You assure the buyer that this home is ready to move into immediately.',
      agentTasks:['Explain how the house has been done out and smartened up.','Invite the buyer to pull up a chair and describe how quickly they could settle in.','Explain who straightens up the furniture while everyone is asleep.'],
      buyerTag:'You are a sceptical interior designer who cannot tolerate unexplained changes.',
      buyerTasks:['Ask what was redecorated, by whom and at what cost.','Find out whether anyone will help you settle in.','Question why the furniture changes position each morning.'],
      agentSecret:'A ghost called Mildred straightens up the house every night. She dislikes minimalism and paints one wall pink whenever she gets bored.',
      buyerSecret:'You are the host of “Ghosts Are Just Bad Plumbing”. You desperately want photographic evidence that someone is moving the furniture.',
      twist:'As the buyer sits down, the chair slides a metre to the left. The agent receives a text from Mildred: “The cushion arrangement is unacceptable.”'
    },
    {
      title:'The Hoarder’s Hidden Treasure',kind:'CHARACTER HOME',price:'€167,000',label:'INCREDIBLE STORAGE',
      blurb:'A home overflowing with antiques, books, clocks, mystery boxes and opportunities to declutter your life.',
      tags:['Original features','Rare collectibles','Some floor visible'],
      words:['chuck away','part with','clutter up','put away','put the rubbish out','clear away'],
      agentTag:'You claim the entire property is a treasure trove, not a mess.',
      agentTasks:['Describe what could be chucked away and what the owner refuses to part with.','Offer a realistic plan to put things away and clear away the clutter.','Explain the rubbish collection arrangements with a straight face.'],
      buyerTag:'You are a ruthless professional organiser who believes less is more.',
      buyerTasks:['Insist on a room-by-room clearing-out plan before making an offer.','Ask who will put the rubbish out and when.','Demand compensation for every room cluttered up with unwanted objects.'],
      agentSecret:'The owner refuses to part with any of the 430 grandfather clocks. They have all been set to chime at exactly 3:17 a.m.',
      buyerSecret:'Your secret passion is collecting antique clocks. You want every clock, but only if the agent gives you a discount for “waste disposal”.',
      twist:'A museum curator arrives and claims every item in the house is a protected national treasure. Nothing may be chucked away for 50 years.'
    },
    {
      title:'The DIY Disaster Kitchen',kind:'MODERN FIXER-UPPER',price:'€264,000',label:'RECENTLY IMPROVED',
      blurb:'An airy, immaculate kitchen—apart from the dramatic indoor water feature and the slightly adventurous shelving.',
      tags:['Bright kitchen','New shelves','Unexpected fountain'],
      words:['wash down','mop up','stop up','put up','clean up after'],
      agentTag:'You describe the kitchen renovation as “bold, experimental and almost complete”.',
      agentTasks:['Explain who put up the crooked shelves and how they can be fixed.','Describe your plan to mop up the water and stop up the suspicious hole.','Promise the walls will be washed down and the mess cleared before move-in.'],
      buyerTag:'You are a building inspector who never believes the phrase “minor cosmetic issue”.',
      buyerTasks:['Ask why there is a pool of water and who will mop it up.','Demand specific dates to stop up the hole and put up safe shelves.','Refuse to clean up after the seller’s failed DIY projects.'],
      agentSecret:'The “water feature” is a burst pipe. Every time someone opens the cupboard, the kitchen tap sprays water across the room.',
      buyerSecret:'You once had an entire kitchen ceiling collapse during dinner. You now carry a tape measure and a waterproof notebook.',
      twist:'The plumber calls during the viewing: the pipe can be repaired, but only if the buyer agrees to close the kitchen for three months.'
    },
    {
      title:'The Flatmate Survival Experiment',kind:'SHARED CITY FLAT',price:'€218,000',label:'SOCIAL LIVING',
      blurb:'Light-filled communal spaces, a wonderful sense of community and enough abandoned trainers to open a shop.',
      tags:['Shared lounge','Three flatmates','Legendary parties'],
      words:['clean up after','clear away','put away','clutter up','lock up','clear up after'],
      agentTag:'You are selling a room in a shared flat and must reassure a very tidy buyer.',
      agentTasks:['Explain who clears away after meals and who cleans up after the flatmates.','Promise to put away belongings cluttering up the hall.','Clarify who locks up after late-night parties.'],
      buyerTag:'You host a podcast called “The Joy of Labelled Storage”.',
      buyerTasks:['Interrogate the agent about cleaning rotas and shared responsibilities.','Ask who will clear up after the next party.','Demand a written rule about locking up and putting things away.'],
      agentSecret:'One flatmate is convinced that plates “self-clean” if left on the floor long enough. Nobody has locked up the front door since 2022.',
      buyerSecret:'You alphabetise your fridge shelves and have never left a cup unwashed. You will move in only if your cleaning rota is legally binding.',
      twist:'The three flatmates join the viewing and announce that they have adopted a pet goat named Hoover to “clean up after everyone”.'
    },
    {
      title:'The Show Home With No Locks',kind:'DESIGNER SHOW HOME',price:'€785,000',label:'EVERYTHING IS PERFECT',
      blurb:'Deep blue walls, plush cushions, designer furnishings and an innovative approach to home security.',
      tags:['Designer interior','Soft furnishings','Open-door policy'],
      words:['plump up','pull the door to','do out','smarten up','lock up'],
      agentTag:'You have staged every square centimetre to perfection.',
      agentTasks:['Describe how the lounge was done out and smartened up.','Plump up the cushions and explain why the front door does not fully close.','Reassure the buyer about the security arrangements.'],
      buyerTag:'You are a security specialist with a habit of testing every door.',
      buyerTasks:['Ask the agent to pull the door to and lock up.','Question whether the lavish makeover is merely cosmetic.','Insist that the security problem affects your offer.'],
      agentSecret:'The front door has no actual lock because the architect believes “security is a state of mind”. The seller refuses to install one.',
      buyerSecret:'You are afraid of unlocked doors and have brought three different padlocks to the viewing.',
      twist:'The designer arrives with the building’s “security upgrade”: an enormous velvet cushion to prop against the front door.'
    },
    {
      title:'The Midnight Moving Day',kind:'READY TO OCCUPY',price:'€329,000',label:'VACANT POSSESSION*',
      blurb:'A beautiful family home that comes fully furnished—with cardboard boxes and one suspiciously determined former owner.',
      tags:['Bright attic','Plenty of storage','Previous owner nearby'],
      words:['settle in','part with','put up','straighten up','put out','pull up a chair'],
      agentTag:'You have promised vacant possession before the end of the week.',
      agentTasks:['Explain what will be put out, put away or straightened up by moving day.','Offer to put up new shelves so the buyer can settle in.','Negotiate a deadline for the seller to part with their belongings.'],
      buyerTag:'You are moving in tomorrow morning with two vans and a very impatient family.',
      buyerTasks:['Demand an exact handover date and a clear plan for the boxes.','Ask whether all belongings will be removed so you can settle in.','Request compensation if the seller has not parted with the furniture.'],
      agentSecret:'The seller has moved into the attic and claims that, because no one specified the roof space, it is technically theirs forever.',
      buyerSecret:'You are an amateur magician who needs the attic for rehearsals. Your biggest prop is a human-sized disappearing cabinet.',
      twist:'A voice from the attic calls, “Could someone pull up a chair? We need to discuss the rent I will be charging you.”'
    }
  ]
};

const phraseSets = {
  36:[
    ['THE AGENT','“One of the property’s most distinctive features is…”'],
    ['THE BUYER','“Could you clarify whether that space is a cellar or a habitable basement?”'],
    ['THE COUNTEROFFER','“I could overlook that drawback, provided the asking price reflected it.”']
  ],
  37:[
    ['THE AGENT','“We’ve already had the room done out and the whole place smartened up.”'],
    ['THE BUYER','“Who will be responsible for clearing up after the previous occupants?”'],
    ['THE COUNTEROFFER','“I’d be prepared to proceed if those repairs were carried out beforehand.”']
  ]
};

// The first photograph is the estate-agent listing; the other two show
// situation-specific clues, always in the same order as the local assets.
const photoScenes = {
  36:[
    ['THE CELLAR','THE CEMETERY'],
    ['EVERYTHING IN ONE ROOM','THE SO-CALLED LOFT'],
    ['THE UTILITY ROOM','THE PATIO VIEW'],
    ['THE GRAND TERRACE','THE SMART-HOME CONTROLS'],
    ['A VERY CLOSE LANDING','THE NEIGHBOURS'],
    ['THE RESORT POOL','YOUR WEEK IN FEBRUARY']
  ],
  37:[
    ['THE MOVING FURNITURE','THE NEW PAINTWORK'],
    ['THE CLOCK COLLECTION','THE CLUTTERED HALL'],
    ['THE INDOOR FOUNTAIN','THE DIY SHELVES'],
    ['THE COMMUNAL MESS','THE NEW CLEANER'],
    ['THE FRONT DOOR','THE SECURITY SYSTEM'],
    ['THE BOX-FILLED ATTIC','THE SECRET TENANT']
  ]
};

const $ = id => document.getElementById(id);
let unit = location.hash === '#unit37' ? 37 : 36;
let position = {36:0,37:0};

function setText(id,text){$(id).textContent=text;}
function renderList(id,items){const ul=$(id);ul.replaceChildren();for(const item of items){const li=document.createElement('li');li.textContent=item;ul.append(li);}}
function resetReveals(){
  for(const role of ['agent','buyer']){
    $(`${role}-open`).setAttribute('aria-expanded','false');
    $(`${role}-brief`).hidden=true;
    $(`${role}-open`).querySelector('.open-label').firstChild.textContent='OPEN BRIEF ';
    $(`${role}-open`).querySelector('.open-label span').textContent='+';
  }
  $('twist-button').setAttribute('aria-expanded','false');
  $('twist-button').querySelector('span').textContent='✳';
  $('twist-content').hidden=true;
  $('twist-content').textContent='';
  $('language-drawer').open=false;
}
function render(){
  const item=listings[unit][position[unit]];
  const count=position[unit]+1;
  document.querySelectorAll('.unit-tab').forEach(tab=>{const active=tab.id===`tab-${unit}`;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  $('panel-36').hidden=unit!==36;$('panel-37').hidden=unit!==37;
  setText('counter',`LISTING ${String(count).padStart(2,'0')} / 06`);
  setText('deck-topic',`UNIT ${unit}`);
  $('progress-fill').style.width=`${count/6*100}%`;
  $('listing-image').src=`assets/unit${unit}-${position[unit]}.webp`;
  $('listing-image').alt=`Property photograph: ${item.title}`;
  for(const [i,id,captionId] of [[1,'listing-detail-one','gallery-caption-one'],[2,'listing-detail-two','gallery-caption-two']]){
    const image=$(id),caption=photoScenes[unit][position[unit]][i-1];
    image.src=`assets/unit${unit}-${position[unit]}-detail${i}.webp`;
    image.alt=`${caption.toLowerCase()} at ${item.title}`;
    setText(captionId,caption);
  }
  setText('property-kind',item.kind);
  setText('property-id',`PROPERTY / ${String(count).padStart(2,'0')}`);
  setText('property-price',item.price);
  setText('property-title',item.title);
  setText('property-blurb',item.blurb);
  setText('agent-tagline',item.agentTag);setText('buyer-tagline',item.buyerTag);
  renderList('agent-tasks',item.agentTasks.slice(0,2));renderList('buyer-tasks',item.buyerTasks.slice(0,2));
  setText('agent-secret',item.agentSecret);setText('buyer-secret',item.buyerSecret);
  resetReveals();
  $('vocab-chips').replaceChildren(...item.words.map(word=>{const button=document.createElement('button');button.type='button';button.textContent=word;button.addEventListener('click',()=>showDefinition(word,button));return button;}));
  $('vocab-definition').textContent='Tap a word for a meaning and example.';
  $('deck-dots').replaceChildren(...listings[unit].map((listing,index)=>{const button=document.createElement('button');button.type='button';button.title=listing.title;button.setAttribute('aria-label',`Open property ${index+1}: ${listing.title}`);button.classList.toggle('active',index===position[unit]);button.setAttribute('aria-current',index===position[unit]?'true':'false');button.addEventListener('click',()=>navigate(index));return button;}));
  $('prev').disabled=position[unit]===0;
  $('next').textContent=position[unit]===5?'Start again':'Next property';
  $('phrase-list').replaceChildren(...phraseSets[unit].map(([label,phrase])=>{const div=document.createElement('div'),title=document.createElement('span'),text=document.createElement('p');title.textContent=label;text.textContent=phrase;div.append(title,text);return div;}));
}
function showDefinition(word,button){
  document.querySelectorAll('.vocab-chips button').forEach(b=>b.classList.toggle('selected',b===button));
  const [meaning,example]=vocabulary[word] || ['Use this expression accurately in your conversation.',''];
  const box=$('vocab-definition');const head=document.createElement('strong');const definition=document.createElement('span');const ex=document.createElement('em');
  head.textContent=word;definition.textContent=meaning;ex.textContent='“'+example+'”';box.replaceChildren(head,definition,ex);
}
function navigate(index){position[unit]=index;render();}
function switchUnit(newUnit,updateHash=true){unit=newUnit;render();if(updateHash){history.replaceState(null,'',`#unit${unit}`);}}
function toggleRole(role){
  const opening=$(`${role}-open`).getAttribute('aria-expanded')!=='true';
  for(const side of ['agent','buyer']){
    const show=side===role&&opening;
    $(`${side}-open`).setAttribute('aria-expanded',String(show));
    $(`${side}-brief`).hidden=!show;
    $(`${side}-open`).querySelector('.open-label').firstChild.textContent=show?'CLOSE BRIEF ':'OPEN BRIEF ';
    $(`${side}-open`).querySelector('.open-label span').textContent=show?'−':'+';
  }
}
function revealTwist(){
  const opening=$('twist-button').getAttribute('aria-expanded')!=='true';
  $('twist-button').setAttribute('aria-expanded',String(opening));
  $('twist-button').querySelector('span').textContent=opening?'✓':'✳';
  $('twist-content').hidden=!opening;
  $('twist-content').textContent=opening?listings[unit][position[unit]].twist:'';
}

$('tab-36').addEventListener('click',()=>switchUnit(36));
$('tab-37').addEventListener('click',()=>switchUnit(37));
document.querySelectorAll('.unit-tab').forEach(tab=>tab.addEventListener('keydown',event=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;event.preventDefault();const next=unit===36?37:36;switchUnit(event.key==='Home'?36:event.key==='End'?37:next);$(`tab-${unit}`).focus();}));
$('prev').addEventListener('click',()=>{if(position[unit]>0)navigate(position[unit]-1);});
$('next').addEventListener('click',()=>navigate((position[unit]+1)%6));
$('random').addEventListener('click',()=>{let n=Math.floor(Math.random()*5);if(n>=position[unit])n+=1;navigate(n);});
$('print').addEventListener('click',()=>window.print());
$('agent-open').addEventListener('click',()=>toggleRole('agent'));
$('buyer-open').addEventListener('click',()=>toggleRole('buyer'));
$('twist-button').addEventListener('click',revealTwist);
window.addEventListener('hashchange',()=>switchUnit(location.hash==='#unit37'?37:36,false));
render();
