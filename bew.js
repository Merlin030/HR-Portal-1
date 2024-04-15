<script>
    window.onload = function() {
    let  errorname = true;
    let  nname = document.getElementsByName('nname')[0];
    const regexName = /^([ \u00c0-\u01ffa-zA-Z\.' \-]{3,})+$/;
    if (nname) {
    nname.onfocus = function () {
    this.setAttribute('style','background: white');
    }
    nname.onblur = function () {
        if (this.value.match(regexName)) {
            this.setAttribute('style','background: white');
            document.querySelector('.msg.nname').innerHTML = '';
            document.querySelector('.msg.nname').setAttribute('style','display:none');
            errorname = false;
        } else {
            this.setAttribute('style','background:seashell');
            document.querySelector('.msg.nname').innerHTML = 'Bitte geben Sie ihren Nachnamen ein!';
            document.querySelector('.msg.nname').setAttribute('style','display:block');
            errorname = true;
        }
    }
} else {
                console.error("Element with name 'nname' not found.");
            }
}
</script>
<script>
    window.onload = function() {
    let  errorname = true;
    let email = document.getElementsByName('email')[0];
    const regexName = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (email) {
    email.onfocus = function () {
    this.setAttribute('style','background: white');
    }
    email.onblur = function () {
        if (this.value.match(regexName)) {
            this.setAttribute('style','background: white');
            document.querySelector('.msg.email').innerHTML = '';
            document.querySelector('.msg.email').setAttribute('style','display:none');
            errorname = false;
        } else {
            this.setAttribute('style','background:seashell');
            document.querySelector('.msg.email').innerHTML = 'Bitte geben Sie ihre eMail ein!';
            document.querySelector('.msg.email').setAttribute('style','display:block');
            errorname = true;
        }
    }
} else {
                console.error("Element with name 'email' not found.");
            }
}
</script>
<script>
    window.onload = function() {
    let  errorname = true;
    let job_id = document.getElementsByName('job_id')[0];
    const regexName = /^[0-9]*$/;
    if (job_id) {
    job_id.onfocus = function () {
    this.setAttribute('style','background: white');
    }
    job_id.onblur = function () {
        if (this.value.match(regexName)) {
            this.setAttribute('style','background: white');
            document.querySelector('.msg.job_id').innerHTML = '';
            document.querySelector('.msg.job_id').setAttribute('style','display:none');
            errorname = false;
        } else {
            this.setAttribute('style','background:seashell');
            document.querySelector('.msg.job_id').innerHTML = 'Bitte geben Sie eine Stellenanzeige-Nr. ein!';
            document.querySelector('.msg.job_id').setAttribute('style','display:block');
            errorname = true;
        }
    }
} else {
                console.error("Element with name 'job_id' not found.");
            }
}
</script>