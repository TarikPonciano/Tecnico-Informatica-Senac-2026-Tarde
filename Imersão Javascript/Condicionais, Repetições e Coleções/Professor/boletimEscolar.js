import { number } from "@inquirer/prompts";

const notaFinal = await number({ message: "Digite uma nota entre 0 e 10", step: 0.1 });

let conceito;

if (notaFinal >= 5 && notaFinal < 7) {
    conceito = "C";
}
else if (notaFinal >= 7 && notaFinal < 9) {
    conceito = "B";
}
else if (notaFinal >= 9 && notaFinal <= 10) {
    conceito = "A";
}
else if (notaFinal >= 0 && notaFinal < 5) {
    conceito = "D";
} else {
    conceito = "Inválido"
}

console.log(`Nota Final: ${notaFinal} -> ${conceito}`)

