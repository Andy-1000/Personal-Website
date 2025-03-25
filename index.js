function myFunction() {
  var x = document.getElementById("nav_bar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const $bigB = document.querySelector('.big');
const $smallB = document.querySelector('.small');
const $hoverables = document.querySelectorAll('a');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
  TweenMax.to($bigB, .4, {
    x: e.clientX - 15,
    y: e.clientY - 15
  })
  TweenMax.to($smallB, .1, {
    x: e.clientX + 5,
    y: e.clientY - 2
  })
}

function onMouseHover() {
  TweenMax.to($bigB, .3, {
    scale: 0.001
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigB, .3, {
    scale: 1
  })
}




const d = new Date();
let day = d.getDate();
let month = d.getMonth()+1;


if (day == 1 && month == 1) {
  document.getElementById("thought").innerHTML = "Life is the bane of my existence.";
  document.getElementById("quote").innerHTML = "Death smiles upon all of us. The best we can do is smile back";
  document.getElementById("quote_source").innerHTML = "&#8212; Gladiator &#127916;";
}

if (day == 2 && month == 1) {
  document.getElementById("thought").innerHTML = "Everyone becomes an orphan eventually. Unless they die first.";
  document.getElementById("quote").innerHTML = "The dignity of truth is lost with much protesting";
  document.getElementById("quote_source").innerHTML = "&#8212; Fahenheit 451, Ray Bradbury &#128214;";
}

if (day == 3 && month == 1) {
  document.getElementById("thought").innerHTML = "I can respect a critic that can give critical information.";
  document.getElementById("quote").innerHTML = "He had decided to live forever or die in the attempt";
  document.getElementById("quote_source").innerHTML = "&#8212; Catch-22, Joseph Heller &#128214;";
}

if (day == 4 && month == 1) {
  document.getElementById("thought").innerHTML = "When buying explosives you're guarenteed to get bang for your buck.";
  document.getElementById("quote").innerHTML = "The man who can buy anything he covets, values nothing he buys";
  document.getElementById("quote_source").innerHTML = "&#8212; Mark Twain &#128483;";
}

if (day == 5 && month == 1) {
  document.getElementById("thought").innerHTML = "I am sick and tired of being sick and tired.";
  document.getElementById("quote").innerHTML = "Drama is the poetry of conduct";
  document.getElementById("quote_source").innerHTML = "&#8212; A Gossip on Romance, R.L. Stevenson &#128195;";
}

if (day == 6 && month == 1) {
  document.getElementById("thought").innerHTML = "Sometimes the mind has a mind of its own.";
  document.getElementById("quote").innerHTML = "He was never one for protocol – it got in the way and often concealed nasty and dangerous things";
  document.getElementById("quote_source").innerHTML = "&#8212; Raising Steam, Terry Pratchett &#128214;";
}

if (day == 7 && month == 1) {
  document.getElementById("thought").innerHTML = "Criminals break the law. It's a policeman's job to put it back together again.";
  document.getElementById("quote").innerHTML = "Time is fun when you're having flies";
  document.getElementById("quote_source").innerHTML = "&#8212; Pizza Boy, Everything Everything &#127925;";
}

if (day == 8 && month == 1) {
  document.getElementById("thought").innerHTML = "What is a slug but a homeless snail?";
  document.getElementById("quote").innerHTML = "Every great thing in life starts with a bribe.";
  document.getElementById("quote_source").innerHTML = "&#8212; Kicking and Screaming &#127916;";
}

if (day == 9 && month == 1) {
  document.getElementById("thought").innerHTML = "The best advice is your own advice";
  document.getElementById("quote").innerHTML = "The man who has least fear for his own carcass, has most time to consider others";
  document.getElementById("quote_source").innerHTML = "&#8212; Aes Triplex, R.L. Stevenson &#128195;";
}

if (day == 10 && month == 1) {
  document.getElementById("thought").innerHTML = "Don't carry in a bag what you can keep in your pockets";
  document.getElementById("quote").innerHTML = "Victory has defeated you";
  document.getElementById("quote_source").innerHTML = "&#8212; The Dark Knight &#127916;";
}

if (day == 11 && month == 1) {
  document.getElementById("thought").innerHTML = "The purpose of writing is either to entertain or inform. Only the best writing is able to do both.";
  document.getElementById("quote").innerHTML = "Inside every living person is a dead person waiting to get out";
  document.getElementById("quote_source").innerHTML = "&#8212; Reaper Man, Terry Pratchett &#128214;";
}

if (day == 12 && month == 1) {
  document.getElementById("thought").innerHTML = "Insights are a peek through the keyhole to a mirror on the other side.";
  document.getElementById("quote").innerHTML = "Ignorance is the parent of fear";
  document.getElementById("quote_source").innerHTML = "&#8212; Moby Dick, Herman Melville &#128214;";
}

if (day == 13 && month == 1) {
  document.getElementById("thought").innerHTML = "To turn the world upside down you just have to turn yourself upside down.";
  document.getElementById("quote").innerHTML = "Quarrel with a man for cracking nuts, having no other reason but because thou hast hazel eyes";
  document.getElementById("quote_source").innerHTML = "&#8212; Romeo and Juliet, William Shakespeare &#128214;";
}

if (day == 14 && month == 1) {
  document.getElementById("thought").innerHTML = "For the giver of information, being wrong or right is a matter of dignity. For the receiver of information, being wrong or right is a matter of intergrity.";
  document.getElementById("quote").innerHTML = "It is assumed that the sceptic has no bias; whereas he has a very obvious bias in favour of skepticism";
  document.getElementById("quote_source").innerHTML = "&#8212; The Error of Impartiality, G.K. Chesterton &#128195;";
}

if (day == 15 && month == 1) {
  document.getElementById("thought").innerHTML = "Imagination abounds in an unbound mind. Reality languishes in the throes of every limit we place upon ourselves.";
  document.getElementById("quote").innerHTML = "The most valuable personal finance asset is not needing to impress anyone";
  document.getElementById("quote_source").innerHTML = "&#8212; Some Things I Think, Morgan Housel &#128187;";
}

if (day == 16 && month == 1) {
  document.getElementById("thought").innerHTML = "If there's nothing to see, then there's nothing to be afraid of. Unless you're afraid of the dark.";
  document.getElementById("quote").innerHTML = "The honest poor can sometimes forget poverty. The honest rich can never forget the poor";
  document.getElementById("quote_source").innerHTML = "&#8212; Cockneys and Their Jokes, G.K. Chesterton &#128195;";
}

if (day == 17 && month == 1) {
  document.getElementById("thought").innerHTML = "Colloquialisms are just a way of expressing the ever changing world around us.";
  document.getElementById("quote").innerHTML = "The moments that change your life happen suddenly, like the one where you die";
  document.getElementById("quote_source").innerHTML = "&#8212; Moving Pictures, Terry Pratchett &#128214;";
}

if (day == 18 && month == 1) {
  document.getElementById("thought").innerHTML = "Monotony is the enemy of wonder.";
  document.getElementById("quote").innerHTML = "Pigeonholes are best for pigeons";
  document.getElementById("quote_source").innerHTML = "&#8212; Which team?, Seth Godin &#128187;";
}

if (day == 19 && month == 1) {
  document.getElementById("thought").innerHTML = "They say dogs are man's best friend. I disagree. I say man is man's best friend.";
  document.getElementById("quote").innerHTML = "Come on Steve. We've got a diem to carpe!";
  document.getElementById("quote_source").innerHTML = "&#8212; Charlie with a chance of meatballs &#127916;";
}

if (day == 20 && month == 1) {
  document.getElementById("thought").innerHTML = "When it comes down to it, the only real fear is the fear of death.";
  document.getElementById("quote").innerHTML = '"You have made quite the splash" said the fish to the man with the lead weight tied to his feet';
  document.getElementById("quote_source").innerHTML = "&#8212; Night Watch, Terry Pratchett &#128214;";
}

if (day == 21 && month == 1) {
  document.getElementById("thought").innerHTML = "If you're blaming the tools, then build better tools yourself... others will probably appreciate you for it";
  document.getElementById("quote").innerHTML = 'A truth told with bad intent, beats all the lies you can invent';
  document.getElementById("quote_source").innerHTML = "&#8212; Paradise Lost, John Milton &#128214;";
}

if (day == 22 && month == 1) {
  document.getElementById("thought").innerHTML = "It becomes difficult to address the elephant in the room if the elephant has crushed the rooms inhabitants.";
  document.getElementById("quote").innerHTML = 'Conversation is, indeed, both the scene and instrument of friendship';
  document.getElementById("quote_source").innerHTML = "&#8212; Talk and Talkers, R.L. Stevenson &#128195;";
}

if (day == 23 && month == 1) {
  document.getElementById("thought").innerHTML = "The only reliable thing in life is death.";
  document.getElementById("quote").innerHTML = "Loyalty implies loyalty in misfortune; and when a soldier has accepted any nation's uniform he has already accepted its defeat.";
  document.getElementById("quote_source").innerHTML = "&#8212; Thoughts Around Koepenick, G.K. Chesterton &#128195;";
}

if (day == 24 && month == 1) {
  document.getElementById("thought").innerHTML = "Blamelessness only lasts as long as anonymity does.";
  document.getElementById("quote").innerHTML = "Action produces information";
  document.getElementById("quote_source").innerHTML = "&#8212; Brian Armstrong &#128483;";
}

if (day == 25 && month == 1) {
  document.getElementById("thought").innerHTML = "If you are wear a jumper, then no-one cares what you're wearing underneath. Or even if you're wearing anything underneath at all.";
  document.getElementById("quote").innerHTML = "If a lad does not learn in the streets, it is because he has no faculty of learning";
  document.getElementById("quote_source").innerHTML = "&#8212; An Apology for Idlers, R.L. Stevenson &#128195;";
}

if (day == 26 && month == 1) {
  document.getElementById("thought").innerHTML = "The primary impediment to contentment is comparison.";
  document.getElementById("quote").innerHTML = "A face only a mother could love, and then perhaps only if her sight was failing";
  document.getElementById("quote_source").innerHTML = "&#8212; Artemis Fowl, Eion Colfer &#128214;";
}

if (day == 27 && month == 1) {
  document.getElementById("thought").innerHTML = "Time is spent. Respect is earned.";
  document.getElementById("quote").innerHTML = "The day was burning to death";
  document.getElementById("quote_source").innerHTML = "&#8212; Perelandra, C.S. Lewis &#128214;";
}

if (day == 28 && month == 1) {
  document.getElementById("thought").innerHTML = "The early bird gets the worm. But the early worm gets eaten.";
  document.getElementById("quote").innerHTML = "Success is getting what you want. Happiness is wanting what you get";
  document.getElementById("quote_source").innerHTML = "&#8212; Warren Buffet &#128483;";
}

if (day == 29 && month == 1) {
  document.getElementById("thought").innerHTML = "What if rhubard was just embarrassed celery?";
  document.getElementById("quote").innerHTML = "If you drown, at least die knowing you were heading for shore";
  document.getElementById("quote_source").innerHTML = "&#8212; Fahrenheit 451, Ray Bradbury &#128214;";
}

if (day == 30 && month == 1) {
  document.getElementById("thought").innerHTML = "Brains mean nothing if you never do anything with them.";
  document.getElementById("quote").innerHTML = "Try to peel an onion; if you succeed there will be nothing left";
  document.getElementById("quote_source").innerHTML = "&#8212; The Inner Ring, C.S. Lewis &#128195;";
}

if (day == 31 && month == 1) {
  document.getElementById("thought").innerHTML = "The better you know someone, the better you can know them.";
  document.getElementById("quote").innerHTML = "He who sows hurry reaps indigestion";
  document.getElementById("quote_source").innerHTML = "&#8212; An Apology for Idlers, R.L. Stevenson &#128195;";
}


if (day == 1 && month == 2) {
  document.getElementById("thought").innerHTML = "Fun fact: wearing a cap backwards reduces the brain power of that individual by 49%";
  document.getElementById("quote").innerHTML = "The greatest risk is not taking one.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Alchemist, Paulo Coelho &#128214;";
}

if (day == 2 && month == 2) {
  document.getElementById("thought").innerHTML = "Life is short... for my enemies.";
  document.getElementById("quote").innerHTML = "There is a trick, or rather a knack to flying. The knack is falling without hitting the ground.";
  document.getElementById("quote_source").innerHTML = "&#8212; Life, the Universe and Everything, Douglas Adams &#128214;";
}

if (day == 3 && month == 2) {
  document.getElementById("thought").innerHTML = "Realistically, the fastest fast food is not McDonalds or KFC but sushi. You say what you want and then two seconds later you get it.";
  document.getElementById("quote").innerHTML = "How would you like to die? Old.";
  document.getElementById("quote_source").innerHTML = "&#8212; Tenet &#127916;";
}

if (day == 4 && month == 2) {
  document.getElementById("thought").innerHTML = "Psychiatrists are just institutionalised drug dealers.";
  document.getElementById("quote").innerHTML = "Reserving judgement is a matter of infinite hopes";
  document.getElementById("quote_source").innerHTML = "&#8212; The Great Gatsby, F. Scott Fitzgerald &#128214;";
}

if (day == 5 && month == 2) {
  document.getElementById("thought").innerHTML = "Cooking is just edible chemistry.";
  document.getElementById("quote").innerHTML = "Extraordinary claims required extraordinary evidence";
  document.getElementById("quote_source").innerHTML = "&#8212; 68 Bits of Unsolicited Advice, Kevin Kelly &#128483; ";
}

if (day == 6 && month == 2) {
  document.getElementById("thought").innerHTML = "If things are looking up for you, your natural inclination is to look down on people. So try not to.";
  document.getElementById("quote").innerHTML = "Write drunk, edit sober";
  document.getElementById("quote_source").innerHTML = "&#8212; Ernest Hemmingway &#128483;";
}

if (day == 7 && month == 2) {
  document.getElementById("thought").innerHTML = "Opinions are shards of a truth fractured into a thousand pieces.";
  document.getElementById("quote").innerHTML = "To be interesting, be interested";
  document.getElementById("quote_source").innerHTML = "&#8212; 68 Bits of Unsolicited Advice, Kevin Kelly &#128483;";
}

if (day == 8 && month == 2) {
  document.getElementById("thought").innerHTML = "The truth always comes out, whether hidden in plain sight or hiding behind a lie.";
  document.getElementById("quote").innerHTML = "Time is fun when you're having flies";
  document.getElementById("quote_source").innerHTML = "&#8212; Pizza Boy, Everything Everything &#127925;";
}

if (day == 9 && month == 2) {
  document.getElementById("thought").innerHTML = "If I thought of every person who did something stupid as a stupid person, everyone would be a stupid person. Including myself.";
  document.getElementById("quote").innerHTML = "You can make anything but there's nothing you can't break";
  document.getElementById("quote_source").innerHTML = "&#8212; The Lego Movie 2 &#127916;";
}

if (day == 10 && month == 2) {
  document.getElementById("thought").innerHTML = "Life is human experience in the context of time. Death is life that's run out of time.";
  document.getElementById("quote").innerHTML = "Loss and gain are brothers twain";
  document.getElementById("quote_source").innerHTML = "&#8212; How much land does a man need?, Leo Tolstoy &#128214;";
}

if (day == 11 && month == 2) {
  document.getElementById("thought").innerHTML = "When in the heat of the moment the key is to keep moving so you don't burn yourself.";
  document.getElementById("quote").innerHTML = "Ignorance is the parent of fear";
  document.getElementById("quote_source").innerHTML = "&#8212; Moby Dick, Herman Melville &#128214;";
}

if (day == 12 && month == 2) {
  document.getElementById("thought").innerHTML = "The more I read, the more I despair that every word I could possibly write has already been written. The more I write, the more I delight in the discovery and originality my words exole.";
  document.getElementById("quote").innerHTML = "He won't let the pain blot out the humor, no more'n he'll let the humor block out the pain";
  document.getElementById("quote_source").innerHTML = "&#8212; One Flew Over the Cuckoo's Nest, Ken Kensy &#128214;";
}

if (day == 13 && month == 2) {
  document.getElementById("thought").innerHTML = "They say work smarter not harder... But in the time it takes to figure out how to work smarter, you could have already finished the job.";
  document.getElementById("quote").innerHTML = "Perhaps a lunatic was simply a minority of one";
  document.getElementById("quote_source").innerHTML = "&#8212; 1984, George Orwell &#128214;";
}

if (day == 14 && month == 2) {
  document.getElementById("thought").innerHTML = "A lifetime is simply a sucession of days lived";
  document.getElementById("quote").innerHTML = "How you live is how you die";
  document.getElementById("quote_source").innerHTML = "&#8212; ???";
}

if (day == 15 && month == 2) {
  document.getElementById("thought").innerHTML = "Competence creates confidence";
  document.getElementById("quote").innerHTML = "'What did he die of?' 'Insubordination! How dare you ask such a question!'";
  document.getElementById("quote_source").innerHTML = "&#8212; All The Wrong Questions, Lemony Snicket &#128214;";
}

if (day == 16 && month == 2) {
  document.getElementById("thought").innerHTML = "Every second we are time travelling from moment to moment";
  document.getElementById("quote").innerHTML = "Don't put your trust in revolutions. They always come around again. That's why they're called revolutions. People die and nothing changes.";
  document.getElementById("quote_source").innerHTML = "&#8212; Night Watch, Terry Pratchett &#128214;";
}

if (day == 17 && month == 2) {
  document.getElementById("thought").innerHTML = "The key to contentment is considering anything you can't do redundant";
  document.getElementById("quote").innerHTML = "'Will he come between us?' 'Yes. Like a bridge he'll come between us.'";
  document.getElementById("quote_source").innerHTML = "&#8212; Enders Game: Speaker for the Dead, Orson Scott Card &#128214;";
}

if (day == 18 && month == 2) {
  document.getElementById("thought").innerHTML = "While on the way to the pot of gold at the end of the rainbow did you appreciate the beauty of the rainbow itself?";
  document.getElementById("quote").innerHTML = "The first man through the wall always gets bloody. Always";
  document.getElementById("quote_source").innerHTML = "&#8212; Moneyball &#127916;";
}

if (day == 19 && month == 2) {
  document.getElementById("thought").innerHTML = "Scrolling is just stroking";
  document.getElementById("quote").innerHTML = "The best measure of wealth is what you have minus what you want";
  document.getElementById("quote_source").innerHTML = "&#8212; Some Things I Think, Morgan Housel &#128187;";
}

if (day == 20 && month == 2) {
  document.getElementById("thought").innerHTML = "The purpose of writing is either to entertain or inform. The best writing is able to do both.";
  document.getElementById("quote").innerHTML = "This is the way the world ends, not with a bang but a whimper";
  document.getElementById("quote_source").innerHTML = "&#8212; The Hollow Men, T.S. Elliot &#128214;";
}

if (day == 21 && month == 2) {
  document.getElementById("thought").innerHTML = "On one hand, I have no money: how can I support myself? On the other hand, I have no money: what have I got to lose?";
  document.getElementById("quote").innerHTML = "A human truth, which is always very much a lie, hides as much of life as it displays";
  document.getElementById("quote_source").innerHTML = "&#8212; Books Which Have Influenced me, R.L. Stevenson &#128195;";
}

if (day == 22 && month == 2) {
  document.getElementById("thought").innerHTML = "With thoughts buzzing around my head like bees, what I want to know is this: How can I whack the bees nest?";
  document.getElementById("quote").innerHTML = "Loyalty implies loyalty in misfortune; and when a soldier has accepted any nation's uniform he has already accepted its defeat.";
  document.getElementById("quote_source").innerHTML = "&#8212; Thoughts Around Koepenick, G.K. Chesterton &#128195;";
}

if (day == 23 && month == 2) {
  document.getElementById("thought").innerHTML = "If life is a means to an end, the death is an end to a means";
  document.getElementById("quote").innerHTML = "I'm a politician... When I'm not kissing babies, I'm stealing their lollipops.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Hunt for Red October &#127916;";
}

if (day == 24 && month == 2) {
  document.getElementById("thought").innerHTML = "The less time left in your life the more the labours of that time should be evident";
  document.getElementById("quote").innerHTML = "The old idea that the joke was not good enough for the company has been superseded by the new aristocratic idea that the company was not worthy of the joke";
  document.getElementById("quote_source").innerHTML = "&#8212; Demagogues and Mystagogues, G.K. Chesterton &#128195;";
}

if (day == 25 && month == 2) {
  document.getElementById("thought").innerHTML = "The nature of questioning is such that one question will always breed more questions";
  document.getElementById("quote").innerHTML = "Pain is knowledge rushing in to fill a void, with great speed";
  document.getElementById("quote_source").innerHTML = "&#8212; Jerry Seinfield &#128483;";
}

if (day == 26 && month == 2) {
  document.getElementById("thought").innerHTML = "Money is dime a dozen";
  document.getElementById("quote").innerHTML = "Curiosity is itself a kind of originality; it's roughly to questions what originality is to answers";
  document.getElementById("quote_source").innerHTML = "&#8212; How to Do Great Work, Paul Graham &#128195;";
}

if (day == 27 && month == 2) {
  document.getElementById("thought").innerHTML = "There is no excuse for complaint - either remove the source of your annoyance or tough it out";
  document.getElementById("quote").innerHTML = "Ignorance is the parent of fear";
  document.getElementById("quote_source").innerHTML = "&#8212; Moby Dick, Herman Melville &#128214;";
}

if (day == 28 && month == 2) {
  document.getElementById("thought").innerHTML = "As soon as you can attach a name, you can attach blame";
  document.getElementById("quote").innerHTML = "A man who makes trouble for others, also makes trouble for himself";
  document.getElementById("quote_source").innerHTML = "&#8212; Things Fall Apart, Chinna Achebe &#128214;";
}

if (day == 29 && month == 2) {
  document.getElementById("thought").innerHTML = "It is far easier to create new and original ideas than to try and remember ideas you have forgotten";
  document.getElementById("quote").innerHTML = "Whoever holds the torch casts the darkest shadow";
  document.getElementById("quote_source").innerHTML = "&#8212; Scythe, Neal Shusterman &#128214;";
}


if (day == 1 && month == 3) {
  document.getElementById("thought").innerHTML = "If something can be used, then it can also be abused";
  document.getElementById("quote").innerHTML = "We are the penultimate... Plus one!";
  document.getElementById("quote_source").innerHTML = "&#8212; The Penguins of Madagascar &#127916;";
}

if (day == 2 && month == 3) {
  document.getElementById("thought").innerHTML = "If much has been said about a particular subject then your options are obvious: find something new to say, or find a different subject to talk about.";
  document.getElementById("quote").innerHTML = "Life ain't a moment it's a skillful opponent. That you learn to have to fight or just roll with.";
  document.getElementById("quote_source").innerHTML = "&#8212; Chapter 7, Ezra Collective &#127925;";
}

if (day == 3 && month == 3) {
  document.getElementById("thought").innerHTML = "Everything works as it should... until it doesn't";
  document.getElementById("quote").innerHTML = "A happy ending is just a story that hasn't ended yet.";
  document.getElementById("quote_source").innerHTML = "&#8212; Mr and Mrs Smith &#127916;";
}

if (day == 4 && month == 3) {
  document.getElementById("thought").innerHTML = "Are you the kind of person that thinks: what does the world have to offer me? Or are you the kind of person who thinks: what do I have to offer the world?";
  document.getElementById("quote").innerHTML = "Back in Philly... we had to save up to be poor";
  document.getElementById("quote_source").innerHTML = "&#8212; The Fresh Prince of Bel-Air &#128214;";
}

if (day == 5 && month == 3) {
  document.getElementById("thought").innerHTML = "How good you think you are at something is directly proportional to how good you think others are.";
  document.getElementById("quote").innerHTML = "Any time you can make someone else feel something, you have power over them";
  document.getElementById("quote_source").innerHTML = "&#8212; Words of Radiance, Brandon Sanderson &#128214;";
}

if (day == 6 && month == 3) {
  document.getElementById("thought").innerHTML = "The day we conquered nature is the day we were able to turn night into day, and day into night, with just the flick of a switch.";
  document.getElementById("quote").innerHTML = "I'm always truthful as well. So full of truth, in fact, that sometimes it squeezes the lies right out of my lips. There isn't a place for them inside, you see.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Way of Kings, Brandon Sanderson &#128214;";
}

if (day == 7 && month == 3) {
  document.getElementById("thought").innerHTML = "Repeating something you've already said makes it sound weaker";
  document.getElementById("quote").innerHTML = "Men spoke of the sinner breaking the law; but it was rather the law that broke him";
  document.getElementById("quote_source").innerHTML = "&#8212; Tom Jones and Morality, G.K. Chesterton &#128195;";
}

if (day == 8 && month == 3) {
  document.getElementById("thought").innerHTML = "What have you got to loose? In the grand scheme of things, not as much as you'd think.";
  document.getElementById("quote").innerHTML = "If I may lend a machete to this intellectual thicket...";
  document.getElementById("quote_source").innerHTML = "&#8212; Pirates of the Caribean: At World's End &#128214;";
}

if (day == 9 && month == 3) {
  document.getElementById("thought").innerHTML = "The difference between an introvert and an extrovert is initiative. Most people are willing enough to participate in conversation. But are you willing to start a conversation?";
  document.getElementById("quote").innerHTML = "Quarrel with a man for cracking nuts, having no other reason but because thou hast hazel eyes";
  document.getElementById("quote_source").innerHTML = "&#8212; Romeo and Juliet, William Shakespeare &#128214;";
}

if (day == 10 && month == 3) {
  document.getElementById("thought").innerHTML = "Above everything else, optimise for balance first.";
  document.getElementById("quote").innerHTML = "...stared at the offending journal with the air of a vegetarian who has found a caterpillar in his salad.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Prince and Betty, P.G. Wodehouse &#128214;";
}

if (day == 11 && month == 3) {
  document.getElementById("thought").innerHTML = "The most important piece of knowledge you can have is knowing that you know relatively nothing.";
  document.getElementById("quote").innerHTML = "If every fool wore a crown; I would be a king and not a clown";
  document.getElementById("quote_source").innerHTML = "&#8212; Let Me Down Easy, Paulo Nutini &#127925;";
}

if (day == 12 && month == 3) {
  document.getElementById("thought").innerHTML = "Life is a symphony, played to the beat of your heart and the rhythm of your mind.";
  document.getElementById("quote").innerHTML = "Question authority, because authority that cannot be questioned is just tyranny, and I will not accept tyranny, even that of heaven";
  document.getElementById("quote_source").innerHTML = "&#8212; Terry Pratchett &#128483;";
}

if (day == 13 && month == 3) {
  document.getElementById("thought").innerHTML = "You know why people you don't know are called 'strangers'? Because regardless of whatever you think they may be, whatever they truly are will always be... stranger.";
  document.getElementById("quote").innerHTML = "Before he can tell what cadences he truly prefers, the student should have tried all that are possible";
  document.getElementById("quote_source").innerHTML = "&#8212; Books Which Have Influenced me, R.L. Stevenson &#128195;";
}

if (day == 14 && month == 3) {
  document.getElementById("thought").innerHTML = "Multi-tasking = faulty-talking";
  document.getElementById("quote").innerHTML = "If the news is fake, imagine history";
  document.getElementById("quote_source").innerHTML = "&#8212; Balaji Srinivasan &#128483;";
}

if (day == 15 && month == 3) {
  document.getElementById("thought").innerHTML = "In the entirety of the human race, I wonder who is going to come first?";
  document.getElementById("quote").innerHTML = "'I suppose there are two views about everything,' said Mark. 'Eh? Two views? There are more than a dozen views about everything until you know the answer. Then there's never more than one...'";
  document.getElementById("quote_source").innerHTML = "&#8212; That Hideous Strength, C.S. Lewis &#128214;";
}

if (day == 16 && month == 3) {
  document.getElementById("thought").innerHTML = "The things we define in life have only as much meaning as we chose to attribute to them.";
  document.getElementById("quote").innerHTML = "Privilege just means 'private law'.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Truth, Terry Pratchett &#128214;";
}

if (day == 17 && month == 3) {
  document.getElementById("thought").innerHTML = "What is the thing you are putting off? Do it now.";
  document.getElementById("quote").innerHTML = "The best measure of wealth is what you have minus what you want.";
  document.getElementById("quote_source").innerHTML = "&#8212; Morgan Housel &#128483;";
}

if (day == 18 && month == 3) {
  document.getElementById("thought").innerHTML = "There's a fine line between abstraction and obscurity. Abstraction requires interpretation. Obscurity requires ignorance.";
  document.getElementById("quote").innerHTML = "Odd thing is &#8212; the word 'experiment' is unpopular, but not the word 'experimental'. You mustn't experiment on children; but offer the dear little kiddies free education in an experimental school... and it's all correct";
  document.getElementById("quote_source").innerHTML = "&#8212; That Hideous Strength, C.S. Lewis &#128214;";
}

if (day == 19 && month == 3) {
  document.getElementById("thought").innerHTML = "Be careful when using the word 'worthless'. Is it worthless in that it has minimal value? Or is it worthless in that it has nothing to attribute value to in the first place?";
  document.getElementById("quote").innerHTML = "If everyone fought fire with fire, the entire world would go up in smoke";
  document.getElementById("quote_source").innerHTML = "&#8212; Lemony Snicket &#128483;";
}

if (day == 20 && month == 3) {
  document.getElementById("thought").innerHTML = "One single thing is of no value unless it is compared to something else";
  document.getElementById("quote").innerHTML = "The spice of life is battle";
  document.getElementById("quote_source").innerHTML = "&#8212; Talk and Talkers, R.L. Stevenson &#128195;";
}

if (day == 21 && month == 3) {
  document.getElementById("thought").innerHTML = "By possessing an agile and able mind, do you not have a moral obligation to use it?";
  document.getElementById("quote").innerHTML = "All men that count have come to my conclusion; for if they come to your conclusion they do not count";
  document.getElementById("quote_source").innerHTML = "&#8212; The Error of Impartiality, G.K. Chesterton &#128195;";
}

if (day == 22 && month == 3) {
  document.getElementById("thought").innerHTML = "If you have a useful tool, you yourself become useful";
  document.getElementById("quote").innerHTML = "That remark's political, or what is much the same, it ain't true";
  document.getElementById("quote_source").innerHTML = "&#8212; Demagogues and Mystagogues, G.K. Chesterton &#128195;";
}

if (day == 23 && month == 3) {
  document.getElementById("thought").innerHTML = "Time is a means to an end, the end in question being life itself";
  document.getElementById("quote").innerHTML = "Give a man a fire and he’s warm for a day, but set fire to him and he’s warm for the rest of his life";
  document.getElementById("quote_source").innerHTML = "&#8212; Jingo, Terry Pratchett &#128214;";
}

if (day == 24 && month == 3) {
  document.getElementById("thought").innerHTML = "They say time is money. They are wrong. Time becomes money.";
  document.getElementById("quote").innerHTML = "...so, you're a psychologist. Are you going to read me? I'm an open book, and I think you'll find me quite the page turner";
  document.getElementById("quote_source").innerHTML = "&#8212; Johnny English: Reborn &#127916;";
}

if (day == 25 && month == 3) {
  document.getElementById("thought").innerHTML = "While there is pleasure to be had in leisure, there is fulfillment to be had in productivity";
  document.getElementById("quote").innerHTML = "You are pardoned... From life!";
  document.getElementById("quote_source").innerHTML = "&#8212; Thor: Ragnarok &#127916;";
}

if (day == 26 && month == 3) {
  document.getElementById("thought").innerHTML = "For what is life but human experience in the context of time?";
  document.getElementById("quote").innerHTML = "Gurls: Pretty please... Gru: The physical appearance of the please will make no difference to my response";
  document.getElementById("quote_source").innerHTML = "&#8212; Despicable Me &#127916;";
}

if (day == 27 && month == 3) {
  document.getElementById("thought").innerHTML = "To become the best you must first be able to replicate the best yourself";
  document.getElementById("quote").innerHTML = "Blessed are they who have not seen and yet have believed: a passage which some have considered as a prophecy of modern journalism";
  document.getElementById("quote_source").innerHTML = "&#8212; Spiritualism, G.K. Chesterton &#128195;";
}

if (day == 28 && month == 3) {
  document.getElementById("thought").innerHTML = "The centerpiece of a garden is nothing without the framing of landscape around it";
  document.getElementById("quote").innerHTML = "For a special agent, you're not having a very special day, are you?";
  document.getElementById("quote_source").innerHTML = "&#8212; The Man from UNCLE &#127916;";
}

if (day == 29 && month == 3) {
  document.getElementById("thought").innerHTML = "This is the true power of inspiration: to not only inspire you, but to give you ideas.";
  document.getElementById("quote").innerHTML = "If it is not true that a divine being fell, then we can only say that one of the animals went entirely off its head";
  document.getElementById("quote_source").innerHTML = "&#8212; Wine When it is Red, G.K. Chesterton &#128195;";
}

if (day == 30 && month == 3) {
  document.getElementById("thought").innerHTML = "The burden of an idea is to be expressed.";
  document.getElementById("quote").innerHTML = "Thor: What is he doing? Random: He's taking minutes. Thor: Well precious minutes we don't have!";
  document.getElementById("quote_source").innerHTML = "&#8212; Thor: Love and Thunder &#127916;";
}

if (day == 31 && month == 3) {
  document.getElementById("thought").innerHTML = "A story is the difference between a number and a name.";
  document.getElementById("quote").innerHTML = "An eye for an eye leaves the whole world blind";
  document.getElementById("quote_source").innerHTML = "&#8212; Mahatma Gandhi &#128483;";
}


if (day == 1 && month == 4) {
  document.getElementById("thought").innerHTML = "Every story is a human story. Though we may anthropomorphise, all we really see is ourselves.";
  document.getElementById("quote").innerHTML = "The foundation of war is economics";
  document.getElementById("quote_source").innerHTML = "&#8212; Elon Musk &#128483;";
}

if (day == 2 && month == 4) {
  document.getElementById("thought").innerHTML = "Luck is scarce - that's what makes it so valuable.";
  document.getElementById("quote").innerHTML = "Lofty goals... aim for the sun. That way if you miss, at least your arrow will fall far away, and the person it kills will likely be someone you don't know.";
  document.getElementById("quote_source").innerHTML = "&#8212; Oathbringer, Brandon Sanderson &#128214;";
}

if (day == 3 && month == 4) {
  document.getElementById("thought").innerHTML = "Passion is when you spend hours doing something, and yet it only feels like minutes";
  document.getElementById("quote").innerHTML = "Time's arrow is the loss of fidelity in compression. A sketch, not a photograph. A memory is a re-creation, precious because it is both more and less than the original.";
  document.getElementById("quote_source").innerHTML = "&#8212; An Advanced Readers' Picture Book of Comparative Cognition, Ken Liu &#128214;";
}

if (day == 4 && month == 4) {
  document.getElementById("thought").innerHTML = "If originality is an entirely new way of doing things, then authenticity is taking this new way of doing things and putting your own personal spin on it";
  document.getElementById("quote").innerHTML = "Life has a way of talking to the future. It’s called memory.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Overstory, Richard Powers &#128214;";
}

if (day == 5 && month == 4) {
  document.getElementById("thought").innerHTML = "The easiest part of any project is working on it. The hardest part of any project is ending it.";
  document.getElementById("quote").innerHTML = "- Don't play dumb with me. - No, I am dumb. Most of the time I'm playing smart.";
  document.getElementById("quote_source").innerHTML = "&#8212; The West Wing &#127916;";
}

if (day == 6 && month == 4) {
  document.getElementById("thought").innerHTML = "Dedication isn't just sticking to a job, dedication is getting the job done.";
  document.getElementById("quote").innerHTML = "I only went out for a walk and finally concluded to stay out till sundown, for going out, I found, was really going in.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Overstory, Richard Powers &#128214;";
}

if (day == 7 && month == 4) {
  document.getElementById("thought").innerHTML = "Most of the time people are too focused on themselves to purposefully act either for or against you";
  document.getElementById("quote").innerHTML = "The ultimate weakness of violence is that it is a descending spiral. Returning violence with violence only multiplies violence adding deeper darkness to a night already devoid of stars.";
  document.getElementById("quote_source").innerHTML = "&#8212; Dr King &#128483;";
}

if (day == 8 && month == 4) {
  document.getElementById("thought").innerHTML = "Is kindness still kindness if you ask for something in return?";
  document.getElementById("quote").innerHTML = "Rumour is information distilled so finely that it can filter through anything";
  document.getElementById("quote_source").innerHTML = "&#8212; Feet of Clay, Terry Pratchett &#128214;";
}

if (day == 9 && month == 4) {
  document.getElementById("thought").innerHTML = "To live is to die, just a little bit every second";
  document.getElementById("quote").innerHTML = "Explaining an allegory is like dissecting a frog. The more you dissect it the more it dies.";
  document.getElementById("quote_source").innerHTML = "&#8212; The West Wing &#127916;";
}

if (day == 10 && month == 4) {
  document.getElementById("thought").innerHTML = "If you're thinking of alternatives, then you should probably pursue those alternatives.";
  document.getElementById("quote").innerHTML = "Happiness is that feeling you get right before you need more happiness";
  document.getElementById("quote_source").innerHTML = "&#8212; Don Draper &#128483;";
}

if (day == 11 && month == 4) {
  document.getElementById("thought").innerHTML = "For a surprise is not a surprise at all without anything preceding it";
  document.getElementById("quote").innerHTML = "Creativity is the essence of that which is not mechanical";
  document.getElementById("quote_source").innerHTML = "&#8212; Godel, Escher, Bach: an Eternal Golden Braid, Douglas Hofstadter &#128214";
}


if (day == 12 && month == 4) {
  document.getElementById("thought").innerHTML = "Life is harder when you're tired";
  document.getElementById("quote").innerHTML = "It's a mess when strange events smack into the windscreen of a resolutely rational mind.";
  document.getElementById("quote_source").innerHTML = "&#8212; Sourdough, Robin Sloun &#128214;";
}

if (day == 13 && month == 4) {
  document.getElementById("thought").innerHTML = "Nothing made of human hands will last the infinity of time";
  document.getElementById("quote").innerHTML = "Where friendship fails, hatred will often force a way";
  document.getElementById("quote_source").innerHTML = "&#8212; Oliver Twist, Charles Dickens &#128214;";
}

if (day == 14 && month == 4) {
  document.getElementById("thought").innerHTML = "Willpower is the ability to overcome the instincts of the body";
  document.getElementById("quote").innerHTML = "Any explanation of a work of art must be found in it, not taken to it";
  document.getElementById("quote_source").innerHTML = "&#8212; Roger Egbert &#128187;";
}

if (day == 15 && month == 4) {
  document.getElementById("thought").innerHTML = "Painting is art for the eyes. Music is art for the ears. Art is human creativity embodied.";
  document.getElementById("quote").innerHTML = "Don’t fear failure. Fear average.";
  document.getElementById("quote_source").innerHTML = "&#8212; 68 Bits of Unsolicited Advice, Kevin Kelly &#128483;";
}

if (day == 16 && month == 4) {
  document.getElementById("thought").innerHTML = "Just because you have a good idea, doesn't mean you should use it. An idea is like a puzzle piece; it should only be used if it fits the pieces around it.";
  document.getElementById("quote").innerHTML = "If coders don’t run the world, they run the things that run the world.";
  document.getElementById("quote_source").innerHTML = "&#8212; What is Code, Paul Ford &#128187;";
}

if (day == 17 && month == 4) {
  document.getElementById("thought").innerHTML = "Insights lie at the intersection of ideas";
  document.getElementById("quote").innerHTML = "You can either win big or go home... and live with your mom for the rest of your life";
  document.getElementById("quote_source").innerHTML = "&#8212; Molly's Game &#127916;";
}

if (day == 18 && month == 4) {
  document.getElementById("thought").innerHTML = "Magnanimous statements are ridiculous if they are not recommendations";
  document.getElementById("quote").innerHTML = "More strictly, and mathematically, nameability ends where countability ends ";
  document.getElementById("quote_source").innerHTML = "&#8212; Vastness, Venkatesh Rao &#128187;";
}

if (day == 19 && month == 4) {
  document.getElementById("thought").innerHTML = "More insight comes from the resolution of a paradox than any two pieces of knowledge put together";
  document.getElementById("quote").innerHTML = "Writing converts your ideas from vague to bad. But that's a step forward, because once you can see the brokenness, you can fix it.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Best Essay, Paul Graham &#128187;";
}

if (day == 20 && month == 4) {
  document.getElementById("thought").innerHTML = "Never join a battle unless you know exactly what it is you're fighting for";
  document.getElementById("quote").innerHTML = "With some movies, you begin to notice implausibilities. With others, you begin to admire them";
  document.getElementById("quote_source").innerHTML = "&#8212; Roger Egbert &#128187;";
}




if (day == 21 && month == 4) {
  document.getElementById("thought").innerHTML = "The purpose of writing is either to entertain or inform. Only the best writing is able to do both.";
  document.getElementById("quote").innerHTML = "Inside every living person is a dead person waiting to get out";
  document.getElementById("quote_source").innerHTML = "&#8212; Reaper Man, Terry Pratchett &#128214;";
}

if (day == 22 && month == 4) {
  document.getElementById("thought").innerHTML = "Insights are a peek through the keyhole to a mirror on the other side.";
  document.getElementById("quote").innerHTML = "Ignorance is the parent of fear";
  document.getElementById("quote_source").innerHTML = "&#8212; Moby Dick, Herman Melville &#128214;";
}

if (day == 23 && month == 4) {
  document.getElementById("thought").innerHTML = "To turn the world upside down you just have to turn yourself upside down.";
  document.getElementById("quote").innerHTML = "Quarrel with a man for cracking nuts, having no other reason but because thou hast hazel eyes";
  document.getElementById("quote_source").innerHTML = "&#8212; Romeo and Juliet, William Shakespeare &#128214;";
}

if (day == 24 && month == 4) {
  document.getElementById("thought").innerHTML = "For the giver of information, being wrong or right is a matter of dignity. For the receiver of information, being wrong or right is a matter of intergrity.";
  document.getElementById("quote").innerHTML = "It is assumed that the sceptic has no bias; whereas he has a very obvious bias in favour of skepticism";
  document.getElementById("quote_source").innerHTML = "&#8212; The Error of Impartiality, G.K. Chesterton &#128195;";
}

if (day == 25 && month == 4) {
  document.getElementById("thought").innerHTML = "Imagination abounds in an unbound mind. Reality languishes in the throes of every limit we place upon ourselves.";
  document.getElementById("quote").innerHTML = "The most valuable personal finance asset is not needing to impress anyone";
  document.getElementById("quote_source").innerHTML = "&#8212; Some Things I Think, Morgan Housel &#128187;";
}

if (day == 26 && month == 4) {
  document.getElementById("thought").innerHTML = "If there's nothing to see, then there's nothing to be afraid of. Unless you're afraid of the dark.";
  document.getElementById("quote").innerHTML = "The honest poor can sometimes forget poverty. The honest rich can never forget the poor";
  document.getElementById("quote_source").innerHTML = "&#8212; Cockneys and Their Jokes, G.K. Chesterton &#128195;";
}

if (day == 27 && month == 4) {
  document.getElementById("thought").innerHTML = "Colloquialisms are just a way of expressing the ever changing world around us.";
  document.getElementById("quote").innerHTML = "The moments that change your life happen suddenly, like the one where you die";
  document.getElementById("quote_source").innerHTML = "&#8212; Moving Pictures, Terry Pratchett &#128214;";
}

if (day == 28 && month == 4) {
  document.getElementById("thought").innerHTML = "Monotony is the enemy of wonder.";
  document.getElementById("quote").innerHTML = "Pigeonholes are best for pigeons";
  document.getElementById("quote_source").innerHTML = "&#8212; Which team?, Seth Godin &#128187;";
}

if (day == 29 && month == 4) {
  document.getElementById("thought").innerHTML = "They say dogs are man's best friend. I disagree. I say man is man's best friend.";
  document.getElementById("quote").innerHTML = "Come on Steve. We've got a diem to carpe!";
  document.getElementById("quote_source").innerHTML = "&#8212; Charlie with a chance of meatballs &#127916;";
}











if (day == 30 && month == 4) {
  document.getElementById("thought").innerHTML = "When it comes down to it, the only real fear is the fear of death.";
  document.getElementById("quote").innerHTML = '"You have made quite the splash" said the fish to the man with the lead weight tied to his feet';
  document.getElementById("quote_source").innerHTML = "&#8212; Night Watch, Terry Pratchett &#128214;";
}

if (day == 1 && month == 5) {
  document.getElementById("thought").innerHTML = "If you're blaming the tools, then build better tools yourself... others will probably appreciate you for it";
  document.getElementById("quote").innerHTML = 'A truth told with bad intent, beats all the lies you can invent';
  document.getElementById("quote_source").innerHTML = "&#8212; Paradise Lost, John Milton &#128214;";
}

if (day == 2 && month == 5) {
  document.getElementById("thought").innerHTML = "It becomes difficult to address the elephant in the room if the elephant has crushed the rooms inhabitants.";
  document.getElementById("quote").innerHTML = 'Conversation is, indeed, both the scene and instrument of friendship';
  document.getElementById("quote_source").innerHTML = "&#8212; Talk and Talkers, R.L. Stevenson &#128195;";
}

if (day == 3 && month == 5) {
  document.getElementById("thought").innerHTML = "The only reliable thing in life is death.";
  document.getElementById("quote").innerHTML = "Loyalty implies loyalty in misfortune; and when a soldier has accepted any nation's uniform he has already accepted its defeat.";
  document.getElementById("quote_source").innerHTML = "&#8212; Thoughts Around Koepenick, G.K. Chesterton &#128195;";
}

if (day == 4 && month == 5) {
  document.getElementById("thought").innerHTML = "Blamelessness only lasts as long as anonymity does.";
  document.getElementById("quote").innerHTML = "Action produces information";
  document.getElementById("quote_source").innerHTML = "&#8212; Brian Armstrong &#128483;";
}

if (day == 5 && month == 5) {
  document.getElementById("thought").innerHTML = "If you are wear a jumper, then no-one cares what you're wearing underneath. Or even if you're wearing anything underneath at all.";
  document.getElementById("quote").innerHTML = "If a lad does not learn in the streets, it is because he has no faculty of learning";
  document.getElementById("quote_source").innerHTML = "&#8212; An Apology for Idlers, R.L. Stevenson &#128195;";
}

if (day == 6 && month == 5) {
  document.getElementById("thought").innerHTML = "The primary impediment to contentment is comparison.";
  document.getElementById("quote").innerHTML = "A face only a mother could love, and then perhaps only if her sight was failing";
  document.getElementById("quote_source").innerHTML = "&#8212; Artemis Fowl, Eion Colfer &#128214;";
}

if (day == 7 && month == 5) {
  document.getElementById("thought").innerHTML = "Time is spent. Respect is earned.";
  document.getElementById("quote").innerHTML = "The day was burning to death";
  document.getElementById("quote_source").innerHTML = "&#8212; Perelandra, C.S. Lewis &#128214;";
}

if (day == 8 && month == 5) {
  document.getElementById("thought").innerHTML = "The early bird gets the worm. But the early worm gets eaten.";
  document.getElementById("quote").innerHTML = "Success is getting what you want. Happiness is wanting what you get";
  document.getElementById("quote_source").innerHTML = "&#8212; Warren Buffet &#128483;";
}

if (day == 9 && month == 5) {
  document.getElementById("thought").innerHTML = "What if rhubard was just embarrassed celery?";
  document.getElementById("quote").innerHTML = "If you drown, at least die knowing you were heading for shore";
  document.getElementById("quote_source").innerHTML = "&#8212; Fahrenheit 451, Ray Bradbury &#128214;";
}

if (day == 10 && month == 5) {
  document.getElementById("thought").innerHTML = "Brains mean nothing if you never do anything with them.";
  document.getElementById("quote").innerHTML = "Try to peel an onion; if you succeed there will be nothing left";
  document.getElementById("quote_source").innerHTML = "&#8212; The Inner Ring, C.S. Lewis &#128195;";
}

if (day == 11 && month == 5) {
  document.getElementById("thought").innerHTML = "The better you know someone, the better you can know them.";
  document.getElementById("quote").innerHTML = "He who sows hurry reaps indigestion";
  document.getElementById("quote_source").innerHTML = "&#8212; An Apology for Idlers, R.L. Stevenson &#128195;";
}


if (day == 12 && month == 5) {
  document.getElementById("thought").innerHTML = "Fun fact: wearing a cap backwards reduces the brain power of that individual by 49%";
  document.getElementById("quote").innerHTML = "The greatest risk is not taking one.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Alchemist, Paulo Coelho &#128214;";
}

if (day == 13 && month == 5) {
  document.getElementById("thought").innerHTML = "Life is short... for my enemies.";
  document.getElementById("quote").innerHTML = "There is a trick, or rather a knack to flying. The knack is falling without hitting the ground.";
  document.getElementById("quote_source").innerHTML = "&#8212; Life, the Universe and Everything, Douglas Adams &#128214;";
}

if (day == 14 && month == 5) {
  document.getElementById("thought").innerHTML = "Realistically, the fastest fast food is not McDonalds or KFC but sushi. You say what you want and then two seconds later you get it.";
  document.getElementById("quote").innerHTML = "How would you like to die? Old.";
  document.getElementById("quote_source").innerHTML = "&#8212; Tenet &#127916;";
}

if (day == 15 && month == 5) {
  document.getElementById("thought").innerHTML = "Psychiatrists are just institutionalised drug dealers.";
  document.getElementById("quote").innerHTML = "Reserving judgement is a matter of infinite hopes";
  document.getElementById("quote_source").innerHTML = "&#8212; The Great Gatsby, F. Scott Fitzgerald &#128214;";
}

if (day == 16 && month == 5) {
  document.getElementById("thought").innerHTML = "Cooking is just edible chemistry.";
  document.getElementById("quote").innerHTML = "Extraordinary claims required extraordinary evidence";
  document.getElementById("quote_source").innerHTML = "&#8212; 68 Bits of Unsolicited Advice, Kevin Kelly &#128483; ";
}

if (day == 17 && month == 5) {
  document.getElementById("thought").innerHTML = "If things are looking up for you, your natural inclination is to look down on people. So try not to.";
  document.getElementById("quote").innerHTML = "Write drunk, edit sober";
  document.getElementById("quote_source").innerHTML = "&#8212; Ernest Hemmingway &#128483;";
}

if (day == 18 && month == 5) {
  document.getElementById("thought").innerHTML = "Opinions are shards of a truth fractured into a thousand pieces.";
  document.getElementById("quote").innerHTML = "To be interesting, be interested";
  document.getElementById("quote_source").innerHTML = "&#8212; 68 Bits of Unsolicited Advice, Kevin Kelly &#128483;";
}

if (day == 19 && month == 5) {
  document.getElementById("thought").innerHTML = "The truth always comes out, whether hidden in plain sight or hiding behind a lie.";
  document.getElementById("quote").innerHTML = "Time is fun when you're having flies";
  document.getElementById("quote_source").innerHTML = "&#8212; Pizza Boy, Everything Everything &#127925;";
}

if (day == 20 && month == 5) {
  document.getElementById("thought").innerHTML = "If I thought of every person who did something stupid as a stupid person, everyone would be a stupid person. Including myself.";
  document.getElementById("quote").innerHTML = "You can make anything but there's nothing you can't break";
  document.getElementById("quote_source").innerHTML = "&#8212; The Lego Movie 2 &#127916;";
}

if (day == 21 && month == 5) {
  document.getElementById("thought").innerHTML = "Life is human experience in the context of time. Death is life that's run out of time.";
  document.getElementById("quote").innerHTML = "Loss and gain are brothers twain";
  document.getElementById("quote_source").innerHTML = "&#8212; How much land does a man need?, Leo Tolstoy &#128214;";
}

if (day == 22 && month == 5) {
  document.getElementById("thought").innerHTML = "When in the heat of the moment the key is to keep moving so you don't burn yourself.";
  document.getElementById("quote").innerHTML = "Ignorance is the parent of fear";
  document.getElementById("quote_source").innerHTML = "&#8212; Moby Dick, Herman Melville &#128214;";
}

if (day == 23 && month == 5) {
  document.getElementById("thought").innerHTML = "The more I read, the more I despair that every word I could possibly write has already been written. The more I write, the more I delight in the discovery and originality my words exole.";
  document.getElementById("quote").innerHTML = "He won't let the pain blot out the humor, no more'n he'll let the humor block out the pain";
  document.getElementById("quote_source").innerHTML = "&#8212; One Flew Over the Cuckoo's Nest, Ken Kensy &#128214;";
}

if (day == 24 && month == 5) {
  document.getElementById("thought").innerHTML = "They say work smarter not harder... But in the time it takes to figure out how to work smarter, you could have already finished the job.";
  document.getElementById("quote").innerHTML = "Perhaps a lunatic was simply a minority of one";
  document.getElementById("quote_source").innerHTML = "&#8212; 1984, George Orwell &#128214;";
}

if (day == 25 && month == 5) {
  document.getElementById("thought").innerHTML = "A lifetime is simply a sucession of days lived";
  document.getElementById("quote").innerHTML = "How you live is how you die";
  document.getElementById("quote_source").innerHTML = "&#8215; ???";
}

if (day == 26 && month == 5) {
  document.getElementById("thought").innerHTML = "Competence creates confidence";
  document.getElementById("quote").innerHTML = "'What did he die of?' 'Insubordination! How dare you ask such a question!'";
  document.getElementById("quote_source").innerHTML = "&#8212; All The Wrong Questions, Lemony Snicket &#128214;";
}

if (day == 27 && month == 5) {
  document.getElementById("thought").innerHTML = "The key to contentment is considering anything you can't do redundant";
  document.getElementById("quote").innerHTML = "'Will he come between us?' 'Yes. Like a bridge he'll come between us.'";
  document.getElementById("quote_source").innerHTML = "&#8212; Enders Game: Speaker for the Dead, Orson Scott Card &#128214;";
}

if (day == 28 && month == 5) {
  document.getElementById("thought").innerHTML = "While on the way to the pot of gold at the end of the rainbow did you appreciate the beauty of the rainbow itself?";
  document.getElementById("quote").innerHTML = "The first man through the wall always gets bloody. Always";
  document.getElementById("quote_source").innerHTML = "&#8212; Moneyball &#127916;";
}

if (day == 29 && month == 5) {
  document.getElementById("thought").innerHTML = "Scrolling is just stroking";
  document.getElementById("quote").innerHTML = "The best measure of wealth is what you have minus what you want";
  document.getElementById("quote_source").innerHTML = "&#8212; Some Things I Think, Morgan Housel &#128187;";
}

if (day == 30 && month == 5) {
  document.getElementById("thought").innerHTML = "The purpose of writing is either to entertain or inform. The best writing is able to do both.";
  document.getElementById("quote").innerHTML = "This is the way the world ends, not with a bang but a whimper";
  document.getElementById("quote_source").innerHTML = "&#8212; The Hollow Men, T.S. Elliot &#128214;";
}

if (day == 31 && month == 5) {
  document.getElementById("thought").innerHTML = "On one hand, I have no money: how can I support myself? On the other hand, I have no money: what have I got to lose?";
  document.getElementById("quote").innerHTML = "A human truth, which is always very much a lie, hides as much of life as it displays";
  document.getElementById("quote_source").innerHTML = "&#8212; Books Which Have Influenced me, R.L. Stevenson &#128195;";
}



if (day == 1 && month == 6) {
  document.getElementById("thought").innerHTML = "With thoughts buzzing around my head like bees, what I want to know is this: How can I whack the bees nest?";
  document.getElementById("quote").innerHTML = "Loyalty implies loyalty in misfortune; and when a soldier has accepted any nation's uniform he has already accepted its defeat.";
  document.getElementById("quote_source").innerHTML = "&#8212; Thoughts Around Koepenick, G.K. Chesterton &#128195;";
}

if (day == 2 && month == 6) {
  document.getElementById("thought").innerHTML = "If life is a means to an end, the death is an end to a means";
  document.getElementById("quote").innerHTML = "I'm a politician... When I'm not kissing babies, I'm stealing their lollipops.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Hunt for Red October &#127916;";
}

if (day == 3 && month == 6) {
  document.getElementById("thought").innerHTML = "The less time left in your life the more the labours of that time should be evident";
  document.getElementById("quote").innerHTML = "The old idea that the joke was not good enough for the company has been superseded by the new aristocratic idea that the company was not worthy of the joke";
  document.getElementById("quote_source").innerHTML = "&#8212; Demagogues and Mystagogues, G.K. Chesterton &#128195;";
}

if (day == 4 && month == 6) {
  document.getElementById("thought").innerHTML = "The nature of questioning is such that one question will always breed more questions";
  document.getElementById("quote").innerHTML = "Pain is knowledge rushing in to fill a void, with great speed";
  document.getElementById("quote_source").innerHTML = "&#8212; Jerry Seinfield &#128483;";
}

if (day == 5 && month == 5) {
  document.getElementById("thought").innerHTML = "Money is dime a dozen";
  document.getElementById("quote").innerHTML = "Curiosity is itself a kind of originality; it's roughly to questions what originality is to answers";
  document.getElementById("quote_source").innerHTML = "&#8212; How to Do Great Work, Paul Graham &#128195;";
}

if (day == 6 && month == 6) {
  document.getElementById("thought").innerHTML = "There is no excuse for complaint - either remove the source of your annoyance or tough it out";
  document.getElementById("quote").innerHTML = "Ignorance is the parent of fear";
  document.getElementById("quote_source").innerHTML = "&#8212; Moby Dick, Herman Melville &#128214;";
}

if (day == 7 && month == 6) {
  document.getElementById("thought").innerHTML = "As soon as you can attach a name, you can attach blame";
  document.getElementById("quote").innerHTML = "A man who makes trouble for others, also makes trouble for himself";
  document.getElementById("quote_source").innerHTML = "&#8212; Things Fall Apart, Chinna Achebe &#128214;";
}

if (day == 8 && month == 6) {
  document.getElementById("thought").innerHTML = "It is far easier to create new and original ideas than to try and remember ideas you have forgotten";
  document.getElementById("quote").innerHTML = "Whoever holds the torch casts the darkest shadow";
  document.getElementById("quote_source").innerHTML = "&#8212; Scythe, Neal Shusterman &#128214;";
}

if (day == 9 && month == 6) {
  document.getElementById("thought").innerHTML = "If something can be used, then it can also be abused";
  document.getElementById("quote").innerHTML = "We are the penultimate... Plus one!";
  document.getElementById("quote_source").innerHTML = "&#8212; The Penguins of Madagascar &#127916;";
}

if (day == 10 && month == 6) {
  document.getElementById("thought").innerHTML = "If much has been said about a particular subject then your options are obvious: find something new to say, or find a different subject to talk about.";
  document.getElementById("quote").innerHTML = "Life ain't a moment it's a skillful opponent. That you learn to have to fight or just roll with.";
  document.getElementById("quote_source").innerHTML = "&#8212; Chapter 7, Ezra Collective &#127925;";
}

if (day == 11 && month == 6) {
  document.getElementById("thought").innerHTML = "Everything works as it should... until it doesn't";
  document.getElementById("quote").innerHTML = "A happy ending is just a story that hasn't ended yet.";
  document.getElementById("quote_source").innerHTML = "&#8212; Mr and Mrs Smith &#127916;";
}

if (day == 12 && month == 6) {
  document.getElementById("thought").innerHTML = "Are you the kind of person that thinks: what does the world have to offer me? Or are you the kind of person who thinks: what do I have to offer the world?";
  document.getElementById("quote").innerHTML = "Back in Philly... we had to save up to be poor";
  document.getElementById("quote_source").innerHTML = "&#8212; The Fresh Prince of Bel-Air &#128214;";
}

if (day == 13 && month == 6) {
  document.getElementById("thought").innerHTML = "How good you think you are at something is directly proportional to how good you think others are.";
  document.getElementById("quote").innerHTML = "Any time you can make someone else feel something, you have power over them";
  document.getElementById("quote_source").innerHTML = "&#8212; Words of Radiance, Brandon Sanderson &#128214;";
}

if (day == 14 && month == 6) {
  document.getElementById("thought").innerHTML = "The day we conquered nature is the day we were able to turn night into day, and day into night, with just the flick of a switch.";
  document.getElementById("quote").innerHTML = "I'm always truthful as well. So full of truth, in fact, that sometimes it squeezes the lies right out of my lips. There isn't a place for them inside, you see.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Way of Kings, Brandon Sanderson &#128214;";
}

if (day == 15 && month == 6) {
  document.getElementById("thought").innerHTML = "Repeating something you've already said makes it sound weaker";
  document.getElementById("quote").innerHTML = "Men spoke of the sinner breaking the law; but it was rather the law that broke him";
  document.getElementById("quote_source").innerHTML = "&#8212; Tom Jones and Morality, G.K. Chesterton &#128195;";
}

if (day == 16 && month == 6) {
  document.getElementById("thought").innerHTML = "What have you got to loose? In the grand scheme of things, not as much as you'd think.";
  document.getElementById("quote").innerHTML = "If I may lend a machete to this intellectual thicket...";
  document.getElementById("quote_source").innerHTML = "&#8212; Pirates of the Caribean: At World's End &#128214;";
}

if (day == 17 && month == 6) {
  document.getElementById("thought").innerHTML = "The difference between an introvert and an extrovert is initiative. Most people are willing enough to participate in conversation. But are you willing to start a conversation?";
  document.getElementById("quote").innerHTML = "Quarrel with a man for cracking nuts, having no other reason but because thou hast hazel eyes";
  document.getElementById("quote_source").innerHTML = "&#8212; Romeo and Juliet, William Shakespeare &#128214;";
}

if (day == 18 && month == 6) {
  document.getElementById("thought").innerHTML = "Above everything else, optimise for balance first.";
  document.getElementById("quote").innerHTML = "...stared at the offending journal with the air of a vegetarian who has found a caterpillar in his salad.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Prince and Betty, P.G. Wodehouse &#128214;";
}

if (day == 19 && month == 6) {
  document.getElementById("thought").innerHTML = "The most important piece of knowledge you can have is knowing that you know relatively nothing.";
  document.getElementById("quote").innerHTML = "If every fool wore a crown; I would be a king and not a clown";
  document.getElementById("quote_source").innerHTML = "&#8212; Let Me Down Easy, Paulo Nutini &#127925;";
}

if (day == 20 && month == 6) {
  document.getElementById("thought").innerHTML = "Life is a symphony, played to the beat of your heart and the rhythm of your mind.";
  document.getElementById("quote").innerHTML = "Question authority, because authority that cannot be questioned is just tyranny, and I will not accept tyranny, even that of heaven";
  document.getElementById("quote_source").innerHTML = "&#8212; Terry Pratchett &#128486;";
}

if (day == 21 && month == 6) {
  document.getElementById("thought").innerHTML = "You know why people you don't know are called 'strangers'? Because regardless of whatever you think they may be, whatever they truly are will always be... stranger.";
  document.getElementById("quote").innerHTML = "Before he can tell what cadences he truly prefers, the student should have tried all that are possible";
  document.getElementById("quote_source").innerHTML = "&#8212; Books Which Have Influenced me, R.L. Stevenson &#128195;";
}

if (day == 22 && month == 6) {
  document.getElementById("thought").innerHTML = "Multi-tasking = faulty-talking";
  document.getElementById("quote").innerHTML = "If the news is fake, imagine history";
  document.getElementById("quote_source").innerHTML = "&#8212; Balaji Srinivasan &#128486;";
}

if (day == 23 && month == 6) {
  document.getElementById("thought").innerHTML = "In the entirety of the human race, I wonder who is going to come first?";
  document.getElementById("quote").innerHTML = "'I suppose there are two views about everything,' said Mark. 'Eh? Two views? There are more than a dozen views about everything until you know the answer. Then there's never more than one...'";
  document.getElementById("quote_source").innerHTML = "&#8212; That Hideous Strength, C.S. Lewis &#128214;";
}

if (day == 24 && month == 6) {
  document.getElementById("thought").innerHTML = "The things we define in life have only as much meaning as we chose to attribute to them.";
  document.getElementById("quote").innerHTML = "Privilege just means 'private law'.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Truth, Terry Pratchett &#128214;";
}

if (day == 25 && month == 6) {
  document.getElementById("thought").innerHTML = "What is the thing you are putting off? Do it now.";
  document.getElementById("quote").innerHTML = "The best measure of wealth is what you have minus what you want.";
  document.getElementById("quote_source").innerHTML = "&#8212; Morgan Housel &#128486;";
}

if (day == 26 && month == 6) {
  document.getElementById("thought").innerHTML = "There's a fine line between abstraction and obscurity. Abstraction requires interpretation. Obscurity requires ignorance.";
  document.getElementById("quote").innerHTML = "Odd thing is &#8212; the word 'experiment' is unpopular, but not the word 'experimental'. You mustn't experiment on children; but offer the dear little kiddies free education in an experimental school... and it's all correct";
  document.getElementById("quote_source").innerHTML = "&#8212; That Hideous Strength, C.S. Lewis &#128214;";
}

if (day == 27 && month == 6) {
  document.getElementById("thought").innerHTML = "Be careful when using the word 'worthless'. Is it worthless in that it has minimal value? Or is it worthless in that it has nothing to attribute value to in the first place?";
  document.getElementById("quote").innerHTML = "If everyone fought fire with fire, the entire world would go up in smoke";
  document.getElementById("quote_source").innerHTML = "&#8212; Lemony Snicket &#128486;";
}

if (day == 28 && month == 6) {
  document.getElementById("thought").innerHTML = "One single thing is of no value unless it is compared to something else";
  document.getElementById("quote").innerHTML = "The spice of life is battle";
  document.getElementById("quote_source").innerHTML = "&#8212; Talk and Talkers, R.L. Stevenson &#128195;";
}

if (day == 29 && month == 6) {
  document.getElementById("thought").innerHTML = "By possessing an agile and able mind, do you not have a moral obligation to use it?";
  document.getElementById("quote").innerHTML = "All men that count have come to my conclusion; for if they come to your conclusion they do not count";
  document.getElementById("quote_source").innerHTML = "&#8212; The Error of Impartiality, G.K. Chesterton &#128195;";
}

if (day == 30 && month == 6) {
  document.getElementById("thought").innerHTML = "If you have a useful tool, you yourself become useful";
  document.getElementById("quote").innerHTML = "That remark's political, or what is much the same, it ain't true";
  document.getElementById("quote_source").innerHTML = "&#8212; Demagogues and Mystagogues, G.K. Chesterton &#128195;";
}

if (day == 1 && month == 7) {
  document.getElementById("thought").innerHTML = "Time is a means to an end, the end in question being life itself";
  document.getElementById("quote").innerHTML = "Give a man a fire and he’s warm for a day, but set fire to him and he’s warm for the rest of his life";
  document.getElementById("quote_source").innerHTML = "&#8212; Jingo, Terry Pratchett &#128214;";
}

if (day == 2 && month == 7) {
  document.getElementById("thought").innerHTML = "They say time is money. They are wrong. Time becomes money.";
  document.getElementById("quote").innerHTML = "...so, you're a psychologist. Are you going to read me? I'm an open book, and I think you'll find me quite the page turner";
  document.getElementById("quote_source").innerHTML = "&#8212; Johnny English: Reborn &#127916;";
}

if (day == 3 && month == 7) {
  document.getElementById("thought").innerHTML = "While there is pleasure to be had in leisure, there is fulfillment to be had in productivity";
  document.getElementById("quote").innerHTML = "You are pardoned... From life!";
  document.getElementById("quote_source").innerHTML = "&#8212; Thor: Ragnarok &#127916;";
}

if (day == 4 && month == 7) {
  document.getElementById("thought").innerHTML = "For what is life but human experience in the context of time?";
  document.getElementById("quote").innerHTML = "Gurls: Pretty please... Gru: The physical appearance of the please will make no difference to my response";
  document.getElementById("quote_source").innerHTML = "&#8212; Despicable Me &#127916;";
}

if (day == 5 && month == 7) {
  document.getElementById("thought").innerHTML = "To become the best you must first be able to replicate the best yourself";
  document.getElementById("quote").innerHTML = "Blessed are they who have not seen and yet have believed: a passage which some have considered as a prophecy of modern journalism";
  document.getElementById("quote_source").innerHTML = "&#8212; Spiritualism, G.K. Chesterton &#128195;";
}

if (day == 6 && month == 7) {
  document.getElementById("thought").innerHTML = "The centerpiece of a garden is nothing without the framing of landscape around it";
  document.getElementById("quote").innerHTML = "For a special agent, you're not having a very special day, are you?";
  document.getElementById("quote_source").innerHTML = "&#8212; The Man from UNCLE &#127916;";
}

if (day == 7 && month == 7) {
  document.getElementById("thought").innerHTML = "This is the true power of inspiration: to not only inspire you, but to give you ideas.";
  document.getElementById("quote").innerHTML = "If it is not true that a divine being fell, then we can only say that one of the animals went entirely off its head";
  document.getElementById("quote_source").innerHTML = "&#8212; Wine When it is Red, G.K. Chesterton &#128195;";
}

if (day == 8 && month == 7) {
  document.getElementById("thought").innerHTML = "The burden of an idea is to be expressed.";
  document.getElementById("quote").innerHTML = "Thor: What is he doing? Random: He's taking minutes. Thor: Well precious minutes we don't have!";
  document.getElementById("quote_source").innerHTML = "&#8212; Thor: Love and Thunder &#127916;";
}

if (day == 9 && month == 7) {
  document.getElementById("thought").innerHTML = "A story is the difference between a number and a name.";
  document.getElementById("quote").innerHTML = "An eye for an eye leaves the whole world blind";
  document.getElementById("quote_source").innerHTML = "&#8212; Mahatma Gandhi &#128483;";
}

if (day == 10 && month == 7) {
  document.getElementById("thought").innerHTML = "Every story is a human story. Though we may anthropomorphise, all we really see is ourselves.";
  document.getElementById("quote").innerHTML = "The foundation of war is economics";
  document.getElementById("quote_source").innerHTML = "&#8212; Elon Musk &#128483;";
}

if (day == 2 && month == 4) {
  document.getElementById("thought").innerHTML = "Luck is scarce - that's what makes it so valuable.";
  document.getElementById("quote").innerHTML = "Lofty goals... aim for the sun. That way if you miss, at least your arrow will fall far away, and the person it kills will likely be someone you don't know.";
  document.getElementById("quote_source").innerHTML = "&#8212; Oathbringer, Brandon Sanderson &#128214;";
}

if (day == 3 && month == 4) {
  document.getElementById("thought").innerHTML = "Passion is when you spend hours doing something, and yet it only feels like minutes";
  document.getElementById("quote").innerHTML = "Time's arrow is the loss of fidelity in compression. A sketch, not a photograph. A memory is a re-creation, precious because it is both more and less than the original.";
  document.getElementById("quote_source").innerHTML = "&#8212; An Advanced Readers' Picture Book of Comparative Cognition, Ken Liu &#128214;";
}

if (day == 4 && month == 4) {
  document.getElementById("thought").innerHTML = "If originality is an entirely new way of doing things, then authenticity is taking this new way of doing things and putting your own personal spin on it";
  document.getElementById("quote").innerHTML = "Life has a way of talking to the future. It’s called memory.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Overstory, Richard Powers &#128214;";
}

if (day == 5 && month == 4) {
  document.getElementById("thought").innerHTML = "The easiest part of any project is working on it. The hardest part of any project is ending it.";
  document.getElementById("quote").innerHTML = "- Don't play dumb with me. - No, I am dumb. Most of the time I'm playing smart.";
  document.getElementById("quote_source").innerHTML = "&#8212; The West Wing &#127916;";
}

if (day == 6 && month == 4) {
  document.getElementById("thought").innerHTML = "Dedication isn't just sticking to a job, dedication is getting the job done.";
  document.getElementById("quote").innerHTML = "I only went out for a walk and finally concluded to stay out till sundown, for going out, I found, was really going in.";
  document.getElementById("quote_source").innerHTML = "&#8212; The Overstory, Richard Powers &#128214;";
}

if (day == 7 && month == 4) {
  document.getElementById("thought").innerHTML = "Most of the time people are too focused on themselves to purposefully act either for or against you";
  document.getElementById("quote").innerHTML = "The ultimate weakness of violence is that it is a descending spiral. Returning violence with violence only multiplies violence adding deeper darkness to a night already devoid of stars.";
  document.getElementById("quote_source").innerHTML = "&#8212; Dr King &#128483;";
}

if (day == 8 && month == 4) {
  document.getElementById("thought").innerHTML = "Is kindness still kindness if you ask for something in return?";
  document.getElementById("quote").innerHTML = "Rumour is information distilled so finely that it can filter through anything";
  document.getElementById("quote_source").innerHTML = "&#8212; Feet of Clay, Terry Pratchett &#128214;";
}

if (day == 9 && month == 4) {
  document.getElementById("thought").innerHTML = "To live is to die, just a little bit every second";
  document.getElementById("quote").innerHTML = "Explaining an allegory is like dissecting a frog. The more you dissect it the more it dies.";
  document.getElementById("quote_source").innerHTML = "&#8212; The West Wing &#127916;";
}

if (day == 10 && month == 4) {
  document.getElementById("thought").innerHTML = "If you're thinking of alternatives, then you should probably pursue those alternatives.";
  document.getElementById("quote").innerHTML = "Happiness is that feeling you get right before you need more happiness.";
  document.getElementById("quote_source").innerHTML = "&#8212; Don Draper &#128483;";
}
