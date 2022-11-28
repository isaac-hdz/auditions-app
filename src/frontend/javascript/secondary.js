console.log('secondary.js has been loaded');

document.addEventListener('click', function (event) {

    if (event.target.matches('.click-me')) {
        console.log('pew-pew-bitch!');
        event.target.innerHTML = "<div>Evovled!</div";
        return;
    }

    if (event.target.matches('#special-click-me')) {
        console.log('Boom-Boom-Fire-Power');
        event.target.innerHTML = "<div>FIGHT ME LITTLE BITCH!</div>";
        return;
    }



})