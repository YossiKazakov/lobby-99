import { useInView } from 'react-intersection-observer';
import { AutoTextSize } from 'auto-text-size'
import Image from 'next/image';
import textCircle from '../images/frame-1/text-circle.svg';
import happyCircle from '../images/frame-1/happy-circle.svg';
import smileyCircle from '../images/frame-1/smiley-circle.svg';

import styles from '../styles/frame_1.module.css';



export default function Frame1({ name }) {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});

    return (
        <div ref={ref} className={styles.container}>
            <Image className={styles.smiley1} src={smileyCircle} alt="smiley" width={181} height={181}/>
            {/* <Image id="smiley2" src={smileyCircle} alt="smiley" width={381} height={381}/>
            <Image id="smiley3" src={smileyCircle} alt="smiley" width={381} height={381}/> */}
            {/* <Image id="happy" src={happyCircle} alt="happy to see you" width={381} height={381}/>

            <Image id="text" src={textCircle} alt={name} width={381} height={381}/> */}

            {/* <div className={styles.text}>
                        <AutoTextSize mode="oneline" minFontSizePx={0} maxFontSizePx={100} fontSizePrecisionPx={0.1}>
                            דן
                        </AutoTextSize>
            </div> */}
        </div>
        )}