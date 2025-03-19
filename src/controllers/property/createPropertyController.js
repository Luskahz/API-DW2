import { create } from "../../models/propertymodel"

export async function createPropertyController(req, res){
const property = req.body
//TUDO validar 
const result = await create(property)



    return res.json({
        mensage: "Imovel cadastrado com sucesso",
        property: result
    })
}