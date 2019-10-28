import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import teste from './CriadorDeMensagemFlutuante';

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
      this.setState({deveSerExibido: false});
    }, 7000)
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

class MensagensFlutuantes extends Component { 
  constructor(props) {
    super(props);

    criador.registrar({add: this.exibirUmaNotificacao.bind(this)});

    this.state = {
      notificacoes: []
    };
  }

  exibirUmaNotificacao(props) {
    this.setState({notificacoes: [{...props}]});
  }

  render(){
    return (
      <ul className="mensagens-flutuantes">
        {this.state.notificacoes.map(notificacao => <MensagemFlutuante/>)}
      </ul>
    );
  }
}

class CriadorDeMensagemFlutuante {
  constructor() {
    this.notificacoes = [];
    this.add = () => {};

    console.log('criou');
  }

  exibirUmaNotificacao({texto, titulo}) {
    this.add();
  }

  registrar({add}) {
    console.log('registrou');
    this.add = add;
  }
}

MensagensFlutuantes.propTypes = {
};

const criador = new CriadorDeMensagemFlutuante();

export { 
  MensagensFlutuantes as default,
  criador as CriadorDeMensagemFlutuante
};