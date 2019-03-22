function reloadbutton() {
    var buttoncontainerrel = document.getElementById('reloadbutton');
    var relbutton = document.createElement('button');
    relbutton.setAttribute('type', 'button');
    relbutton.setAttribute('id', 'relbutton');

    var text = document.createElement('p');
    text.style.fontSize = '20px';
    texttext = document.createTextNode('reload');

    text.appendChild(texttext);
    relbutton.appendChild(text);
    relbutton.setAttribute('onclick', 'reloadbuttononclick()')
    buttoncontainerrel.appendChild(relbutton);
    
}

function reloadbuttononclick() {
   location.reload();
}