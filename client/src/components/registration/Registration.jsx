import React, { useState } from 'react'
import Inputs from '../../utils/inputs/Inputs'
import './registration.scss'

import { registration } from '../../actions/user'


export default function Registration() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='registration'>
        <div className="registration__header">Регистрация</div>
        <Inputs value={email} setValue={setEmail} type='email' placeholder='Введите email...'/>
        <Inputs value={password} setValue={setPassword}  type="password" placeholder='Введите password...'/>
        <button className="registration__btn" onClick={() => registration(email, password)} >Войти</button>

    </div>
  )
}
