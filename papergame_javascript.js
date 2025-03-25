var paper = 0; //variable denoting amount of paper
var money = 0; //variable denoting amount of money
var knowledge = 0; //variable denoting amount of knowledge
var ink = 0; //variable denoting amount of ink
var book = 0; //variable denoting amount of books
var tree = 50;
var adderPaper;
var adderMoney;
var adderInk;
var adderBook;
var adderKnowledge;
var adderTree;
var Autopaper = 0; //variable denoting amount of automatic paper makers
var AutoMoney = 0; //variable denoting amount of automatic money makers
var AutoInk = 0; //variable denoting amount of automatic ink makers
var AutoBook = 0; //variable denoting amount of automatic book makers
var AutoKnowledge = 0; //variable denoting amount of automatic knowledge makers
var AutoTree = 0; //variable denoting amount of tree
var AutoArtist = 0;
var level = 1; //variable denoting present level
var papercost = 50; //variable denoting cost of automatic paper makers
var moneycost = 250; //variable denoting cost of automatic money makers
var inkcost = 500; //variable denoting cost of automatic ink makers
var bookcost = 1000; //variable denoting cost of automatic book makers
var knowledgecost = 2000; //variable denoting cost of automatic knowledge makers
var treecost = 5000; //variable denoting cost of authors
var artistcost = 10000;
var paperkcost = 10; //variable denoting cost of automatic paper makers
var moneykcost = 20; //variable denoting cost of automatic money makers
var inkkcost = 30; //variable denoting cost of automatic ink makers
var bookkcost = 40; //variable denoting cost of automatic book makers
var knowledgekcost = 50; //variable denoting cost of automatic knowledge makers
var treekcost = 60;
var artistkcost = 70;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;
var counter8 = 0;
var sellprice = 2;
var knowledgeextracted = 1;
var bookink = 2;
var bookpaper = 5;
var numberstaff = 0;
var staffhiring = 1;
var timetomake = 1000;
var imagination = 0;
var reputation = 0;
var timetopaint = 600;
var Executives = 0;
var paperforart = 10000;
var inkforart = 5000;
var imaginationforart = 10000;
var knowledgeforart = 1000;
var reputationforart = 3;
var moneyforart = 25000;
var costproductivity = 1000;
var timetomake_productivity = 100;
var mayoralstatus = 0;
var pausex=0;
var pausey=0;

var heightpr = 1;
var toppr = 82.6;


setInterval(runStuff, 50);

function runStuff() {
	document.getElementById("moneys").innerHTML = Math.ceil(money);
	document.getElementById("papers").innerHTML = Math.ceil(paper);
	document.getElementById("knowledges").innerHTML = Math.round(knowledge);
	document.getElementById("books").innerHTML = Math.ceil(book);
	document.getElementById("inks").innerHTML = Math.ceil(ink);
	document.getElementById("trees").innerHTML = Math.ceil(tree);
	document.getElementById("levels").innerHTML = level;
    document.getElementById("nostaff").innerHTML = numberstaff;
	document.getElementById("autopapercost").innerHTML = Math.ceil(papercost);
    document.getElementById("automoneycost").innerHTML = Math.ceil(moneycost);
    document.getElementById("autoinkcost").innerHTML = Math.ceil(inkcost);
    document.getElementById("autobookcost").innerHTML = Math.ceil(bookcost);
    document.getElementById("autoknowledgecost").innerHTML = Math.ceil(knowledgecost);
	document.getElementById("autotreecost").innerHTML = Math.ceil(treecost);
	document.getElementById("artistcost").innerHTML = Math.ceil(artistcost);
	document.getElementById("autopaperkcost").innerHTML = Math.ceil(paperkcost);
	document.getElementById("automoneykcost").innerHTML = Math.ceil(moneykcost);
	document.getElementById("autoinkkcost").innerHTML = Math.ceil(inkkcost);
	document.getElementById("autobookkcost").innerHTML = Math.ceil(bookkcost);
	document.getElementById("autoknowledgekcost").innerHTML = Math.ceil(knowledgekcost);
	document.getElementById("autotreekcost").innerHTML = Math.ceil(treekcost);
	document.getElementById("artistkcost").innerHTML = Math.ceil(artistkcost);
	document.getElementById("Autopapers").innerHTML = Autopaper;
	document.getElementById("Automoneys").innerHTML = AutoMoney;
	document.getElementById("Autoinks").innerHTML = AutoInk;
	document.getElementById("Autobooks").innerHTML = AutoBook;
	document.getElementById("Autoknowledges").innerHTML = AutoKnowledge;
	document.getElementById("Autotrees").innerHTML = AutoTree;
	document.getElementById("Autoartist").innerHTML = AutoArtist;
	document.getElementById("staffhire").innerHTML = staffhiring;
	document.getElementById("sellprice").innerHTML = sellprice;
	document.getElementById("amountproductivity").innerHTML = Math.ceil(timetomake_productivity);
	document.getElementById("imaginations").innerHTML = Math.ceil(imagination);
	document.getElementById("reputations").innerHTML = Math.ceil(reputation);
	document.getElementById("papersforart").innerHTML = Math.ceil(paperforart);
	document.getElementById("inksforart").innerHTML = Math.ceil(inkforart);
	document.getElementById("imaginationsforart").innerHTML = Math.ceil(imaginationforart);
	document.getElementById("knowledgesforart").innerHTML = Math.ceil(knowledgeforart);
	document.getElementById("reputationsforart").innerHTML = Math.ceil(reputationforart);
	document.getElementById("moneysforart").innerHTML = Math.ceil(moneyforart);
	document.getElementById("costproductivity").innerHTML = Math.ceil(costproductivity);
	var check2 = document.getElementById("imagination");
	if (pausex==0) {
	if (check2.checked == true) {
	  imagination += (numberstaff/50);
	}
	}
	numberstaff = Autopaper + AutoBook + AutoInk + AutoMoney + AutoTree + AutoKnowledge + AutoArtist + Executives;
	document.getElementById('politicalreputation').style.height = (heightpr+reputation) + "%";
    document.getElementById('politicalreputation').style.top = (toppr-reputation*0.47) + "%";
}

