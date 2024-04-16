window.onload = function() {
    let valid=false;
    let valid2=false;
    let valid3=false;
    let regexnname = /^([ \u00c0-\u01ffa-zA-Z\.' \-]{3,})+$/; //Regulärer Ausdruck für Namen
    let nname = document.getElementsByName('nname')[0]; //Das Formularfeld nname holen
    if (nname) {
        nname.onfocus = function () { //ändern der Hintergrundfarbe auf weiß wenn es focusiert wird
            this.setAttribute('style','background: white');
        }
        nname.onblur = function () { //bei Verlassen des Feldes
            if (this.value.match(regexnname)&&this.value.trim()!=="") { //Auf leeres Feld und Anwendbarkeit des regulären Ausdrucks prüfen
                this.setAttribute('style','background: white');
                document.querySelector('.nname span').innerHTML = '';
                document.querySelector('.nname span').setAttribute('style','display:none');
                valid=true;
            } else {
                this.setAttribute('style','background:seashell');// Bei Fehler Hintergrundfarbe ändern und <span> Text festlegen und einblenden
                document.querySelector('.nname span').innerHTML = 'Bitte geben Sie ihren Nachnamen ein!';
                document.querySelector('.nname span').setAttribute('style','display:block');
            }
        }
    } else { //Falls das Formularfeld aus irgendeinem Grund nicht gefunden wird
        console.error("Das Element 'nname' wurde nicht gefunden."); //Fehlermeldung
    }

    let email = document.getElementsByName('email')[0]; // Validierung für email nach dem selben Schema wie nname
    if (email) {
        regexemail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        email.onfocus = function () {
            this.setAttribute('style','background: white');
        }
        email.onblur = function () {
            if (this.value.match(regexemail)&&this.value.trim()!=="") {
                this.setAttribute('style','background: white');
                document.querySelector('.email span').innerHTML = '';
                document.querySelector('.email span').setAttribute('style','display:none');
                valid2=true;
            } else {
                this.setAttribute('style','background:seashell');
                document.querySelector('.email span').innerHTML = 'Bitte geben Sie ihre eMail ein!';
                document.querySelector('.email span').setAttribute('style','display:block');
            }
        }
    } else {
        console.error("Das Element 'email' wurde nicht gefunden.");
    }

    let job_id = document.getElementsByName('job_id')[0]; //Validierung für job_id nach dem selben Schema
    if (job_id) {
        regexjob = /^[0-9]*$/;
        job_id.onfocus = function () {
            this.setAttribute('style','background: white');
        }
        job_id.onblur = function () {
            if (this.value.match(regexjob)&&this.value.trim()!=="") {
                this.setAttribute('style','background: white');
                document.querySelector('.job_id span').innerHTML = '';
                document.querySelector('.job_id span').setAttribute('style','display:none');
                valid3=true;
            } else {
                this.setAttribute('style','background:seashell');
                document.querySelector('.job_id span').innerHTML = 'Bitte geben Sie eine Stellenanzeige-Nr. ein!';
                document.querySelector('.job_id span').setAttribute('style','display:block');
            }
        }
    } else {
        console.error("Das Element 'job_id' wurde nicht gefunden.");
    }
   
}