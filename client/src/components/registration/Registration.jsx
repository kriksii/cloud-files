import React, {useState} from 'react'
import './registration.scss'

import Input from '../UI/input/Input'
import Button from '../UI/button/Button'

import { registration } from '../../actions/user'

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="registration">
        <div className="registration__header">
            Регистрация
        </div>
        <Input type="text" placeholder="Введите имя" />
        <Input type="text" placeholder="Введите фамилию" />
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Введите email" />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
        <Button onClick={() => registration(email, password)} >Войти</Button>
    </div>
  )
}

export default Registration