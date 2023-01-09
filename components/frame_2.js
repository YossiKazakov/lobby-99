import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import starTop from '../images/frame-2/star-top.svg';
import starMain from '../images/frame-2/star-main.svg';
import starBottom from '../images/frame-2/star-bottom.svg';

import styles from '../styles/frame_2.module.css';

// This frame shows

export default function Frame2() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Image id='top' src={starTop} alt="star" fill/>
            </div>
            <div ref={ref} className={styles.text1}>
                אבל
                <br/>
                ,בשבילנו
                <br/>
                כל אחד
                <br/>
                ואחת הוא 
            </div>

            <div className={`${styles.main} ${elementIsVisible ? styles.spin : ''}`}>
                    <Image id='main' src={starMain} alt="star" fill/>
                    <div className={styles.text2}>
                        יחיד
                        <br/>
                        ומיוחד
                    </div>
            </div>
            <div className={styles.bottom}>
                <Image id='bottom' src={starBottom} alt="star" fill/>
            </div>
        </div>
        )}