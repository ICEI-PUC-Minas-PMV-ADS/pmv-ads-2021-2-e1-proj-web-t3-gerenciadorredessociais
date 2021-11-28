# Registro de Testes de Software
**Tela de Dashboard**

![TelaInicial](img/TelaInicial.png)

* Login com a conta da rede social 
![TelaLoginFacebook](img/telaLoginFacebook.png)

* Login realizado com sucesso, perfil do facebook conectado
![TelaConectado](img/telaFacebookConectado.png)

**Tela de Publicar Post**

 ![TelaPublicarPost](img/telaPublicar.png)

* O site deve permitir realizar postagens nas redes sociais. 

O campo "Perfil Conectado" após o login na rede social, deverá trazer a informação da foto do perfil do usuário que foi logado.
 ![PerfilLogado](img/perfilConectado.png)
 
O campo "Selecione a data" deverá ser possível inserir a data da publicação, dia atual.  
 ![SelecionandoData](img/selecioneData.png)
 
O campo "Descrição" deverá permitir ao usuário escrever a legenda da sua publicação, após isso o usuário deverá clicar no botão “Enviar Texto” para que a descrição seja adicionada ao campo de Preview. 
![InserindoLegenda](img/descricao.png)

O campo "Midia" deverá permitir ao usuário anexar a imagem que quer publicar, para isso o usuário deverá clicar em “Escolher arquivo” onde será direcionado á uma pasta para escolher o arquivo desejado.
![InserindoImagem](img/midia.png)

Após a seleção da mídia, seu nome será preenchido e automaticamente ela será adicionada ao campo de Preview. 
![ImagemSelecionada](img/ImagemSelecionada.png)

O campo "Preview"irá ser preenchido de acordo com as informações inseridas pelo usuário.
![Preview](img/preview.png)

Caso o usuario queira apagar as informações inseridas, basta clicar no "X" no canto superior direito, e todas as informações serão excluidas para começar novamente o ciclo, ao clicar sobre a imagem selecionada irá aparecer o "Editar" que clicando será possivel também fazer a seleção de uma outra midia.
![AlterandoPreviwe]](img/alteracaoPreview.png)

Após definido o Preview o usuario deverá clicar em "Publicar", para que a postagem seja efetuada com sucesso o perfil do usuario deve ter as permissões do Aplicativo Facebook, caso o perfil do usuario não seja permitido a publicação não será efetuada e sistema retornará um alerta de erro.
![PermissãoNegada](img/permissaoNegada.png)

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
