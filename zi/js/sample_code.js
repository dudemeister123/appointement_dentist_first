// createInputMonths :function()
	
	// {	

	// 	//input_cu_luni.className = "input_luni";
 //    	//input_cu_luni.setAttribute("type", "text");
 //    	//input_cu_luni.setAttribute("value", "Hello World!");
	// 	var divU = document.getElementById("io");
	// 	var input_cu_luni = document.getElementById("display_luni");
 //    	input_cu_luni.setAttribute("style", "background-color: red;");
 //    	divU.appendChild(input_cu_luni);
 //    	//input_cu_luni.innerHTML = iterator;
	// },
	
	// schimba_luna: function()
	// {
	// 	var array_cu_luni = this.lunile_din_an;
	// 	var counter = 0;
	// 	var output_cu_luni = document.getElementById("display_luni");
	// 	console.log(array_cu_luni[0]);
		
	// 	for (var i=0; i<array_cu_luni.length;i++)
 //    	{
 //        	console.log(array_cu_luni[i]);
 //    	} 

	// },

	// atasare_buton_La_divLunile:function(){
	// 	//var butonul_pt_a_schimba = document.getElementById('butonul_schimba_luna');
	// 	//console.log(butonul_pt_a_schimba);
	// 	this.butonulVietii.addEventListener('click', this.schimba_luna.bind(this) );
	// },
	// faUnDiv:function(clasa, numarPatrat)
	// {	var mainDiv = document.getElementById('wrapper');
	// 	var divul = document.createElement("div");
	// 	var patratel_id = numarPatrat+'_patratos';
	// 	divul.className = clasa; 
		
	// 	mainDiv.appendChild(divul);
	// 	return divul;
	// 	console.log('se executa');
	// },

	// aflaCateZileAreOLuna: function (luna) 
	// {
 //    return new Date(luna,0 , 0).getDate();
 //    console.log('se executa');

	// },
	
	// nouaMetodaDePusDatele :function()
	// {
	// 	var today = new Date();
	// 	    dataDeAzi = today.getDate();
	// 		ziuaDeAzi = today.getDay();
	// 	    lunaCurenta = today.getMonth();
	// 		anul = today.getFullYear();

	// 	var numarZileLuna = this.aflaCateZileAreOLuna(lunaCurenta);
	// 	var toatePatrate = document.getElementsByClassName('second');
	// 	var numarReal = parseInt(numarZileLuna);
	// 	var arrDeNumereLuna = new Array(numarReal);
	// 	var divuri_cat_luna_zile = this.faUnDiv("second");
	// 			console.log(arrDeNumereLuna);
	// 			console.log(divuri_cat_luna_zile);
	// 	// function makeAlert(event)                                             
	// 	// {
	// 	// 	//console.log('hola ', parseInt(event.target.id.split('_patratos')[0]));//rezultattul complet returneaza un array /cauta split/ arrayjoin/indexOf
	// 	// 																		// iar noi avem nevoie de nr ...deci parseInt 
	// 	// 	window.open('lista.html?zi='+ parseInt(event.target.id.split('_patratos')[0]));
	// 	// };	// c
	// 	var startDate = new Date();
	// 	var iDate = new Date(startDate);
	// 	var week = 0;		
	// 			while(week<5){
	// 			iDate.setDate(iDate.getDate()+1);			//console.log("toate patratele:" + toatePatrate.length + " arrDeNumereLuna.length:" + arrDeNumereLuna.length)
	// 			week++;
	// 			console.log(iDate);
	// 			};

	// 	for(i=0; i<arrDeNumereLuna.length;i++)


	// 		{   
	// 			var un_div =  this.faUnDiv('second', toatePatrate[i]);
	// 			var it = [];
				
	// 					it.push(parseInt(iDate.setDate(iDate.getDate()+1)));
	// 					toatePatrate[i].innerHTML = iDate.getDate()-1;
	// 			//iDate.setDate(iDate.getDate()+1);//asta era solutia la iterat data in sens crescator
				
	// 			//toatePatrate[i].innerHTML =iDate.getDate()+1 ;
				
	// 			//console.log(toatePatrate);
	// 			// 		console.log(this);
	// 			// if(toatePatrate === arrDeNumereLuna.length)
	// 			// 	{
	// 			// 	}; 

	// 			//document.getElementsByClassName('second').addEventListener('click',makeAlert,false);	
	// 			//divuri_cat_luna_zile.innerHTML = arrDeNumereLuna[i];
	// 				//console.log(divuri_cat_luna_zile);
	// 			//console.log(numarZileLuna[i]);
	// 		};
	// 		var p = document.querySelectorAll('.second');
	// 		console.log(p);



	// 	//console.log(numarZileLuna.toString().split("").map(Number));
	// 	console.log(toatePatrate.length);	
	// 	console.log('data de azi este:' + dataDeAzi);
	// 	console.log('ziua de azi este:' + ziuaDeAzi);
	// 	console.log('luna este:' + lunaCurenta);
	// 	console.log('anul este:' + anul);
	// 	console.log('numarul de zile din aceasta luna este:' + parseInt(numarZileLuna));
	// },

			// while (iDate <= endDate) 
			// {
   //  			console.log(iDate.toString());
    			
   //  			 iDate.setDate(iDate.getDate() + 1); // Switch to next day
			// 	 ziuaRo = iDate.getDay()-1;//iti da un nr ....deci poti scadea un nr si l poti pune intrun if
			// 		//console.log(iDate.getDay()-1);
   //  			if(ziuaRo < 0){
   //  				//ziuaRo = 6;	
			// 	 	adaugaSapte= 7;
			// 	 };
				 

			// 	 data_loc = squares[ziuaRo+adaugaSapte];
   //  			 data_loc.innerHTML= iDate.getDate();
			
			// };



// (function a(foo)  
// 	{
// 		if(foo<32) return foo;
// 			 console.log(b(foo +1) + 1);
// 	}
// )();

// (function b(foo) 
// 	{
// 		if(foo) return foo;
// 			console.log(a(foo*2));

// 	}
// )();

// sa(1);
// class Square extends Polygon {
//   constructor(length) {
//     // Here, it calls the parent class' constructor with lengths
//     // provided for the Polygon's width and height
//     super(length, length);
//     // Note: In derived classes, super() must be called before you
//     // can use 'this'. Leaving this out will cause a reference error.
//     this.name = 'Square';
//   }

//   get area() {
//     return this.height * this.width;
//   }

//   set area(value) {
//     this.height = this.width = Math.sqrt(value);
//     this.area = value;
//   } 
// }
// function Person(I) {
//   I = I || {};

//   Object.reverseMerge(I, {
//     name: "McLovin",
//     age: 25,
//     homeState: "Hawaii"
//   });

//   return {
//     introduce: function() {
//       return "Hi I'm " + I.name + " and I'm " + I.age;
//     }
//   };
// }

// var fogel = Person({
//   age: "old enough"
// });
// fogel.introduce(); // "Hi I'm McLovin and I'm old enough"
// Wow, that's not really very useful on it's own, but take a look at adding a subclass:

// function Ninja(I) {
//   I = I || {};

//   Object.reverseMerge(I, {
//     belt: "black"
//   });

//   // Ninja is a subclass of person
//   return Object.extend(Person(I), {
//     greetChallenger: function() {
//       return "In all my " + I.age + " years as a ninja, I've never met a challenger as worthy as you...";
//     }
//   });
// }

// var resig = Ninja({name: "John Resig"});



			
