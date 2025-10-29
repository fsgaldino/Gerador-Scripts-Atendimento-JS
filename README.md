# 🛠 Support-Snippet-Generator (Gerador de Scripts de Atendimento)

### 🎯 O Problema que Solucionamos (Tempo = Dinheiro)

Em equipes de Suporte e Vendas, a repetição de respostas para perguntas frequentes (FAQs) consome tempo e leva a erros. A falta de padronização afeta a imagem da empresa.

Este projeto é uma ferramenta simples, construída em **JavaScript e HTML**, que permite ao usuário:

1.  **Selecionar um _template_ de resposta** pré-escrito (o "Snippet").
2.  **Preencher campos dinâmicos** (ex: [Nome do Cliente], [Número do Protocolo]).
3.  **Copiar o resultado final** para a área de transferência com um único clique.

Isso garante **velocidade e consistência** no atendimento ao cliente.

---

### ✨ MVP (Mínimo Produto Viável) - O que está Pronto

O foco do MVP é mostrar a funcionalidade básica e a interface limpa:

- **Interface Simples:** HTML e CSS limpos, focados na usabilidade.
- **Seleção de _Template_:** Um menu _dropdown_ com 3 ou 4 _templates_ de Suporte/Vendas (ex: "Saudação Inicial", "Problema Resolvido", "Feedback Solicitado").
- **Substituição de Variáveis:** Campos de texto para substituir variáveis como `{cliente}` e `{protocolo}` no texto do _template_ (Lógica JavaScript).
- **Botão Copiar:** Funcionalidade que copia o texto final para a área de transferência (`navigator.clipboard.writeText()` em JS).

---

### ⚙️ Como Usar

O projeto é _client-side_ (roda no navegador). Basta abrir o `index.html` e usar.

🔗 **Link para o Demo (GitHub Pages):** [INSERIR O SEU NOVO LINK DO GITHUB PAGES AQUI]

---

### 🚀 Backlog (Próximas Fases) - Usando a Metodologia Ágil

1.  **Armazenamento Local:** Adicionar a funcionalidade de salvar _templates_ personalizados no `localStorage` do navegador.
2.  **Exportação/Importação:** Adicionar a possibilidade de exportar _templates_ como um arquivo JSON para compartilhamento entre equipes.
3.  **Contador de Uso:** Adicionar um contador para rastrear qual _snippet_ está sendo mais utilizado (métrica de negócio).

---

**👋 Precisa de uma ferramenta personalizada para otimizar a produtividade da sua equipe?**
Meu _background_ em Suporte/Agilidade garante que eu entendo sua dor de negócio. Entre em contato no meu perfil do 99Freelas: https://www.99freelas.com.br/user/fabiogaldino
