//global variable -------------------------------------
	globalMystery = " A ";
	speedSlide = 28000; //interval: 28000
	speedValue = 2;

$(document).ready(function () {
	
	//make choise automatic the mystery the rosary -----
	choiseMystery();

	//active o popover em btnMystery --------------------
	$(function () {
  		$('[data-toggle="popover"]').popover({html:true})
	});

	//set config default carousel ----------------------
	setIntervalCarousel();
}); //to end function ready ---------------------------

//function para show or hiden btnSettings ----------
$("#btnSettings").click(function() {
	$(".ajustes").fadeToggle();
});

//controll scroll automatic animate ----------------
$(".scroll").click(function(event){        
   	event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 76}, 400);
    	});
   $(".navbar-nav > li").click(function (){
   		$(".navbar-nav > li").attr("class","");
   		$(this).attr("class", "active");
 });


//function for set interval slide carousel ------------
function setIntervalCarousel(){
	setSpeedSlides();
	console.log('Setting interval for: ' + speedSlide);
	$('.carousel').carousel({
     interval: speedSlide,
     pause: false
   });
	stopCarousel();
}
//function set speedSlides getting the URL ------------
function setSpeedSlides(){
	var url = window.location.href.toString();
	var aux = url.split('#');
	if (aux[1] == 1){
			speedSlide = 35000; // se for 1 recebe a velocidade minima
			$("#inputSpeed").attr("value", 1);
		}
		else
			if (aux[1] == 3){
					speedSlide = 15000; // se for 3 recebe a velocidade maxima
					$("#inputSpeed").attr("value", 3);
				}
			else{
				speedSlide = 500; // se for nenhum fica na velocidade padrao 28000
				$("#inputSpeed").attr("value", 2);
			}
		
}
//function for stop slides carousels --------------------
function stopCarousel(){
	firstSlide();
	console.log('stop all slides');
	$('.carousel').carousel('pause');
	
}
//function for play slides carousels --------------------
function playCarousel(id){
	console.log('playing all slides');
	$(id).carousel('cycle');
	
}
//function specified item slide ------------------------
function firstSlide(){
	$('.carousel').carousel(0);
	console.log('set first slide');
}
//listen input range speed ----------------------------
$("#inputSpeed").change(function (){
	$("#alertSpeed").fadeIn();
	speedValue = $("#inputSpeed").val();
	console.log('speedValue: ' + speedValue);
});
//updatePage page ------------------------------------
 $("#updatePage").click(function () {
 	console.log('update Page click');
 	var url = window.location.href.toString();
 	console.log('url: ' + url);
 	var aux = url.split("#");
 	console.log('speedValue: ' + speedValue);
 	var newUrl = aux[0] + '#' + speedValue;
 	console.log('New url: ' + newUrl);
 	window.location.replace(newUrl);
 	location.reload();
 });
