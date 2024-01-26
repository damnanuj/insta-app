





import React,{useState} from "react";
import axios from "axios";


const Signup = ()=>{
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const [user, setUser] = useState({name:"",email:"",password:"",confirmPassword:""})

    function updateUser(e){
        setUser({...user, name:e.target.value}) //copying al the values as it is only updating name
    }

    return (
        <div>
            <h1>Signup to continue</h1>

            <form>
                <input type="text" placeholder="Name"
                onChange={updateUser}/>
                <br/>
                <input type="email" placeholder="Email"/>
                <br/>
                <input type="password" placeholder="Password"/>
                <br/>
                <input type="password" placeholder="Confirm Password"/>
                <br/>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;