import { useInView } from 'react-intersection-observer';
import styles from '../styles/frame_1.module.css';

export default function Frame1({ name }) {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});

    return (<>
        <div ref={ref} className={styles.container}>
            <div className={styles.group40}>
                <div className={styles.vector}>
                </div>
                <div className={styles.elipse120}>
                </div>
                <div className={styles.elipse121}>
                </div>
                <div className={styles.rectangle138}>
                </div>
                <div className={styles.name}>
                    <span className={`${styles.hidden} ${elementIsVisible ? styles.show : ''}`}> {name}<br/></span>
                </div>
            </div>
        </div>
        </>
        )}