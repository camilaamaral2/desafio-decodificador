
function criptografar() {
    let txtDigitado = document.getElementById("txt").value;
    if(!validarTxt(txtDigitado))
    {
        let txtCripto = "";
        for(const letra of txtDigitado){
            switch(letra){
                case "a": 
                    txtCripto = txtCripto + "ai";
                    break;
                case "e": 
                    txtCripto = txtCripto + "enter";
                    break;
                case "i": 
                txtCripto = txtCripto + "imes";
                    break;
                case "o":
                    txtCripto = txtCripto + "ober";
                    break;
                case "u": 
                    txtCripto = txtCripto + "ufat";
                    break;             
                default:
                    txtCripto = txtCripto + letra;
            }
        }

    document.getElementById("imagem-output").innerHTML = `<p><strong>${txtCripto}</strong></p>`;
    document.querySelector("#imagem-output img").style.display = "none";
    document.getElementById("imagem-output").style.visibility = "visible";
    }
    else {
        alert("Apenas letras minúsculas, sem acento ou caracter especial!");
    }
}


function descriptografar(){
    let txtDigitado = document.getElementById("txt").value;

    if (!validarTxt(txtDigitado))
    {
        let txtDescripto = txtDigitado;

        txtDescripto = txtDescripto.replace(/ai/g, "a");
        txtDescripto = txtDescripto.replace(/enter/g, "e");
        txtDescripto = txtDescripto.replace(/imes/g, "i");
        txtDescripto = txtDescripto.replace(/ober/g, "o");
        txtDescripto = txtDescripto.replace(/ufat/g, "u");
    
        document.getElementById("imagem-output").innerHTML = `<p><strong>${txtDescripto}</strong></p>`;
    
        if (txtDescripto.trim() === "") {document.getElementById("imagem-output").innerHTML = 
            `<img src="imagem.png" alt="Imagem menina com uma lupa">
            <p><strong>Nenhuma mensagem encontrada!</strong></p>
            <p>Digite um texto.</p>`;
        }   
    
        document.querySelector("#imagem-output img").style.display = "none";
        document.getElementById("imagem-output").style.visibility = "visible";
    }
    else {
        alert("Apenas letras minúsculas, sem acento ou caracter especial!");
    }
}

function validarTxt(texto){
    const regex = /[A-ZÀ-ÿ\W_]/;
    return regex.test(texto.replace(/\s/g, ''));
}