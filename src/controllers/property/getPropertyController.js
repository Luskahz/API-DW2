export default function getPropertyController(req, res){
    const id = req.params
    return res.json({
        property: parseInt(id)
        
    })
}