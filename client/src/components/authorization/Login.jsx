import React, { useState } from 'react'
import Inputs from '../../utils/inputs/Inputs'
import './authorization.scss'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/user'


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

  return (
    <div className='authorization'>
        <div className="authorization__header">Авторизация</div>
        <Inputs value={email} setValue={setEmail} type='email' placeholder='Введите email...'/>
        <Inputs value={password} setValue={setPassword}  type="password" placeholder='Введите password...'/>
        <button className="authorization__btn" onClick={() => dispatch(login(email, password)) } >Войти</button>

    </div>
  )
}
