export default function(req, res){
const property = req.body

//TUDO validar e inserir no BD

    return res.json({
        mensage: "Imovel cadastrado com sucesso",
        property: property
    })
}