import { remove } from "../../models/propertyModel.js"


export default async function deletePropertyController(req, res){
    const {id} = req.params

    const result = await remove(parseInt(+id))

    return res.json({
        mensage: `Imovel ${id} deletado com sucesso`,
        property: result
        
    })
}