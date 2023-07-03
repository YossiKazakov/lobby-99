import Image from "next/image";
import styles from '../styles/future_subjects.module.css'
import { useInView } from "react-intersection-observer";
import One from '../images/future-subjects-frame/subject1.svg'
import Two from '../images/future-subjects-frame/subject2.svg'
import Three from '../images/future-subjects-frame/subject3.svg'
import Four from '../images/future-subjects-frame/subject4.svg'
import { futureSubject1, futureSubject2, futureSubject3, futureSubject4 } from '../data/consts'
import { AutoTextSize } from "auto-text-size";



export default function FutureSubjects() {
    const { ref: ref, inView: elementIsVisible } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div className={styles.one}>
                <Image src={One} fill />
                <div className={styles.text}>
                    <AutoTextSize style={{alignSelf: 'center'}}
                        minFontSizePx={21}
                        maxFontSizePx={35}
                        fontSizePrecisionPx={0.1}>{futureSubject1}</AutoTextSize>
                </div>
            </div>
            <div className={styles.two}>
                <Image src={Two} fill />
                <div className={styles.text}>
                    <AutoTextSize style={{alignSelf: 'center'}}
                        minFontSizePx={21}
                        maxFontSizePx={30}
                        fontSizePrecisionPx={0.1}>{futureSubject2}</AutoTextSize>
                </div>
            </div>
            <div className={styles.three}>
                <Image src={Three} fill />
                <div className={styles.text}>
                    <AutoTextSize style={{alignSelf: 'center'}}
                        minFontSizePx={21}
                        maxFontSizePx={30}
                        fontSizePrecisionPx={0.1}>{futureSubject3}</AutoTextSize>
                </div>
            </div>
            <div className={styles.four}>
                <Image src={Four} fill />
                <div className={styles.text}>
                    <AutoTextSize style={{alignSelf: 'center'}}
                        minFontSizePx={21}
                        maxFontSizePx={30}
                        fontSizePrecisionPx={0.1}>{futureSubject4}</AutoTextSize>
                </div>
            </div>
        </div>
    )
}