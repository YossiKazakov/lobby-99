import { useInView } from 'react-intersection-observer';
import styles from '../styles/intro1.module.css';

// This frame shows
export default function Intro1() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div ref={ref} className={styles.text}>
                עוד שנה<br/>
                עברה ורצינו<br/>
                להגיד לך
            </div>
        </div>
    )}