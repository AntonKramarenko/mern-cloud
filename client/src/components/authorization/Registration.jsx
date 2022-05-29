import React, { useState } from 'react'
import Inputs from '../../utils/inputs/Inputs'
import './authorization.scss'

import { registration } from '../../actions/user'


export default function Registration() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='authorization'>
        <div className="authorization__header">Регистрация</div>
        <Inputs value={email} setValue={setEmail} type='email' placeholder='Введите email...'/>
        <Inputs value={password} setValue={setPassword}  type="password" placeholder='Введите password...'/>
        <button className="authorization__btn" onClick={() => registration(email, password)} >Зарегистрироваться</button>

    </div>
  )
}
