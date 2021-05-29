import React, { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

function Usuario() {

    const [user,setUser] = useState<User>()

    const login = () =>{
        setUser({
            uid: 'ABC123',
            name: 'Emiliano Meneses'
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>

            <button onClick={login} className='btn btn-outline-primary'> Login </button>

            <pre className='text-white'>{JSON.stringify(user)}</pre>
        </div>
    );
}

export default Usuario;