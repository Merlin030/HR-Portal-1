<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="simple.css">
    <title>HR-Portal Stellenangebot erstellen</title>
    <script src="ang.js"></script>
</head>
<body>
    <div class="abt_id">
    <label for="abt_id">Abteilungsnr.</label>
    <input type="number" name="abt_id" id="abt_id">
    <span></span>
    </div>
    <div class="jobname">
    <label for="jobname">Stelle als</label>
    <input type="text" name="jobname" id="jobname">
    <span></span>
    </div>
    <div class="beschreibung">
    <label for="beschreibung">Stellenbeschreibung</label>
    <textarea id="beschreibung" name="beschreibung" cols="35" rows="4"></textarea> 
    <span></span>
    </div>
    <input type="submit" value="Absenden">
</body>
</html>