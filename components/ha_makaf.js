import { useInView } from 'react-intersection-observer';
import styles from '../styles/intro1.module.css';


// This frame shows
export default function HaMakaf() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce:'true'});

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.blackBackground : styles.greyBackground}`}>
            <div ref={ref} className={styles.text}>
                <span style={{color: 'rgb(107, 83, 255)', fontSize: "124%", lineHeight: '95%'}}>
                יחד<br />
                <span style={{color:'white'}}>אנחנו<br /></span>
                <span style={{color:'white'}}>המקף<br /></span>
                <span style={{color:'white'}}>שמחבר<br /></span> 
                בין ההמון
                לשלטון
                </span>
            </div>
        </div>
    )
}