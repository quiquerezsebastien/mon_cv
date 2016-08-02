
$(document).ready(function(){
  'use strict';
  $('a').smoothScroll();
  


	$(".progress-bar").each(function(index, item){
	
	var value = $(item).attr("aria-valuenow");
	var canvas = $('<canvas></canvas>');
	$(item).parent().replaceWith(canvas);	//remplace le div des compétences par canevas
	
	var data = [
    {
        value: value,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }
	];
	
	var options = [
    {
       //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

    }
	];
	
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var myDoughnutChart = new Chart(ctx[1]).Doughnut(data,options);
	
	
	});
	
	
});


			
