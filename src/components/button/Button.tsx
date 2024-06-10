import styles from './Button.module.scss';
export const Button = ({onclick} : Props) => {
    return <button className={styles.button} onClick={onclick}>
        <span>Искать</span>
    </button>
}

type Props = {
    onclick: React.MouseEventHandler<HTMLButtonElement>
}