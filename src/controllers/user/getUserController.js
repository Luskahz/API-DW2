export default function getUserController(req, res) {
    const {id} = req.params
    
    
    
    
    return res.json({
        id: parseInt(id), 
        name: "Lucas Alves",
        Email: "LucasAlves@gmail.com",
        Avatar: "http://github.com/Luskahz.png"
    })
}