document.body.addEventListener("keydown", die); //function to remove cheating
function die(event) {
  if (event.keyCode == 13) {
	tree = 0;
    paper = 0;
	money = 0;
	knowledge = 0;
	book = 0;
	ink = 0;
	imagination = 0;
	alert('You may not press the Enter button. Doing so will result in your immediate demise. Have fun playing!');
  }
}

document.body.addEventListener("keydown", ha); //function to remove cheating
function ha(event) {
  if (event.keyCode == 38) {
	document.getElementById('rick').style.display = 'block';
  }
}

document.body.addEventListener("keydown", bye); //function to remove cheating
function bye(event) {
  if (event.keyCode == 8) {
	document.getElementById('paperbutton').style.animationPlayState = 'running';
  }
}

document.body.addEventListener("keydown", add);
function add(event) {
  if (event.keyCode == 32) {
	if (pausey==0) {
    document.getElementById('stile').style.display = 'block';
	pausex --;
	pausey ++;
	}
	else {
	document.getElementById('stile').style.display = 'none';
	pausex ++;
	pausey --;
	}
  }
  }


function paperMaker() { //function which makes paper
  if (tree>0){
  paper ++;
  tree = tree - 0.01;
}
}
  
function bookMaker() { //function which makes books
  if (paper >= bookpaper && ink >= bookink){
    book ++;
    paper = paper - bookpaper;
    ink = ink - bookink;
}
}

function paperSeller() { //function which sells paper
  if (paper > 0){
    paper --;
    money = money + sellprice;
  } 
  else {
    return;
  }

}

function inkMaker() { //function which makes ink
  if (money >= 1) {
  ink ++;
  money --;
}
}

function knowledgeMaker() { //function which makes knowledge
  if (book >= 1) {
  knowledge += knowledgeextracted;
  book --;
  }
  else {
  return;
  }
}

function treeMaker() { //function which makes knowledge
  if (money >= 100 && knowledge >= 5) {
  money = money - 100;
  knowledge -= 5;
  tree ++;
  }
  else {
  return;
  }
}

//The following 17 functions are a list of things to do, each one being revealed once the one before it is completed; and on it goes

function readbook() {
  var aaa = document.getElementById("twelvth");
  var bbb = document.getElementById("tenth");
  if (money >= 100  && level >= 2) {
  money = money - 100;
  knowledge = knowledge + 25;
  aaa.style.display = 'none';
  bbb.style.display = 'block';
  }
  else {
  return;
  }
}

function getdegree() {
  var bbb = document.getElementById("tenth");
  var ccc = document.getElementById("paperbag");
  if (money >= 200 && level >= 2) {
  money = money - 200;
  knowledge = knowledge + 50;
  bbb.style.display = 'none';
  ccc.style.display = 'block';
  }
  else {
  return;
  }
}

function paperbag() {
  var ccc = document.getElementById("paperbag");
  var ddd = document.getElementById("phd");
  if (paper >= 100  && level >= 2) {
  paper = paper - 100;
  money = money + 150;
  ccc.style.display = 'none';
  if (level >= 3) {
  ddd.style.display = 'block';
  }
  else {
  counter1 ++;
  }
  }
  else {
  return;
  }
}

function phd() {
  var ddd = document.getElementById("phd");
  var eee = document.getElementById("thirteenth");
  if (money >= 400  && level >= 3) {
  money = money - 400;
  knowledge = knowledge + 100;
  ddd.style.display = 'none';
  eee.style.display = 'block';
  }
}

