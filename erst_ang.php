<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="simple.css">
    <title>HR-Portal Stellenangebot erstellen</title>
    <script>
    window.onload = function() {
    let  errorname = true;
    let  jobname = document.getElementsByName('jobname')[0];
    const regexName = /^([ \u00c0-\u01ffa-zA-Z\.' \-]{3,})+$/;
    if (jobname) {
    jobname.onfocus = function () {
    this.setAttribute('style','background: white');
    }
    jobname.onblur = function () {
        if (this.value.match(regexName)) {
            this.setAttribute('style','background: white');
            document.querySelector('.msg.jobname').innerHTML = '';
            document.querySelector('.msg.jobname').setAttribute('style','display:none');
            errorname = false;
        } else {
            this.setAttribute('style','background:seashell');
            document.querySelector('.msg.jobname').innerHTML = 'Bitte geben Sie ein für welche Stelle!';
            document.querySelector('.msg.jobname').setAttribute('style','display:block');
            errorname = true;
        }
    }
} else {
                console.error("Element with name 'jobname' not found.");
            }
}
</script>
<script>
    window.onload = function() {
    let  errorname = true;
    let abt_id = document.getElementsByName('abt_id')[0];
    const regexName = /^[0-9]*$/;
    if (abt_id) {
    abt_id.onfocus = function () {
    this.setAttribute('style','background: white');
    }
    abt_id.onblur = function () {
        if (this.value.match(regexName)) {
            this.setAttribute('style','background: white');
            document.querySelector('.msg.abt_id').innerHTML = '';
            document.querySelector('.msg.abt_id').setAttribute('style','display:none');
            errorname = false;
        } else {
            this.setAttribute('style','background:seashell');
            document.querySelector('.msg.abt_id').innerHTML = 'Bitte geben Sie eine Abteilungsnr. ein!';
            document.querySelector('.msg.abt_id').setAttribute('style','display:block');
            errorname = true;
        }
    }
} else {
                console.error("Element with name 'abt_id' not found.");
            }
}
</script>

    </head>
<body>
    <label for="abt_id">Abteilungsnr.</label>
    <input type="number" name="abt_id" id="abt_id">
    <label for="jobname">Stelle als</label>
    <input type="text" name="jobname" id="jobname">
    <label for="beschreibung">Stellenbeschreibung</label>
    <textarea id="beschreibung" name="beschreibung" cols="35" rows="4"></textarea> 
    <input type="submit" value="Absenden">

</body>
</html>