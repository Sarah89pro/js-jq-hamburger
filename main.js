/*Mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a vostro vantaggio!*/


//REFS

var openMenu = $("i.fas.fa-bars");
var menu = $(".hamburger-menu");
var closeMenu = $(".fa-times");


//option 2

// Open Menu
openMenu.click( function() {
    menu.show().addClass("roll-in-top");
});


// Close Menu
closeMenu.click( function() {
    menu.removeClass("roll-in-top").addClass("roll-out-top");
});


// Tentativo per capire animate()

/*openMenu.click( function() {
    menu.show().animate ( {
        opacity: 0.9,
        height: "toggle"
      } , 5000, function() {
        // Animation complete.
      });
});*/





//option 1

/*// Open Menu
openMenu.click( function() {
    menu.slideDown();
});

// Close Menu
closeMenu.click( function() {
    menu.slideUp();
});*/