const models = require("../models/models.js");

const mostrarCategoriesProducts = async (_req, res) => {
    const categoria = await models.mostrarCategoriesProducts();
    return res.status(200).json(categoria);
};

const mostraPedido = async (_req, res) => {
    const pedidos = await models.mostrarPedidos();
    return res.status(200).json(pedidos);
};

const criarPedido = async (req, res) => {
    try {
        
        const resultadoPedido = await models.criarPedido(req.body);

        
        return res.status(201).json({ pedido: resultadoPedido });
    } catch (error) {
        
        console.error('Erro ao criar pedido:', error);
        return res.status(500).json({ error: 'Erro ao criar pedido' });
    }
};

const excluirPedido = async (req,res) => {
    
    const { code } = req.params

    await models.deletePedido(code)
  
    return res.status(204).json()

}

const excluirPedidoNome = async (req,res) => {
    
    const { name } = req.params

    await models.deletePedidoName(name)
  
    return res.status(204).json()

}


module.exports = {
    mostrarCategoriesProducts,
    mostraPedido,
    criarPedido,
    excluirPedido,
    excluirPedidoNome
};
