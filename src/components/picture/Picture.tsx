import React, { memo } from 'react'
import { useState } from 'react'
import styles from './Picture.module.scss'
import { OpenPicture } from '../openPicture/OpenPicture'

const Picture = ({picLink, picLinkfull, alt_description}:Props) => {
    let [openPic, setOpenPic] = useState(null);
    const openPicture = (e:any) => {
        setOpenPic(e.target.src)
    }
    const closePicture = () => {
        setOpenPic(null);
    }

    return (
        <React.Fragment>
        <li className={styles.picture} onClick={(e) => openPicture(e)}>
            {picLink ? 
            <img src={picLink} alt={alt_description} className={styles.img} decoding='async' loading='lazy'/> :
            <div className={styles.img}></div>}
        </li>
        {openPic ? <OpenPicture href={picLinkfull} closeWindow={closePicture.bind(this)} alt_description={alt_description} /> : null}
        </React.Fragment>
    )
}

type Props = {
    picLink: string,
    picLinkfull: string,
    alt_description: string,
}

export default memo( Picture );