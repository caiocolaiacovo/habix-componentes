import React, { Component } from 'react';

class Dialogo extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.deveSerExibido && this.props.deveSerExibido) {
      this.setState({ultimoElementoComFoco: document.activeElement});
      return;
    }

    if (prevProps.deveSerExibido && !this.props.deveSerExibido) {
      this.state.ultimoElementoComFoco.focus();
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.deveSerExibido)
      document.body.style.overflowY = 'hidden';
    else
      document.body.style.overflowY = '';
  }

  render() {
    const { corpo: Corpo, rodape: Rodape } = this.props;
    
    return (
      <div className={`dialogo dialogo_medio ${this.props.deveSerExibido ? "dialogo_ativo" : ""}`}>
        <div className="dialogo__container">

          {/* todosElementosDoDialogo[1] */}
          <div className="dialogo__cabecalho">
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
        {/* WTF?? Remover ao fechar */}
        <span tabindex="0"></span>
      </div>
    );
  }
}

export default Dialogo;