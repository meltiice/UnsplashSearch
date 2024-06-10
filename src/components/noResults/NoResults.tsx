import styles from './NoResults.module.scss'
export const NoResults = () => {
    return (
        <div className={styles.noresults}>
            <p>К сожалению, поиск не дал результатов</p>
        </div>
    )
}