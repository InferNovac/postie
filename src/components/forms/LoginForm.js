import React, { useState } from 'react';
import { Input, Button } from '../ui/UserInterface';
import { handleChange, collect } from '../auxilary/Constant';

const handleOnSubmit = (event) => {
    event.preventDefault();
    const { email } = collect(event.target.elements);
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

const Sumbit = () => (
    <div className='row'>
        <div className='col'>
            <Button disabled={false} type='sumbit' title='Sumbit'>
                Sumbit
            </Button>
        </div>
    </div>
);

const LoginForm = () => (
    <form method='POST' onSubmit={handleOnSubmit} className='form'>
        <Email />
        <Sumbit />
    </form>
);

export default LoginForm;
