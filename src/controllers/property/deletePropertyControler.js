export default function deletePropertyController(req, res){
    const {id} = req.params
    
    
    
    return res.json({
        mensage: `Imovel ${id} deletado com sucesso`,
        property: parseInt(id)
        
    })
}