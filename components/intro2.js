import styles from '../styles/intro2.module.css';

export default function Intro2({ name }) {
    return (
        <div className={styles.container}>
            <div className={styles.text1}>
                {","}{name}<br />
                <span style={{ color: 'rgb(252, 101, 60)' }}>רצינו לומר לך</span><br />
                <span className={styles.bigText}>.תודה</span>
            </div>
            <div className={styles.text2}>
                על שנה של
                <br />
                עשייה משותפת
                <br />
                שהתאפשרה בזכות
                <br />
                היותך חלק מקהילת
                <br />
                המשקיעים שלנו
            </div>
        </div>
    )
}

