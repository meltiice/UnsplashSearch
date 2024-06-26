import cross from './cross.svg'
import crossDesctop from './cross-desctop.svg'
import styles from './CloseButton.module.scss'

export const CloseButton = ({classname, clickFunc} : Props) => {
    return (<button onClick={clickFunc} className={styles[classname]}>
        <img src={(classname === "openWindow") ? crossDesctop : cross} alt='close button'/>
    </button>)
}

type Props = {
    classname: string,
    clickFunc: React.MouseEventHandler<HTMLButtonElement>
}