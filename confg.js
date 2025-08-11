function verificarCadastro() {
  const resposta = confirm("Deseja continuar com esta conta?");
  
  if (resposta) {
    alert("Conta cadastrada com sucesso!"); 
    console("true")
  } else {
    alert("Cadastro cancelado.");
    console("false")
  }
}