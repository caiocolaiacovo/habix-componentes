import React, { Component } from 'react';
import Dialogo from './componentes/Dialogo';
import { BotaoComTexto, BotaoComTextoEIcone, BotaoComIcone } from './componentes/Botao';
import Mensagem from './componentes/Mensagem';

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
    <div className="App">
      <header className="cabecalho-sistema cabecalho-sistema_fixo">
        <button className="botao-hamburguer" aria-label="Menu principal">
          <span className="botao-hamburguer__linha-1"></span>
          <span className="botao-hamburguer__linha-2"></span>
          <span className="botao-hamburguer__linha-3"></span>
        </button>

        <div className="cabecalho-sistema__container-primario">
          <a href="/">
            <svg width="82" height="29" viewBox="0 0 82 29" fill="none" className="rodape__logo-habix" alt="Habix - Um produto Digix"><g clipPath="url(#clip0)"><path d="M15.535 28.8274C9.79157 28.8274 3.90972 27.4464 1.34938 24.3048C-0.657373 21.8536 -0.449779 17.7452 1.93756 12.7393C4.87849 6.62857 10.8987 0 15.4658 0C18.6144 0 21.5553 3.27976 23.4928 6.04167C27.3679 11.6 30.7241 20.5071 29.3747 24.1321C28.6481 26.0655 25.6726 27.619 21.1747 28.3786C19.3755 28.6893 17.4726 28.8274 15.535 28.8274ZM15.4658 1.20833C11.9021 1.20833 6.12406 6.83571 3.04474 13.2917C0.899589 17.7798 0.622795 21.5083 2.28355 23.5452C5.29368 27.2738 14.1511 28.3095 20.9671 27.2048C24.9114 26.5488 27.7139 25.2369 28.2329 23.7524C29.3055 20.8179 26.5376 12.5321 22.4895 6.76667C19.9983 3.17619 17.5072 1.20833 15.4658 1.20833Z" fill="#00DBC5"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.29703 14.7071C6.36623 14.8107 6.50462 14.8798 6.64302 14.8798C6.74682 14.8798 6.81602 14.8798 6.91981 14.8107L13.978 9.45952C14.6354 8.97619 15.6042 8.97619 16.2616 9.45952L23.2506 14.7762C23.4582 14.9488 23.735 14.8798 23.8734 14.7071C24.0464 14.5 23.9772 14.2238 23.8042 14.0857L16.746 8.73452C16.2616 8.38928 15.6734 8.18214 15.0852 8.18214C14.497 8.18214 13.9088 8.38928 13.4245 8.73452L6.36623 14.0857C6.19323 14.2583 6.15863 14.5345 6.29703 14.7071ZM9.99915 22.7512C10.3105 22.9238 10.6911 23.0274 11.0371 23.0274H11.1755H11.4523C11.7983 23.0274 12.0751 22.8893 12.3173 22.6476C12.5249 22.406 12.6633 22.0952 12.6633 21.7845V18.5393V18.4702C12.6633 18.4357 12.6633 18.4357 12.6979 18.4012C12.7152 18.4012 12.7238 18.3926 12.7325 18.3839C12.7411 18.3753 12.7498 18.3667 12.7671 18.3667H12.8363H14.2894C14.324 18.3667 14.3932 18.4012 14.4278 18.4357C14.4624 18.4702 14.497 18.5048 14.497 18.5738V21.819C14.497 22.1298 14.6008 22.4405 14.843 22.6821C15.0852 22.8893 15.362 23.0274 15.708 23.0274H19.0295C19.4447 23.0619 19.8599 22.9583 20.2059 22.7512C20.5519 22.544 20.8633 22.2333 21.0363 21.8881L21.0709 21.819L22.1781 15.8464C22.2818 15.5357 22.2818 15.225 22.1781 14.9143C22.0743 14.6036 21.9013 14.3274 21.6245 14.1548L15.8118 9.83928C15.3966 9.52857 14.8084 9.52857 14.3932 9.83928L8.58058 14.1202C8.33839 14.3274 8.1308 14.6036 8.027 14.9143C7.9232 15.225 7.9232 15.5357 8.027 15.8464L9.13417 21.819L9.16877 21.8881C9.34177 22.2333 9.65316 22.544 9.99915 22.7512ZM10.4143 21.9571C10.2413 21.8536 10.0683 21.7155 9.96455 21.5083L8.89198 15.6738L8.85738 15.6048C8.82278 15.4667 8.82278 15.3286 8.85738 15.1905C8.89198 15.0524 8.99577 14.9143 9.09957 14.8452L14.9122 10.5643C15.016 10.4952 15.189 10.4952 15.2928 10.5643L21.1055 14.8452C21.2093 14.9488 21.3131 15.0524 21.3477 15.1905C21.3823 15.3286 21.3823 15.4667 21.3477 15.6048L20.2405 21.5429C20.1367 21.7155 19.9983 21.8881 19.7907 21.9917C19.5831 22.1298 19.3409 22.1643 19.0641 22.1643H15.7426C15.6388 22.1643 15.535 22.1298 15.4658 22.0607C15.3966 21.9917 15.362 21.8881 15.362 21.7845V18.5393C15.362 18.2631 15.2582 17.9869 15.0506 17.7798C14.843 17.5726 14.5662 17.469 14.2894 17.469H12.8363C12.6979 17.4345 12.5595 17.469 12.4211 17.5381C12.2827 17.6071 12.1789 17.6762 12.0751 17.7798C11.9713 17.8833 11.9021 17.9869 11.8329 18.125C11.7983 18.2631 11.7637 18.4012 11.7637 18.5393V21.7845C11.7637 21.8536 11.7291 21.9571 11.6599 22.0262C11.5907 22.0952 11.5215 22.1298 11.4177 22.1298H11.1063C10.8641 22.1298 10.6219 22.0607 10.4143 21.9571Z" fill="#EB3F00"></path><path fillRule="evenodd" clipRule="evenodd" d="M68.5409 11.0821C68.5409 10.7714 68.6101 10.4607 68.7831 10.1845C68.9561 9.90833 69.1983 9.70119 69.4751 9.5631C69.7519 9.425 70.0979 9.39048 70.3747 9.45952C70.6861 9.52857 70.9629 9.66667 71.2051 9.87381C71.4473 10.081 71.5857 10.3571 71.6549 10.6679C71.724 10.9786 71.6894 11.2893 71.5856 11.6C71.4818 11.8762 71.2743 12.1524 70.9975 12.325C70.7207 12.4976 70.4439 12.6012 70.0979 12.6012C69.8903 12.6012 69.6827 12.5667 69.5097 12.4976C69.3367 12.4286 69.1637 12.325 68.9907 12.1869C68.8523 12.0488 68.7139 11.8762 68.6447 11.7036C68.5755 11.4964 68.5409 11.2893 68.5409 11.0821ZM71.4819 21.8881H68.7831V13.844H71.4819V21.8881ZM66.984 16.2607C66.7764 15.7774 66.465 15.2941 66.0844 14.9143C65.7384 14.5345 65.2886 14.2238 64.8042 14.0167C64.2852 13.8095 63.7662 13.706 63.2472 13.706C62.4861 13.6714 61.7249 13.8786 61.0675 14.2929V10.1155H58.3688V21.8881H61.0675V21.4738C61.7249 21.8536 62.4861 22.0607 63.2472 22.0607C63.8008 22.0607 64.3198 21.9571 64.8042 21.75C65.2886 21.5429 65.7384 21.2321 66.0844 20.8524C66.465 20.4726 66.7764 19.9893 66.984 19.4714C67.1915 18.9536 67.2607 18.4012 67.2607 17.8488C67.2953 17.331 67.1915 16.7786 66.984 16.2607ZM64.4928 17.1238C64.5966 17.3655 64.6312 17.6071 64.6312 17.8833C64.6312 18.125 64.5966 18.4012 64.5274 18.5738C64.4236 18.8155 64.2852 19.0571 64.1122 19.2298C63.9392 19.4369 63.7316 19.575 63.4894 19.6786C63.2472 19.7821 62.9705 19.8512 62.7283 19.8512C62.4169 19.8512 62.1055 19.8167 61.8287 19.6786C61.5173 19.5405 61.2751 19.3679 61.0675 19.1262V16.606C61.2751 16.3643 61.5519 16.1917 61.8287 16.0536C62.1055 15.95 62.4169 15.881 62.7283 15.881C62.9705 15.881 63.2126 15.9155 63.4548 16.0191C63.697 16.1226 63.9046 16.2607 64.0776 16.4679C64.2506 16.675 64.389 16.8821 64.4928 17.1238ZM46.0861 21.8881H43.2835V17.6762H38.6818V21.8881H35.8793V10.5988H38.6818V15.1214H43.2835V10.5988H46.0861V21.8881ZM56.535 21.8881H53.8363V21.4393C53.1789 21.8536 52.4177 22.0607 51.6219 22.0607C51.1029 22.0607 50.584 21.9571 50.065 21.75C49.5806 21.5429 49.1308 21.2321 48.7848 20.8524C48.0236 20.0583 47.6084 18.9881 47.6084 17.8833C47.6084 16.7786 48.0236 15.7083 48.7848 14.9143C49.1308 14.5345 49.5806 14.2238 50.065 14.0167C50.5494 13.8095 51.0683 13.706 51.6219 13.706C52.4177 13.706 53.1789 13.9131 53.8363 14.3274V13.8786H56.535V21.8881ZM53.8363 19.0917V16.5714C53.6287 16.3298 53.3865 16.1571 53.0751 16.019C52.7983 15.881 52.4869 15.8119 52.1755 15.8464C51.6565 15.881 51.1721 16.0881 50.8261 16.4679C50.4802 16.8476 50.2726 17.331 50.2726 17.8488C50.2726 18.3667 50.4802 18.85 50.8261 19.2298C51.1721 19.6095 51.6565 19.8167 52.1755 19.8512C52.4869 19.8512 52.7983 19.7821 53.0751 19.6786C53.3865 19.5405 53.6287 19.3333 53.8363 19.0917ZM78.7477 21.8881H81.7232L78.8861 17.8833L81.7232 13.844H78.6439L77.1561 15.95L75.6337 13.844H72.5544L75.3915 17.8833L72.5544 21.8881H75.5299L77.1561 19.575L78.7477 21.8881Z" fill="#FFFFFF"></path></g><defs><clipPath id="clip0"><rect width="82" height="29" fill="white"></rect></clipPath></defs></svg>
          </a>
        </div>

        <div className="cabecalho-sistema__container-secundario">
          <nav className="cabecalho-sistema__menu">
            <a href="#" className="cabecalho-sistema__item-de-menu">Suporte</a>

            <button id="botao-abrir-menu-administrativo" href="#" className="cabecalho-sistema__item-de-menu">
              <span className="cabecalho-sistema__icone-do-usuario">
                <i className="fa fa-user"></i>
              </span>
              Administrador
            </button>

            <div className="menu-administrativo">
              <div className="menu-administrativo__lista">
                <div className="menu-administrativo__cabecalho">
                  <span className="menu-administrativo__icone-do-usuario">
                    <i className="fa fa-user"></i>
                  </span>
                  Administrador
                </div>
                <ul className="menu-administrativo__lista-de-itens">
                  <li className="menu-administrativo__item">
                    <a href="#" className="menu-administrativo__botao-item">
                      <i className="fa fa-exchange menu-administrativo__icone" aria-hidden="true"></i>
                      Trocar senha
                    </a>
                  </li>
                  <li className="menu-administrativo__item">
                    <a href="#" className="menu-administrativo__botao-item">
                      <i className="fa fa-sign-out menu-administrativo__icone"></i>
                      Sair
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <nav className="menu-lateral menu-lateral_fixo menu-lateral_minimizado">
        <ul className="menu-lateral__lista">
          <li className="menu-lateral__item">
            <a className="menu-lateral__link" href="#">
              <i className="fa fa-user menu-lateral__icone" aria-hidden="true"></i>
              <span className="menu-lateral__texto">Usuário</span>
            </a>
          </li>
        </ul>
      </nav>
      <main className="pagina__conteudo-container pagina__conteudo-container_maximizado">
        <section className="container container_com-fundo container_com-margem">
          <Dialogo 
            tamanho='mini'
            deveSerExibido={this.state.deveExibirDialogo} 
            fecharDialogo={() => this.fecharDialogo() } 
            acaoPrincipal={() => this.acaoPrincipal() } 
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
            habilitado={false}
            icone='fa fa-bookmark'/>
          <form className="formulario">
            <label htmlFor="nome-do-usuario">Nome do usuário</label>
            <input id="nome-do-usuario" type="text"/>
            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password"/>
          </form>
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
      </main>
    </div>
    );
  }
}

export default App;
