<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="simple.css">
    <title>HR-Portal</title>
    <script>
        function setVariableAndSubmit(variableName) {
            // Set the variable in the URL query string
            window.location.href = window.location.href.split('?')[0] + '?' + variableName + '=true';
        }
    </script>
</head>
<body>
    <h1>Unser HR-Portal</h1>
    <button id="anz" type="submit" onclick="setVariableAndSubmit('anz')">Stellenangebote</button>
    <?php if(isset($_get["anz"])) { ?>
    <a href="erst_anz.php">Offene Stelle erstellen</a>
    <a href="anz_ang.php">Offene Stellen anzeigen</a>
    <?php } ?>
    <button id="bew" type="submit" onclick="setVariableAndSubmit('bew')">Bewerbungen</button>
    <?php if(isset($_get["bew"])) { ?>
    <a href="erst_bew.php">Eine Bewerbung erstellen</a>
    <a href="anz_bew.php">Eingegangene Bewerbungen anzeigen</a>
    <?php } ?>
</body>
</html>