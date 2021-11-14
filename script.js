const botaoConverter = document.querySelector("[data-botao-converter]");

botaoConverter.addEventListener("click", converter);

function converter(evento) {

    evento.preventDefault();

    const valor = document.querySelector("[data-valor]").value;
    const resultado = document.querySelector("[data-resultado]")

    const tipoValor = document.querySelector("[data-tipo-valor]").value;
    const tipoResultado = document.querySelector("[data-tipo-resultado]").value;

    if (tipoValor == "decimal" && tipoResultado == "binario") {
        resultado.value = decToBin(valor);

    } else if (tipoValor == "binario" && tipoResultado == "decimal") {
        resultado.value = binToDec(valor);

    } else {
        alert("Escolha sistemas numericos diferentes para cada número.")
        resultado.value = "";
    }

}

function decToBin(dec) {

    let bin = 0;

    for (let i = 0; dec != 0; i++) {
        bin += (dec % 2) * (Math.pow(10, i));

        dec = parseInt(dec / 2);
    }

    return bin;

}

function binToDec(bin) {

    for (let i = 0; i < bin.length; i++) {
        if (bin[i] != 0 && bin[i] != 1) {
            alert("Isso não é um número binário.")
            return "";
        }
    }

    return parseInt(bin, 2);

}