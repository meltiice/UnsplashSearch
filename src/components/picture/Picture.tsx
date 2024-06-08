import React from 'react'
import { useState } from 'react'
import picture from './sample.png'
import styles from './Picture.module.scss'
import { OpenPicture } from '../openPicture/OpenPicture'
export const Picture = () => {
    let [openPic, setOpenPic] = useState(null);
    const openPicture = (e:any) => {
        console.log(1)
        setOpenPic(e.target.src)
    }
    const closePicture = () => {
        console.log(2);
        setOpenPic(null);
    }
    return (
        <React.Fragment>
        <div className={styles.picture} onClick={(e) => openPicture(e)}>
            <img src={picture} alt='#'/>
        </div>
        {openPic ? <OpenPicture href={openPic} closeWindow={closePicture.bind(this)}/> : null}
        </React.Fragment>
    )
}