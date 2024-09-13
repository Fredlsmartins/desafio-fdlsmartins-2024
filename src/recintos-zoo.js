class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    const biomas = ["savana", "floresta", "rio"];

    const animais = [
      { especie: "LEAO", tamanho: 3, biomas: biomas[0], carnivoro: true },
      { especie: "LEOPARDO", tamanho: 2, biomas: biomas[0], carnivoro: true },
      { especie: "CROCODILO", tamanho: 3, biomas: biomas[2], carnivoro: true },
      {especie: "MACACO",tamanho: 1,biomas: [biomas[0], biomas[2]],carnivoro: false,},
      { especie: "GAZELA", tamanho: 2, biomas: biomas[0], carnivoro: false },
      { especie: "HIPOPOTAMO", tamanho: 4, carnivoro: true },
    ];

    const recintos = [
      {numero: 1,biomas: [biomas[0]],tamanhoTotal: 10,animais: [animais[3], animais[3], animais[3]],},
      { numero: 2, biomas: [biomas[1]], tamanhoTotal: 5, animais: [] },
      { numero: 3, biomas: [biomas[2]], tamanhoTotal: 7, animais: [animais[4]] },
      { numero: 4, biomas: [biomas[0], biomas[2]], tamanhoTotal: 8, animais:[] },
      { numero: 5, biomas: [biomas[4]], tamanhoTotal: 9, animais: [animais[0]] },
    ];
   
    // 1) Um animal se sente confortável se está num bioma adequado e com espaço suficiente para cada indivíduo
    // 2) Animais carnívoros devem habitar somente com a própria espécie
    // 3) Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s)
    // 4) Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
    // 5) Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
    // 6) Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
    // 7) Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto (eles são muito apegados!).
    
    let animalExiste = animais.filter((item) => item.especie === animal);
    let animalConfortavel = recintos.filter(recinto => recinto.biomas.some(b => animalExiste[0].biomas.includes(b)) && (recinto.tamanhoTotal - recinto.animais.map(a=>a.tamanho).reduce((prev,next)=> prev+next,0)) >= quantidade  )
    let animaisCarnivoros = recintos.filter(recinto => !recinto.animais.length || (recinto.animais.some (a => a.carnivoro && a.especie === animalExiste[0].especie)) && animalExiste[0].carnivoro)
    console.log ("animais carnivoros",animaisCarnivoros)

        var recintosVazios = recintos.filter ((item) => item.animais.length === 0 )
      
        recintos[recintosVazios[0].numero - 1].animais.unshift(animais[2])
        console.log("RECINTOS ORIGINAIS = ", recintos)
        // console.log ("RECINTOS[1].animais = ", recintos[1].animais)
    
    if (!animalExiste.length) {
      return {
        erro: "Animal inválido",
        recintosViaveis: null,
      };
    } else if (quantidade <= 0) {
      return {
        erro: "Quantidade inválida",
        recintosViaveis: null,
      };
    } else if (quantidade >= recintos[0].tamanhoTotal) {
        return {
            erro: "Não há recinto viável",
            recintosViaveis: null,
          };
    } else if (animalConfortavel ){
        return {
            erro: "Não há recinto viável",
            recintosViaveis: null,
          };
    }
  } 
  
}

export { RecintosZoo as RecintosZoo };
