import "./styles.css";

let rotulo1=document.getElementById("rotulo1");
let rotulo2=document.getElementById("rotulo2");
let rotulo3=document.getElementById("rotulo3");
let resultado=document.getElementById("resultado");

rotulo1.innerHTML="calcular area de triangulo";
rotulo2.innerHTML="ingrese base";
rotulo3.innerHTML="ingrese altura";

let btnEnv=document.getElementById("btnEnv");

btnEnv.addEventListener("click",()=>{
  let base:number=Number(document.getElementById("dato1").value);
  let altura:number=Number(document.getElementById("dato2").value);

  let resultadoArea=(base*altura)/2;
  resultado.innerHTML=`el area del triangulo es: ${resultadoArea}`;
});
