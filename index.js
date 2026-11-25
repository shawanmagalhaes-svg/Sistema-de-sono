const prompt = require('prompt-sync')()

function avaliarSono(horas) {
    const mensagens = [
        "",
        "Quase não dormiu, seu corpo está em alerta máximo.",
        "Dormir tão pouco é perigoso, tente se recuperar.",
        "Sono insuficiente, isso pode afetar sua saúde.",
        "Muito pouco sono, seu corpo precisa descansar mais.",
        "Você dormiu pouco, cuidado com o cansaço!",
        "Sono razoável, mas poderia ser melhor.",
        "Sono razoável, está quase ideal.",
        "Você dormiu bem!",
        "Você descansou muito bem!",
        "Você dormiu muito bem, está renovado!",
        "Você dormiu bastante.",
        "Uau! Você dormiu bastante, talvez até demais."
    ]

    switch (horas) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return mensagens[horas]

        default:
            return "Digite um valor entre 1 e 12."
    }
}

const horasDormidas = Number(prompt("Quantas horas você dormiu (1 a 12)? "))

if (horasDormidas < 1 || horasDormidas > 12) {
    console.log("Digite um valor entre 1 e 12.")
} else {
    console.log(avaliarSono(horasDormidas))

    if (horasDormidas < 6) {
        console.log("Sugestão: tente ir para cama mais cedo.")
        console.log("Evite cafeína à noite.")
        console.log("Crie uma rotina de sono consistente.")
    } else if (horasDormidas >= 6 && horasDormidas < 8) {
        console.log("Sugestão: ajuste pequenos hábitos para melhorar a qualidade do sono.")
        console.log("Exemplo: desligue telas antes de dormir.")
    } else if (horasDormidas >= 8 && horasDormidas <= 10) {
        console.log("Parabéns! Você está cuidando bem do seu descanso.")
        console.log("Continue mantendo essa rotina saudável.")
    } else {
        console.log("Sono excessivo pode indicar cansaço acumulado ou problemas de saúde.")
        console.log("Se isso for frequente, considere consultar um médico.")
    }

    console.log("Lembre-se: dormir bem é essencial para produtividade e saúde!")

    let sonoIdeal = 8
    let deficit = sonoIdeal - horasDormidas

    if (deficit > 0) {
        console.log(`Você dormiu ${deficit} horas a menos do que o ideal.`)
    } else if (deficit < 0) {
        console.log(`Você dormiu ${deficit * -1} horas a mais do que o ideal.`)
    } else {
        console.log("Você dormiu exatamente o ideal de sono!")
    }

    console.log("como ja disse um filoso, quem dorme farma muita aura, quem dorme pouco farma pouca aura, e quem dorme nada farma nenhuma aura.")
}
