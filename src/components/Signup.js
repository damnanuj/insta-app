





import React,{useState} from "react";
import axios from "axios";


const Signup = ({setToken})=>{
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState({name:"", email:"", password:"", confirmPassword:""})
    const [message, setMessage] = useState("");
    function updateUser(e){
        console.log("key", e.target.name);
        console.log("value", e.target.value);
        let key = e.target.name;
        setUser({...user, [key]:e.target.value}) //copying al the values as it is only updating targeted key  2:50
    }

    async function implementSignup(e){
        e.preventDefault();
        //checking if any field is empty or not
        if(! user.name || !user.email || !user.password || !user.confirmPassword ){
            setMessage("Please fill all the fields")
            return;
        }
        //checking if password matches
        if(user.password !== user.confirmPassword){
            setMessage("Password & Confirm Password do not match")
        }
        try {
            const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
            name:user.name,
            email:user.email,
            password:user.password,
        })
        console.log(response.data.message)
        setMessage(response.data.message)
        console.log(response.data.data.token)
        setToken("token", response.data.data.token)
        setUser({name:"", email:"", password:"", confirmPassword:""}) //make fields empty after successful
        
    } 
    catch (error) {
        console.log(error.response.data.message )
        setMessage(error.response.data.message)
    }
        
    }


    return (
        <div>
            <h1>Signup if you are new user</h1>
            {
                message && <h2>{message}</h2>
            }
            <form onSubmit={implementSignup}>
                <input type="text" placeholder="Name" name="name"
                onChange={updateUser} value={user.name}
                />
                <br/>
                <input type="email" placeholder="Email" name="email"
                 onChange={updateUser} value={user.email}
                 /> 
                <br/>
                <input type="password" placeholder="Password" name="password"
                 onChange={updateUser} value={user.password}
                 />
                <br/>
                <input type="password" placeholder="Confirm Password" name="confirmPassword"
                 onChange={updateUser} value={user.confirmPassword}
                 />
                <br/>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;