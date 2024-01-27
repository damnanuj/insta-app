



import React,{useState} from "react";
import axios from "axios";

const Dashboard = ({token})=>{

    const[joke, setJoke] = useState("")

   async function getJoke(){
        // axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
        //     headers:{
        //         authorization : `Bearer ${token}`
        //     }
        // })
        // .then(response =>{  
        //     console.log("joke", response.data.data.message);
        //     setJoke(response.data.data.message);
        // })
        // .catch(err =>{
        //     console.log(err.data.message)
        // })

        try {
           const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
            headers:{
                authorization : `Bearer ${token}`
            }
        })
            console.log(response.data.data.message)
            setJoke(response.data.data.message)
        } 
        catch (error) {
            console.log("error", error.data.message)
        }

        
    }





    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={getJoke}>Get Joke</button>
            {
                joke && <h2>{joke}</h2>
            }

        </div>
    )
}

export default Dashboard;