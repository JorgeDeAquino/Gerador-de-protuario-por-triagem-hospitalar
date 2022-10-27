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

  

  //seleção de elementos
  const botaoLimpar = document.querySelector("#btn-limpar__dados");
 
  const botaoGerar = document.querySelector("#btn-dados__paciente");

  //inputs dados paciente identificação
const nomeInput = document.querySelector("#nome__paciente");
const dataNascimentoInput = document.querySelector("#idade__paciente");
const sexoInput = document.querySelector("#sexo");
const naturalidadeInput = document.querySelector("#naturalidade");
const filiacaoInput = document.querySelector("#nome__mae");

//inputs dados paciente anamnese
const queixaInput = document.querySelector("#queixa__paciente");
const frInput = document.querySelector("#fr__paciente");
const fcInput = document.querySelector("#fc__paciente");
const paSisInput = document.querySelector("#pasis__paciente");
const paDiasInput = document.querySelector("#padias__paciente");
const temperaturaInput = document.querySelector("#temperatura__paciente");
const glicemiaInput = document.querySelector("#glicemia__paciente");
const saturacaoInput = document.querySelector("#spo2__paciente");
const dorInput = document.querySelector("#dor__paciente");


//funções
// limpar tabela de valores
function limparInputs() {
  nomeInput.value = "";
  dataNascimentoInput.value = "";
  sexoInput.value = "";
  naturalidadeInput.value = "";
  filiacaoInput.value = "";
  queixaInput.value = "";
  frInput.value = "";
  fcInput.value = "";
  paSisInput.value = "";
  paDiasInput.value = "";
  temperaturaInput.value = "";
  glicemiaInput.value = "";
  saturacaoInput.value = "";
  dorInput.value = "";
};

function preencherCabecalho() {
  //cabecalho
  const inserirNome = document.querySelector('#nome__prontuario__cabecalho')
  inserirNome.innerText = nomeInput.value;

  const inserirData = document.querySelector('#data__nascimento__prontuario')
  inserirData.innerText = dataNascimentoInput.value;

  const inserirFiliacao = document.querySelector('#filiacao__prontuario')
  inserirFiliacao.innerText = filiacaoInput.value;

  const inserirSexo = document.querySelector('#sexo__prontuario__cabecalho')
  inserirSexo.innerText = sexoInput.value;
  
  const inserirNaturalidade = document.querySelector('#naturalidade__prontuario')
  inserirNaturalidade.innerText = naturalidadeInput.value;
  
  //prontuario
  const inserirNomeProntuario = document.querySelector('#nome__prontuario')
  inserirNomeProntuario.innerText = nomeInput.value;

  const inserirSexoProntuario = document.querySelector('#sexo__prontuario')
  inserirSexoProntuario.innerText = sexoInput.value;

  //inserir idade

  const inserirQueixa = document.querySelector('#queixa__prontuario')
  inserirQueixa.innerText = queixaInput.value;

  const inserirFrProntuario = document.querySelector('#fr__prontuario')
  inserirFrProntuario.innerText = frInput.value;
  
  const inserirPaSisProntuario = document.querySelector('#pa__sis__prontuario')
  inserirPaSisProntuario.innerText = paSisInput.value;

  const inserirPaDiaProntuario = document.querySelector('#pa__dia__prontuario')
  inserirPaDiaProntuario.innerText = paDiasInput.value;

  const inserirTemperaturaProntuario = document.querySelector('#temperatura__prontuario')
  inserirTemperaturaProntuario.innerText = temperaturaInput.value;

  const inserirGlicemiaProntuario = document.querySelector('#glicemia__prontuario')
  inserirGlicemiaProntuario.innerText = glicemiaInput.value;

  const inserirSaturacaoProntuario = document.querySelector('#spo2__prontuario')
  inserirSaturacaoProntuario.innerText = saturacaoInput.value;

  const inserirDorProntuario = document.querySelector('#dor__prontuario')
  inserirDorProntuario.innerText = dorInput.value;

}



  //evento limpar o botao
botaoLimpar.addEventListener("click", (e) => {
  e.preventDefault();
  limparInputs()
})

botaoGerar.addEventListener("click", () => {
  preencherCabecalho()
})




