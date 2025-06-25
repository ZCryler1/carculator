const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto")

const btnNumberClick = document.getElementsByClassName("number")
const operatorClick = document.getElementsByClassName("operator")
const enter = document.getElementById("btn-enter")
const clear = document.getElementById("clear")


let enterClick = false

let firstclick = true
let primeiroOperador = true

let numero1 = "";
let numero2 = "";
let operacao = null;



// Converte a coleção em um array e adiciona um evento para cada botão
Array.from(btnNumberClick).forEach((button) => {
    button.addEventListener("click", () => {

        // Remova o bloco abaixo:
        // if (enterClick) {
        //     numeroTitulo.innerText = null
        //     enterClick = false
        // }

        // Novo controle: Limpa o display apenas se for o início de uma nova operação
        if (firstclick && primeiroOperador) {
            // Se for o início de tudo, limpa o display antes de adicionar o número
            if (numeroTitulo.innerText === "" || numeroTitulo.innerText === null || numeroTitulo.innerText === "\xa0") {
                numeroTitulo.innerText = "";
            }
            console.log(`Botão ${button.innerText} clicado`);
            numeroTitulo.innerText += button.innerText
            numero1 += button.innerText
        }
        else {
            numero2 += button.innerText

            if (numeroTitulo.innerText == numero1) {
                numeroTitulo.innerText = null
            }

            numeroTitulo.innerText = numero2;
        }
    });

});

// Converte a coleção em um array e adiciona um evento para cada botão
Array.from(operatorClick).forEach((operador) => {
    operador.addEventListener("click", () => {
        console.log(`Botão ${operador.innerText} clicado`);
        operacao = operador.innerText
        firstclick = false
        if (numero1 !== "" && numero2 !== "" && operacao !== "") {
            somar()
        }
    });
});

function somar() {

    firstclick = true
    // Remova: enterClick = true

    if (operacao == "*") {
        var resultado = numero1 * numero2
        numeroTitulo.innerText = resultado;
        primeiroOperador = false
    }
    else if (operacao == "+") {
        var resultado = parseFloat(numero1) + parseFloat(numero2)
        numeroTitulo.innerText = resultado;
        primeiroOperador = false
    }
    else if (operacao == "-") {
        var resultado = numero1 - numero2
        numeroTitulo.innerText = resultado;
        primeiroOperador = false
    }
    else if (operacao == "/") {
        var resultado = numero1 / numero2
        numeroTitulo.innerText = resultado;
        primeiroOperador = false
    }
    else if (operacao == "**") {
        var resultado = numero1 ** numero2
        numeroTitulo.innerText = resultado;
        primeiroOperador = false
    }
    else if (operacao == "%") {
        var resultado = numero1 % numero2
        numeroTitulo.innerText = resultado;
        primeiroOperador = false
    }
    else {
        console.error("Não era pra chegar aqui...")
    }


    numero1 = resultado
    numero2 = ""
}

enter.addEventListener("click", () => {
    somar()
})

clear.addEventListener("click", () => {

    console.log(`Botão clear clicado`);

    numeroTitulo.innerText = null

    numeroTitulo.innerHTML = "&nbsp"

    enterClick = false

    firstclick = true
    primeiroOperador = true

    numero1 = "";
    numero2 = "";
    operacao = null;
})