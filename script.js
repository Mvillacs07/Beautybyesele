window.onscroll = function() {
    myNavFunction()
}
var eseNav = document.getElementById("ese-nav")
var sticky = eseNav.offsetTop

function myNavFunction() {
    if (window.pageYOffset >= sticky) {
        eseNav.classList.add("sticky")
    } else {
        eseNav.classList.remove("sticky")
    }
}