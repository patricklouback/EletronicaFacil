export function calcularLeiDeOhm(v, r, i) {
    let tensao = null;
    let resistencia = null;
    let corrente = null;
  
    if (v != '' && r != '' && i != '') {
      return('Erro: apenas dois dos três valores podem ser fornecidos.');
    } else if (v != '' && r != '') {
      corrente = parseFloat(v) / parseFloat(r);
      return corrente.toFixed(2).toString() + " A"
    } else if (v != '' && i != '') {
      resistencia = parseFloat(v) / parseFloat(i);
      return resistencia.toFixed(2).toString() + " Ω"
    } else if (r != '' && i != '') {
      tensao = parseFloat(r) * parseFloat(i);
      return tensao.toFixed(2).toString() + " V"
    } else {
      return('Erro: pelo menos dois dos três valores devem ser fornecidos.');
    }
  }
  