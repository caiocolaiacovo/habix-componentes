import React, { Component } from 'react';

class Dialogo extends Component {
  constructor(props) {
    super(props);

    this.refContainerDoDialogo = React.createRef();
    this.refCabecalhoDoDialogo = React.createRef();

    this.state = {
      ultimoEventoDisparado: {}
    };
  }

  ouvinteDeEventos = (evento) => {
    if(evento.keyCode === 27)
      this.props.fecharDialogo();

    this.setState({ultimoEventoDisparado: evento});
  }

  manterOFocoNoDialogo() {
    const evento = this.state.ultimoEventoDisparado;
    const estaVoltandoOFoco = evento.shiftKey && evento.keyCode === 9;

    if (estaVoltandoOFoco)
      this.refCabecalhoDoDialogo.current.focus();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.deveSerExibido && this.props.deveSerExibido) {
      this.setState({ultimoElementoComFoco: document.activeElement});
      this.refCabecalhoDoDialogo.current.focus();
      document.body.style.overflowY = 'hidden';
      document.addEventListener('keydown', this.ouvinteDeEventos);
      return;
    }

    if (prevProps.deveSerExibido && !this.props.deveSerExibido) {
      this.state.ultimoElementoComFoco.focus();
      document.body.style.overflowY = 'auto';
      document.removeEventListener('keydown', this.ouvinteDeEventos);
    }
  }
  
  render() {
    const { corpo: Corpo, rodape: Rodape } = this.props;
    const atributosDoCabecalho = this.props.deveSerExibido ? { tabIndex: 0 } : {};

    return (
      <div className={`dialogo dialogo_medio ${this.props.deveSerExibido ? "dialogo_ativo" : ""}`}>
        <div className="dialogo__container" ref={this.refContainerDoDialogo} {...atributosDoCabecalho} onFocus={() => this.manterOFocoNoDialogo()}>
          <div className="dialogo__cabecalho" ref={this.refCabecalhoDoDialogo} {...atributosDoCabecalho}>
            <h2 className="dialogo__titulo">Titulo do diálogo</h2>
            <p className="dialogo__subtitulo">Descrição do título</p>
          </div>
          <div className="dialogo__corpo">
            <Corpo></Corpo>
          </div>
          <div className="dialogo__rodape">
            <Rodape></Rodape>
          </div>
          <button className="dialogo__botao-fechar" type="button" aria-label="Fechar diálogo" onClick={this.props.fecharDialogo}>
            <i className="fa fa-times" aria-label="hidden"></i>
          </button>
        </div>
        {this.props.deveSerExibido && <span tabIndex="0" onFocus={() => this.refCabecalhoDoDialogo.current.focus()}></span>}
      </div>
    );
  }
}

export default Dialogo;