<?php
 header("Access-Control-Allow-Origin: *");
$user = $_POST['usuario'];
$pass = $_POST['clave'];

if($user === '' || $pass === ''){
    echo json_encode('error');
}else {
    echo json_encode('Usuario: '.$user.'<br> Contraseña: '.$pass);
}
