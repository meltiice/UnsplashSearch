import cross from './cross.svg'
import styles from './CloseButton.module.scss'

export const CloseButton = ({classname, clickFunc} : Props) => {
    return (<button onClick={clickFunc} className={styles[classname]}>
        <img src={cross} alt='#'/>
    </button>)
}

type Props = {
    classname: string,
    clickFunc: React.MouseEventHandler<HTMLButtonElement>
}