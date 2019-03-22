 /* function test(i) {
    var das = document.getElementById(i);
    var id = das.getAttribute('value');
    alert(id);
}
*/

var buchstaben = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var button;
var guesses = [];
var lives = 0;
var count = 0;
var word = ['Marvin', 'schule', 'Tobias', 'Software', 'Tablet', 'Block', 'Desktop'];
var zahl = 0;
var zahler = 0;
var wort = word[Math.floor(Math.random()*word.length)];

window.addEventListener('load', function() {
    
    result();
    reloadbutton();
    for(var i of buchstaben) {

        button = document.createElement('button');
        var text = document.createTextNode(i);

        button.setAttribute('class', 'buttonclass');
        button.setAttribute('id', i);
        button.appendChild(text);

       
        check();

    /*  cell.style.borderBottom ='3px solid lightgrey';
        cell.style.fontSize = '200px';
        cell.style.position = 'relative';
        cell.style.background = 'lightblue';
        cell.style.border = '1px solid black';
        cell.style.textAlign = 'center';
      */ 
        var div = document.getElementById('container');
        div.appendChild(button);
        div.style.width = '570px';
        div.style.height = '180px';
        div.style.justifyContent = 'space-between';
        div.style.alignContent = 'center';
      
    }
    function result() {
    
        var wordholder = document.getElementById('wordholder');
        var correct = document.createElement('li');

        

        for (i = 0; i < wort.length; i++) {
            correct.setAttribute('id', 'word');
            var guess = document.createElement('li');
            correct.style.listStyleType = 'none';
            correct.style.display = 'inline';
            correct.style.textAlign = 'center';
            correct.style.position = 'relative';
            correct.style.padding = '5px 0px 5px 0px'
            correct.style.textSize = '20px';
            guess.setAttribute('id', i);
            guess.style.listStyleType = 'none';
            guess.style.display = 'inline';
            guess.style.position = 'relative';
            guess.style.paddingLeft = '7px';
            guess.style.paddingBottom = '10px';
            guess.style.textAlign = 'center';
            guess.style.textSize = '20px';
          
            guess.innerHTML = '_';
           
            guesses.push(i);
            wordholder.appendChild(correct);
            correct.appendChild(guess);
        }
    };
})
