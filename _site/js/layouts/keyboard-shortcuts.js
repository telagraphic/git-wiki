// page.addEventListener('keydown', function(event) {
//   if (event.keyCode === 17 && event.keyCode === 109) {
//     console.log('menu');
//   }
//
//   if (event.keyCode === 17 && event.keyCode === 115) {
//     console.log('search');
//   }
// });

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

var keys = [];

function keysPressed(e) {
    console.log("key pressed..");
    console.log(keys[e.keyCode]);
    // store an entry for every key pressed
    keys[e.keyCode] = true;

    // Ctrl + f
    if (keys[17] && keys[109]) {
        // do something
        console.log('menu');

        // prevent default browser behavior
        e.preventDefault();
    }

    // Ctrl + f
    if (keys[17] && keys[115]) {
        // do something
        console.log('menu');

        // prevent default browser behavior
        e.preventDefault();
    }
}

function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
}
