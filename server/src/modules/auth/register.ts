export const register = async (req: any, res: any) => {
    const { username, email, password } = req.body;
    console.log(username, email, password)

    try{
        const user = await req.db.collection('users').insertOne({ username, email, password })
        res.send(user)
    } catch(erro) {
        console.log(erro)
    }

}