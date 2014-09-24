

$(document).ready(function(){

	$(window).resize(function() {
        // activate everytime window resized
        if($(window).width() <= 640) {
            $("#header").hide();
           	$("#header_mini").show();
        } else {
            $("#header").show();
           	$("#header_mini").hide();
        }
    }).resize();


	$(".card").hide();
	var openCard = false;
	var blurry = false;
	var bodyCon = "#body_container";


	$("h2:nth-child(1)").click(function(){
		if (openCard==false){
			$(".card").fadeIn(100);
			openCard = true;
			console.log("Card open (openCard=" + openCard +")");
			$("#body_container").addClass("makeBlur");
			blurry = true;
		}
		
		else if (openCard==true){
			$(".card").fadeOut(100);
			openCard = false;
			console.log("Card closed (openCard=" + openCard +")");
			$("#body_container").removeClass("makeBlur");
			blurry = false;
		}
	});

	$("#closeCard").click(function(){
		if (openCard==true){
			$(".card").fadeOut(100);
			openCard = false;
			console.log("Card closed (openCard=" + openCard +")");
			$("#body_container").removeClass("makeBlur");
			blurry = false;
		}
	});




});