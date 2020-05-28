/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * Define Global Variables
 * 
*/
var navbar = document.getElementById("navbar__list")
var elements = document.getElementsByTagName("section")
var smallestNumber = screen.height
var smallestId = 'start'
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
window.onload = function(){
    
    for (let i=0; i < elements.length; i++) {
        var list = document.createElement("LI")
        var li_name = document.createTextNode(elements[i].dataset.nav)
        let id = elements[i].id
        list.appendChild(li_name)
        
        list.onclick = function(){
            jump(id);
        }
        navbar.appendChild(list)
        
    }
}()



// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function(event) {
    let x = []

    for (let element of elements) {
        x.push(Math.abs(inVieport(element)))
    }

    let out = x.indexOf(Math.min.apply(Math, x));
    updateActive(out)
    console.log(elements[out].id)
    
}, false)

function updateActive(index) {
    for (let i=0; i < elements.length; i++) {
        i == index ? elements[i].classList.add("your-active-class") : elements[i].classList.remove("your-active-class")
    } 
}

// Scroll to anchor ID using scrollTO event
function jump(id){
    document.getElementById(id).scrollIntoView({behavior: "smooth"})
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Check section is in Viewport


function inVieport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top
    );
  }

