//seleção de elementos
const botaoLimpar = document.querySelector("#btn-limpar__dados");

const botaoGerar = document.querySelector("#btn-dados__paciente");

const botaoImprimir = document.querySelector("#btn__imprimir");

const botaoVoltar = document.getElementById("btn__voltar");

const btnReset = document.getElementById("btn-reset");

const prontuarioBotaoContainer = document.querySelector('.prontuario__botao__container');

const dadosContainer = document.querySelector('.dados__paciente-container');

const prontuarioContainer = document.querySelector('.prontuario__container');

//endereço seleção
const cepInput = document.querySelector("#cep");
const logradouroInput = document.querySelector("#logradouro");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const estadoInput = document.querySelector("#estado");
const numeroInput = document.querySelector("#numero");

const formInputs = document.querySelectorAll("[data-input]");

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
const idadeInput = document.querySelector("#idade__prontuario");

//funções

//gerar idade do paciente
function dataNascimento(input) {
  const dataRecebida = new Date(input.value)
  idade = Math.floor((Date.now() - dataRecebida) / (31557600000));
  //console.log(idade)
  idadeInput.innerText = idade;
}

//transição de tela
function trasicaoTela() {
  dadosContainer.classList.toggle("hide")
  prontuarioContainer.classList.toggle("hide")
}


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
  cepInput.value = "";
  logradouroInput.value = "";
  numeroInput.value = "";
  bairroInput.value = "";
  cidadeInput.value = "";
  estadoInput.value = "";
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

  const inserirRua = document.querySelector('#rua__prontuario')
  inserirRua.innerText = logradouroInput.value;

  const inserirNumero = document.querySelector('#numero__prontuario')
  inserirNumero.innerText = numeroInput.value;

  const inserirBairro = document.querySelector('#bairro__prontuario')
  inserirBairro.innerText = bairroInput.value;

  const inserirCidade = document.querySelector('#cidade__prontuario')
  inserirCidade.innerText = cidadeInput.value;

  const inserirEstado = document.querySelector('#estado__prontuario')
  inserirEstado.innerText = estadoInput.value;

  //prontuario
  const inserirNomeProntuario = document.querySelector('#nome__prontuario')
  inserirNomeProntuario.innerText = nomeInput.value;

  const inserirSexoProntuario = document.querySelector('#sexo__prontuario')
  inserirSexoProntuario.innerText = sexoInput.value;

  const inserirQueixa = document.querySelector('#queixa__prontuario')
  inserirQueixa.innerText = queixaInput.value;

  //informacoes prontuario

  const inserirFrProntuario = document.querySelector('#fr__prontuario')
  inserirFrProntuario.innerText = `${frInput.value} irpm.`;

  const inserirPaSisProntuario = document.querySelector('#pa__sis__prontuario')
  inserirPaSisProntuario.innerText = `${paSisInput.value} /`;

  const inserirPaDiaProntuario = document.querySelector('#pa__dia__prontuario')
  inserirPaDiaProntuario.innerText = `${paDiasInput.value} mmHg.`;

  const inserirTemperaturaProntuario = document.querySelector('#temperatura__prontuario')
  inserirTemperaturaProntuario.innerText = `${temperaturaInput.value}°.`;

  const inserirGlicemiaProntuario = document.querySelector('#glicemia__prontuario')
  inserirGlicemiaProntuario.innerText = `${glicemiaInput.value} mg/dL.`;

  const inserirSaturacaoProntuario = document.querySelector('#spo2__prontuario')
  inserirSaturacaoProntuario.innerText = `${saturacaoInput.value} %.`;

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
  trasicaoTela()
  dataNascimento(dataNascimentoInput)
})

botaoImprimir.addEventListener("click", () => {
  window.print();
})

botaoVoltar.addEventListener("click", function () {
  location.reload();
});

// Evento to get address
cepInput.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;

  //   Check if we have a CEP
  if (inputValue.length === 8) {
      getAddress(inputValue);
  }
});

// Get address from API
const getAddress = async (cep) => {

  cepInput.blur();

  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(apiUrl);

  const data = await response.json();

  console.log(data);
  console.log(formInputs);
  console.log(data.erro);

  logradouroInput.value = data.logradouro;
  cidadeInput.value = data.localidade;
  bairroInput.value = data.bairro;
  estadoInput.value = data.uf;

}


// Add or remove disable attribute
const toggleDisabled = () => {
  if (logradouroInput.hasAttribute("disabled")) {
      formInputs.forEach((input) => {
          input.removeAttribute("disabled");
      });
  } else {
      formInputs.forEach((input) => {
          input.setAttribute("disabled", "disabled");
      });
  }
};

