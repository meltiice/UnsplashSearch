import { CloseButton } from '../closeButton/CloseButton'
import styles from './OpenPicture.module.scss'
export const OpenPicture = ({href, closeWindow} : Props) => {
    return (
        <div className={styles.open}>
            <CloseButton classname='right' clickFunc={closeWindow}/>
            <img src={href} alt='#'/>
        </div>
    )
}

type Props = {
    href: string,
    closeWindow: React.MouseEventHandler<HTMLButtonElement>
}