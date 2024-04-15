<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="simple.css">
    <title>HR-Portal</title>
    </head>
<body>
<table>
    <tr>
        <th>Abteilungsnr.</th>
        <th>Stelle als</th>
        <th>Stellenbeschreibung</th>
    </tr>
    <?php foreach($anzen as $anz) { ?>
    <tr>
        <td><?php echo $anz["abt_id"] ?></td>
        <td><?php echo $anz["jobname"] ?></td>
        <td><?php echo $anz["beschreibung"] ?></td>
    </tr>

<?php } ?>
    </table>
    
</body>
</html>