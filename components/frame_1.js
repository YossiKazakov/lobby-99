import { useInView } from 'react-intersection-observer';
import { AutoTextSize } from 'auto-text-size'
import Image from 'next/image';

import textCircle from '../images/frame-1/text-circle.svg';
import happyCircle from '../images/frame-1/happy-circle.svg';
import smiley1 from '../images/frame-1/smiley1.svg';
import smiley2 from '../images/frame-1/smiley2.svg';
import smiley3 from '../images/frame-1/smiley3.svg';
import redBottom from '../images/frame-1/red-bottom.svg';

import styles from '../styles/frame_1.module.css';



export default function Frame1({ name }) {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});

    return (
        <div ref={ref} className={styles.container}>
            <div className={`${styles.hidden} ${elementIsVisible ? styles.show : ''}`}>
                <Image id={styles.smiley1} src={smiley1} alt="smiley"/>
                <Image id={styles.smiley2} src={smiley2} alt="smiley"/>
                <Image id={styles.smiley3} src={smiley3} alt="smiley"/>
                <Image id={styles.happy} src={happyCircle} alt="happy to see you"/>
                <div id={styles.textcircle}>
                    <Image id={styles.textimage} src={textCircle} alt={name}/>
                    <div id={styles.textname}>
                        <AutoTextSize mode="oneline" minFontSizePx={0} maxFontSizePx={100} fontSizePrecisionPx={0.1}>{name}</AutoTextSize>
                    </div>
                </div>
            </div>
            <Image id={styles.redbottom} src={redBottom} alt=""/>
        </div>
        )}