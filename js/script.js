/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBarFunction() {
    var x = document.getElementById("nav__Bar");
    if (x.className === "divnav") {
        x.className += " responsive";
    } else {
        x.className = "divnav";
    }
}