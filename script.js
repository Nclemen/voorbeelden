// createButton('button1', 'dit is button 2');
// createButton('button2', 'dit is button 2');
// createButton('button3', 'dit is button 2');
// createButton('button4', 'dit is button 2');

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
// var button 


for (var index = 0; index <= 4; index++) {

    createButton('button' + index, 'dit is button ' + index);
    
}

function createButton(buttonName, buttonText){
    var main = document.getElementById('main');
    var button = document.createElement('BUTTON');
    var text = document.createTextNode(buttonText);

    button.appendChild(text);
    button.id = buttonName;
    button.onclick = hi;
    main.appendChild(button);
}

function hi(a, b) {
    var c = a + b;
    return c;
}


alert(hi(5 ,10));

function wrong() {
    alert('wrong input');
}