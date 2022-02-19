import React, { useState } from 'react';
import axios from 'axios';

const projectId = '8723fcd7-4277-4839-9506-93bd7c444416';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': projectId, 'User-Name': username, 'User-Secret': password };
        
        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            window.location.reload();
            setError('');
        } catch(err) {
            setError('Oops, incorrect credentials');
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={ (e) => setUsername(e.target.value) } className='input' placeholder='username' required />
                    <input type='text' value={password} onChange={ (e) => setPassword(e.target.value) } className='input' placeholder='password' required />
                    <div align='center'>
                        <button className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
}

export default LoginForm;