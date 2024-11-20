#React + Vite Project
Este projeto fornece uma configuração mínima para fazer o React funcionar no Vite com HMR (Hot Module Replacement) e algumas regras do ESLint.

 --> Índice:
 
. Instalação
. Scripts Disponíveis
. Estrutura de Pastas
. Dependências
. Plugins Oficiais
. Configuração do ESLint
. Contribuição
. Licença

-- Instalação
Para instalar as dependências do projeto, execute:

npm install

-- Scripts Disponíveis
No diretório do projeto, você pode executar:

npm run dev
Inicia o servidor de desenvolvimento com HMR.

npm run build
Compila o projeto para produção na pasta dist.

npm run preview
Visualiza a compilação de produção localmente.

npm run lint
Executa o ESLint para verificar problemas no código.

-- Estrutura de Pastas
A estrutura de pastas do projeto é a seguinte:

my-project/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .eslintrc.js
├── package.json
├── vite.config.js
└── README.md

-- Dependências
As principais dependências do projeto são:

JSON

"dependencies": {
  "axios": "^1.7.7",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.3.0",
  "react-router-dom": "^6.27.0",
  "react-toastify": "^10.0.6",
  "tostify": "^0.0.1"
}

-- Plugins Oficiais
Atualmente, dois plugins oficiais estão disponíveis:

. @vitejs/plugin-react usa Babel para Fast Refresh.
. @vitejs/plugin-react-swc usa SWC para Fast Refresh.

-- Configuração do ESLint
O projeto inclui uma configuração básica do ESLint para manter a qualidade do código. Você pode ajustar as regras no arquivo .eslintrc.js conforme necessário.

-- Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

-- Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