function news() {
  var eee = document.getElementById("thirteenth");
  var fff = document.getElementById("bribe");
  if (paper >= 300 && ink >= 50 && level >= 3) {
  paper = paper - 300;
  ink = ink - 50;
  money = money + 200;
  fff.style.display = 'block';
  eee.style.display = 'none';
  }
  else {
  return;
  }
}

function bribe() {
  var fff = document.getElementById("bribe");
  var ggg = document.getElementById("ninteenth");
  if (money >= 800 && level >= 3) {
  money = money - 800;
  knowledge = knowledge + 200;
  fff.style.display = 'none';
  if (level >= 4) {
  ggg.style.display = 'block';
  }
  else {
  counter2 ++;
  }
  }
  else {
  return;
  }
}

function textbook() {
  var ggg = document.getElementById("ninteenth");
  var hhh = document.getElementById("marketing");
  if (paper >= 300 && ink >= 100 && book >= 50 && level >= 4) {
  paper = paper - 300;
  ink = ink - 100;
  book -= 50;
  knowledge = knowledge + 15;
  ggg.style.display = 'none';
  hhh.style.display = 'block';
  }
  else {
  return;
  }
}

function marketing() {
  var hhh = document.getElementById("marketing");
  var iii = document.getElementById("comicbook");
  if (money >= 1250 && level >= 4) {
  money -= 1250;
  tree = tree + 80;
  hhh.style.display = 'none';
  iii.style.display = 'block';
  }
  else {
  return;
  }
}

function comicbook() {
  var iii = document.getElementById("comicbook");
  var jjj = document.getElementById("collection");
  if (paper >= 300 && ink >= 200 && book >= 50 && level >= 4) {
  paper = paper - 300;
  ink = ink - 200;
  book -= 50;
  money = money + 750;
  iii.style.display = 'none';
  if (level >= 5) {
  jjj.style.display = 'block';
  }
  else {
  counter3 ++;
  }
  }
  else {
  return;
  }
}

function collection() {
  var jjj = document.getElementById("collection");
  var kkk = document.getElementById("atlas");
  if (money >= 2000 && level >= 5) {
  money = money - 2000;
  book = book + 200;
  jjj.style.display = 'none';
  kkk.style.display = 'block';
  }
  else {
  return;
  }
}

function atlas() {
  var kkk = document.getElementById("atlas");
  var lll = document.getElementById("slimmer");
  if (paper >= 1000 && ink >= 500 && level >= 5) {
  paper = paper - 1000;
  ink = ink - 500;
  money = money + 1000;
  kkk.style.display = 'none';
  lll.style.display = 'block';
  }
  else {
  return;
  }
}

function slimmer() {
  var lll = document.getElementById("slimmer");
  if (knowledge >= 50 && level >= 5 && money >= 5000) {
    knowledge = knowledge - 50;
	money = money - 5000;
	lll.style.display = 'none';
	tree = tree + 130;
    }
  else {
    return;
  }
  if (level >= 6) {
  document.getElementById('ticker').style.display = 'block';
  }
  else {
  counter4 ++;
  }
}

function ticker() {
  if (level >= 6 && knowledge >= 100 && ink >= 1000) {
  knowledge = knowledge - 100;
  ink = ink - 1000;
  document.getElementById('checker_paper').style.display = 'block';
  document.getElementById('checker_ink').style.display = 'block';
  document.getElementById('checker_money').style.display = 'block';
  document.getElementById('checker_knowledge').style.display = 'block';
  document.getElementById('checker_book').style.display = 'block';
  document.getElementById('invisible').style.display = 'block';
  document.getElementById('ticker').style.display = 'none';
  }
  else {
  return;
  }
}

function invisible() {
  if (book >= 750 && level >= 6) {
  book -= 750;
  money = money + 4000;
  document.getElementById('invisible').style.display = 'none';
  document.getElementById('library').style.display = 'block';
  }
}

function library() {
  var mmm = document.getElementById("library");
  if (book >= 1000 && level >= 6) {
  book -= 1000;
  mmm.style.display = 'none';
  knowledgeextracted ++;
  }
  if (level >= 7) {
  document.getElementById('twentysecond').style.display = 'block';
  }
  else {
  counter5 ++;
  }
}

function publish() {
  var zzz = document.getElementById("twentysecond");
  var staff = document.getElementById("staff");
  var exec = document.getElementById("exec");
  if (money >= 7500 && level >= 7) {
    money = money - 7500;
	Executives ++;
    staff.style.display = 'block';
	zzz.style.display = 'none';
	exec.style.display = 'block';
	document.getElementById('sales').style.display = 'block';
  }
}

function sales() {
	if (level >= 7 && knowledge >= 2000) {
		document.getElementById('sales').style.display = 'none';
		knowledge -= 2000;
		sellprice ++;
		document.getElementById('setstaff').style.display = 'block';
}
}

