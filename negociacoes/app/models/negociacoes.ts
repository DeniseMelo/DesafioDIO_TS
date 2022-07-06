import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    
    private negociacoes:Array <Negociacao>= [];
  
  
    adicionaEmNegociacoes(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }
    
    listaDeNegociacoes():ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }

    
}

