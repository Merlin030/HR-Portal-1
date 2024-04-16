window.onload = function() {
    let valid=false;
    let valid2=false;
    let valid3=false;
    let regexjobname = /^([ \u00c0-\u01ffa-zA-Z\.' \-]{3,})+$/; //Regulärer Ausdruck für Namen
    let jobname = document.getElementsByName('jobname')[0]; //Das Formularfeld nname holen
    if (jobname) {
        jobname.onfocus = function () { //ändern der Hintergrundfarbe auf weiß wenn es focusiert wird
            this.setAttribute('style','background: white');
        }
        jobname.onblur = function () { //bei Verlassen des Feldes
            if (this.value.match(regexjobname)&&this.value.trim()!=="") { //Auf leeres Feld und Anwendbarkeit des regulären Ausdrucks prüfen
                this.setAttribute('style','background: white');
                document.querySelector('.jobname span').innerHTML = '';
                document.querySelector('.jobname span').setAttribute('style','display:none');
                valid=true;
            } else {
                this.setAttribute('style','background:seashell');// Bei Fehler Hintergrundfarbe ändern und <span> Text festlegen und einblenden
                document.querySelector('.jobname span').innerHTML = 'Bitte geben Sie ihren Nachnamen ein!';
                document.querySelector('.jobname span').setAttribute('style','display:block');
            }
        }
    } else { //Falls das Formularfeld aus irgendeinem Grund nicht gefunden wird
        console.error("Das Element 'jobname' wurde nicht gefunden."); //Fehlermeldung
    }

    let beschreibung = document.getElementsByName('beschreibung')[0]; // Validierung für beschreibung nach dem selben Schema wie nname
    if (beschreibung) {
            beschreibung.onfocus = function () {
            this.setAttribute('style','background: white');
        }
        beschreibung.onblur = function () {
            if (this.value.trim()!=="") {
                this.setAttribute('style','background: white');
                document.querySelector('.beschreibung span').innerHTML = '';
                document.querySelector('.beschreibung span').setAttribute('style','display:none');
                valid2=true;
            } else {
                this.setAttribute('style','background:seashell');
                document.querySelector('.beschreibung span').innerHTML = 'Bitte geben Sie eine Beschreibung ein!';
                document.querySelector('.beschreibung span').setAttribute('style','display:block');
            }
        }
    } else {
        console.error("Das Element 'beschreibung' wurde nicht gefunden.");
    }

    let abt_id = document.getElementsByName('abt_id')[0]; //Validierung für abt_id nach dem selben Schema
    if (abt_id) {
        regexabt = /^[0-9]*$/;
        abt_id.onfocus = function () {
            this.setAttribute('style','background: white');
        }
        abt_id.onblur = function () {
            if (this.value.match(regexabt)&&this.value.trim()!=="") {
                this.setAttribute('style','background: white');
                document.querySelector('.abt_id span').innerHTML = '';
                document.querySelector('.abt_id span').setAttribute('style','display:none');
                valid3=true;
            } else {
                this.setAttribute('style','background:seashell');
                document.querySelector('.abt_id span').innerHTML = 'Bitte geben Sie eine Abteilungsnr. ein!';
                document.querySelector('.abt_id span').setAttribute('style','display:block');
            }
        }
    } else {
        console.error("Das Element 'abt_id' wurde nicht gefunden.");
    }
   
}