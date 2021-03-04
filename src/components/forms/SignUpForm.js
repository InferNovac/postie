import React, { useState } from 'react';
import { Input, Select, Button } from '../ui/UserInterface';
import { collect, hashAndPack, handleChange } from '../auxilary/Constant';
import { sendSignInLinkToEmail } from '../server/ContactServer';

const handleOnSubmit = (event) => {
    event.preventDefault();
    const user = collect(event.target.elements);
    const { email } = user;

    sendSignInLinkToEmail(email)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
};

const Email = () => {
    const [email, setEmail] = useState('');
    return (
        <div className='col'>
            <Input
                type='email'
                name='email'
                label='Email'
                value={email}
                placeholder='Enter Email'
                handleChange={(event) => handleChange(event, setEmail)}
            />
        </div>
    );
};

const UserName = () => {
    const [userName, setUserName] = useState('');
    return (
        <div className='col'>
            <Input
                type='text'
                name='userName'
                label='Username'
                value={userName}
                placeholder='Enter Username'
                handleChange={(event) => handleChange(event, setUserName)}
            />
        </div>
    );
};

const Sumbit = () => (
    <div className='col'>
        <Button disabled={false} type='sumbit' title='Sumbit'>
            Sumbit
        </Button>
    </div>
);

const SignUpForm = () => (
    <form method='POST' onSubmit={handleOnSubmit} className='form'>
        <div className='row'>
            <Email />
        </div>
        <div className='row'>
            <UserName />
        </div>
        <div className='row'>
            <Sumbit />
        </div>
    </form>
);

export default SignUpForm;
