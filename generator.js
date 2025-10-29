/**
 * Support-Snippet-Generator: Módulo de Lógica (generator.js)
 * Fábio Galdino | Otimização de Processos com JavaScript
 */

// Os templates de respostas pré-definidas (Snippets)
const SNIPPETS = [
  {
    id: "saudacao",
    name: "01 - Saudação e Agradecimento",
    template:
      "Olá, {cliente}! Agradeço por entrar em contato. Meu nome é Fábio e estou aqui para te ajudar. Qual o protocolo de atendimento? {protocolo}",
    vars: ["cliente", "protocolo"],
  },
  {
    id: "problema_resolvido",
    name: "02 - Problema Resolvido com Sucesso",
    template:
      "Ótima notícia, {cliente}! Verifiquei sua situação (Protocolo: {protocolo}) e o problema foi resolvido. A solução foi [INSERIR A SOLUÇÃO AQUI]. Caso precise de mais ajuda, me avise!",
    vars: ["cliente", "protocolo"],
  },
  {
    id: "precisa_informacao",
    name: "03 - Solicitação de Informação Adicional",
    template:
      "Olá, {cliente}. Para darmos continuidade ao seu chamado ({protocolo}), preciso de mais uma informação: [ESPECIFICAR A INFORMAÇÃO]. Assim que nos enviar, retomamos a solução.",
    vars: ["cliente", "protocolo"],
  },
];

// Onde o template selecionado será armazenado
let currentTemplate = SNIPPETS[0];

document.addEventListener("DOMContentLoaded", () => {
  const templateSelector = document.getElementById("template-selector");
  const variableInputsDiv = document.getElementById("variable-inputs");
  const outputTextarea = document.getElementById("output-text");
  const copyButton = document.getElementById("copy-button");

  // 1. Popular o seletor com os templates disponíveis
  SNIPPETS.forEach((snippet) => {
    const option = document.createElement("option");
    option.value = snippet.id;
    option.textContent = snippet.name;
    templateSelector.appendChild(option);
  });

  // Evento disparado ao trocar o template
  templateSelector.addEventListener("change", (e) => {
    const selectedId = e.target.value;
    currentTemplate = SNIPPETS.find((s) => s.id === selectedId);
    renderInputs(); // Atualiza os inputs de variáveis
    generateOutput(); // Gera o texto inicial
  });

  // Evento disparado ao digitar nos inputs de variáveis
  variableInputsDiv.addEventListener("input", generateOutput);

  // 2. Renderizar dinamicamente os inputs de variáveis do template
  function renderInputs() {
    variableInputsDiv.innerHTML = ""; // Limpa inputs anteriores

    currentTemplate.vars.forEach((variable) => {
      const label = document.createElement("label");
      label.textContent = `Variável {${variable}} (Ex: Nome do Cliente)`;

      const input = document.createElement("input");
      input.type = "text";
      input.id = `var-${variable}`;
      input.name = variable;
      input.placeholder = `Valor para {${variable}}`;
      input.classList.add("var-input"); // Classe para escutar o 'input'

      variableInputsDiv.appendChild(label);
      variableInputsDiv.appendChild(input);
    });
  }

  // 3. Gerar o texto final com as variáveis substituídas
  function generateOutput() {
    let finalOutput = currentTemplate.template;

    // Substituir cada variável com o valor do input correspondente
    currentTemplate.vars.forEach((variable) => {
      const inputElement = document.getElementById(`var-${variable}`);
      const value = inputElement ? inputElement.value : `[FALTOU: ${variable}]`;

      // Substituição: Troca {variavel} pelo valor do input
      finalOutput = finalOutput.replace(
        new RegExp(`\\{${variable}\\}`, "g"),
        value
      );
    });

    outputTextarea.value = finalOutput.trim();
  }

  // 4. Funcionalidade de Copiar para a Área de Transferência
  copyButton.addEventListener("click", () => {
    outputTextarea.select();

    // Uso da Clipboard API (moderna)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(outputTextarea.value)
        .then(() => {
          copyButton.textContent = "Copiado! ✅";
          setTimeout(() => {
            copyButton.textContent = "Copiar Texto";
          }, 2000);
        })
        .catch((err) => {
          console.error("Falha ao copiar:", err);
          alert("Erro ao copiar. Tente selecionar o texto manualmente.");
        });
    } else {
      // Fallback para navegadores mais antigos (menos comum hoje)
      document.execCommand("copy");
      alert("Texto copiado via fallback.");
    }
  });

  // Iniciar a aplicação
  renderInputs();
  generateOutput();
});
