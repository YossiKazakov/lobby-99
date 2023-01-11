import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import starTop from '../images/stars/star-top-pink.svg';
import starBottom from '../images/stars/star-bottom.svg';

import styles from '../styles/connector.module.css';

// This frame shows

export default function Connector() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Image id='top' src={starTop} alt="star" fill/>
            </div>
            <div ref={ref} className={styles.text}>
                המקף
                <br/>
                שמחבר
                <br/>
                בין
                <div style={{color: '#ECFF7C'}}>
                    ההמון
                    <br/>
                    לשלטון
                </div>
            </div>
            <div className={styles.bottom}>
                <Image id='bottom' src={starBottom} alt="star" fill/>
            </div>
        </div>
        )}