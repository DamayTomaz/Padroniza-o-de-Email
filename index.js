// Função para criar a mensagem formatada
function criarMensagem() {
    // Captura os valores dos campos do formulário
    const nomePaciente = document.getElementById("nomePaciente").value;
    const codigoAtendimento = document.getElementById("codigoAtendimento").value;
    const valorFaturado = parseFloat ( document.getElementById("valorFaturado").value);
    const valorPago = parseFloat ( document.getElementById("valorPago").value);
    const codigoCV = document.getElementById("codigoCV").value;
    const dataPagamento = document.getElementById("data").value;

  //Calculo de devolção
    const valorDevolucao =  valorPago - valorFaturado;
    // Cria a mensagem formatada
    const mensagem = `
      Gostaria de solicitar o estorno referente ao atendimento:
  
      - Nome do Paciente: ${nomePaciente}
      - Código de Atendimento: ${codigoAtendimento}
      - Valor Faturado: R$ ${valorFaturado.toFixed(2)}
      - Valor Pago: R$ ${valorPago.toFixed(2)}
      - Valor da devolução: R$ ${valorDevolucao}
      - CV ou Código de Autorização: ${codigoCV}
      - Data de Pagamento: ${dataPagamento}
  
      Agradeço pela atenção e aguardo instruções.
  
      Atenciosamente.
    `;
  
    // Exibe a mensagem no div "resultado"
    document.getElementById("resultado").innerText = mensagem;
  }
  
  // Função para copiar a mensagem para a área de transferência
  function copiarTexto() {
    const texto = document.getElementById("resultado").innerText;
  
    if (texto) {
      // Cria um elemento de área de transferência temporário
      const tempInput = document.createElement("textarea");
      tempInput.value = texto;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      
      // Alerta informando que o texto foi copiado
      alert("Texto copiado para a área de transferência!");
    } else {
      alert("Nenhum texto para copiar. Por favor, clique em 'Criar Email' primeiro.");
    }
  }