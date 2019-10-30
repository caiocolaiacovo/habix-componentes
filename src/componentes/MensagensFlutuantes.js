import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MensagemFlutuante extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deveSerExibido: false
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.deveSerExibido && this.props.deveSerExibido) {
  //     this.setState({deveSerExibido: true});

  //     setTimeout(() => {
  //       this.setState({deveSerExibido: false});
  //     }, 7000)
  //   }
  // }

  componentDidMount() {
    this.setState({deveSerExibido: true});

    setTimeout(() => {
      //this.setState({deveSerExibido: false});
      this.props.callback(this.props.id);
    }, 15000)
  }

  fechar() {
    this.setState({deveSerExibido: false});
  }

  render() {
    const { titulo, texto } = this.props;
    const { deveSerExibido } = this.state;

    return (
      <li className={`mensagem mensagem_flutuante ${ deveSerExibido ? 'mensagem_ativa' : 'mensagem_inativa'} mensagem_cor-info`} role="alert" tabIndex="0">
        <div className="mensagem__container-icone">
          <i className="fa fa-info-circle mensagem__icone" aria-hidden="true"></i>
        </div>
        <div className="mensagem__conteudo">
          <h2 className="mensagem__titulo">{titulo}</h2>
          <p className="mensagem__texto">{texto}</p>
        </div>
        <button className="mensagem__botao-fechar" onClick={() => this.fechar() }>
          <i className="fa fa-times mensagem__icone-botao" aria-hidden="true"></i>
        </button>
      </li>
    );
  }
}

class ContainerDeMensagensFlutuantes extends Component { 
  constructor(props) {
    super(props);

    gerenciadorDeMensagem.registrarContainer(this);

    this.state = {
      notificacoes: []
    };
  }

  criarMensagemDeSucesso(props) {
    const notificacoes = [...this.state.notificacoes];
    const id = Date.now();
    
    notificacoes.push({...props, id})

    this.setState({notificacoes});
  }

  removerElemento(id) {
    const notificacoes = this.state.notificacoes.filter(notificacao => notificacao.id !== id);
    this.setState({notificacoes});
  }

  render(){
    return (
      <ul className="mensagens-flutuantes">
        {this.state.notificacoes.map(notificacao => 
          <MensagemFlutuante key={notificacao.id} callback={this.removerElemento.bind(this)} {...notificacao} />
        )}
      </ul>
    );
  }
}

class GerenciadorDeMensagem {
  constructor() {
    this.container = {};
  }

  registrarContainer(container) {
    this.container = container;
  }

  criarMensagemDeSucesso({texto, titulo}) {
    this.container.criarMensagemDeSucesso({texto, titulo});
  }

  criar({add}) {
    console.log('registrou');
    this.add = add;
  }
}

ContainerDeMensagensFlutuantes.propTypes = {
};

const gerenciadorDeMensagem = new GerenciadorDeMensagem();

export { 
  ContainerDeMensagensFlutuantes as default,
  gerenciadorDeMensagem as GerenciadorDeMensagem
};