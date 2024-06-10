import React from 'react'
import { useState } from 'react'
import styles from './Picture.module.scss'
import { OpenPicture } from '../openPicture/OpenPicture'
import { observer } from 'mobx-react-lite'
export const Picture = observer(({piclink, piclinkfull}:Props) => {
    let [openPic, setOpenPic] = useState(null);
    const openPicture = (e:any) => {
        setOpenPic(e.target.src)
    }
    const closePicture = () => {
        setOpenPic(null);
    }
    return (
        <React.Fragment>
        <div className={styles.picture} onClick={(e) => openPicture(e)}>
           <img src={piclink} alt='#' decoding='async' loading='lazy'/>
        </div>
        {openPic ? <OpenPicture href={piclinkfull} closeWindow={closePicture.bind(this)}/> : null}
        </React.Fragment>
    )
})

type Props = {
    piclink: string,
    piclinkfull: string
}