function setstaff() {
  var xxx = document.getElementById("setstaff");
  var hiring = document.getElementById("hiring");
  if (money >= 5000 && paper >= 2500 && ink >= 1000 && level >= 7) {
    money = money - 5000;
	paper = paper - 2500;
	ink = ink - 1000;
	xxx.style.display = 'none';
	hiring.style.display = 'block';
	Executives ++;
	if (level >= 8) {
      document.getElementById('blueprints').style.display = 'block';
    }
    else {
      counter6 ++;
   }
  }
}

function blueprints() {
  if (paper >= 1000 && level >= 8 && knowledge >= 1000) {
    money += 20000;
	paper -= 1000;
	knowledge -= 1000;
	document.getElementById('blueprints').style.display = 'none';
	document.getElementById('maximum').style.display = 'block';
  }
}

function maximum() {
  var mxmx = document.getElementById("maximum");
  var maxi = document.getElementById("max");
  var label = document.getElementById("label");
  var exec = document.getElementById("exec");
  if (money >= 5000 && paper >= 2500 && ink >= 1000 && level >= 8) {
    money = money - 5000;
	paper = paper - 2500;
	ink = ink - 1000;
	maxi.style.display = 'block';
	label.style.display = 'block';
	mxmx.style.display = 'none';
	exec.style.display = 'block';
	document.getElementById('picturebooks').style.display = 'block';
	Executives ++;
  }
}

function picturebooks() {
  if (ink >= 2000 && book >= 2000 && level >= 8) {
    money += 40000;
	ink = ink - 2000;
	book = book - 2000;
	document.getElementById('picturebooks').style.display = 'none';
	if (level >= 9) {
	document.getElementById('path').style.display = 'block';
    }
    else {
      counter7 ++;
  }
}
}

function path() {
  var www = document.getElementById("path");
  if (knowledge >= 2000 && level >= 9) {
	knowledge = knowledge - 2000;
	www.style.display = 'none';
	document.getElementById('headingt').style.display = 'block';
	document.getElementById('assemble').style.display = 'block';
	document.getElementById('productivity').style.display = 'block';
  }
}

function productivity() {
  if (money >= 100000 && level >= 9) {
	money -= 100000;
    document.getElementById('chiefproductivity').style.display = 'block';
	document.getElementById('productivity').style.display = 'none';
	document.getElementById('kids').style.display = 'block';
	Executives ++;
  }
}

function kids() {
	if (money >= 50000 && level >= 9 && knowledge >= 5000) {
		document.getElementById('kids').style.display = 'none';
		money -= 50000;
		knowledge -= 5000;
		imagination += 10000;
	if (level >= 10) {
	document.getElementById('production').style.display = 'block';
    }
    else {
      counter8 ++;
  }
		
}
}

function production() {
  if (money >= 100000 && level >= 10) {
	money -= 100000;
    document.getElementById('chiefproduction').style.display = 'block';
	document.getElementById('production').style.display = 'none';
    document.getElementById('innovation').style.display = 'block';
	Executives ++;
  }
}

function innovation() {
  if (money >= 200000 && level >= 10) {
	money -= 200000;
    document.getElementById('chiefinnovation').style.display = 'block';
	document.getElementById('imagination').style.display = 'block';
	document.getElementById('imaginationcounter').style.display = 'block';
	document.getElementById('innovation').style.display = 'none';
	Executives ++;
	document.getElementById('reducepaper').style.display = 'block';
  }
}

function reducepaper() {
  if (imagination >= 50000 && level >= 10) {
	imagination -= 50000;
	bookpaper --;
    document.getElementById('reducepaper').style.display = 'none';

  }
}




