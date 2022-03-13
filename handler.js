'use strict';

const Decimal = require('decimal.js');

module.exports.hello = async (event) => {
  
  if (event.valorInicial && event.precoSugerido) {
    const divisao = new Decimal(event.valorInicial).dividedBy(event.precoSugerido).toNumber();
    const desagio = new Decimal(1).minus(divisao).times(100).toNumber();
    
    return {
      statusCode: 200,
      body: {
        message: 'Deságio calculado com sucesso',
        input: event,
        desagio: desagio
      }
    }
  } else {
    return {
      statusCode: 400,
      body: {
        message: 'Valor Inicial e Preço Sugerido precisam ser informados para calcular o deságio',
        input: event,
      }
    }
  }

}
