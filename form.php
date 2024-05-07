<?php
include ('config.php');

if (isset($_POST['valider'])){
    $nom = $_POST['nom'];
    $mail = $_POST['mail'];
    $numero = $_POST['tel'];
    $objet = $_POST['objet'];
    $message = $_POST['message'];
    $sql = "INSERT INTO inscription (`nom` ,`mail`, `numero`, `objet`, `message`) VALUE (?,?,?,?,?)";
    try{
        $valider = $conn->prepare($sql);
        $valider->execute([$nom, $mail, $numero, $objet, $message]);
        header('location:index.php');
    } catch (PDOExeption $e) {
        echo "connection failed: " .$e->getMessage();
    }
}
?>
