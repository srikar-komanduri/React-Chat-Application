import axios from 'axios';
import React,{useState} from 'react';

const LoginForm = ()=>{
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');   
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const authObject = {'Project-ID':'da9bebfc-f78b-4955-96a5-bfd5ad4b51d9','User-Name':userName,'User-Secret':password};
        try{
            await axios.get("https://api.chatengine.io/chats",{headers:authObject})

            localStorage.setItem('userName',userName);
            localStorage.setItem('password',password);

            window.location.reload();
        }
        catch(error){
            setError("Incorrect Credentials entered");
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        value={userName} 
                        onChange={(e)=>setUserName(e.target.value)} 
                        placeholder="Username"
                        required
                        className="input"
                    />
                    
                    <input 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        placeholder="Password"
                        required
                        type="password"
                        className="input"
                    />
                    <div align="center">
                        <button className="button" type="submit">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error" style={{color:'white'}}>{error}</h2>
                </form>
            </div>
        </div>
    )

}

export default LoginForm