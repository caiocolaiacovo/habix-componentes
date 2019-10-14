import React from 'react';

const BotaoBase = ({visual, tamanho, cor, habilitado = true, classesAuxiliares, tipo = 'submit', onClick, children}) => {
  const obterCor = (cor) => {
    if (!cor)
      return 'info';

    return cor === 'branco' ? 'primaria botao_invertido' : cor;
  };

  const estilo = [
    'botao',
    !!visual ? `botao_${visual}` : '',
    `botao_${tamanho || 'medio'}`,
    `botao_cor-${obterCor(cor)}`,
    classesAuxiliares
  ];

  return (
    <button className={estilo.join(' ')} disabled={!habilitado} type={tipo} onClick={onClick}>
      {children}
    </button>
  );
}

const BotaoComTexto = ({visual, tamanho, cor, habilitado = true, tipo, onClick, children}) => {
  return (
    <BotaoBase
      visual={visual}
      tamanho={tamanho}
      cor={cor}
      habilitado={habilitado}
      tipo={tipo}
      onClick={onClick}>
      {children}
    </BotaoBase>
  )
}

const BotaoComTextoEIcone = ({visual, tamanho, cor, habilitado = true, tipo, posicao, icone, onClick, children}) => {
  let conteudo;
  const classeDoIcone = `botao_com-icone-para-${posicao}`;
  
  if (posicao === 'esquerda') {
    conteudo = <><i className={icone} aria-hidden='true'></i> {children}</>;
  }
  if (posicao === 'direita') {
    conteudo = <>{children} <i className={icone} aria-hidden='true'></i></>;
  }
  
  return (
    <BotaoBase
      visual={visual}
      tamanho={tamanho}
      cor={cor}
      habilitado={habilitado}
      tipo={tipo}
      onClick={onClick}
      classesAuxiliares={classeDoIcone}>
      {conteudo}
    </BotaoBase>
  );
}

const BotaoComIcone = ({visual, tamanho, cor, habilitado = true, tipo, onClick, icone}) => {
  return (
    <BotaoBase
      visual={visual}
      tamanho={tamanho}
      cor={cor}
      habilitado={habilitado}
      tipo={tipo}
      onClick={onClick}
      classesAuxiliares='botao_icone'>
      {<i className={icone} aria-hidden='true'></i>}
    </BotaoBase>
  );
}

export {
  BotaoComTexto,
  BotaoComTextoEIcone,
  BotaoComIcone
};