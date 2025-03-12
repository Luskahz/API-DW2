export default function createUserController(req, res){
    return res.json({
        mensage: "Usuario Cadastrado com sucesso!",
        user: {
            name: "Lucas Alves",
            Email: "LucasAlves@gmail.com",
            Avatar: "http://github.com/Luskahz.png"
        }
            
    })
}