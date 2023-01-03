import { useInView } from 'react-intersection-observer';
import styles from '../styles/member.module.css';

export default function Frame3() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});


    return (<>
        <div ref={ref} className={styles.frame}>
            <div className="content">
            <span className={`${styles.rocket} ${elementIsVisible ? styles.animateRocket : ''}`}>
                    🚀
                    </span>
            </div>
        </div>
        </>
        )}