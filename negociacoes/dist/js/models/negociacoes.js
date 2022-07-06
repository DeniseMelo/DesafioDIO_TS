export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaEmNegociacoes(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listaDeNegociacoes() {
        return this.negociacoes;
    }
}
