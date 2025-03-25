import { createProperty } from "../../models/propertyModel"

export async function createPropertyController(req, res){
const property = req.body
//TUDO validar 
const result = await createProperty(property)



    return res.json({
        mensage: "Imovel cadastrado com sucesso",
        property: result
    })
}