import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { AutoTextSize } from 'auto-text-size'
import styles from '../styles/lobby_empire.module.css';
import Arrow from '../images/empire-frame/arrow.svg'
import Investers from '../images/empire-frame/investers.svg'
// import { numberOfMembers } from '../utils'

export default function LobbyEmpire() {
    // const num = numberOfMembers
    // console.log("this is num",num)
    const num = "9,439"
    const years = "7"
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce:'true'});
    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div ref={ref} className={styles.paragraph1}>
                לפני {years} שנים<br />
                הקמנו יחד קהילה<br />
            </div>
            <div className={styles.paragraph2}>
                ראשונה<br />
                מסוגה בעולם<br />
            </div>
            <div className={styles.paragraph3}>
                והיום אנחנו כבר<br />
                אימפריה של<br />
            </div>
            <div className={styles.arrow}>
                <Image src={Arrow} alt="arrow" fill />
            </div>
            <div className={styles.investers}>
                <Image src={Investers} alt='investers' fill />
                <div className={styles.number}>
                    {/* {num} */}
                    <AutoTextSize mode='oneline' minFontSizePx={0} maxFontSizePx={100} fontSizePrecisionPx={0.1}>{num}</AutoTextSize>
                </div>
            </div>
        </div >
    )
}