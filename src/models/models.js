const conection = require("./conection.js");

const mostrarCategoriesProducts = async () => {
    const categoriesFoods = await conection.execute('SELECT * FROM foods');
    return categoriesFoods[0];
};

const mostrarPedidos = async () => {
    const pedidos = await conection.execute('SELECT * FROM pedidos');
    return pedidos[0];
};

const criarPedido = async (pedido) => {
    // Função para gerar código de 5 dígitos do pedido
    function generateCode() {
        let code = '';
        for (let i = 0; i < 5; i++) {
            code += Math.floor(Math.random() * 10);
        }
        return code;
    }

    const { name, andress, CEP, food } = pedido;

    //Validaçoes
    if (!name || !andress || !CEP || !food) {
        throw new Error('Todos os campos (name, andress, CEP, food) são obrigatórios.');
    }

    const code = generateCode();

    const query = 'INSERT INTO pedidos (name, andress, CEP, food, code) VALUES (?, ?, ?, ?, ?)';

    
    try {
        const [result] = await conection.execute(query, [name, andress, CEP, food, code]);
        return { insertId: result.insertId };
    } catch (error) {
        console.error('Erro ao executar a query:', error);
        throw error;
    }
};

const deletePedido = async (code)=>{

    const query = 'DELETE FROM pedidos WHERE code = ?'

    const removeOrders = await conection.execute(query,[code])

    return removeOrders


}

const deletePedidoName = async (name)=>{

    const query = 'DELETE FROM pedidos WHERE name = ?'

    const removeOrders = await conection.execute(query,[name])

    return removeOrders


}

module.exports = {
    mostrarCategoriesProducts,
    mostrarPedidos,
    criarPedido,
    deletePedido,
    deletePedidoName
};
