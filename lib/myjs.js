//global variable
	globalMystery = " A ";
	speedSlide = 1000; //interval: 28000
	speedValue = 2;

$(document).ready(function () {
	
	//make choise automatic the mystery the rosary
	choiseMystery();

	//active o popover em btnMystery
	$(function () {
  		$('[data-toggle="popover"]').popover({html:true})
	});

	//set config default carousel
	setIntervalCarousel();

	$("#btnSettings").click(function() {
		$(".ajustes").fadeToggle();
	});
});
//function for set interval slide carousel
function setIntervalCarousel(){
	setSpeedSlides();
	console.log('Setting interval for: ' + speedSlide);
	$('.carousel').carousel({
     interval: speedSlide,
     pause: false
   });
	stopCarousel();
}
//function set speedSlides getting the URL
function setSpeedSlides(){
	var url = window.location.href.toString();
	var aux = url.split('#');
	if (aux[1] == 1){
			speedSlide = 500; // se for 1 recebe a velocidade minima
			$("#inputSpeed").attr("value", 1);
		}
		else
			if (aux[1] == 3){
					speedSlide = 5000; // se for 3 recebe a velocidade maxima
					$("#inputSpeed").attr("value", 3);
				}
			else{
				speedSlide = 2000; // se for nenhum fica na velocidade padrao
				$("#inputSpeed").attr("value", 2);
			}
		
}
//function for stop slides carousels
function stopCarousel(){
	firstSlide();
	console.log('stop all slides');
	$('.carousel').carousel('pause');
	
}
//function for play slides carousels
function playCarousel(id){
	console.log('playing all slides');
	$(id).carousel('cycle');
	
}
//function specified item slide
function firstSlide(){
	$('.carousel').carousel(0);
	console.log('set first slide');
}
//listen input range speed
$("#inputSpeed").change(function (){
	$("#alertSpeed").fadeIn();
	speedValue = $("#inputSpeed").val();
	console.log('speedValue: ' + speedValue);
});
//updatePage page
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
	var date = new Date("01/18/2016").getDay();
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

//function the controll popovers
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

//controll modals
$("#go1").click( function() {
	//closed all modals and stops
	$(".modal").modal('hide');
	stopCarousel();
	//open next modal and play
	$("#mdlGozosos2").modal('show');
	playCarousel("#carouselGo2");
});

//function for start correct mystery
$("#StartMystery").click(function () {
	//closed all modals
	$(".modal").modal('hide');

	//open specific modal 
	switch (globalMystery){
		case 'gozosos':
			$("#mdlGozosos1").modal('show');
			playCarousel("#carouselGo1");
			break;
		case 'dolorosos':
			$("#mdlDolorosos1").modal('show');
			break;
		case 'gloriosos':
			$("#mdlGloriosos1").modal('show');
			break;
		case 'luminosos':
			$("#mdlLuminosos1").modal('show');
			break;
	}
});
