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

// This frame shows the lobby member name - a dynamic field

export default function Frame1({ name }) {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});

    return (
        <div ref={ref} className={styles.container}>
                <div className={styles.smiley1}>
                    <Image id='smiley1' src={smiley1} alt="smiley" fill/>
                </div>
                <div className={styles.smiley2}>
                    <Image id='smiley2' src={smiley2} alt="smiley" fill/>
                </div>
                <div className={styles.smiley3}>
                    <Image id='smiley3' src={smiley3} alt="smiley" fill/>
                </div>
                <div className={`${styles.hidden2} ${elementIsVisible ? styles.show : ''}`}>
                    <div className={styles.happy}>
                        <Image id='happy' src={happyCircle} alt="happy to see you" fill/>
                    </div>
                </div>
                <div className={`${styles.hidden1} ${elementIsVisible ? styles.show : ''}`}>
                    <div className={styles.textcircle}>
                        <Image id='textcircle' src={textCircle} alt={name} fill/>
                        {/* adjust the name size to match it's container size */}
                        <div className={styles.textname}> 
                            <AutoTextSize mode="oneline" minFontSizePx={0} maxFontSizePx={100} fontSizePrecisionPx={0.1}> { name } </AutoTextSize>
                        </div>
                    </div>
                </div>
            <div className={styles.redbottom}>
                <Image id='redbottom' src={redBottom} alt="" fill/>
            </div>
        </div>
        )}