// console.log will be your best friend for debugging
// console.log prints the text (or variables) you put in to the log
// you can access the console by using developer tools on your browser
//    example: if you use Chrome, right click a page, choose Inspect and you should be able to see a "Console" option
console.log('main.js has been loaded');

// this is a vanilla JavaScript listener
//    vanilla = basic JavaScript, no additional framework or library
//    listener = checks (or "listens") for an "event". when the event happens, we evaluate a callback (we do something)
//                in the case below, we are listening for a click on the entire document (page)
//                when the document gets clicked, we evaluate the function,
//                and (event) is the parameters, the event being the click that just happened
document.addEventListener('click', function (event) {

  // when working with elements,
  //    . is for class, ".click-me" is the "click-me" class
  //    # is for id, "#click-me" is the "click-me" id

  // ----

  // if the clicked element has the class "click-me":
  //    we are going to log "This is happening!" (which can be seen in your browser's console)
  //    and we are going to change the element to "<div>CHANGED!</div>"
  //    the return then ends the function so it doesn't continue down evalutating more stuff
	if (event.target.matches('.click-me')) { 
    console.log('This is happening!');
    event.target.innerHTML = "<div>CHANGED!</div>";
    return;
  }

  // if the clicked element has the id "special-click-me":
  //    we are going to log "Fuck yeah, this is happening!" (which can be seen in your browser's console)
  //    and we are going to change the element to "<div>FUCK YOU BITCH!</div>"
  //    the return then ends the function so it doesn't continue down evalutating more stuff
  if (event.target.matches('#special-click-me')) { 
    console.log('Fuck yeah, this is happening!');
    event.target.innerHTML = "<div>FUCK YOU BITCH!</div>";
    return;
  }

});
