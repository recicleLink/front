# RecicleLink Frontend

RecicleLink é uma aplicação que visa facilitar a coleta seletiva de resíduos e foi criado durante o Hackfor Change FIAP + Alura. Este repositório contém o código frontend da plataforma, desenvolvido em React.

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [JWT Decode](https://www.npmjs.com/package/jwt-decode)

## 📂 Estrutura do Projeto

A estrutura de pastas pode variar, mas um exemplo comum seria:

```plaintext
/src
  |_assets
  |    |_images
  |_components
  |_screens
  |_Routes
App.js
index.js
```

## 🚀 Iniciando o Projeto

1. Clone o repositório no GitHub
2. Acesse a pasta do projeto no terminal/cmd
3. Instale as dependências com o comando:
   ```bash
   npm install
   ```
4. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm start
   ```

O servidor iniciará na porta :3000 - acesse <http://localhost:3000>

## 📝 Funcionalidades

- Cadastro de Usuários
  O cidadão pode ser cadastrar em três categorias: cidadão, coletador ou cooperativa.
- Autenticação de usuários
  Usuários podem se autenticar na plataforma através de login e senha e são encaminhados para seus dashboards específicos de acordo com a categoria.
- Criação de solicitações de coleta de resíduos
  Usuários podem criar solicitações de coleta de resíduos, que são encaminhadas para cooperativas e coletadores.
- Atribuição de solicitações de coleta de resíduos
  Cooperativas podem atribuir solicitações de coleta de resíduos para coletadores.
- Visualização de solicitações de coleta de resíduos
  Coletadores podem visualizar solicitações de coleta de resíduos atribuídas a eles.

## 📋 Scripts Disponíveis

No diretório do projeto, você pode rodar:

- \`npm start\`: Inicia o app em modo de desenvolvimento
- \`npm build\`: Compila o app para produção na pasta \`build\`

## 📌 Informações Adicionais

Este frontend é parte do projeto RecicleLink, uma solução completa para facilitar a coleta seletiva de resíduos. Este projeto está em fase de MVP e futuras atualizações trarão novas funcionalidades e melhorias.

Para mais informações, consulte a documentação completa ou entre em contato com a equipe de desenvolvimento.
