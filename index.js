import express, { json } from "express";
import { userRouter } from "./routes/user";

const port = 8080;

const app = express();

app.use(json())

app.use("/user", userRouter)



// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/user', (req,res) => {
//     const {username, password } = req.body
//     if(username.length < 5){
//         res.status(400).send({
//             success: false,
//             message: "Username must be contain 5 or more letters!"
//         }).end();
//     }
//     if(password.length <= 8){
//         res.send({
//             success: false,
//             message: "Password must contain 8 or more characters"
//         }).end();
//     }
//     res.send("success: true")
// })



app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}/`)
})