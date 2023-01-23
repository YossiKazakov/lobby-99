import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import Arrow from '../images/empire-frame/arrow.svg'
import Investers from '../images/empire-frame/investers.svg'

import { numberOfMembers } from '../data/consts'
import { lobbyYears } from '../data/consts'

import styles from '../styles/lobby_empire.module.css';


export default function LobbyEmpire() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce:'true'});
    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div className={styles.inner}>
                <div ref={ref} className={styles.paragraph1}>
                    לפני {lobbyYears} שנים<br />
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
                        {numberOfMembers}
                    </div>
                </div>
            </div>
        </div >
    )
}