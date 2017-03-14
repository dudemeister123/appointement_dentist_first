// function theObject() {
// 	document.getElementById("myBtn").addEventListener("mousemove", function(){
//     document.getElementById("primus").innerHTML = "primus";
//     //document.getElementById("divIndiv").innerHTML = "divIndiv";
// });
// 	document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("divIndiv").innerHTML = "divIndiv";
// });
// };


//console.log(dataArray);

// function io(){
// 	var a = ['1','2','3','4','5'];
// 	var b = ['1','2','3','4','5'];	for(i=0;i<a.length;i++)1,2,3{

// 		for(j=0;j<b.length;j+// 			//console.log(a[i]);
// 			console.log(b[j]);		 
     var patrate = {

	 totOreZi : [],
	 mainArray : [],

	 luniP : [

    {ora_programare: "9:00",durata_programare: "2",nume_programare: "Eu",id_client:"00001"}, 
    {ora_programare: "13:00",durata_programare: "1",nume_programare: "Tu",id_client:"00004"},
    {ora_programare: "15:00",durata_programare: "3",nume_programare: "El",id_client:"00007"}
],
	 martiP : [

    {ora_programare: "9:00",durata_programare: "3",nume_programare: "Eu",id_client:"00001"}, 
    {ora_programare: "13:00",durata_programare: "2",nume_programare: "Tu",id_client:"00004"},
    {ora_programare: "15:00",durata_programare: "2",nume_programare: "El",id_client:"00007"}
],
	miercuriP : [

    {ora_programare: "9:00",durata_programare: "3",nume_programare: "Eu",id_client:"00001"}, 
    {ora_programare: "13:00",durata_programare: "3",nume_programare: "Tu",id_client:"00004"},
    {ora_programare: "15:00",durata_programare: "2",nume_programare: "El",id_client:"00007"}
],
	joiP : [],
	vineriP : [],
	sambataP : [],
	duminicaP : [],


//ordinea din init tine cont de ordinea in care au fost chemate /create metodele
	//orarTest : ['8:00','9:00' , '10:00', '11:00' , '12:00' , '13:00', '14:00', '15:00' , '16:00'],	
	zile : ['luni' , 'marti' , 'miercuri' , 'joi' , 'vineri' , 'sambata' , 'duminica'  ],
	lunile_din_an :["ianuarie" , 'februarie', 'martie', 'aprilie' , 'mai', 'iunie', 'iulie', 'august','septembrie','octombrie','noiembrie','decembrie'],
	

	init : function () {
		
		this.puneZilele();
		this.pushMethod();
		this.creatingSquare();
		this.allSquares();
		this.mai_pune_inca_2_sapt();		
		this.io();
		this.parcurgeSirul();
		this.displayInTitle();
		this.calendar();
	
	},
//incep metodele 
//metoda asta impinge in array principal(care este gol pana la momentul acesta)fiecare array de programare(luniP,martiP,etc) pe rand 
//pentru a putea fi iterate pe rand ....accesate  in metoda calculeazaOreOcupate    
	
	pushMethod: function(){
		this.mainArray.push(this.luniP);
		this.mainArray.push(this.martiP);
		this.mainArray.push(this.miercuriP);
		this.mainArray.push(this.joiP);
		this.mainArray.push(this.vineriP);
		this.mainArray.push(this.sambataP);
		this.mainArray.push(this.duminicaP);
	},
	
	 puneZilele: function () {
        
         	for(j=0;j<this.zile.length;j++) 

         		{
		         	var zi = this.creatingSquare('zile', this.zile[j]);            
		         	//zi.innerHTML = this.zile[j]; 
    				//console.log(zi);     	
                };



      },

	
	calendar: function() 
	{
 
		
		var startDate = new Date(); // moment actual
  	  		endDate = new Date(startDate.getTime());// moment actual  + 11 days
    		iDate = new Date(startDate); // Date object to be used as iterator
		//console.log('asta ar fi obiectul data care poate fi folosit ca iterator' + new Date(startDate));
		var squares = document.getElementsByClassName('second');
		var data_loc = squares[startDate.getDay()-1]; 
		var week = 1;
		var adaugaSapte = 0;
		var ziuaRo = 0; //cum e la englezi cu 7 duminica 
			//console.log(squares);
			
	    			 // console.log('functia calendar cu thisul:'+this + "startDate e : " + startDate);
	    			 // console.log('functia calendar cu thisul:'+this + "endDate e : " + endDate);
	    			 // console.log('functia calendar cu thisul:'+this +""+ "iDate e : " + iDate);

			while(week < 7) 
				{
					//console.log(iDate);

					iDate.setDate(iDate.getDate()+1); //[incrementeaza zilele] seteaza data / de / ia data de azi / adauga una de fiecare data ATATA timp cat week<3
					//console.log(iDate.setDate(iDate.getDate()+1)+ " aici");
					if(iDate.getDay() == 1) //daca ziua de azi e la inceput iar sus incepe cu iteratia deci returneaza un nr 
											// care poate fi folosit intr un if 
					{
						//console.log(iDate.getDay());				
						adaugaSapte= 7;// se aduaga cate 7 zile la fiecare week ; 
						week++;  //se adauga cate o sapt in timp ce week creste adaugam cate o serie de 7 (zile)
							 if(week==3){ //daca am ajuns la a treia sapt/ daca a rulat tot ce este mai sus o data++  
							 break; // poti sa sari din if si sa continui ceea ce faceai
						}; // adica aici 
					};//aici
					
												//apoi aici 
												//un console pe adaugaSapte arata ca a fost folosit pt a reseta

					//console.log(adaugaSapte); ==>0
					ziuaRo = iDate.getDay()-1 + adaugaSapte;
					//console.log(ziuaRo); //===>7
					//console.log(iDate.getDay()); ==> 2 3 4 5 6 /  0 1  2 3 4 5 6 / 0  
					if(iDate.getDay() == 0) //cee ce e 
						{
							ziuaRo= 7*week -1;
							//console.log(ziuaRo); ==> cand week e 1 ziuaRo e 6 prima oara ....a doua oara cand week=2 e 13 
						};

					squares[ziuaRo].innerHTML +=" data:" + iDate.getDate();//
					squares[ziuaRo].title = squares[ziuaRo].innerHTML;
					//console.log(squares);
					//console.log(iDate.getDate());//datele. /incepand cu 21
					
				};
										
				iDate = new Date(startDate); // trebuie initializate toate la valoarea pe care au 
				week = 1 ;   	            // avut o la inceput 
				while(week>0) // atata timp cat week e mai mare ca 0// adica de fiecare data //
				{   
				ziuaRo = iDate.getDay()-1;
					//console.log(ziuaRo); //ziuaRo acum LUNI da 0 
					if(ziuaRo < 0)
					{

						ziuaRo = 6;
					};
				//console.log(squares[ziuaRo]);//ar trebui sa fie ..habar nu am 	^^^^^^^^^^^^^$$$$$$$%%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
				//console.log(iDate.getDate());	
				squares[ziuaRo].innerHTML += ' data '+iDate.getDate();
				//aici din cauza ca aici 	
				iDate.setDate(iDate.getDate()-1);

					if(iDate.getDay()==0)
						{
							//ziuaRo = 
							week--;
						};
						

				};

	},	



	
//metoda asta cheama toate patratele(care au clasa second()) si pentru fiecare patrat(o zi ) impinge orarTest(orele pe care se fac 
//programarile)
	io : function () {
		
		//var totOreZi = [];
		var toatePatrate = document.getElementsByClassName('second');
		var orarTest=['8:00','9:00' , '10:00', '11:00' , '12:00' , '13:00', '14:00', '15:00' , '16:00'];
		

		for(i=0;i<toatePatrate.length;i++){
				this.totOreZi.push(orarTest); //@@@@@@@@@@@@ AICI! PEntru fiecare zi se INSEREAZA ORELE TEST .unde totOreZi e gol pana aici
		};
	
			//console.log(this.totOreZi);		
},

//aici se cheama pentru fiecare zi(patrat) metoda calculeazaOreOcupate(k=i).DUPA, totOreZi(din metoda io.vezi @@@@@@mai sus) CARE ACUM ARE
//orele din oreTest e folosit in var rezultat pt a scadea oreOcupate(care sunt de fapt suma calculata de metoda calculeazaOreOcupate)
//toateZIlele iterate pe rand .innerhtml = arata ce sa calculat pana acum 
    parcurgeSirul: function(){

    	var toateZilele = document.getElementsByClassName('second');
		

		for (i=0; i< toateZilele.length; i++) {
        	var totalore = this.calculeazaOreOcupate(i);     //////// $$$$$$$$  K dat ca param mai jos e luat drept arg (i)pt a putea ITERA
        	var oreOcupate= totalore;
        	var rezultat = this.totOreZi[i].length - oreOcupate; 
    	 	console.log(this.totOreZi[i].length);
    	 	toateZilele[i].innerHTML = rezultat;
 			if(rezultat == 3)
 			{
 				//toateZilele[i].style.background = 'green';
 				toateZilele[i].className+= ' un_sfert';
 			}
 			if(rezultat == 2)
 				{
 					toateZilele[i].className+= ' doua_sferturi';
 				}
 			if(rezultat == 1)
 					{
 						toateZilele[i].className+= ' trei_sferturi';
 					};	 
 			if(rezultat == 4)
 					{
 						toateZilele[i].className+= ' patru_sferturi';
 					};	 
 			if(rezultat == 5)
 					{
 						toateZilele[i].className+= ' cinci_sferturi';
 					};	 
 			if(rezultat == 6)
 					{
 						toateZilele[i].className+= ' sase_sferturi';
 					};	 
 			if(rezultat == 7)
 					{
 						toateZilele[i].className+= ' sapte_sferturi';
 					};	 
 			if(rezultat == 8)
 					{
 						toateZilele[i].className+= ' opt_sferturi';
 					};	 
 						 
    	};
		
    	
    },
//metoda asta are un parametru.K. Acest param e facut pentru metoda de mai sus PARCURGESIRUL.
//metoda PRODUCE DOAR SUMA .ATAT !!! ea este apelata de metoda parcurgeSirul (VEZI METODA PARCURGESIRUL )  
    calculeazaOreOcupate: function(k){  //
    	var suma=0;
    	var arr = this.mainArray[k];
    	this.toate_patrate = document.getElementsByClassName('second');
    	//console.log(this.mainArray);
    	if (arr==null) return suma;//if ul asta a fost creat deoarece !!console.log(k)!! arata ca parcurge doar pana la 7 si dupa e null
    							   //cand de fapt ar trebui sa l parcurga pe toti =14 () uitate dupa$$$$$$$mai sus
    							   //!!!daca e nulll arrayul  returneaza 0 adica nu sunt ore ocupate!!!! 
    	
    	for (var j=0;j<arr.length;j++)
    	{

    		suma += parseInt(arr[j].durata_programare);// UNDE ARR[THIS>MAINARRAY pe rand ]
    		
    		//console.log(this.mainArray[0][0].ora_programare.__proto__);
    		//arr[j].durata_programare cauta pe rand in toate programarile(mainArray)
    												   //ce gaseste e un string care TREBUIE PT FIECARE durata_pro TRANSFORMAT IN integer 
    	//console.log(suma);
    	};
    	
    	return suma;
    },

//zile e un array cu toate zilele care sunt folosite iar aici li se da o clasa prin metoda in care creeazi UN PATRAT ....iar
//tot ca arg e iterat fiecare zi  din array folosind iteratorul [j] 

//faci un singur patrat cu 2 param  'clasa'{} 'nume'{de fapt array de zile iterat mai sus prin fiecare}
	creatingSquare : function(clasa , nume, numarPatrat) {

		this.wrapper = document.getElementById('wrapper');
		this.patratel = document.createElement('div');

		this.patratel.innerHTML= nume;
		this.patratel.className = clasa ;
		this.patratel.id = numarPatrat+'_patratos';
		this.wrapper.appendChild(this.patratel);

		return this.wrapper;
	},

	displayInTitle: function()
	{
		var toate = document.getElementsByClassName('second');
		var titlu = document.getElementById("2_patratos");	
				//var toate = document.getElementsByClassName('second');
			//console.log(dateleDeCareAmNevoie);
			for (var i= 0; i< toate.length; ++i) 
			{
				var dateleDeCareAmNevoie= toate[i].innerHTML;		
				
    			toate[i].setAttribute("title", 'daca');
    			toate[i].title = dateleDeCareAmNevoie;
    			// document.getElementById("2_patratos").title = 'fsfdfdfdf';
				//console.log(this.iDate.getDate());
			};
		

		},
		
	
//hardcoded 7 patrate chemate doar in init  
	allSquares: function() {

		var toate = document.getElementsByClassName('second');

			
		function makeAlert(event)                                             
		{
			//console.log('hola ', parseInt(event.target.id.split('_patratos')[0]));//rezultattul complet returneaza un array /cauta split/ arrayjoin/indexOf
																				// iar noi avem nevoie de nr ...deci parseInt 
			window.open('lista.html?zi='+ parseInt(event.target.id.split('_patratos')[0]));
		};	// ce trebuie sa scriu ? sa ia un script?  
													// sa fac referire la clienti.init?
		
		var arr = [];
			arr.length = 14;
													//document.getElementsByClassName('second').onclick = functie??
		
		for(i=0;i<arr.length;i++)
			{
				var unu = this.creatingSquare('second','patratel', i );
				
				document.getElementsByClassName('second')[i].addEventListener("click", makeAlert, false);
				//document.getElementsByClassName('second')[i].addEventListener("click", makeAlert, false);
			};
		
	},
			
	mai_pune_inca_2_sapt: function()
	{
		var buton_plus_2_sapt = document.getElementById('butonul_schimba_luna');
		//console.log(buton_plus_2_sapt);
		buton_plus_2_sapt.addEventListener('click', this.allSquares.bind(this) , false);
	},



};

//  var functie = function(){console.log('asta +');};
// function forEa(array, action) {
//   for (var i = 0; i < array.length; i++)
//     action(array[i]);
// }

// forEa(["Wampeter", "Foma", "Granfalloon"], functie());

// function ceva(){};
// function ceva(){};

window.onload = function (){
	patrate.init();
		//forEa()
};
