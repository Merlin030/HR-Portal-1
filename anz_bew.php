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
        <th>Stellenanzeige-Nr.</th>
        <th>Nachname</th>
        <th>eMail</th>
    </tr>
    <?php foreach($bewen as $bew) { ?>
    <tr>
        <td><?php echo $bew["job_id"] ?></td>
        <td><?php echo $bew["nname"] ?></td>
        <td><?php echo $bew["email"] ?></td>
    </tr>

<?php } ?>
    </table>

</body>
</html>