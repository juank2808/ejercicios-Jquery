<?php
 $operador= $_POST['n']; $operando= $_POST['m']; $signos= $_POST['s'];
    if(!empty($operador) && !empty($operando)){
      if($signos=="suma"){
          echo $operador+$operando;
      }
      elseif($signos=="resta"){
          echo $operador-$operando;
      }
      elseif($signos=="multiplicacion"){
          echo $operador*$operando;
      }
      elseif($signos=="division"){
          echo $operador/$operando;
      }
    }
    else{
       echo "FALTA LA OPERACION";
    }