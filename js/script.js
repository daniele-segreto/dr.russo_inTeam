// INCLUDE W3C
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

// TABLE TRATTAMENTI JQUERY
$( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} );

// FADE OUT SCHEDE
$(document).ready(function() {
    $("#tabs").tabs({
        beforeActivate: function(event, ui) {
            $(ui.oldPanel).fadeOut(300);
        },
        activate: function(event, ui) {
            $(ui.newPanel).fadeIn(300);
        }
    });
});

// REDIRECT MODALE
function apriPaginaContatti() {
    // Reindirizza l'utente alla pagina "contatti.html"
    window.location.href = "../contatti.html";
}

// BOTTON STICKY
// let socialFloat = document.querySelector('#social-float');
// let footer = document.querySelector('#footer');

// function checkOffset() {
//     function getRectTop(el){
//         let rect = el.getBoundingClientRect();
//         return rect.top;
//     }
    
//     if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
//     socialFloat.style.position = 'absolute';
//     if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
//     socialFloat.style.position = 'fixed'; // restore when you scroll up
    
//     socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
// }

// document.addEventListener("scroll", function(){
//     checkOffset();
// });