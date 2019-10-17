import React from 'react';
import PropTypes from 'prop-types';

const Mensagem = ({tipo = 'info', titulo, texto, icone = 'fa-info-circle'}) => {
  
  return (
    <div role="alert" className={`mensagem mensagem_cor-${tipo}`}>
      <div className="mensagem__container-icone">
        <i className={`fa mensagem__icone ${icone}`} aria-hidden="true"></i>
      </div>
      <div className="mensagem__conteudo">
        <h2 className="mensagem__titulo">{titulo}</h2>
        <p className="mensagem__texto">{texto}</p>
      </div>
    </div>
  );
};

Mensagem.propTypes = {
  tipo: PropTypes.string,
  titulo: PropTypes.string,
  texto: PropTypes.string,
  icone: PropTypes.string
};

export default Mensagem;