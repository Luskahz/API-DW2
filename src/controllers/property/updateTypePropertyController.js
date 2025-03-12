export default function updateTypePropertyController(req, res){
    return res.json({
        mensage: "Imovel parcialmente atualizado com sucesso",
        property: {
        id: 1,
        tipo: "Aluguel",
        }
        
    })
}