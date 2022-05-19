const precos = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'doce de leite',
        preco: 12
    },
    {
        name: 'mamao',
        preco: 4,
    },
    {
        name: 'carne',
        preco: '30',
    },
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, precos){
    return precos.reduce(function(saldo, valor){       
        console.log({saldo});
        console.log({valor});
        return saldo - valor.preco;
    }, saldoDisponivel);
}

console.log(`saldo disponivel: ${calculaSaldo(saldoDisponivel, precos)} reais`);