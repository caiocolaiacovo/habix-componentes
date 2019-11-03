import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';
import Dialogo from './componentes/Dialogo';
import { BotaoComTexto, BotaoComTextoEIcone, BotaoComIcone } from './componentes/Botao';
import Mensagem from './componentes/Mensagem';
import ContainerDeMensagensFlutuantes, { GerenciadorDeMensagem } from './componentes/MensagensFlutuantes';
import { Link, LinkComIcone } from './componentes/Link';
import Header from './telas/Header';
import BarraDeNavegacao from './telas/BarraDeNavegacao';
 
class App extends Component {
  constructor() {
    super();

    this.state = {
      deveExibirDialogo: false
    };
  }

  exibirDialogo = () => this.setState({deveExibirDialogo: true});
  fecharDialogo = () => this.setState({deveExibirDialogo: false});
  
  acaoPrincipal() {
    console.log('Esta ação foi disparada pelo dialogo, mas é controlada pelo elemento pai dele.');
  }

  CorpoDoDialogo = () => {
    return (
      <>
        <p>Este corpo foi injetado pelo elemento pai.</p>
      </>
    );
  }

  RodapeDoDialogo = () => {
    return (
      <>
        <button className="botao botao_cor-info" type="button" onClick={this.acaoPrincipal}>Salvar</button>
        <button className="botao botao_cor-cinza botao_contorno" type="submit" onClick={this.fecharDialogo.bind(this)}>Cancelar</button>
      </>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ContainerDeMensagensFlutuantes />
          <Header/>
          <BarraDeNavegacao/>
          <main className="pagina__conteudo-container pagina__conteudo-container_maximizado">
            <section className="container container_com-fundo container_com-margem">
              <Dialogo 
                tamanho='mini'
                deveSerExibido={this.state.deveExibirDialogo} 
                fecharDialogo={() => this.fecharDialogo() } 
                acaoPrincipal={() => this.acaoPrincipal() } 
                titulo='Um titulo qualquer'
                subTitulo='Um subtitulo qualquer'
                corpo={this.CorpoDoDialogo}
                rodape={this.RodapeDoDialogo} />
              <button className="botao botao_medio" onClick={() => this.exibirDialogo() }>Exibir diálogo</button>
            </section>
            <section className="container container_com-fundo container_com-margem">
              {/* <BotaoComTexto
                // visual=''
                // visual='contorno'
                // visual='sem-preenchimento'
                // tamanho='mini'
                // tamanho='gigante'
                // tamanho='largura-total'
                // cor='sucesso'
                // cor='primaria'
                // cor='secundaria'
                // cor='branco'
                // habilitado={true}
                // tipo='button'
                // onClick={() => console.log('clicou')}>
                Botão
              </BotaoComTexto> */}
              <BotaoComTexto
                tamanho='mini'
                cor='sucesso'
                habilitado={false}
                tipo='button'
                onClick={() => console.log('clicou')}>
                Botão 1
              </BotaoComTexto>
              <BotaoComTexto
                visual='contorno'
                tamanho='gigante'
                cor='primaria'
                habilitado={true}
                tipo='submit'>
                Botão 2
              </BotaoComTexto>
              <BotaoComTexto
                visual='sem-preenchimento'
                tamanho='largura-total'
                cor='branco'>
                Botão 3
              </BotaoComTexto>
              <BotaoComTexto
                cor='cinza'>
                Botão 4
              </BotaoComTexto>
              <BotaoComTextoEIcone
                tamanho='pequeno'
                cor='info'
                habilitado={true}
                tipo='button'
                onClick={() => console.log('clicou')}
                posicao='esquerda'
                icone='fa fa-check-circle'>
                Botão 5
              </BotaoComTextoEIcone>
              <BotaoComTextoEIcone
                visual='sem-preenchimento'
                tamanho='grande'
                cor='terciaria'
                habilitado={false}
                tipo='submit'
                posicao='direita'
                icone='fa fa-folder-open'>
                Botão 6
              </BotaoComTextoEIcone>
              <BotaoComTextoEIcone
                visual='contorno'
                cor='secundaria'
                tipo='button'
                posicao='direita'
                icone='fa fa-cog'>
                Botão 7
              </BotaoComTextoEIcone>
              <BotaoComIcone 
                visual='contorno'
                tamanho='largura-total'
                cor='atencao'
                habilitado={true}
                tipo='button'
                onClick={() => console.log('clicou')}
                icone='fa fa-check-circle'/>
              <BotaoComIcone 
                visual='sem-preenchimento'
                tamanho='grande'
                icone='fa fa-bookmark'/>
              <form className="formulario">
                <label htmlFor="nome-do-usuario">Nome do usuário</label>
                <input id="nome-do-usuario" type="text"/>
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password"/>
              </form>
            </section>
            <section className="container container_com-fundo container_com-margem">
              <Mensagem 
                titulo='Titulo da mensagem' 
                texto='Um bom texto para a mensagem'/>
              <Mensagem 
                tipo='info' 
                titulo='Titulo da mensagem' 
                texto='Um bom texto para a mensagem' 
                icone='fa-info-circle'/>
              <Mensagem 
                tipo='sucesso' 
                titulo='Tudo certo!' 
                texto='Inscrição realizada com sucesso!' 
                icone='fa-check-circle'/>
              <Mensagem 
                tipo='erro' 
                titulo='Identificamos um erro:' 
                texto='Parece que você não tem permissão para executar esta ação =(' 
                icone='fa-times-circle'/>
              <Mensagem 
                tipo='atencao' 
                titulo='Vamos prosseguir' 
                texto='Parece que seu endereço está incompleto. Será necessário preencher ao realizar sua primeira compra' 
                icone='fa-exclamation-circle'/>
            </section>
            <section className="container container_com-fundo container_com-margem">
              <BotaoComTexto onClick={() => GerenciadorDeMensagem.criarMensagemDeInfo({texto: 'Veja se está tudo certo antes de prosseguir', titulo: 'Confira as informações'}) } cor='info'>Exibir mensagem de info</BotaoComTexto>
              <BotaoComTexto onClick={() => GerenciadorDeMensagem.criarMensagemDeErro({texto: 'Parece que algo errado não está certo =(', titulo: 'Ops...'}) } cor='perigo'>Exibir mensagem de erro</BotaoComTexto>
              <BotaoComTexto onClick={() => GerenciadorDeMensagem.criarMensagemDeSucesso({texto: 'Deu tudo certo =)', titulo: 'Sucesso!'}) } cor='sucesso'>Exibir mensagem de sucesso</BotaoComTexto>
              <BotaoComTexto onClick={() => GerenciadorDeMensagem.criarMensagemDeAtencao({texto: 'Algumas informações estão faltando, mas você pode adicionar depois.', titulo: 'Vamos prosseguir'}) } cor='atencao'>Exibir mensagem de atenção</BotaoComTexto>
            </section>
            <section className="container container_com-fundo container_com-margem">
              <Link href='/botao'>Ir para Home</Link>
              <Link href='/botao' cor='primaria'>Primaria</Link>
              <Link href='/botao' cor='secundaria' tamanho='grande'>Grande</Link>
              <Link href='/botao' cor='terciaria' tamanho='pequeno'>Grande</Link>
              <Link href='/botao' cor='info'>Info</Link>
              <Link href='/botao' cor='erro'>Erro</Link>
              <Link href='/botao' cor='sucesso'>Sucesso</Link>
              <LinkComIcone href='/' icone='fa-home' posicaoDoIcone='direita' tamanho='pequeno'>Ir para Home</LinkComIcone>
              <LinkComIcone href='/botao' cor='info' icone='fa-long-arrow-right' posicaoDoIcone='direita'>Avançar</LinkComIcone>
              <LinkComIcone href='/botao' cor='erro' icone='fa-long-arrow-left' posicaoDoIcone='direita'>Erro</LinkComIcone>
              <LinkComIcone href='/botao' cor='sucesso' icone='fa-user' posicaoDoIcone='esquerda'>Usuário</LinkComIcone>
            </section>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
