import React, { Component} from 'react';

class MensagemFlutuante extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      deveSerExibido: false
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.deveSerExibido && this.props.deveSerExibido) {
      this.setState({deveSerExibido: true});

      setTimeout(() => {
        this.setState({deveSerExibido: false});
      }, 7000)
    }
  }

  render(){
    const { titulo, texto } = this.props;
    const { deveSerExibido } = this.state;

    return (
      <ul className="mensagens-flutuantes">
        <li className={`mensagem mensagem_flutuante ${ deveSerExibido ? 'mensagem_ativa' : 'mensagem_inativa'} mensagem_cor-info`} role="alert" tabIndex="0">
          <div className="mensagem__container-icone">
            <i className="fa fa-info-circle mensagem__icone" aria-hidden="true"></i>
          </div>
          <div className="mensagem__conteudo">
            <h2 className="mensagem__titulo">{titulo}</h2>
            <p className="mensagem__texto">{texto}</p>
          </div><button className="mensagem__botao-fechar">
            <i className="fa fa-times mensagem__icone-botao" aria-hidden="true"></i>
            </button>
        </li>
      </ul>
    );
  }
}

export default MensagemFlutuante;