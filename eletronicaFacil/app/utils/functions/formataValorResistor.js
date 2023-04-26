export function formataValorResistor(valor = 1000) {
    if (valor % 1000 === 0) {
      if (valor % 1000000 === 0) {
        return (valor / 1000000).toString() + "M";
      } else {
        return (valor / 1000).toString() + "k";
      }
    } else {
      return valor.toString();
    }
  }
  
  