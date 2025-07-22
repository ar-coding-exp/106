function hello() {
console.log("Hello there!");
}

function init() {
    console.log("Hello, I am the init.");
    hello();
}

window.onload = init; 