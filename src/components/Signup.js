





import React,{useState} from "react";
import axios from "axios";


const Signup = ()=>{
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const [user, setUser] = useState({name:"",email:"",password:"",confirmPassword:""})

    function updateUser(e){
        console.log("key", e.target.name);
        console.log("value", e.target.value);
        let key = e.target.name;
        setUser({...user, [key]:e.target.value}) //copying al the values as it is only updating targeted key  2:50
    }

    async function implementSignup(e){
        e.preventDefault();
        try {
            const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
            name:user.name,
            email:user.email,
            password:user.password,
        })
        console.log(response.data)
        } 
        catch (error) {
            console.log(error )
        }
        
    }


    return (
        <div>
            <h1>Signup to continue</h1>

            <form onSubmit={implementSignup}>
                <input type="text" placeholder="Name" name="name"
                onChange={updateUser}/>
                <br/>
                <input type="email" placeholder="Email" name="email"
                 onChange={updateUser}/> 
                <br/>
                <input type="password" placeholder="Password" name="password"
                 onChange={updateUser}/>
                <br/>
                <input type="password" placeholder="Confirm Password" name="confirmPassword"
                 onChange={updateUser}/>
                <br/>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;