





import React,{useState} from "react";
import axios from "axios";


const Login = ({setToken})=>{
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState({email:"", password:""})
    const [message, setMessage] = useState("");
    function updateUser(e){
        console.log("key", e.target.name);
        console.log("value", e.target.value);
        let key = e.target.name;
        setUser({...user, [key]:e.target.value}) //copying al the values as it is only updating targeted key  2:50
    }

    async function implementLogin(e){
        e.preventDefault();
        if(!user.email || !user.password){
            setMessage("Please fill all the fields")
            return;
        }
        try {
            const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login",{
            email:user.email,
            password:user.password,
        })
        console.log(response.data.message)
        setMessage(response.data.message)
        console.log(response.data.data.token)
        setToken(response.data.data.token)
        setUser({email:"", password:""}) //make fields empty after successful
    } 
    catch (error) {
        console.log(error.response.data.message )
        setMessage(error.response.data.message)
    }
    }
    return (
        <div>
            <h1>Login to continue</h1>
            {
                message && <h2>{message}</h2>
            }
            <form onSubmit={implementLogin}> 
                <input type="email" placeholder="Email" name="email"
                 onChange={updateUser} value={user.email}
                 /> 
                <br/>
                <input type="password" placeholder="Password" name="password"
                 onChange={updateUser} value={user.password}
                 />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;