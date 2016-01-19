//global variable
	globalMystery = " A ";

$(document).ready(function () {
	
	//make choise automatic the mystery the rosary
	choiseMystery();

	//active o popover em btnMystery
	$(function () {
  		$('[data-toggle="popover"]').popover({html:true})
	});

	$('.carousel').carousel({
      //interval: 28000
      interval: 4000
    });

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

//function for start correct mystery
$("#StartMystery").click(function () {
	//closed all modals
	$(".modal").modal('hide');

	//open specific modal 
	switch (globalMystery){
		case 'gozosos':
			$("#mdlGozosos1").modal('show');
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
