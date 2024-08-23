const { Router } = require("express");
const controll = require("./controll/controll");

const router = Router();


router.get("/categories/foods", controll.mostrarCategoriesProducts);

router.get("/orders", controll.mostraPedido);
router.post("/orders", controll.criarPedido);
router.delete("/orders/:code", controll.excluirPedido)
router.delete("orders/:name", controll.excluirPedidoNome)

module.exports = router;
