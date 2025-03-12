export default function updatePropertyController(req, res){
    const property = req.body
    const id = req.params
    
    return res.json({
        mensage: "Imovel atualizado com sucesso",
        property: (property, parseInt(id))
        
    })
}