//function upgrades to level two
function levelTwo() {  
  var a = document.getElementById("first");
  var b = document.getElementById("second");
  var c = document.getElementById("secondLevel");
  var d = document.getElementById("thirdLevel");
  var e = document.getElementById("third");
  var f = document.getElementById("sixth");
  var h = document.getElementById("eleventh");
  var i = document.getElementById("twelvth");
  var aaaa = document.getElementById("employees");
  var bbbb = document.getElementById("todo");
  var cccc = document.getElementById("sign");
  if (paper >= 100) {
    a.style.display = "block";
    b.style.display = "block";
	c.style.display = "none";
	d.style.display = 'inline';
	e.style.display = 'block';
	f.style.display = 'block';
	h.style.display = 'block';
	i.style.display = 'block';
	aaaa.style.display = 'block';
	bbbb.style.display = 'block';
	cccc.style.display = 'block';
	paper = paper - 100;
	level ++;
	papercost = 50;
    moneycost = 200;
    inkcost = 500;
    bookcost = 1000;
    knowledgecost = 2500;
  }
  else {
    return;
  }
}
//function upgrades to level three
function levelThree() {
  var j = document.getElementById("fourth");
  var k = document.getElementById("fifth");
  var l = document.getElementById("thirdLevel");
  var m = document.getElementById("seventh");
  var n = document.getElementById("eighth");
  var o = document.getElementById("fourthLevel");
  var ddd = document.getElementById("phd");
  if (paper >= 250 && money >= 250) {
  paper = paper - 250;
  money = money - 250;

  level ++;
  j.style.display = 'block';
  k.style.display = 'block';
  l.style.display = 'none';
  m.style.display = 'block';
  n.style.display = 'block';
  o.style.display = 'block';
  if (counter1 == 1) {
  ddd.style.display = 'block';
  }
  }
  else {
  return;
  }
}
//function upgrades to level four
function levelFour() {
  var q = document.getElementById("fourteenth");
  var r = document.getElementById("fourthLevel");
  var s = document.getElementById("fifteenth");
  var t = document.getElementById("seventeenth");
  var u = document.getElementById("sixteenth");
  var v = document.getElementById("fifthLevel");
  var ggg = document.getElementById("ninteenth");
  if (paper >= 500 && money >= 750 && ink >= 100) {
  paper = paper - 500;
  money = money - 750;
  ink = ink - 100;
  level ++;
  q.style.display = 'block';
  r.style.display = 'none';
  s.style.display = 'block';
  t.style.display = 'block';
  u.style.display = 'block';
  v.style.display = 'block';
  if (counter2 == 1) {
  ggg.style.display = 'block';
  }
  }
  else {
  return;
  }
}
//function upgrades to level five
function levelFive() {
  var w = document.getElementById("fourteenth");
  var x = document.getElementById("fifthLevel");
  var y = document.getElementById("eighteenth");
  var aa = document.getElementById("twenty");
  var ab = document.getElementById("twentyfirst");
  var ad = document.getElementById("sixthLevel");
  var jjj = document.getElementById("collection");
  if (paper >= 1500 && money >= 2000 && ink >= 250 && book >= 100) {
  paper = paper - 1500;
  money = money - 2000;
  ink = ink - 250;
  level ++;
  book -= 100;
  w.style.display = 'block';
  x.style.display = 'none';
  y.style.display = 'block';
  aa.style.display = 'block';
  ab.style.display = 'block';
  ad.style.display = 'block';
  if (counter3 == 1) {
  jjj.style.display = 'block';
  }
  }
  else {
  return;
  }
}
//function upgrades to level six
function levelSix() {
  var ad = document.getElementById("sixthLevel");
  var ae = document.getElementById("twentythird");
  var af = document.getElementById("twentyfourth");
  var ag = document.getElementById("seventhLevel");
  var mmm = document.getElementById("library");
  if (book >= 500 && money >= 10000 && knowledge >= 100) {
  money = money - 10000;
  book = book - 500;
  knowledge -= 100;
  level ++;
  ad.style.display = 'none';
  ae.style.display = 'block';
  af.style.display = 'block';
  ag.style.display = 'block';
  document.getElementById('treess').style.display = 'block';
  if (counter4 == 1) {
  document.getElementById('ticker').style.display = 'block';
  }
  }
  else {
  return;
  }
}
//function upgrades to level seven
function levelSeven() {
  var ag = document.getElementById("seventhLevel");
  var ah = document.getElementById("eighthLevel");
  var za = document.getElementById("author");
  var zb = document.getElementById("sideauthor");
  var yyy = document.getElementById("invisible");
  var qpqp = document.getElementById("treess");
  var mxmx = document.getElementById("maximum");
  var xxx = document.getElementById("setstaff");
  if (knowledge >= 1000) {
  knowledge -= 1000;
  level ++;
  ag.style.display = 'none';
  ah.style.display = 'block';
  za.style.display = 'block';
  zb.style.display = 'block';
  qpqp.style.display = 'block';
  document.getElementById('checker_tree').style.display = 'block'; 
  if (counter5 == 1) {
  document.getElementById('twentysecond').style.display = 'block';
  }
  }
}
//function upgrades to level eight
function levelEight() {
  var ah = document.getElementById("eighthLevel");
  var ai = document.getElementById("ninthLevel");
  if (tree >= 500) {
  tree -= 500;
  level ++;
  ah.style.display = 'none';
  ai.style.display = 'block';
  }
  if (counter6 == 1) {
	document.getElementById('blueprints').style.display = 'block';
  }
}
//function upgrades to level nine
function levelNine() {
  var ai = document.getElementById("ninthLevel");
  if (paper >= 10000 && ink >= 2500 && book >= 2000 && knowledge >= 1000) {
  paper -= 10000;
  ink -= 2500;
  book -= 2000;
  knowledge -= 1000;
  level ++;
  ai.style.display = 'none';
  document.getElementById('artistbuyer').style.display = 'block';
  document.getElementById('sideartist').style.display = 'block';
  document.getElementById('tenthLevel').style.display = 'block';
  document.getElementById("first").style.display = 'none';
  document.getElementById("fourth").style.display = 'none';
  document.getElementById("paperbutton").style.display = 'none';
  document.getElementById("sixteenth").style.display = 'none';
  document.getElementById("eighteenth").style.display = 'none';
  document.getElementById("treess").style.display = 'none';
  document.getElementById('imaginationcounter').style.display = 'block';
  if (counter7 == 1) {
	document.getElementById('path').style.display = 'block';
  }
  }
}

