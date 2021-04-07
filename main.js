/*Mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a vostro vantaggio!*/


//REFS

var openMenu = $("i.fas.fa-bars");
var ham = $(".hamburger-menu");
var closeMenu = $(".fa-times");


//option 2

// Open Menu
openMenu.click( function() {
    ham.show().addClass("roll-in-top");
});

// Close Menu
closeMenu.click( function() {
    ham.toggle().removeClass("roll-in-top");
});








//option 1

/*// Open Menu
openMenu.click( function() {
    ham.slideDown();
});

// Close Menu
closeMenu.click( function() {
    ham.slideUp();
});*/