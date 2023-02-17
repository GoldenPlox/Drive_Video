let url= prompt("Ingrese la url")

let res="";
let posIni=0;
let posFin=0;

for( let i=0; i<url.lenght; i++){

    if( url.substring(i,i+2) === "d/"){
        posIni=i+2;
    }

    if(url.substring(i,i+2)=== "/v"){
        posFin=i;
            
    }
}

res = url.substring(posIni, posFin);
console.log("Resultado del string:"+ res);

let doc = document.createElement("img01");
let cadena='https://drive.google.com/file/d/1MS0syTU55lXwEmiTl_uH5jZDglq5FmbM/view?usp=share_link'+res;

console.log("resultad de string:" +res+ "url completa:"+ cadena);

doc.src= cadena;
let d= document.getElementById("ruta");