export default function getPropertyController(req, res){
    const id = req.body
    return res.json({
        property: id
        
    })
}