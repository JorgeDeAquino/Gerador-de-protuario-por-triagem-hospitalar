//frequencia respiratoria
const fr = [
    {
      min: 20,
      max: 24,
      condicao: "eupneico",
      classificacao: "verde",
    },
    {
      min: 20,
      max: 34,
      condicao: "bradipneia",
      classificacao: "amarelo",
    },
    {
      min: 35,
      max: 80,
      condicao: "taquipneia",
      classificacao: "vermelho",
    },
  ];

//frquencia cardiaca
const fc = [
    {
      min: 60,
      max: 100,
      condicao: "sinusal",
      classificacao: "verde",
    },
    {
      min: 101,
      max: 139,
      condicao: "taquicardia",
      classificacao: "amarelo",
    },
    {
      min: 0,
      max: 59,
      condicao: "bradicardia",
      classificacao: "vermelho",
    },
    {
      min: 140,
      max: 250,
      condicao: "taquicardia severa",
      classificacao: "vermelho",
    },
  ];

//pressão arterial sistolica
const paSistolica = [
    {
        min: 120,
        max: 149,
        condicao: "normotenso",
        classificacao: "verde",
      },
      {
        min: 150,
        max: 169,
        condicao: "",
        classificacao: "amarelo",
      },
      {
        min: 0,
        max: 119,
        condicao: "",
        classificacao: "vermelho",
      },
      {
        min: 170,
        max: 250,
        condicao: "",
        classificacao: "vermelho",
      },
  ];

//pressão arterial diastolica
const paDiastolica = [
    {
        min: 60,
        max: 90,
        condicao: "normotenso",
        classificacao: "verde",
      },
      {
        min: 91,
        max: 109,
        condicao: "",
        classificacao: "amarelo",
      },
      {
        min: 0,
        max: 59,
        condicao: "",
        classificacao: "vermelho",
      },
      {
        min: 110,
        max: 200,
        condicao: "",
        classificacao: "vermelho",
      },
  ];

  //temperatura axilar
  const temperatura = [
    {
        min: 36,
        max: 37.6,
        condicao: "normotermico",
        classificacao: "verde",
      },
      {
        min: 37.6,
        max: 38.4,
        condicao: "subfebril",
        classificacao: "amarelo",
      },
      {
        min: 0,
        max: 35.9,
        condicao: "hipotermico",
        classificacao: "vermelho",
      },
      {
        min: 38.5,
        max: 44,
        condicao: "hipertermico",
        classificacao: "vermelho",
      },
  ];

//glicemia capilar
const glicemia = [
    {
        min: 80,
        max: 100,
        condicao: "euglicemico",
        classificacao: "verde",
      },
      {
        min: 101,
        max: 200,
        condicao: "hiperglicemia leve",
        classificacao: "amarelo",
      },
      {
        min: 0,
        max: 79,
        condicao: "hipoglicemia",
        classificacao: "vermelho",
      },
      {
        min: 201,
        max: 600,
        condicao: "hiperglicemia severa",
        classificacao: "vermelho",
      },
  ];

//saturação de O2
const saturacao = [
    {
        min: 96,
        max: 100,
        condicao: "nivel ideal",
        classificacao: "verde",
      },
      {
        min: 90,
        max: 95,
        condicao: "nivel de atenção",
        classificacao: "amarelo",
      },
      {
        min: 0,
        max: 89,
        condicao: "hipoxemia",
        classificacao: "vermelho",
      },
  ];

  //escala de dor
const escalaDeDor = [
    {
        min: 0,
        max: 4,
        condicao: "baixo",
        classificacao: "verde",
      },
      {
        min: 5,
        max: 7,
        condicao: "moderado",
        classificacao: "amarelo",
      },
      {
        min: 8,
        max: 10,
        condicao: "intenso",
        classificacao: "vermelho",
      },
  ];

  