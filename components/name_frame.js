import { useInView } from 'react-intersection-observer';
import styles from './member.module.css';

export default function NameFrame({ name }) {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});


    return (<>
        <div ref={ref} className={styles.frame}>
            <div className="content">
                <h1>היי,
                <span className={`${styles.hidden} ${elementIsVisible ? styles.show : ''}`}> 
                    {name}<br/></span>
                ברוך הבא לסיכום השנה<br/>
                שהוכן במיוחד עבורך</h1>
            </div>
        </div>
        </>
        )}