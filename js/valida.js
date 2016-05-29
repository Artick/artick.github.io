$(document).ready(function() {
    //do jQuery stuff when DOM is ready
    $("#quizz1").css("display", "none");
    $("#quizz2").css("display", "none");
    var alto= $( window ).height();
    $("#slider").css("height", alto);
});
  
function iniciar () {
      $("#quizz1").css("display", "block");
      $("#q1").css("display", "block");
  }  


$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 100,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: true,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: false,    // Boolean: Pause when hovering controls, true or false
  prevText: "",   // String: Text for the "previous" button
  nextText: "",       // String: Text for the "next" button
  maxwidth: "100",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});

/*function nxtQ(){
    var q = 0;
    var temp="";
    for (var i=0; i<24; i++){
        temp = ("#q"+(i+1));
        $(temp).css("display", "none");
    }
}*/


//Bloque del primer cuestionario
var q = 0;
var ok = 0;

function nxtQ(){
    var temp="";
    temp = ("#q"+(q+1));
    tempp = ("#q"+(q+2));
    valida();
    if (ok==1){
        $(temp).css("display", "none");
        $(tempp).css("display", "block");
        q++;
        if (q>=24)
        {
            //terminado el cuestionario
            $("#nxtbtn1").css("display", "none");
            $("#enviaSuma1").css("display","block");
            q=0;
        }
    }
    else{
        alert('Seleccione una opcion para continuar');
    }
    ok=0;
}

function valida(){
    var ckbox = document.getElementsByName(q+1);
        for (var i=0; i < ckbox.length; i++){
            if(ckbox[i].checked == true){
            ok = 1;
            }
}
}

//termina bloque del primer cuestionario



//Bloque Segunto Cuestionario
var q1 = 0;
var ok1 = 0;

function nxtQ2(){
    var temp1="";
    temp1 = ("#q"+(q1+1)+"a");
    valida1();
    if (ok1==1){
        $(temp1).css("display", "none");
        q1++;
        if (q1>=24)
        {
            // Teminado el cuestionario
            q1=0;
        }
    }
    else{
        alert('Seleccione una opcion para continuar');
    }
    ok1=0;
}

function valida1(){
    var ckbox = document.getElementsByName("v"+(q1+1));
        for (var i=0; i < ckbox.length; i++){
            if(ckbox[i].checked == true){
            ok1 = 1;
            }
}
}



//bloque segundo cuestrionario


        function enviarSuma(){
        var v1 = parseInt($('input[name="1"]:checked').val());
        var v2 = parseInt($('input[name="2"]:checked').val());
        var v3 = parseInt($('input[name="3"]:checked').val());
        var v4 = parseInt($('input[name="4"]:checked').val());
        var v5 = parseInt($('input[name="5"]:checked').val());
        var v6 = parseInt($('input[name="6"]:checked').val());
        var v7 = parseInt($('input[name="7"]:checked').val());
        var v8 = parseInt($('input[name="8"]:checked').val());
        var v9 = parseInt($('input[name="9"]:checked').val());
        var v10 = parseInt($('input[name="10"]:checked').val());
        var v11 = parseInt($('input[name="11"]:checked').val());
        var v12 = parseInt($('input[name="12"]:checked').val());
        var v13 = parseInt($('input[name="13"]:checked').val());
        var v14 = parseInt($('input[name="14"]:checked').val());
        var v15 = parseInt($('input[name="15"]:checked').val());
        var v16 = parseInt($('input[name="16"]:checked').val());
        var v17 = parseInt($('input[name="17"]:checked').val());
        var v18 = parseInt($('input[name="18"]:checked').val());
        var v19 = parseInt($('input[name="19"]:checked').val());
        var v20 = parseInt($('input[name="20"]:checked').val());
        var v21 = parseInt($('input[name="21"]:checked').val());
        var v22 = parseInt($('input[name="22"]:checked').val());
        var v23 = parseInt($('input[name="23"]:checked').val());
        var v24 = parseInt($('input[name="24"]:checked').val());

        percepcion = (v1+v2+v3+v4+v5+v6+v7+v8);
        comprencion = (v9+v10+v11+v12+v13+v14+v15+v16+v17+v18);
        regulacion = (v19+v20+v21+v22+v23+v24);
        
            alert("Precepcion: "+ percepcion + "\nComprencion: "+ comprencion + "\nRegulacion: "+ regulacion);
            $("#quizz1").css("display", "none");
            $("#slider").css("display", "block");
        }

function enviarSuma2(){
        var vv1 = parseInt($('input[name="v1"]:checked').val());
        var vv2 = parseInt($('input[name="v2"]:checked').val());
        var vv3 = parseInt($('input[name="v3"]:checked').val());
        var vv4 = parseInt($('input[name="v4"]:checked').val());
        var vv5 = parseInt($('input[name="v5"]:checked').val());
        var vv6 = parseInt($('input[name="v6"]:checked').val());
        var vv7 = parseInt($('input[name="v7"]:checked').val());
        var vv8 = parseInt($('input[name="v8"]:checked').val());
        var vv9 = parseInt($('input[name="v9"]:checked').val());
        var vv10 = parseInt($('input[name="v10"]:checked').val());
        var vv11 = parseInt($('input[name="v11"]:checked').val());
        var vv12 = parseInt($('input[name="v12"]:checked').val());
        var vv13 = parseInt($('input[name="v13"]:checked').val());
        var vv14 = parseInt($('input[name="v14"]:checked').val());
        var vv15 = parseInt($('input[name="v15"]:checked').val());
        var vv16 = parseInt($('input[name="v16"]:checked').val());
        var vv17 = parseInt($('input[name="v17"]:checked').val());
        var vv18 = parseInt($('input[name="v18"]:checked').val());
        var vv19 = parseInt($('input[name="v19"]:checked').val());
        var vv20 = parseInt($('input[name="v20"]:checked').val());
        var vv21 = parseInt($('input[name="v21"]:checked').val());
        var vv22 = parseInt($('input[name="v22"]:checked').val());
        var vv23 = parseInt($('input[name="v23"]:checked').val());
        var vv24 = parseInt($('input[name="v24"]:checked').val());

        percepcion2 = (vv1+vv2+vv3+vv4+vv5+vv6+vv7+vv8);
        comprencion2 = (vv9+vv10+vv11+vv12+vv13+vv14+vv15+vv16+vv17+vv18);
        regulacion2 = (vv19+vv20+vv21+vv22+vv23+vv24);
        
            alert("Precepcion: "+ percepcion2 + "\nComprencion: "+ comprencion2 + "\nRegulacion: "+ regulacion2);
        }