import styles from './Footer.module.css'
import design from '../assets/~.png'

function Footer(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.left}><h1>Let's build something great together</h1></div>
            <div className={styles.right}>Schedule a Call</div>
            <img src={design} alt="" className={styles.image} />
        </div>
        </>
    )
}
export default Footer