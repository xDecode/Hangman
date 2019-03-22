

function check() {
    button.onclick = function () {
        var guess = (this.innerHTML);
        var dat = document.getElementById(guess);
        dat.style.backgroundColor = 'white';
        dat.setAttribute('disabled', true);
       
        for (var i = 0; i < word.length; i++) {
            var wortt = wort.toLowerCase();
            var versuch = wortt.indexOf(guess);
        }
            if (versuch >= 0) {
                var unterstrich = document.getElementById(versuch);
                unterstrich.innerText = guess;
                zahler++;
                    if (zahler==wort.length){
                        alert('Du hast gewonnen, yey!')
                        for (i = 0; i < buchstaben.length; i++) {
                            dat = document.getElementById(buchstaben[i]);
                            dat.setAttribute('disabled', true);
                        }
                    }
                } else if (versuch === -1) {
                dat.style.color = 'red';
               
                lives++;
                         
                count++;
                
                switch (count) {
                    case 1: 
                        canvas1();
                        break;
                    case 2:
                        canvas2();
                        break;
                    case 3:
                        canvas3();
                        break;
                    case 4:
                        canvasSeil();
                        break;
                    case 5:
                        canvas5();
                        break;
                    case 6: 
                        canvas6();
                        break;
                    case 7:
                        canvas7();
                        break;
                    case 8:
                        canvas8();
                        break;
                    case 9:
                        canvas9();
                        break;   
                    case 10:
                        canvas10();
                        break;     
                }
                if (lives >= 10) {
                    setTimeout(function() {
                        alert('Du hast verloren ;('); 
                    }, 100)
               }
            }
        }
     
        }
    

