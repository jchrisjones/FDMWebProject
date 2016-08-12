// JavaScript File
var url = "./xml/frted.xml"
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var body = document.getElementsByTagName("body");
		var xml = request.responseXML;
		body.innerHTML = xml.toString();
    }
};
request.open("GET", url, true);
request.send();

/*
function myFunction(xml) {
    
    var xmlDoc = xml.responseXML;
	parser = new DOMParser();
	xmlDoc = parser.

    var myarray = ["p1","p2","p3","p4","p5","p6"];
    
    for (var i = 0; i<= myarray.length; i++){	    
	    var x = xmlDoc.getElementsByTagName("PRICE")[i].childNodes[0];
	    console.log(x);
	    document.getElementById(myarray[i]).innerHTML = x.data;

	    var z = xmlDoc.getElementsByTagName("DESC")[i].childNodes[0];
	    console.log(z);
	    document.getElementById(myarray[i]+"d2").innerHTML = z.data;
	    
	    var a = xmlDoc.getElementsByTagName("DESC2")[i].childNodes[0];
	    console.log(a);
	    document.getElementById(myarray[i]+"d3").innerHTML = a.data;    
    }
    
}

//myFunction("Books.xml");
*/

