export function calcularTL(v, r1, r2) {
        let tensao = null;
        let resistencia1 = null;
        let resistencia2 = null;
      
        if (v != '' && r1 != '' && r2 != '') {
          return('Erro: apenas dois dos três valores podem ser fornecidos.');

        } else if (v != '' && r1 != '') {
          v = parseFloat(v)
          r1 = parseFloat(r1)

          resistencia2 = (2.495 * r1) / (v - 2.495);
          return resistencia2.toFixed(2).toString() + " Ω"

        } else if (v != '' && r2 != '') {
          v = parseFloat(v)
          r2 = parseFloat(r2)

          resistencia1 = (r2 * (v - 2.495)) / 2.495;
          return resistencia1.toFixed(2).toString() + " Ω"

        } else if (r1 != '' && r2 != '') {
          r1 = parseFloat(r1)
          r2 = parseFloat(r2)

          tensao = (1 + (r1 / r2)) * 2.495;
          return tensao.toFixed(2).toString() + " V"

        } else {
          return('Erro: pelo menos dois dos três valores devem ser fornecidos.');
        }
      
}