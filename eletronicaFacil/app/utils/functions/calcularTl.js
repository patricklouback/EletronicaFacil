export function calcularTL(v, r1, r2) {
        let tensao = null;
        let resistencia1 = null;
        let resistencia2 = null;
      
        if (v != 0.0 && r1 != 0.0 && r2 != 0.0) {
          return('Erro: apenas dois dos três valores podem ser fornecidos.');
        } else if (v != 0.0 && r1 != 0.0) {

          resistencia2 = (2.495 * r1) / (v - 2.495);
          return resistencia2.toFixed(2).toString() + " Ohms"

        } else if (v != 0.0 && r2 != 0.0) {

          resistencia1 = (r2 * (v - 2.495)) / 2.495;
          return resistencia1.toFixed(2).toString() + " Ohms"

        } else if (r1 != 0.0 && r2 != 0.0) {

          tensao = (1 + (r1 / r2)) * 2.495;
          return tensao.toFixed(2).toString() + " voltz"

        } else {
          return('Erro: pelo menos dois dos três valores devem ser fornecidos.');
        }
      
}