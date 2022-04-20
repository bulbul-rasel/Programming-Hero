import React from 'react';

const AddUsers = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        //send to the server

        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(user),
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
            <h2>This is add user</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Enter name' required />
                <br />
                <input type="email" name='email' placeholder='Enter email' required />
                <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default AddUsers;