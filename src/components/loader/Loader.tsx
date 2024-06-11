import styles from './Loader.module.scss'

export const Loader = () => {

   return (
   <div id={styles.loader} data-testid={styles.loader}>
        <div id={styles['loader-row']}>
        <div id={styles['loader-col']}>
            <div id={styles.floatingBarsG}>
                <div className={styles.blockG} id={styles.rotateG_01}></div>
                <div className={styles.blockG} id={styles.rotateG_02}></div>
                <div className={styles.blockG} id={styles.rotateG_03}></div>
                <div className={styles.blockG} id={styles.rotateG_04}></div>
                <div className={styles.blockG} id={styles.rotateG_05}></div>
                <div className={styles.blockG} id={styles.rotateG_06}></div>
                <div className={styles.blockG} id={styles.rotateG_07}></div>
                <div className={styles.blockG} id={styles.rotateG_08}></div>
            </div>
        </div>
        </div>
    </div>)
}