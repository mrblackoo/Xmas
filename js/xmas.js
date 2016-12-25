$(document).ready(
    $( "#confirm" ).click(function() {
  		var gname = $("#gift").val();
  		if (gname=="") {
			$("#g2011").text("禮物呢");
  		}else{
  			$("#g2011").text(gname);
  			setCookie("t2011",gname,365);
  			$("#img2011").attr("src", "img/gift.png")
  		};	
		
		$("#gift").val("");//https://docs.google.com/spreadsheets/d/1C4faFNRfx6r-lER09BfOUuZ3fE5w5KTnrl4WfL5ta2U/pubhtml
	}),

	$( "#confirm1" ).click(function() {
  		var gname = $("#gift1").val();
  		if (gname=="") {
			$("#g2012").text("禮物呢");
  		}else{
  			$("#g2012").text(gname);
  			setCookie("t2012",gname,365);
  			$("#img2012").attr("src", "img/gift.png")
  		};	
		
		$("#gift1").val("");//https://docs.google.com/spreadsheets/d/1C4faFNRfx6r-lER09BfOUuZ3fE5w5KTnrl4WfL5ta2U/pubhtml
	}),

	$( "#confirm2" ).click(function() {
  		var gname = $("#gift2").val();
  		if (gname=="") {
			$("#g2013").text("禮物呢");
  		}else{
  			$("#g2013").text(gname);
  			setCookie("t2013",gname,365);
  			$("#img2013").attr("src", "img/gift.png")
  		};	
		
		$("#gift2").val("");//https://docs.google.com/spreadsheets/d/1C4faFNRfx6r-lER09BfOUuZ3fE5w5KTnrl4WfL5ta2U/pubhtml
	}),

	$( "#confirm3" ).click(function() {
  		var gname = $("#gift3").val();
  		if (gname=="") {
			$("#g2014").text("禮物呢");
  		}else{
  			$("#g2014").text(gname);
  			setCookie("t2014",gname,365);
  			$("#img2014").attr("src", "img/gift.png")
  		};	
		
		$("#gift3").val("");//https://docs.google.com/spreadsheets/d/1C4faFNRfx6r-lER09BfOUuZ3fE5w5KTnrl4WfL5ta2U/pubhtml
	}),

	$( "#confirm4" ).click(function() {
  		var gname = $("#gift4").val();
  		if (gname=="") {
			$("#g2015").text("禮物呢");
  		}else{
  			$("#g2015").text(gname);
  			setCookie("t2015",gname,365);
  			$("#img2015").attr("src", "img/gift.png")
  		};	
		
		$("#gift4").val("");//https://docs.google.com/spreadsheets/d/1C4faFNRfx6r-lER09BfOUuZ3fE5w5KTnrl4WfL5ta2U/pubhtml
	}),

	$( "#confirm5" ).click(function() {
  		var gname = $("#gift5").val();
  		if (gname=="") {
			$("#g2016").text("禮物呢");
  		}else{
  			$("#g2016").text(gname);
  			setCookie("t2016",gname,365);
  			$("#img2016").attr("src", "img/gift.png")
  		};	
		
		$("#gift5").val("");//https://docs.google.com/spreadsheets/d/1C4faFNRfx6r-lER09BfOUuZ3fE5w5KTnrl4WfL5ta2U/pubhtml
	})
);
//google表單暫時不用
$(function(){
// ID of the Google Spreadsheet
			var spreadsheetID = "1f_CLxD7GRs8_UBf4aETpTQwI8H0uLacpAlXpcnAcx3A";
			                      //https://docs.google.com/spreadsheets/d/1C4faFNRfx6r-lER09BfOUuZ3fE5w5KTnrl4WfL5ta2U/edit?usp=sharing
			// Make sure it is public or set to Anyone with link can view 
			var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json"; //this is the part that's changed
			var sheet = [];                      
			$.getJSON(url, function(data) {
			                      
			    var entry = data.feed.entry;
			    sheet[0] = {
			    	"col2011" : entry[0].gsx$t2011.$t,
			    	"col2012" : entry[0].gsx$t2012.$t
			    }
			    //console.log("123123123");
			    //$(entry).each(function(){
			    	//make sure this matches your column labels when you change the source sheet
			    	//$('.results').prepend('<h2>'+this.gsx$title.$t+'</h2><p>'+this.gsx$url.$t+'</p>');
			    //});
			                      
			});
});

$(function initialGetCookie() {
	    var t2011=getCookie("t2011");
	    var t2012=getCookie("t2012");
	    var t2013=getCookie("t2013");
	    var t2014=getCookie("t2014");
	    var t2015=getCookie("t2015");
	    var t2016=getCookie("t2016");
	    var p2011=getCookie("p2011");
	    var p2012=getCookie("p2012");
	    var p2013=getCookie("p2013");
	    var p2014=getCookie("p2014");
	    var p2015=getCookie("p2015");
	    var p2016=getCookie("p2016");
	    if (t2011 != "") {
	        $("#g2011").text(t2011);
	        $("#img2011").attr("src", "img/gift.png")
	    }
	    if (t2012 != "") {
	        $("#g2012").text(t2012);
	        $("#img2012").attr("src", "img/gift.png")
	    }
	    if (t2013 != "") {
	        $("#g2013").text(t2013);
	        $("#img2013").attr("src", "img/gift.png")
	    }
	    if (t2014 != "") {
	        $("#g2014").text(t2014);
	        $("#img2014").attr("src", "img/gift.png")
	    }
	    if (t2015 != "") {
	        $("#g2015").text(t2015);
	        $("#img2015").attr("src", "img/gift.png")
	    }
	    if (t2016 != "") {
	        $("#g2016").text(t2016);
	        $("#img2016").attr("src", "img/gift.png")
	    }

	});

function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+ d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}