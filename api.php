<?php

$disks = file_get_contents("./assets/dischi.json");
$disks = json_decode($disks, true);

header("Content-type: application/json");
echo json_encode($disks);