import React, { Component } from 'react';

class Dialogo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deveExibir: props.deveExibir
    };
  }

  render() {
    return (
      <div class="dialogo dialogo_medio">
        <div class="dialogo__container">
          <div class="dialogo__cabecalho">
            <h2 class="dialogo__titulo">Titulo do diálogo</h2>
            <p class="dialogo__subtitulo">Descrição do título</p>
          </div>

          <div class="dialogo__corpo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sagittis diam. Duis sed mi vel erat commodo euismod. 
            Nunc blandit blandit purus rhoncus tempor. Donec tincidunt tempus massa, sed vulputate eros semper eget. 
            Duis sit amet lorem ac nisl bibendum sodales. Etiam efficitur feugiat elit dictum efficitur. 
            Donec eget lectus pharetra, viverra neque id, laoreet felis. Nunc finibus ante non nisl sodales congue.
          </div>

          <div class="dialogo__rodape">
            Teste
          </div>
          <button class="dialogo__botao-fechar" type="button" onclick="fecharDialogo()" aria-label="Fechar diálogo">
            <i class="fa fa-times" aria-label="hidden"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Dialogo;