import { CloseButton } from '../closeButton/CloseButton'
import styles from './OpenPicture.module.scss'
export const OpenPicture = ({href, closeWindow} : Props) => {
    return (
        <li className={styles.open}>
            <CloseButton classname='openWindow' clickFunc={closeWindow}/>
            <img src={href} alt='#'/>
        </li>
    )
}

type Props = {
    href: string,
    closeWindow: React.MouseEventHandler<HTMLButtonElement>
}