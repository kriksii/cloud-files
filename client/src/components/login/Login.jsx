import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import './login.scss'

import Button from '../UI/button/Button'
import Input from '../UI/input/Input'

import { login } from '../../actions/user'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    


  return (
    <div className="login">
        <div className="login__header">
            Войти
        </div>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Введите email" />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
        <Button onClick={() => dispatch(login(email, password)) }>Войти</Button>
    </div>
  )
}

export default Login