function levelTen() {
	if (paper >= 100000) {
		level ++;
		paper -= 100000;
		document.getElementById('tenthLevel').style.display = 'none';
		document.getElementById('reputationcounter').style.display = 'block';
		document.getElementById('eleventhLevel').style.display = 'block';
		document.getElementById('lineh').style.display = 'block';
		document.getElementById('linev').style.display = 'block';
		document.getElementById('politicalreputation').style.display = 'block';
		document.getElementById('candidate1').style.display = 'block';
		document.getElementById('candidate2').style.display = 'block';
		document.getElementById('candidate3').style.display = 'block';
		document.getElementById('candidate4').style.display = 'block';
		document.getElementById('you').style.display = 'block';
		document.getElementById('mayor').style.display = 'block';
		document.getElementById('yaxis').style.display = 'block';
	  if (counter8 == 1) {	  
	  document.getElementById('production').style.display = 'block';
      }
	}
}

function levelEleven() {
	if(money >= 500000 && mayoralstatus == 1) {
		level ++;
		money -= 500000;
		document.getElementById('eleventhLevel').style.display = 'none';
		alert('Think this is over?! Well yes, it is (Good effort mate). You win... For now. Stay tuned for updates. Meanwhile...');
}
}


function assemble() {
	if (paper >= paperforart && ink >= inkforart) {
		paper -= paperforart;
		ink -= inkforart;
		paperforart *= 1.05;
		inkforart *= 1.05;
		document.getElementById('designs').style.display = 'block';
		document.getElementById('assemble').style.display = 'none';
	}
}

function designs() {
	if (imagination >= imaginationforart && knowledge >= knowledgeforart) {
		imagination -= imaginationforart;
		knowledge -= knowledgeforart;
		knowledgeforart *= 1.05;
		imaginationsforart *= 1.05;
		document.getElementById('designs').style.display = 'none';
		document.getElementById('read').style.display = 'block';
		document.getElementById('myBar').style.display = 'block';
		document.getElementById('myProgress').style.display = 'block';
	}
}

var i = 0;
function read() {
	if (i == 0 && AutoArtist >= 1) {
		i = 1;
		var elem = document.getElementById('myBar');
		var width = 1;
		var id = setInterval(frame, timetopaint);
		var percentage = document.getElementById('read');
		function frame() {
		if (width >= 100) {
			clearInterval(id);
			i = 0;
			document.getElementById('read').style.display = 'none';
			document.getElementById('myBar').style.display = 'none';
			document.getElementById('myProgress').style.display = 'none';
			document.getElementById('donate').style.display = 'block';
			document.getElementById('sellart').style.display = 'block';
			timetopaint += 300;
			percentage.innerHTML = "Begin painting artwork";
		} else {
			width++;
			elem.style.width = width + "%";
			percentage.innerHTML = "Artwork " + width + "% Completed";
      }
    }
  }
}

function donate() {
	reputation += reputationforart;
	reputationforart *= 1.5;
	moneyforart *= 2;
	document.getElementById('donate').style.display = 'none';
	document.getElementById('sellart').style.display = 'none';
	document.getElementById('reputationcounter').style.display = 'block';
	document.getElementById('assemble').style.display = 'block';
}

function sellart() {
	money += moneyforart;
	moneyforart *= 2;
	reputationforart *= 1.5;
	document.getElementById('donate').style.display = 'none';
	document.getElementById('sellart').style.display = 'none';
	document.getElementById('reputationcounter').style.display = 'block';
	document.getElementById('assemble').style.display = 'block';
}



//function makes automaticPaperMaker
function makePaper() {
  var check = document.getElementById("max");
  if (money >= papercost && knowledge >= paperkcost) {
	for (let papermakercounter = 0; papermakercounter < staffhiring && money >= papercost && knowledge >= paperkcost; papermakercounter++) {
	document.getElementById("nostaff").innerHTML = numberstaff;
    do {
	  Autopaper ++;
	  money = money - papercost;
	  papercost = papercost * 1.1;
	  knowledge = knowledge - paperkcost;
	  paperkcost = paperkcost * 1.05;	
	  adderPaper = setInterval(automaticPaperMaker, timetomake);
    }
    while (check.checked == true && money >= papercost && knowledge >= paperkcost);
}
}
}

function automaticPaperMaker() {
	var check2 = document.getElementById("imagination");
	var check_paper = document.getElementById("checker_paper");
	if (pausex==0) {
	if (check2.checked == false) {
	if (check_paper.checked == false) {
	if (tree > 0) {
		paper++;
		tree -= 0.01;
}
}
}
}
}

