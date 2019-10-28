class NotificadorDeMensagemFlutuante {
  constructor() {
    this.dataCriacao = new Date();

    this.valor = Math.random();
    console.log(`Criou o NotificadorDeMensagemFlutuante em ${this.dataCriacao} com valor ${this.valor}`);
  }

  mostrarId = () => {
    console.log(this.valor);
  }
}

export default new NotificadorDeMensagemFlutuante();