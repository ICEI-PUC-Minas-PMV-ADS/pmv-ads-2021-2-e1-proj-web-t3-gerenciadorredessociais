# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução. 

## Diagrama de componentes

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução. 

Exemplo: 

Os componentes que fazem parte da solução são apresentados na figura a seguir.

![Diagrama de Componentes](img/componentes.png)
<center>Figura 9 - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema 
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, Javascript e imagens que implementam as funcionalidades do sistema 
   - **Local Storage** - consiste em salvar, adicionar, recuperar ou excluir dados localmente em um navegador Web, isto é, o armazenamento mantido no navegador.
     - **Canais:** - Seção de redes sociais 
     - **Contas:** - Cadastro e acesso de usuários.
     - **Relatórios:** - Dados das interações dos usuários com as redes sociais.
 - **API** - Plataforma que permite o acesso às redes sociais.
 - **Hospedagem** - Local na internet onde as páginas são mantidas e acessadas pelo navegador. 

## Hospedagem

Como provedor de hospedagem da aplicação será utilizado o servidor GitHub Pages. 
