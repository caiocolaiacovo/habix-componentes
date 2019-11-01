import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MensagemFlutuante extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deveSerExibido: false,
      timeOut: 0,
    };
  }

  componentDidMount() {
    const timeOut = setTimeout(() => {
      this.fechar();
    }, 7000);

    this.setState({deveSerExibido: true, timeOut});
  }

  fechar() {
    clearTimeout(this.state.timeOut);

    this.setState({deveSerExibido: false});
    this.destruir();
  }

  destruir() {
    setTimeout(() => {
      this.props.callback(this.props.id);
    }, 400)
  }

  render() {
    const { texto, titulo, tipo } = this.props;
    const { deveSerExibido } = this.state;

    return (
      <li className={`mensagem mensagem_flutuante ${ deveSerExibido ? 'mensagem_ativa' : 'mensagem_inativa'} mensagem_cor-${tipo}`} role="alert" tabIndex="0">
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
      mensagens: []
    };
  }

  criarMensagem({texto, titulo, tempoDeExibicao, tipo}) {
    const mensagens = [...this.state.mensagens];
    const id = Date.now();
    
    mensagens.push({texto, titulo, tempoDeExibicao, tipo, id})

    this.setState({mensagens});
  }

  removerElemento(id) {
    const mensagens = this.state.mensagens.filter(notificacao => notificacao.id !== id);
    this.setState({mensagens});
  }

  render(){
    return (
      <ul className="mensagens-flutuantes">
        {this.state.mensagens.map(notificacao => 
          <MensagemFlutuante key={notificacao.id} callback={this.removerElemento.bind(this)} {...notificacao} />
        )}
      </ul>
    );
  }
}

class GerenciadorDeMensagem {
  constructor() {
    this.container = {};
    this.tempoDeExibicao = 7000;
  }

  registrarContainer(container) {
    this.container = container;
  }

  criarMensagemDeInfo(mensagem) {
    this.container.criarMensagem({
      ...mensagem, 
      tempoDeExibicao: this.tempoDeExibicao,
      tipo: 'info'
    });
  }

  criarMensagemDeSucesso(mensagem) {
    this.container.criarMensagem({
      ...mensagem, 
      tempoDeExibicao: this.tempoDeExibicao,
      tipo: 'sucesso'
    });
  }

  criarMensagemDeErro(mensagem) {
    this.container.criarMensagem({
      ...mensagem, 
      tempoDeExibicao: this.tempoDeExibicao,
      tipo: 'erro'
    });
  }

  criarMensagemDeAtencao(mensagem) {
    this.container.criarMensagem({
      ...mensagem, 
      tempoDeExibicao: this.tempoDeExibicao,
      tipo: 'atencao'
    });
  }
}

ContainerDeMensagensFlutuantes.propTypes = {
};

const gerenciadorDeMensagem = new GerenciadorDeMensagem();

export { 
  ContainerDeMensagensFlutuantes as default,
  gerenciadorDeMensagem as GerenciadorDeMensagem
};