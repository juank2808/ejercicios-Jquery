<?php
    $nombre= $_POST['n']; $email= $_POST['e']; $comentario= $_POST['m'];
    if(!empty($nombre) && !empty($email) && !empty($comentario)){
        echo "El comentario ha sido publicado";
    }else{
        echo "El comentario no se ha publicado";
    }
?>