export default function updatePropertyController(req, res){
    const property = req.body
    const id = req.body
    
    return res.json({
        mensage: "Imovel atualizado com sucesso",
        property: (id, property)
        
    })
}