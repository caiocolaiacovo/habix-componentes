import React, { Component } from 'react';

class Dialogo extends Component {
  constructor(props) {
    super(props);

    document.body.style.overflowY = 'hidden';
  }
  
  render() {
    return (
      <div className={`dialogo dialogo_medio ${this.props.deveExibir ? "dialogo_ativo" : ""}`}>
        <div className="dialogo__container">
          <div className="dialogo__cabecalho">
            <h2 className="dialogo__titulo">Titulo do diálogo</h2>
            <p className="dialogo__subtitulo">Descrição do título</p>
          </div>

          <div className="dialogo__corpo">
            Componente do diálogo para React, seguindo os padrões do DigixUI
          </div>

          <div className="dialogo__rodape">
            <button className="botao botao_cor-info" type="button">Salvar</button>
            <button className="botao botao_cor-cinza botao_contorno" onClick={this.props.fecharModal} type="submit">Cancelar</button>
          </div>
          <button className="dialogo__botao-fechar" type="button" aria-label="Fechar diálogo" onClick={this.props.fecharModal}>
            <i className="fa fa-times" aria-label="hidden"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Dialogo;