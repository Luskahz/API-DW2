export default function updateTypePropertyController(req, res){
    const property =req.body
    const id = req.params
    
    
    return res.json({
        mensage: "Imovel parcialmente atualizado com sucesso",
        property: (property, parseInt(id))
        
    })
}