export default function () {
  return {
    tasks:{
      "1":{
        id:1,
        nome:'Thailon', 
        dataNascimento:'27/07/2001',
        sexo:'Masculino',
        vacinas: [
          { nome: 'Vacina A', data: '01/01/2022' },
          { nome: 'Vacina B', data: '02/02/2022' },
          { nome: 'Vacina C', data: '03/03/2025' }
        ]
      },
      "2":{
        id:2,
        nome:'Amanda',
        dataNascimento:'27/07/2001',
        sexo:'Feminino',
        vacinas: []
      }
    }
  }
}