//function for choice automatic the mystery the rosary
function choiseMystery(){
	var date = new Date().getDay();
	var daysofTheweek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
	var mystery = "gozosos";
	switch (date){
		case 1:	case 6: mystery = "gozosos"; break;
		case 2: case 5: mystery = "dolorosos"; break;
		case 3: case 0: mystery = "gloriosos"; break;
		case 4: mystery = "luminosos"; break;
	}
	$("#day").html(daysofTheweek[date]);
	$("#mystery").html(mystery);
	globalMystery = mystery; 
}
//function the controll popovers ---------------------------
function Popovers(id) {
	$('.btnMystery').popover('hide');
	switch (id){
		case 1:
			 $(".spanMystery").hide(); $(".spanMystery2").show();
			 $(".btnMystery").html("gozosos");
			 globalMystery = "gozosos";
			 break;
		case 2:
			 $(".spanMystery").hide(); $(".spanMystery2").show();
			 $(".btnMystery").html("dolorosos");
			 globalMystery = "dolorosos";
			 break;
		case 3:
			 $(".spanMystery").hide(); $(".spanMystery2").show();
			 $(".btnMystery").html("gloriosos");
			 globalMystery = "gloriosos";
			 break;
		case 4:
			 $(".spanMystery").hide(); $(".spanMystery2").show();
			 $(".btnMystery").html("luminosos");
			 globalMystery = "luminosos"
			 break;
		case 0:
			 $(".spanMystery").show(); $(".spanMystery2").hide();
			 //make choise automatic the mystery the rosary
			 choiseMystery();
			 break;
	}
}
//close modals every time click in button for controll modals ---
$(".closeModals").click(function(){
	//closed all modals and stops
	$(".modal").modal('hide');
	stopCarousel();
});
//controll modals -------------------------------------------
$("#go").click( function() {
	//open next modal and play
	$("#mdlGozosos1").modal('show');
	playCarousel("#carouselGo1");
});
$("#go1").click( function() {
	//open next modal and play
	$("#mdlGozosos2").modal('show');
	playCarousel("#carouselGo2");
});
$("#go2").click( function() {
	//open next modal and play
	$("#mdlGozosos3").modal('show');
	playCarousel("#carouselGo3");
});
$("#go3").click( function() {
	//open next modal and play
	$("#mdlGozosos4").modal('show');
	playCarousel("#carouselGo4");
});
$("#go4").click( function() {
	//open next modal and play
	$("#mdlGozosos5").modal('show');
	playCarousel("#carouselGo5");
});
$("#go5, #do5, #gl5, #lu5").click( function() {
	//finish the rosary
	$("#mdlAgradecimentos").modal('show');
});
//*************************************
$("#do").click( function() {
	//open next modal and play
	$("#mdlDolorosos1").modal('show');
	playCarousel("#carouselDo1");
});
$("#do1").click( function() {
	//open next modal and play
	$("#mdlDolorosos2").modal('show');
	playCarousel("#carouselDo2");
});
$("#do2").click( function() {
	//open next modal and play
	$("#mdlDolorosos3").modal('show');
	playCarousel("#carouselDo3");
});
$("#do3").click( function() {
	//open next modal and play
	$("#mdlDolorosos4").modal('show');
	playCarousel("#carouselDo4");
});
$("#do4").click( function() {
	//open next modal and play
	$("#mdlDolorosos5").modal('show');
	playCarousel("#carouselDo5");
});
//*************************************
$("#gl").click( function() {
	//open next modal and play
	$("#mdlGloriosos1").modal('show');
	playCarousel("#carouselGl1");
});
$("#gl1").click( function() {
	//open next modal and play
	$("#mdlGloriosos2").modal('show');
	playCarousel("#carouselGl2");
});
$("#gl2").click( function() {
	//open next modal and play
	$("#mdlGloriosos3").modal('show');
	playCarousel("#carouselGl3");
});
$("#gl3").click( function() {
	//open next modal and play
	$("#mdlGloriosos4").modal('show');
	playCarousel("#carouselGl4");
});
$("#gl4").click( function() {
	//open next modal and play
	$("#mdlGloriosos5").modal('show');
	playCarousel("#carouselGl5");
});
//*************************************
$("#lu").click( function() {
	//open next modal and play
	$("#mdlLuminosos1").modal('show');
	playCarousel("#carouselLu1");
});
$("#lu1").click( function() {
	//open next modal and play
	$("#mdlLuminosos2").modal('show');
	playCarousel("#carouselLu2");
});
$("#lu2").click( function() {
	//open next modal and play
	$("#mdlLuminosos3").modal('show');
	playCarousel("#carouselLu3");
});
$("#lu3").click( function() {
	//open next modal and play
	$("#mdlLuminosos4").modal('show');
	playCarousel("#carouselLu4");
});
$("#lu4").click( function() {
	//open next modal and play
	$("#mdlLuminosos5").modal('show');
	playCarousel("#carouselLu5");
});
$("#amen").click( function() {
	//finish the rosary
	$("#mdlParabens").modal('show');
});
//controll modals back --------------------------------------
$("#bgo1, #bdo1, #bgl1, #blu1").click(function() {
	//open back modal and stop
	$("#mdlOferecimentos").modal('show');
});
$("#bgo2").click(function() {
	//open back modal and play
	$("#mdlGozosos1").modal('show');
	playCarousel("#carouselGo1");
});
$("#bgo3").click(function() {
	//open back modal and play
	$("#mdlGozosos2").modal('show');
	playCarousel("#carouselGo2");
});
$("#bgo4").click(function() {
	//open back modal and play
	$("#mdlGozosos3").modal('show');
	playCarousel("#carouselGo3");
});
$("#bgo5").click(function() {
	//open back modal and play
	$("#mdlGozosos4").modal('show');
	playCarousel("#carouselGo4");
});
//*********************************
$("#bdo2").click(function() {
	//open back modal and play
	$("#mdlDolorosos1").modal('show');
	playCarousel("#carouselDo1");
});
$("#bdo3").click(function() {
	//open back modal and play
	$("#mdlDolorosos2").modal('show');
	playCarousel("#carouselDo2");
});
$("#bdo4").click(function() {
	//open back modal and play
	$("#mdlDolorosos3").modal('show');
	playCarousel("#carouselDo3");
});
$("#bdo5").click(function() {
	//open back modal and play
	$("#mdlDolorosos4").modal('show');
	playCarousel("#carouselDo4");
});
//***********************************
$("#bgl2").click(function() {
	//open back modal and play
	$("#mdlGloriosos1").modal('show');
	playCarousel("#carouselGl1");
});
$("#bgl3").click(function() {
	//open back modal and play
	$("#mdlGloriosos2").modal('show');
	playCarousel("#carouselGl2");
});
$("#bgl4").click(function() {
	//open back modal and play
	$("#mdlGloriosos3").modal('show');
	playCarousel("#carouselGl3");
});
$("#bgl5").click(function() {
	//open back modal and play
	$("#mdlGloriosos4").modal('show');
	playCarousel("#carouselGl4");
});
//*************************************
$("#blu2").click(function() {
	//open back modal and play
	$("#mdlLuminosos1").modal('show');
	playCarousel("#carouselLu1");
});
$("#blu3").click(function() {
	//open back modal and play
	$("#mdlLuminosos2").modal('show');
	playCarousel("#carouselLu2");
});
$("#blu4").click(function() {
	//open back modal and play
	$("#mdlLuminosos3").modal('show');
	playCarousel("#carouselLu3");
});
$("#blu5").click(function() {
	//open back modal and play
	$("#mdlLuminosos4").modal('show');
	playCarousel("#carouselLu4");
});
//function for redirecinar a página -------------------------
$("#rezar").click(function () {
	//open specific modal 
	switch (globalMystery){
		case 'gozosos':
			window.location.href = "gozosos.html";
			break;
		case 'dolorosos':
			window.location.href = "dolorosos.html";
			break;
		case 'gloriosos':
			window.location.href = "gloriosos.html";
			break;
		case 'luminosos':
			window.location.href = "luminosos.html";
			break;
	}
});


