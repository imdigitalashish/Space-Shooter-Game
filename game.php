<?php

if (isset($_POST["name"])) {

    $name = $_POST["name"];
    $score = $_POST["score"];
    $timer = $_POST["timer"];
    $servername = "localhost";
    $dbName = "spaceshooterrank";
    $username = "root";
    $password = "";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
    } catch (PDOException $e) {
        echo "Connection Failed";
    }

    try {
        $stmt = $conn->prepare("INSERT INTO `ranking` (`name`, `score`, `timer`) VALUES (:name, :score, :timer);");
        $stmt->bindParam("name", $name);
        $stmt->bindParam("score", $score);
        $stmt->bindParam("timer", $timer);
        $stmt->execute();
        echo json_encode(["message" => "inserted"]);
    } catch (Exception $e) {
        var_dump($e->getMessage());
    }
}
