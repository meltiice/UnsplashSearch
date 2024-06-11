import { CloseButton } from '../closeButton/CloseButton'
import styles from './OpenPicture.module.scss'
export const OpenPicture = ({href, closeWindow, alt_description} : Props) => {
    return (
        <li className={styles.open}>
            <CloseButton classname='openWindow' clickFunc={closeWindow}/>
            <img src={href} alt={alt_description}/>
        </li>
    )
}

type Props = {
    href: string,
    closeWindow: React.MouseEventHandler<HTMLButtonElement>,
    alt_description: string,
}