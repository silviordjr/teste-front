<h1 align="center">Cadastro de Solicitações de Empréstimos</h1>

<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 React</a>
</h1>

<p>Tela de cadastro para as solicitações, contendo os campos:
  <ol>
    <li>CNPJ</li>
    <li>Valor de empréstimo solicitado</li>
    <li>Faturamento anual da empresa</li>
    <li>Endereço da empresa</li>
    <li>Nome do solicitante</li>
    <li>CPF do solicitante</li>
    <li>Telefone do solicitante</li>
    <li>E-mail solicitante</li>
  </ol>
  Na página, são verificados os dados de CPF, CNPJ e e-mail. Além disso, há uma tela para listar todas as solicitações e funcionalidade para editar e/ou excluir uma solicitação. As solicitações estão armazenada no arquivo db.json, onde todos os dados são fictícios, para fins de prática. Todas as novas solicitações são salvas no arquivo db.json. 
</p>

<h4 align="center"> 
	🚧  React Select 🚀 Finalizado.
</h4>

### 🛠 Tecnologias e Ferramentas

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Cpf-cnpj-validator](https://www.npmjs.com/package/cpf-cnpj-validator)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Styled-components](https://styled-components.com/)
- [Json-server](https://www.npmjs.com/package/json-server)

### Importante

Ao rodar a aplicação React, ela funcionará na porta 3000 (localhost:3000), de tal maneira, o json-server deve rodar na porta 3004 para o funcionamento das requisições de cadastro, edição e exclusão, além da requisição de pegar os dados do arquivo db.json. Para isso, basta seguir os passos: 

<ol>
  <li>Se você estiver dentro da pasta principal, entre na pasta 'src' e, posteriormente, na pasta 'data'.</li>
  <li>Dentro da pasta 'data', no bash, rode o comando: json-server --watch db.json --port 3004</li>
</ol>

### Responsividade

O projeto foi realizado desktop first, com responsividade otimizada para iPhone 6/7/8.
