// Crie uma função que receba três preços de produtos por parametro. 
// Adicione os precos a um array, em seguide acesse o segundo item do array
// e aplique 10% de desconto em seu valor.
// Ao final exiba o array na tela. 
/*
function precos (preco1,preco2,preco3){
    let lista = [preco1,preco2,preco3];
    console.log(lista[1]);
    lista[1] = lista[1] * 1.10;
    console.log(lista)
    console.log(`A modificação com o desconto  ficou = ${lista[1]}`)
}

precos(10,9,13);
*/

///---------------------------------------------------------------------------------
/*

1. Considere o seguinte array = [10, 2, 3, 5, 7, 18, 21, 22, 26]. Escreva um algoritmo que percorra este array e ao final informe a quantidade de números pares dentro do array. 

let numeros = [10, 2, 3, 5, 7, 18, 21, 22, 26];
var contador = 0
for(let i = 0; i<numeros.length; i++ ){
    if( numeros[i]%2 == 0){
        console.log( numeros[i]);
        contador++
        
    }

}
console.log(`A quantidade de numeros pares são:${contador}`);
*/

//----------------------------------------------------------------------------------

// Crie uma função. Dentro da função leia 10 números. Se o número for par, adicione o número em um array e pares. Se o número for ímpar adicione-o em um array de ímpares

/*
function parOuImpar (){
    let par = []
    let impar = []

    for(let i = 0; i<10 ;i++ ){
        let numero = Number(prompt('Digite um numero:'));
        if (numero % 2 == 0){
            par.push(numero);
        }else{
            impar.push(numero);
        }
      
    }
    console.log(par);
    console.log(impar);
}

parOuImpar();
*/

//-----------------------------------------------------------------------------------

//Considere o seguinte array acima e utilize forEach para imprimir apenas os números dessa lista que estão entre 5 e 16
/*
const nums = [1, 23, 15, 7, 2, 8, 12, 11,14, 17];
var contador = 0
nums.forEach((item)=>{
     if( item >= 5 && item<16){
        console.log(item);
        contador++
    }
});
console.log(`A quantidade de numeros que estão nesse intervalo é: ${contador}`);
*/
//----------------------------------------------------------------------------------

//Escreva um algoritmo onde você solicita ao usuário o item que ele deseja excluir.
//Utilize a função include para verificar se o item existe. 
//Se ele existir, utilize a função indexof para pegar o seu indice
//E utilize a função splice para exclui-lo.

//Caso o item não exista, adicione-o a lista

let itens = ['Monitor', 'Teclado', 'Mouse', 'SSD'];

let excluir = prompt('Digite qual item voce deseja excluir:');

 if(itens.includes(excluir)){
    let indice = itens.indexOf(excluir);
    itens.splice(indice,1);
    console.log("Item deletado");
    console.log(itens);
 }else{
    console.log("Item não enocntrado");
    itens.push(excluir);
    console.log(itens)
 }