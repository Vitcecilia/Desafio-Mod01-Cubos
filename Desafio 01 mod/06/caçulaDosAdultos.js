function solucao(lista) {
  
    const maiorIdade = lista.reduce((acumulador, idadeAtual) => {
  
          if (idadeAtual >= 18) {
              if (acumulador >= 18) {
                  return idadeAtual < acumulador ? idadeAtual : acumulador;
              } else {
                  return idadeAtual;
              }
          }
  
          if (acumulador >= 18) {
              if (idadeAtual >= 18) {
                  return idadeAtual < acumulador ? idadeAtual : acumulador;
              } else {
                  return acumulador;
              }
          }
          if ('undefined') {
              return "CRESCA E APARECA"
          }
  
      });
      console.log(maiorIdade)
  
      
  };

solução([9, 347, 3, 65, 213, 656, 35, 46, 1, 57, 34, 87, 3]);