const informacoesClientes = [
    {
        cpf: 40415223626,
        nome: "Lucas Fazan"
    },
    {
        cpf: 20010030025,
        nome: "Arlete"
    },
    {
        cpf: 11122233344,
        nome: "Ivair"
    }
]

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
`
linha.innerHTML = conteudoLinha;
return linha;
}

informacoesClientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
})