//function makes automaticMoneyMaker
function moneyMaker() {
  var check = document.getElementById("max");
  if (money >= moneycost && knowledge >= moneykcost) {
  for (let moneymakercounter = 0; moneymakercounter < staffhiring && money >= moneycost && knowledge >= moneykcost; moneymakercounter++) {
  do {
	AutoMoney ++;
	money = money - moneycost;	
    moneycost = moneycost * 1.1;
   	knowledge = knowledge - moneykcost;
	moneykcost = moneykcost * 1.05;	
	adderMoney = setInterval(automaticPaperSeller, timetomake)
  }
  while (check.checked == true && money >= moneycost && knowledge >= moneykcost);
}
}
}

function automaticPaperSeller() {
	var check2 = document.getElementById("imagination");
	var check_money = document.getElementById("checker_money");
	if (pausex==0) {
	if (check2.checked == false) {
    if (check_money.checked == false) {
    if (paper > 0) {
    money = money + sellprice;
	paper--;
	}
}
}
}
}

//function makes automaticInkMaker
function makeInk() {
  var check = document.getElementById("max");
  for (let inkmakercounter = 0; inkmakercounter < staffhiring && money >= inkcost && knowledge >= inkkcost; inkmakercounter++) {
  if (money >= inkcost && knowledge >= inkkcost) {
  do {
	AutoInk ++;
	money = money - inkcost;
	inkcost = inkcost * 1.1;
   	knowledge = knowledge - inkkcost;
	inkkcost = inkkcost * 1.05;	
	adderInk = setInterval(automaticInkMaker, timetomake)
  }
  while (check.checked == true && money >= inkcost && knowledge >= inkkcost);
}
}
}

function automaticInkMaker() {
	var check2 = document.getElementById("imagination");
	var check_ink = document.getElementById("checker_ink");
	if (pausex==0) {
	if (check2.checked == false && money >= 1) {
	if (check_ink.checked == false) {
    ink++;
	money --;
}
}
}
}

//function makes automaticBookMaker
function makeBook() {
  var check = document.getElementById("max");
  if (money >= bookcost && knowledge >= bookkcost) {
  for (let bookmakercounter = 0; bookmakercounter < staffhiring && money >= bookcost && knowledge >= bookkcost; bookmakercounter++) {
  do {
    knowledge = knowledge - bookkcost;
	AutoBook ++;
	money = money - bookcost;
	bookcost = bookcost * 1.1;
	bookkcost = bookkcost * 1.05;
	adderBook = setInterval(automaticBookMaker, timetomake)
  }
  while (check.checked == true && money >= bookcost && knowledge >= bookkcost);
}
}
}

function automaticBookMaker() {
	var check2 = document.getElementById("imagination");
	var check_book = document.getElementById("checker_book");
	if (pausex==0) {
	if (check2.checked == false) {
    if ((ink >= bookink && paper >= bookpaper)) {
	if (check_book.checked == false) {
    paper = paper - bookpaper;
	ink = ink - bookink;
    book++;
	}
}
}
}
}

//function makes automaticKnowledgeMaker
function makeKnowledge() {
  var check = document.getElementById("max");
  if (money >= knowledgecost && knowledge >= knowledgekcost) {
  for (let knowledgemakercounter = 0; knowledgemakercounter < staffhiring && money >= knowledgecost && knowledge >= knowledgekcost; knowledgemakercounter++) {
  do {
	AutoKnowledge ++;
	money = money - knowledgecost;
	knowledgecost = knowledgecost * 1.1;
    knowledge = knowledge - knowledgekcost;
	knowledgekcost = knowledgekcost * 1.05;	
	adderKnowledge = setInterval(automaticKnowledgeMaker, timetomake)
  }
  while (check.checked == true && money >= knowledgecost && knowledge >= knowledgekcost);
}
}
}

function automaticKnowledgeMaker() {
	var check2 = document.getElementById("imagination");
	var check_knowledge = document.getElementById("checker_knowledge");
	if (pausex==0) {
	if (check2.checked == false) {
	if (book > 0) {
	if (check_knowledge.checked == false) {
		knowledge += knowledgeextracted;
		book--;
	}
	}  
}
}
}

function makeTree() {
  var check = document.getElementById("max");
  if (money >= treecost && knowledge >= treekcost) {
	for (let treemakercounter = 0; treemakercounter < staffhiring && money >= treecost && knowledge >= treekcost; treemakercounter++) {
	do {
		AutoTree ++;
		money = money - treecost;
		treecost = treecost * 1.1;
		knowledge = knowledge - treekcost;
		treekcost = treekcost * 1.05;	
		adderTree = setInterval(automaticTreeMaker, timetomake)
	}
	while (check.checked == true && money >= treecost && knowledge >= treekcost);
	}
}
}

