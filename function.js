// Navbar Set Theme
function setTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 

//  Function Slider Stories
$(function slider() {
    $("#panLeft:first-of-type").click(
        function() {
            var navwidth = $("#list");
            navwidth.scrollLeft(navwidth.scrollLeft() - 200);
        }
    );
    $("#panRight:nth-of-type(2)").click(
        function() {
            var navwidth = $("#list");
            navwidth.scrollLeft(navwidth.scrollLeft() + 200);
        }
    );  
  });


  //  Function Slider Video
$(function slider() {
    $("#panLeftVideo:first-of-type").click(
        function() {
            var navwidth = $("#listVideo");
            navwidth.scrollLeft(navwidth.scrollLeft() - 200);
        }
    );
    $("#panRightVideo:nth-of-type(2)").click(
        function() {
            var navwidth = $("#listVideo");
            navwidth.scrollLeft(navwidth.scrollLeft() + 200);
        }
    );  
  });


//   Function change color when chip checkbox are clicked
function changeColorChip1() {
    var element = document.getElementById('chip1');
    element.classList.toggle("changeBackground");
 }

 function changeColorChip2() {
    var element = document.getElementById('chip2');
    element.classList.toggle("changeBackground");
 }

 function changeColorChip3() {
    var element = document.getElementById('chip3');
    element.classList.toggle("changeBackground");
 }

 function changeColorChip4() {
    var element = document.getElementById('chip4');
    element.classList.toggle("changeBackground");
 }

 function changeColorChip5() {
    var element = document.getElementById('chip5');
    element.classList.toggle("changeBackground");
 }