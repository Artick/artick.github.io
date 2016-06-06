var eval1 =" ";
var eval2 =" ";

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
      $("#iniciando").css("display", "none");
  }  


function fotos() {
    //setTimeout(visible2(), 28000);
    var tmp = 200;
    for(i =0; i<=241; i++){
    setTimeout("foto"+i+"();", tmp);
    console.log("entre "+i);
    tmp+=200;
    }
    
}

function visible2() {
    $("#quizz2").css("display", "block"); 
    $("#slider").css("display", "none"); 

}

function foto1(){
    $("#slider").css("background","#000000 url('img/animals_002_v.jpg') no-repeat bottom left");
}
function foto2(){
    $("#slider").css("background","#000000 url('img/animals_089_v.jpg') no-repeat bottom left");
}
function foto3(){
    $("#slider").css("background","#000000 url('img/animals_090_h.jpg') no-repeat bottom left");
}
function foto4(){
    $("#slider").css("background","#000000 url('img/animals_097_h.jpg') no-repeat bottom left");
}
function foto5(){
    $("#slider").css("background","#000000 url('img/animals_100_h.jpg') no-repeat bottom left");
}
function foto6(){
    $("#slider").css("background","#000000 url('img/animals_101_v.jpg') no-repeat bottom left");
}
function foto7(){
    $("#slider").css("background","#000000 url('img/animals_109_h.jpg') no-repeat bottom left");
}
function foto8(){
    $("#slider").css("background","#000000 url('img/animals_117_h.jpg') no-repeat bottom left");
}
function foto9(){
    $("#slider").css("background","#000000 url('img/animals_118_h.jpg') no-repeat bottom left");
}
function foto10(){
    $("#slider").css("background","#000000 url('img/animals_122_h.jpg') no-repeat bottom left");
}
function foto11(){
    $("#slider").css("background","#000000 url('img/animals_131_h.jpg') no-repeat bottom left");
}
function foto12(){
    $("#slider").css("background","#000000 url('img/animals_136_h.jpg') no-repeat bottom left");
}
function foto13(){
    $("#slider").css("background","#000000 url('img/animals_137_h.jpg') no-repeat bottom left");
}
function foto14(){
    $("#slider").css("background","#000000 url('img/animals_149_v.jpg') no-repeat bottom left");
}
function foto15(){
    $("#slider").css("background","#000000 url('img/animals_158_h.jpg') no-repeat bottom left");
}
function foto16(){
    $("#slider").css("background","#000000 url('img/animals_159_h.jpg') no-repeat bottom left");
}
function foto17(){
    $("#slider").css("background","#000000 url('img/animals_165_h.jpg') no-repeat bottom left");
}
function foto18(){
    $("#slider").css("background","#000000 url('img/animals_166_v.jpg') no-repeat bottom left");
}
function foto19(){
    $("#slider").css("background","#000000 url('img/animals_170_h.jpg') no-repeat bottom left");
}
function foto20(){
    $("#slider").css("background","#000000 url('img/animals_173_h.jpg') no-repeat bottom left");
}
function foto21(){
    $("#slider").css("background","#000000 url('img/animals_177_h.jpg') no-repeat bottom left");
}
function foto22(){
    $("#slider").css("background","#000000 url('img/animals_178_v.jpg') no-repeat bottom left");
}
function foto23(){
    $("#slider").css("background","#000000 url('img/animals_179_h.jpg') no-repeat bottom left");
}
function foto24(){
    $("#slider").css("background","#000000 url('img/animals_181_h.jpg') no-repeat bottom left");
}
function foto25(){
    $("#slider").css("background","#000000 url('img/animals_182_h.jpg') no-repeat bottom left");
}
function foto26(){
    $("#slider").css("background","#000000 url('img/animals_183_h.jpg') no-repeat bottom left");
}
function foto27(){
    $("#slider").css("background","#000000 url('img/animals_184_h.jpg') no-repeat bottom left");
}
function foto28(){
    $("#slider").css("background","#000000 url('img/animals_185_h.jpg') no-repeat bottom left");
}
function foto29(){
    $("#slider").css("background","#000000 url('img/animals_186_h.jpg') no-repeat bottom left");
}
function foto30(){
    $("#slider").css("background","#000000 url('img/animals_187_h.jpg') no-repeat bottom left");
}
function foto31(){
    $("#slider").css("background","#000000 url('img/animals_195_h.jpg') no-repeat bottom left");
}
function foto32(){
    $("#slider").css("background","#000000 url('img/animals_196_h.jpg') no-repeat bottom left");
}
function foto33(){
    $("#slider").css("background","#000000 url('img/animals_197_h.jpg') no-repeat bottom left");
}
function foto34(){
    $("#slider").css("background","#000000 url('img/animals_201_h.jpg') no-repeat bottom left");
}
function foto35(){
    $("#slider").css("background","#000000 url('img/animals_205_h.jpg') no-repeat bottom left");
}
function foto36(){
    $("#slider").css("background","#000000 url('img/animals_206_h.jpg') no-repeat bottom left");
}
function foto37(){
    $("#slider").css("background","#000000 url('img/animals_208_h.jpg') no-repeat bottom left");
}
function foto38(){
    $("#slider").css("background","#000000 url('img/animals_212_v.jpg') no-repeat bottom left");
}
function foto39(){
    $("#slider").css("background","#000000 url('img/animals_213_h.jpg') no-repeat bottom left");
}
function foto40(){
    $("#slider").css("background","#000000 url('img/animals_215_v.jpg') no-repeat bottom left");
}
function foto41(){
    $("#slider").css("background","#000000 url('img/animals_217_h.jpg') no-repeat bottom left");
}
function foto42(){
    $("#slider").css("background","#000000 url('img/animals_218_h.jpg') no-repeat bottom left");
}
function foto43(){
    $("#slider").css("background","#000000 url('img/animals_220_h.jpg') no-repeat bottom left");
}
function foto44(){
    $("#slider").css("background","#000000 url('img/faces_001_h.jpg') no-repeat bottom left");
}
function foto45(){
    $("#slider").css("background","#000000 url('img/faces_002_v.jpg') no-repeat bottom left");
}
function foto46(){
    $("#slider").css("background","#000000 url('img/faces_047_h.jpg') no-repeat bottom left");
}
function foto47(){
    $("#slider").css("background","#000000 url('img/faces_049_h.jpg') no-repeat bottom left");
}
function foto48(){
    $("#slider").css("background","#000000 url('img/faces_050_h.jpg') no-repeat bottom left");
}
function foto49(){
    $("#slider").css("background","#000000 url('img/faces_064_h.jpg') no-repeat bottom left");
}
function foto50(){
    $("#slider").css("background","#000000 url('img/faces_066_h.jpg') no-repeat bottom left");
}
function foto51(){
    $("#slider").css("background","#000000 url('img/faces_078_h.jpg') no-repeat bottom left");
}
function foto52(){
    $("#slider").css("background","#000000 url('img/faces_079_h.jpg') no-repeat bottom left");
}
function foto53(){
    $("#slider").css("background","#000000 url('img/faces_081_v.jpg') no-repeat bottom left");
}
function foto54(){
    $("#slider").css("background","#000000 url('img/faces_082_v.jpg') no-repeat bottom left");
}
function foto55(){
    $("#slider").css("background","#000000 url('img/faces_083_h.jpg') no-repeat bottom left");
}
function foto56(){
    $("#slider").css("background","#000000 url('img/faces_086_v.jpg') no-repeat bottom left");
}
function foto57(){
    $("#slider").css("background","#000000 url('img/faces_088_v.jpg') no-repeat bottom left");
}
function foto58(){
    $("#slider").css("background","#000000 url('img/faces_089_h.jpg') no-repeat bottom left");
}
function foto59(){
    $("#slider").css("background","#000000 url('img/faces_091_v.jpg') no-repeat bottom left");
}
function foto60(){
    $("#slider").css("background","#000000 url('img/faces_092_h.jpg') no-repeat bottom left");
}
function foto61(){
    $("#slider").css("background","#000000 url('img/faces_096_h.jpg') no-repeat bottom left");
}
function foto62(){
    $("#slider").css("background","#000000 url('img/faces_100_h.jpg') no-repeat bottom left");
}
function foto63(){
    $("#slider").css("background","#000000 url('img/faces_101_h.jpg') no-repeat bottom left");
}
function foto64(){
    $("#slider").css("background","#000000 url('img/faces_103_h.jpg') no-repeat bottom left");
}
function foto65(){
    $("#slider").css("background","#000000 url('img/faces_104_h.jpg') no-repeat bottom left");
}
function foto66(){
    $("#slider").css("background","#000000 url('img/faces_105_h.jpg') no-repeat bottom left");
}
function foto67(){
    $("#slider").css("background","#000000 url('img/faces_106_h.jpg') no-repeat bottom left");
}
function foto68(){
    $("#slider").css("background","#000000 url('img/faces_107_h.jpg') no-repeat bottom left");
}
function foto69(){
    $("#slider").css("background","#000000 url('img/faces_108_h.jpg') no-repeat bottom left");
}
function foto70(){
    $("#slider").css("background","#000000 url('img/faces_109_v.jpg') no-repeat bottom left");
}
function foto71(){
    $("#slider").css("background","#000000 url('img/faces_111_h.jpg') no-repeat bottom left");
}
function foto72(){
    $("#slider").css("background","#000000 url('img/faces_113_h.jpg') no-repeat bottom left");
}
function foto73(){
    $("#slider").css("background","#000000 url('img/faces_115_h.jpg') no-repeat bottom left");
}
function foto74(){
    $("#slider").css("background","#000000 url('img/faces_116_h.jpg') no-repeat bottom left");
}
function foto75(){
    $("#slider").css("background","#000000 url('img/faces_118_h.jpg') no-repeat bottom left");
}
function foto76(){
    $("#slider").css("background","#000000 url('img/faces_120_h.jpg') no-repeat bottom left");
}
function foto77(){
    $("#slider").css("background","#000000 url('img/faces_122_h.jpg') no-repeat bottom left");
}
function foto78(){
    $("#slider").css("background","#000000 url('img/faces_124_h.jpg') no-repeat bottom left");
}
function foto79(){
    $("#slider").css("background","#000000 url('img/faces_126_h.jpg') no-repeat bottom left");
}
function foto80(){
    $("#slider").css("background","#000000 url('img/faces_127_h.jpg') no-repeat bottom left");
}
function foto81(){
    $("#slider").css("background","#000000 url('img/faces_129_h.jpg') no-repeat bottom left");
}
function foto82(){
    $("#slider").css("background","#000000 url('img/faces_131_v.jpg') no-repeat bottom left");
}
function foto83(){
    $("#slider").css("background","#000000 url('img/faces_132_h.jpg') no-repeat bottom left");
}
function foto84(){
    $("#slider").css("background","#000000 url('img/faces_133_h.jpg') no-repeat bottom left");
}
function foto85(){
    $("#slider").css("background","#000000 url('img/faces_134_h.jpg') no-repeat bottom left");
}
function foto86(){
    $("#slider").css("background","#000000 url('img/faces_135_h.jpg') no-repeat bottom left");
}
function foto87(){
    $("#slider").css("background","#000000 url('img/faces_136_v.jpg') no-repeat bottom left");
}
function foto88(){
    $("#slider").css("background","#000000 url('img/faces_137_h.jpg') no-repeat bottom left");
}
function foto89(){
    $("#slider").css("background","#000000 url('img/faces_138_h.jpg') no-repeat bottom left");
}
function foto90(){
    $("#slider").css("background","#000000 url('img/faces_139_v.jpg') no-repeat bottom left");
}
function foto91(){
    $("#slider").css("background","#000000 url('img/faces_140_h.jpg') no-repeat bottom left");
}
function foto92(){
    $("#slider").css("background","#000000 url('img/faces_182_h.jpg') no-repeat bottom left");
}
function foto93(){
    $("#slider").css("background","#000000 url('img/faces_186_h.jpg') no-repeat bottom left");
}
function foto94(){
    $("#slider").css("background","#000000 url('img/faces_192_h.jpg') no-repeat bottom left");
}
function foto95(){
    $("#slider").css("background","#000000 url('img/faces_203_h.jpg') no-repeat bottom left");
}
function foto96(){
    $("#slider").css("background","#000000 url('img/faces_221_v.jpg') no-repeat bottom left");
}
function foto97(){
    $("#slider").css("background","#000000 url('img/faces_224_h.jpg') no-repeat bottom left");
}
function foto98(){
    $("#slider").css("background","#000000 url('img/faces_227_v.jpg') no-repeat bottom left");
}
function foto99(){
    $("#slider").css("background","#000000 url('img/faces_228_h.jpg') no-repeat bottom left");
}
function foto100(){
    $("#slider").css("background","#000000 url('img/faces_231_v.jpg') no-repeat bottom left");
}
function foto101(){
    $("#slider").css("background","#000000 url('img/faces_232_h.jpg') no-repeat bottom left");
}
function foto102(){
    $("#slider").css("background","#000000 url('img/faces_235_v.jpg') no-repeat bottom left");
}
function foto103(){
    $("#slider").css("background","#000000 url('img/faces_236_h.jpg') no-repeat bottom left");
}
function foto104(){
    $("#slider").css("background","#000000 url('img/faces_238_h.jpg') no-repeat bottom left");
}
function foto105(){
    $("#slider").css("background","#000000 url('img/faces_240_h.jpg') no-repeat bottom left");
}
function foto106(){
    $("#slider").css("background","#000000 url('img/faces_242_h.jpg') no-repeat bottom left");
}
function foto107(){
    $("#slider").css("background","#000000 url('img/faces_246_v.jpg') no-repeat bottom left");
}
function foto108(){
    $("#slider").css("background","#000000 url('img/faces_252_h.jpg') no-repeat bottom left");
}
function foto109(){
    $("#slider").css("background","#000000 url('img/faces_253_v.jpg') no-repeat bottom left");
}
function foto110(){
    $("#slider").css("background","#000000 url('img/faces_254_h.jpg') no-repeat bottom left");
}
function foto111(){
    $("#slider").css("background","#000000 url('img/faces_256_h.jpg') no-repeat bottom left");
}
function foto112(){
    $("#slider").css("background","#000000 url('img/faces_258_h.jpg') no-repeat bottom left");
}
function foto113(){
    $("#slider").css("background","#000000 url('img/faces_261_v.jpg') no-repeat bottom left");
}
function foto114(){
    $("#slider").css("background","#000000 url('img/faces_263_v.jpg') no-repeat bottom left");
}
function foto115(){
    $("#slider").css("background","#000000 url('img/faces_306_v.jpg') no-repeat bottom left");
}
function foto116(){
    $("#slider").css("background","#000000 url('img/faces_315_h.jpg') no-repeat bottom left");
}
function foto117(){
    $("#slider").css("background","#000000 url('img/faces_316_h.jpg') no-repeat bottom left");
}
function foto118(){
    $("#slider").css("background","#000000 url('img/faces_318_v.jpg') no-repeat bottom left");
}
function foto119(){
    $("#slider").css("background","#000000 url('img/faces_321_h.jpg') no-repeat bottom left");
}
function foto120(){
    $("#slider").css("background","#000000 url('img/faces_323_h.jpg') no-repeat bottom left");
}
function foto121(){
    $("#slider").css("background","#000000 url('img/faces_324_h.jpg') no-repeat bottom left");
}
function foto122(){
    $("#slider").css("background","#000000 url('img/faces_327_v.jpg') no-repeat bottom left");
}
function foto123(){
    $("#slider").css("background","#000000 url('img/faces_330_v.jpg') no-repeat bottom left");
}
function foto124(){
    $("#slider").css("background","#000000 url('img/faces_333_h.jpg') no-repeat bottom left");
}
function foto125(){
    $("#slider").css("background","#000000 url('img/faces_334_h.jpg') no-repeat bottom left");
}
function foto126(){
    $("#slider").css("background","#000000 url('img/faces_337_h.jpg') no-repeat bottom left");
}
function foto127(){
    $("#slider").css("background","#000000 url('img/faces_339_h.jpg') no-repeat bottom left");
}
function foto128(){
    $("#slider").css("background","#000000 url('img/faces_340_h.jpg') no-repeat bottom left");
}
function foto129(){
    $("#slider").css("background","#000000 url('img/faces_342_h.jpg') no-repeat bottom left");
}
function foto130(){
    $("#slider").css("background","#000000 url('img/faces_344_h.jpg') no-repeat bottom left");
}
function foto131(){
    $("#slider").css("background","#000000 url('img/faces_345_h.jpg') no-repeat bottom left");
}
function foto132(){
    $("#slider").css("background","#000000 url('img/faces_346_v.jpg') no-repeat bottom left");
}
function foto133(){
    $("#slider").css("background","#000000 url('img/faces_347_h.jpg') no-repeat bottom left");
}
function foto134(){
    $("#slider").css("background","#000000 url('img/faces_350_h.jpg') no-repeat bottom left");
}
function foto135(){
    $("#slider").css("background","#000000 url('img/faces_351_h.jpg') no-repeat bottom left");
}
function foto136(){
    $("#slider").css("background","#000000 url('img/faces_352_h.jpg') no-repeat bottom left");
}
function foto137(){
    $("#slider").css("background","#000000 url('img/faces_353_h.jpg') no-repeat bottom left");
}
function foto138(){
    $("#slider").css("background","#000000 url('img/faces_354_v.jpg') no-repeat bottom left");
}
function foto139(){
    $("#slider").css("background","#000000 url('img/faces_356_h.jpg') no-repeat bottom left");
}
function foto140(){
    $("#slider").css("background","#000000 url('img/faces_357_v.jpg') no-repeat bottom left");
}
function foto141(){
    $("#slider").css("background","#000000 url('img/faces_358_h.jpg') no-repeat bottom left");
}
function foto142(){
    $("#slider").css("background","#000000 url('img/faces_360_v.jpg') no-repeat bottom left");
}
function foto143(){
    $("#slider").css("background","#000000 url('img/faces_361_v.jpg') no-repeat bottom left");
}
function foto144(){
    $("#slider").css("background","#000000 url('img/landscapes_008_h.jpg') no-repeat bottom left");
}
function foto145(){
    $("#slider").css("background","#000000 url('img/landscapes_021_h.jpg') no-repeat bottom left");
}
function foto146(){
    $("#slider").css("background","#000000 url('img/landscapes_042_h.jpg') no-repeat bottom left");
}
function foto147(){
    $("#slider").css("background","#000000 url('img/landscapes_054_h.jpg') no-repeat bottom left");
}
function foto148(){
    $("#slider").css("background","#000000 url('img/landscapes_055_h.jpg') no-repeat bottom left");
}
function foto149(){
    $("#slider").css("background","#000000 url('img/landscapes_057_h.jpg') no-repeat bottom left");
}
function foto150(){
    $("#slider").css("background","#000000 url('img/landscapes_063_h.jpg') no-repeat bottom left");
}
function foto151(){
    $("#slider").css("background","#000000 url('img/landscapes_064_h.jpg') no-repeat bottom left");
}
function foto152(){
    $("#slider").css("background","#000000 url('img/landscapes_075_h.jpg') no-repeat bottom left");
}
function foto153(){
    $("#slider").css("background","#000000 url('img/landscapes_082_v.jpg') no-repeat bottom left");
}
function foto154(){
    $("#slider").css("background","#000000 url('img/landscapes_083_h.jpg') no-repeat bottom left");
}
function foto155(){
    $("#slider").css("background","#000000 url('img/landscapes_084_v.jpg') no-repeat bottom left");
}
function foto156(){
    $("#slider").css("background","#000000 url('img/landscapes_087_h.jpg') no-repeat bottom left");
}
function foto157(){
    $("#slider").css("background","#000000 url('img/landscapes_097_v.jpg') no-repeat bottom left");
}
function foto158(){
    $("#slider").css("background","#000000 url('img/landscapes_100_h.jpg') no-repeat bottom left");
}
function foto159(){
    $("#slider").css("background","#000000 url('img/landscapes_102_h.jpg') no-repeat bottom left");
}
function foto160(){
    $("#slider").css("background","#000000 url('img/landscapes_115_v.jpg') no-repeat bottom left");
}
function foto161(){
    $("#slider").css("background","#000000 url('img/landscapes_116_v.jpg') no-repeat bottom left");
}
function foto162(){
    $("#slider").css("background","#000000 url('img/landscapes_117_h.jpg') no-repeat bottom left");
}
function foto163(){
    $("#slider").css("background","#000000 url('img/landscapes_119_h.jpg') no-repeat bottom left");
}
function foto164(){
    $("#slider").css("background","#000000 url('img/landscapes_120_v.jpg') no-repeat bottom left");
}
function foto165(){
    $("#slider").css("background","#000000 url('img/landscapes_121_h.jpg') no-repeat bottom left");
}
function foto166(){
    $("#slider").css("background","#000000 url('img/landscapes_123_h.jpg') no-repeat bottom left");
}
function foto167(){
    $("#slider").css("background","#000000 url('img/landscapes_126_h.jpg') no-repeat bottom left");
}
function foto168(){
    $("#slider").css("background","#000000 url('img/landscapes_128_h.jpg') no-repeat bottom left");
}
function foto169(){
    $("#slider").css("background","#000000 url('img/landscapes_130_h.jpg') no-repeat bottom left");
}
function foto170(){
    $("#slider").css("background","#000000 url('img/landscapes_132_h.jpg') no-repeat bottom left");
}
function foto171(){
    $("#slider").css("background","#000000 url('img/landscapes_140_v.jpg') no-repeat bottom left");
}
function foto172(){
    $("#slider").css("background","#000000 url('img/landscapes_147_h.jpg') no-repeat bottom left");
}
function foto173(){
    $("#slider").css("background","#000000 url('img/landscapes_149_h.jpg') no-repeat bottom left");
}
function foto174(){
    $("#slider").css("background","#000000 url('img/landscapes_152_h.jpg') no-repeat bottom left");
}
function foto175(){
    $("#slider").css("background","#000000 url('img/landscapes_154_h.jpg') no-repeat bottom left");
}
function foto176(){
    $("#slider").css("background","#000000 url('img/landscapes_165_h.jpg') no-repeat bottom left");
}
function foto177(){
    $("#slider").css("background","#000000 url('img/landscapes_178_h.jpg') no-repeat bottom left");
}
function foto178(){
    $("#slider").css("background","#000000 url('img/landscapes_180_h.jpg') no-repeat bottom left");
}
function foto179(){
    $("#slider").css("background","#000000 url('img/landscapes_183_h.jpg') no-repeat bottom left");
}
function foto180(){
    $("#slider").css("background","#000000 url('img/objects_038_v.jpg') no-repeat bottom left");
}
function foto181(){
    $("#slider").css("background","#000000 url('img/objects_049_h.jpg') no-repeat bottom left");
}
function foto182(){
    $("#slider").css("background","#000000 url('img/objects_056_h.jpg') no-repeat bottom left");
}
function foto183(){
    $("#slider").css("background","#000000 url('img/objects_069_h.jpg') no-repeat bottom left");
}
function foto184(){
    $("#slider").css("background","#000000 url('img/objects_074_v.jpg') no-repeat bottom left");
}
function foto185(){
    $("#slider").css("background","#000000 url('img/objects_077_h.jpg') no-repeat bottom left");
}
function foto186(){
    $("#slider").css("background","#000000 url('img/objects_078_h.jpg') no-repeat bottom left");
}
function foto187(){
    $("#slider").css("background","#000000 url('img/objects_084_v.jpg') no-repeat bottom left");
}
function foto188(){
    $("#slider").css("background","#000000 url('img/objects_086_h.jpg') no-repeat bottom left");
}
function foto189(){
    $("#slider").css("background","#000000 url('img/objects_094_v.jpg') no-repeat bottom left");
}
function foto190(){
    $("#slider").css("background","#000000 url('img/objects_161_v.jpg') no-repeat bottom left");
}
function foto191(){
    $("#slider").css("background","#000000 url('img/objects_192_h.jpg') no-repeat bottom left");
}
function foto192(){
    $("#slider").css("background","#000000 url('img/objects_201_v.jpg') no-repeat bottom left");
}
function foto193(){
    $("#slider").css("background","#000000 url('img/objects_209_h.jpg') no-repeat bottom left");
}
function foto194(){
    $("#slider").css("background","#000000 url('img/objects_211_h.jpg') no-repeat bottom left");
}
function foto195(){
    $("#slider").css("background","#000000 url('img/objects_237_h.jpg') no-repeat bottom left");
}
function foto196(){
    $("#slider").css("background","#000000 url('img/objects_245_h.jpg') no-repeat bottom left");
}
function foto197(){
    $("#slider").css("background","#000000 url('img/objects_249_v.jpg') no-repeat bottom left");
}
function foto198(){
    $("#slider").css("background","#000000 url('img/objects_255_v.jpg') no-repeat bottom left");
}
function foto199(){
    $("#slider").css("background","#000000 url('img/objects_258_h.jpg') no-repeat bottom left");
}
function foto200(){
    $("#slider").css("background","#000000 url('img/objects_260_h.jpg') no-repeat bottom left");
}
function foto201(){
    $("#slider").css("background","#000000 url('img/objects_264_v.jpg') no-repeat bottom left");
}
function foto202(){
    $("#slider").css("background","#000000 url('img/objects_276_h.jpg') no-repeat bottom left");
}
function foto203(){
    $("#slider").css("background","#000000 url('img/objects_278_h.jpg') no-repeat bottom left");
}
function foto204(){
    $("#slider").css("background","#000000 url('img/objects_295_h.jpg') no-repeat bottom left");
}
function foto205(){
    $("#slider").css("background","#000000 url('img/objects_306_h.jpg') no-repeat bottom left");
}
function foto206(){
    $("#slider").css("background","#000000 url('img/objects_308_h.jpg') no-repeat bottom left");
}
function foto207(){
    $("#slider").css("background","#000000 url('img/objects_310_h.jpg') no-repeat bottom left");
}
function foto208(){
    $("#slider").css("background","#000000 url('img/objects_312_h.jpg') no-repeat bottom left");
}
function foto209(){
    $("#slider").css("background","#000000 url('img/objects_319_h.jpg') no-repeat bottom left");
}
function foto210(){
    $("#slider").css("background","#000000 url('img/people_026_h.jpg') no-repeat bottom left");
}
function foto211(){
    $("#slider").css("background","#000000 url('img/people_030_h.jpg') no-repeat bottom left");
}
function foto212(){
    $("#slider").css("background","#000000 url('img/people_041_h.jpg') no-repeat bottom left");
}
function foto213(){
    $("#slider").css("background","#000000 url('img/people_044_h.jpg') no-repeat bottom left");
}
function foto214(){
    $("#slider").css("background","#000000 url('img/people_055_h.jpg') no-repeat bottom left");
}
function foto215(){
    $("#slider").css("background","#000000 url('img/people_067_h.jpg') no-repeat bottom left");
}
function foto216(){
    $("#slider").css("background","#000000 url('img/people_068_h.jpg') no-repeat bottom left");
}
function foto217(){
    $("#slider").css("background","#000000 url('img/people_089_h.jpg') no-repeat bottom left");
}
function foto218(){
    $("#slider").css("background","#000000 url('img/people_091_h.jpg') no-repeat bottom left");
}
function foto219(){
    $("#slider").css("background","#000000 url('img/people_092_v.jpg') no-repeat bottom left");
}
function foto220(){
    $("#slider").css("background","#000000 url('img/people_096_h.jpg') no-repeat bottom left");
}
function foto221(){
    $("#slider").css("background","#000000 url('img/people_103_h.jpg') no-repeat bottom left");
}
function foto222(){
    $("#slider").css("background","#000000 url('img/people_106_v.jpg') no-repeat bottom left");
}
function foto223(){
    $("#slider").css("background","#000000 url('img/people_116_h.jpg') no-repeat bottom left");
}
function foto224(){
    $("#slider").css("background","#000000 url('img/people_148_h.jpg') no-repeat bottom left");
}
function foto225(){
    $("#slider").css("background","#000000 url('img/people_152_h.jpg') no-repeat bottom left");
}
function foto226(){
    $("#slider").css("background","#000000 url('img/people_165_v.jpg') no-repeat bottom left");
}
function foto227(){
    $("#slider").css("background","#000000 url('img/people_166_h.jpg') no-repeat bottom left");
}
function foto228(){
    $("#slider").css("background","#000000 url('img/people_167_h.jpg') no-repeat bottom left");
}
function foto229(){
    $("#slider").css("background","#000000 url('img/people_171_v.jpg') no-repeat bottom left");
}
function foto230(){
    $("#slider").css("background","#000000 url('img/people_172_v.jpg') no-repeat bottom left");
}
function foto231(){
    $("#slider").css("background","#000000 url('img/people_174_v.jpg') no-repeat bottom left");
}
function foto232(){
    $("#slider").css("background","#000000 url('img/people_176_h.jpg') no-repeat bottom left");
}
function foto233(){
    $("#slider").css("background","#000000 url('img/people_179_h.jpg') no-repeat bottom left");
}
function foto234(){
    $("#slider").css("background","#000000 url('img/people_180_h.jpg') no-repeat bottom left");
}
function foto235(){
    $("#slider").css("background","#000000 url('img/people_181_v.jpg') no-repeat bottom left");
}
function foto236(){
    $("#slider").css("background","#000000 url('img/people_183_h.jpg') no-repeat bottom left");
}
function foto237(){
    $("#slider").css("background","#000000 url('img/people_185_h.jpg') no-repeat bottom left");
}
function foto238(){
    $("#slider").css("background","#000000 url('img/people_188_h.jpg') no-repeat bottom left");
}
function foto239(){
    $("#slider").css("background","#000000 url('img/people_190_h.jpg') no-repeat bottom left");
}
function foto240(){
    $("#slider").css("background","#000000 url('img/people_192_h.jpg') no-repeat bottom left");
}
function foto241(){
    $("#slider").css("display","none");
    $("#quizz2").css("display", "block");
}


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
    tempp1 = ("#q"+(q1+2)+"a");
    valida1();
    if (ok1==1){
        $(temp1).css("display", "none");
        $(tempp1).css("display", "block");
        q1++;
        if (q1>=24)
        {
            // Teminado el cuestionario
            $("#nxtbtn2").css("display", "none");
            $("#enviarSuma2").css("display","block");
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
        
            alert("Reproduce el Video en Pantalla");
            eval1="Precepcion: "+ percepcion + "\nComprencion: "+ comprencion + "\nRegulacion: "+ regulacion+"";
            $("#quizz1").css("display", "none");
            $("#slider").css("display", "block");
            //fotos();
        }

function partes(){
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
        
            //alert("Precepcion: "+ percepcion2 + "\nComprencion: "+ comprencion2 + "\nRegulacion: "+ regulacion2);
            eval2= "Precepcion: "+ percepcion2 + "\nComprencion: "+ comprencion2 + "\nRegulacion: "+ regulacion2+"";
            $("#quizz2").css("display", "none");
            $("#sendform").css("display", "block");
        }

function enviaResultado(){
    
    document.getElementById('eval1').value = eval1;
    document.getElementById('eval2').value = eval2;

    $("#sendform").css("display", "none");
    alert("Esto es todo, Gracias por tu tiempo!!");

    var url = "http://artickone.esy.es/dame-datos.php"; // El script a dónde se realizará la petición.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#andsend").serialize(), // Adjuntar los campos del formulario enviado.
           success: function(data)
           {
               $("#respuesta").html(data); // Mostrar la respuestas del script PHP.
               
           }
         });
    return false; // Evitar ejecutar el submit del formulario.
    
}