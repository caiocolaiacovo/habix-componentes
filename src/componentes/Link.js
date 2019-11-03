import React from 'react';
import PropTypes from 'prop-types';

const Link = ({href, cor = 'info', tamanho = 'medio', children}) => {
  return (
    <a href={href} className={`link link_cor-${cor} link_${tamanho}`}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  cor: PropTypes.string,
  tamanho: PropTypes.string,
  children: PropTypes.any
};

const LinkComIcone = ({icone, posicaoDoIcone, children, ...props}) => {
  let conteudo;
  const elementoDoIcone = <i className={`fa far ${icone}`} aria-hidden='true'></i>;
  
  if (posicaoDoIcone === 'esquerda')
    conteudo = (
      <>
        {elementoDoIcone}
        {children}
      </>
    );

  if (posicaoDoIcone === 'direita')
    conteudo = (
      <>
        {children}
        {elementoDoIcone}
      </>
    );

  return (
    <Link {...props}>{conteudo}</Link>
  );
}

LinkComIcone.propTypes = {
  icone: PropTypes.string.isRequired,
  posicaoDoIcone: PropTypes.string.isRequired
};

export {
  Link,
  LinkComIcone
}