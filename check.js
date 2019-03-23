

function check() {
    button.onclick = function () {
        var guess = (this.innerHTML);
        var dat = document.getElementById(guess);

        dat.style.backgroundColor = 'white';
        dat.setAttribute('disabled', true);

        var wortt = wort.toLowerCase();
        var ersterBuchstabeNummer = wortt.indexOf(guess);
        var zweiterBuchstabeNummer = wortt.lastIndexOf(guess);

        if (ersterBuchstabeNummer >= 0) {
            if (ersterBuchstabeNummer == zweiterBuchstabeNummer) {
                var unterstrich = document.getElementById(ersterBuchstabeNummer);
                unterstrich.innerText = wort[ersterBuchstabeNummer];
                zahler++;

            } else if (ersterBuchstabeNummer != zweiterBuchstabeNummer) {

                var unterstrich1 = document.getElementById(ersterBuchstabeNummer)
                unterstrich1.innerText = wort[ersterBuchstabeNummer];

                var unterstrich2 = document.getElementById(zweiterBuchstabeNummer);
                unterstrich2.innerText = wort[zweiterBuchstabeNummer];
                zahler++;
                zahler++;
            }
            if (zahler == wort.length) {
                alert('Du hast gewonnen, yey!')
                for (i = 0; i < buchstaben.length; i++) {
                    dat = document.getElementById(buchstaben[i]);
                    dat.setAttribute('disabled', true);
                }
            }
        } else if (ersterBuchstabeNummer === -1) {
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
                setTimeout(function () {
                    alert('Du hast verloren ;(');
                    for (i = 0; i < buchstaben.length; i++) {
                        dat = document.getElementById(buchstaben[i]);
                        dat.setAttribute('disabled', true);
                    }
                }, 100)
            }
        }
    }

}


