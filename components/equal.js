import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import equalStar from '../images/stars/equal-star.svg';


import styles from '../styles/equal.module.css';

// This frame shows a message that evry vote is equal

export default function Equal() {
    const { ref: ref, inView: elementIsVisible } = useInView({ triggerOnce: false });

    return (
        <div className={styles.container}>
            <div ref={ref} className={styles.text1}>
                זה לא משנה
                <br />
                אם הגעת אלינו
                <br />
                לא מזמן
                <span style={{ color: '#6B53FF' }}> או</span>
                <br />
                איתנו כבר שנים
            </div>

            <div className={`${styles.main} ${elementIsVisible ? styles.spin : ''}`}>
                <Image id='main' src={equalStar} alt="star" fill />
            </div>
        </div>
    )
}