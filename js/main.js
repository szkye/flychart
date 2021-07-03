var startUrl = "http://www.uvairlines.com/admin/resources/"
var midUrl = "";
var endUrl = ".pdf";



$(document).ready(function(){
    
    $("#icao").click(function(eve){
        document.getElementById("error").innerHTML = "";
    });
    
    $("#icao").keypress(function(event){
        if (event.which == 13) {
            if (!(document.getElementById("error").innerHTML == "")){
                document.getElementById("error").innerHTML = "";
                $("#myButton").click();
                return false;
            }else{
            $("#myButton").click();
            return false;
            }
        }
    });

    $("#myButton").click(function(){
        midUrl = $("#icao").val();
        if (midUrl == "") {
            //alert("Please enter a valid ICAO");
            document.getElementById("error").innerHTML = "Invalid ICAO.";
        }
        else if(midUrl.length > 4 || midUrl.length < 4){
            //alert("Please enter a valid ICAO");
            document.getElementById("error").innerHTML = "Invalid ICAO.";
        }
        else{
            window.location.href = (startUrl+(midUrl.toUpperCase())+endUrl);
        }
    });
});
