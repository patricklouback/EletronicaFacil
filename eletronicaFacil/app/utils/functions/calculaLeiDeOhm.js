export function calcularLeiDeOhm(v, r, i) {
    let tensao = null;
    let resistencia = null;
    let corrente = null;
  
    if (v != '' && r != '' && i != '') {
      return('Erro: apenas dois dos três valores podem ser fornecidos.');
    } else if (v != '' && r != '') {
      corrente = parseFloat(v) / parseFloat(r);
      return corrente.toString() + " amper"
    } else if (v != '' && i != '') {
      resistencia = parseFloat(v) / parseFloat(i);
      return resistencia.toString() + " ohm"
    } else if (r != '' && i != '') {
      tensao = parseFloat(r) * parseFloat(i);
      return tensao.toString() + " voltz"
    } else {
      return('Erro: pelo menos dois dos três valores devem ser fornecidos.');
    }
  }
  