import { useInView } from 'react-intersection-observer';
import styles from '../styles/member.module.css';
import Share from './share';

export default function Frame4() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});


    return (<>
        <div ref={ref} className={styles.frame}>
            <div className="content">
            <span className={`${styles.hidden} ${elementIsVisible ? styles.show : ''}`}> 
            </span>

                    <Share/>
            </div>
        </div>
        </>
        )}