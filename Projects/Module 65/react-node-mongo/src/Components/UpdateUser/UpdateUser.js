import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUsers] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;

        const updateUser = { name, email };

        //send to the server

        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT', // or 'POST'
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('user added successfully..!');
                event.target.reset()
            })
    }
    return (
        <div>
            <h2>Updating user: {id}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' placeholder='Enter name' required />
                <br />
                <input type="email" name='email' placeholder='Enter email' required />
                <br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};

export default UpdateUser;