function automaticTreeMaker() {
	var check2 = document.getElementById("imagination");
	var check_tree = document.getElementById("checker_tree");
	if (pausex==0) {
	if (check2.checked == false) {
	if (check_tree.checked == false) {
	if (money >= 100 && knowledge >= 5) {
		money = money - 100;
		knowledge = knowledge - 5;
		tree++;
	}
}
}
}
}

function staffleft() {
  staffhiring ++;
}

function staffright() {
  if (staffhiring>1) {
  staffhiring --;
  }
}

function increaseproductivity() {
	if (money >= costproductivity) {
	money -= costproductivity;
	costproductivity *= 1.5;
	timetomake -= 50;
	timetomake_productivity += 5;
}
}

function makeArtist() {
  var check = document.getElementById("max");
  if (money >= knowledgecost && knowledge >= knowledgekcost) {
  for (let artistmakercounter = 0; artistmakercounter < staffhiring && money >= artistcost && knowledge >= artistkcost; artistmakercounter++) {
  do {
	AutoArtist ++;
	money = money - artistcost;
	artistcost *= 1.1;
    knowledge = knowledge - artistkcost;
	artistkcost *= 1.05;
	timetopaint -= 100;
  }
  while (check.checked == true && money >= artistcost && knowledge >= artistkcost);
}
}
}

function mayorsalary() {
	money += 20;
}



var height = 10;
var high = 78.2;

Intervalc1 = setInterval(candidate1, 1000);


function candidate1() {
  var c1 = Math.floor((Math.random() * 10) + 1);
  var reputationc1 = (c1*0.2)+height;
  document.getElementById('candidate1').style.height = (reputationc1) + "%";
  document.getElementById('candidate1').style.top = (high-c1*0.09) + "%";
}


Intervalc2 = setInterval(candidate2, 1000);

function candidate2() {
  let c2 = Math.floor((Math.random() * 10) + 1);
  document.getElementById('candidate2').style.height = (height+c2*0.2) + "%";
  document.getElementById('candidate2').style.top = (high-c2*0.09) + "%";
}


Intervalc3= setInterval(candidate3, 1000);

function candidate3() {
  let c3 = Math.floor((Math.random() * 10) + 1);
  document.getElementById('candidate3').style.height = (height+c3*0.2) + "%";
  document.getElementById('candidate3').style.top = (high-c3*0.09) + "%";
}


Intervalc4= setInterval(candidate4, 1000);

function candidate4() {
  let c4 = Math.floor((Math.random() * 10) + 1);
  document.getElementById('candidate4').style.height = (height+c4*0.2) + "%";
  document.getElementById('candidate4').style.top = (high-c4*0.09) + "%";
}

function mayor() {
	if(imagination >= 100000) {
	clearInterval(Intervalc1);
	clearInterval(Intervalc2);
	clearInterval(Intervalc3);
	clearInterval(Intervalc4);
	var c1 = Math.floor((Math.random() * 10) + 1);
    var reputationc1 = (c1*0.2)+height;
    document.getElementById('candidate1').style.height = (reputationc1) + "%";
    document.getElementById('candidate1').style.top = (high-c1*0.09) + "%";
	var c2 = Math.floor((Math.random() * 10) + 1);
	var reputationc2 = (c2*0.2)+height;
    document.getElementById('candidate2').style.height = (height+c2*0.2) + "%";
    document.getElementById('candidate2').style.top = (high-c2*0.09) + "%";
	var c3 = Math.floor((Math.random() * 10) + 1);
	var reputationc3 = (c3*0.2)+height;
    document.getElementById('candidate2').style.height = (height+c3*0.2) + "%";
    document.getElementById('candidate2').style.top = (high-c3*0.09) + "%";
	var c4 = Math.floor((Math.random() * 10) + 1);
	var reputationc4 = (c4*0.2)+height;
    document.getElementById('candidate4').style.height = (height+c4*0.2) + "%";
    document.getElementById('candidate4').style.top = (high-c4*0.09) + "%";
	if ((heightpr+reputation) > reputationc1 && (heightpr+reputation) > reputationc2 && (heightpr+reputation) > reputationc3&& (heightpr+reputation) > reputationc4) {
		setInterval(mayorsalary, 1000);
	    document.getElementById('lineh').style.display = 'none';
		document.getElementById('linev').style.display = 'none';
		document.getElementById('politicalreputation').style.display = 'none';
		document.getElementById('candidate1').style.display = 'none';
		document.getElementById('candidate2').style.display = 'none';
		document.getElementById('candidate3').style.display = 'none';
		document.getElementById('candidate4').style.display = 'none';
		document.getElementById('you').style.display = 'none';
		document.getElementById('mayor').style.display = 'none';
		document.getElementById('yaxis').style.display = 'none';
		document.getElementById('youare').style.display = 'block';
		mayoralstatus = 1;
	}
}
}


