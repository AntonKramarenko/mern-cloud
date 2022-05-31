import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupDisplay } from '../../reducers/fileReducer'
import Inputs from '../../utils/inputs/Inputs'
import { createDir } from '../../actions/file'

export default function Popup() {
    const[dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function createHendler(){
         dispatch(createDir(currentDir, dirName))
         dispatch(setPopupDisplay('none'))
         setDirName('')
    }


  return (
    <div className='popup' onClick={() => dispatch(setPopupDisplay('none'))} style={{display:popupDisplay}}>
        <div className="popup__content" onClick={(event) => event.stopPropagation()}>
            <div className="popup__header">
                <div className="popup__title">Создать новую папку</div>
                <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>Х</button>
            </div>
            <Inputs type='text' placeholder='Ведите название папки...' value={dirName} setValue={setDirName}/>
            <button className="popup__create" onClick={() => createHendler()} >Создать</button>
        </div>
    </div>
  )
}
