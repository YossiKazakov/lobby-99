import { useInView } from 'react-intersection-observer';
import styles from '../styles/votes_stats.module.css';
import Image from 'next/image';
import Arrow from '../images/vote-stats-frame/arrow.svg'
import WhiteBackground from '../images/vote-stats-frame/white_bg.svg'
import { lastYear, lastVote, chosenSubject, chosenVote, numOfVotes } from '../data/consts'




export default function VotesStats() {
    const { ref: ref, inView: elementIsVisible } = useInView({ triggerOnce: 'true' });

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.greyBackground : ''}`}>
            <div ref={ref} className={styles.text}>
                <span style={{ color: 'rgb(107, 83, 255)' }}>בשנה האחרונה<br /></span>
                השתתפו בהצבעות<br />
            </div>
            <div className={styles.arrow} style={{ rotate: '57.47deg', top: '5%', left: '17%' }}>
                <Image src={Arrow} alt='arrow' fill />
            </div>
            <div className={styles.whiteBackgroundOne}>
                <Image src={WhiteBackground} alt='stats' fill />
                <div className={styles.innerPrecentage} style={{right: '15%'}}>
                    {lastYear}
                </div>
                <div className={styles.innerText} style={{left: '15%'}}>
                    מהחברים
                </div>
            </div>
            <div className={styles.text} style={{ top: '30%' }}>
                בהצבעת הנושאים<br />
                <span style={{ color: 'rgb(107, 83, 255)' }}>האחרונה </span>
                הצביעו<br />
            </div>
            <div className={styles.arrow} style={{ rotate: '52.83deg', top: '32%', left: '22%' }}>
                <Image src={Arrow} alt='arrow' fill />
            </div>
            <div className={styles.whiteBackgroundTwo}>
                <Image src={WhiteBackground} alt='stats' fill />
                <div className={styles.innerPrecentage} style={{right: '8%'}}>
                    {lastVote}
                </div>
                <div className={styles.innerText} style={{left: '8%'}}>
                    מחברי הלובי
                </div>
            </div>
            <div className={styles.text} style={{ top: '55%' }}>
                הנושא הנבחר היה<br />
                <span style={{ color: 'rgb(107, 83, 255)' }}>{chosenSubject}</span><br />
                לו הצביעו<br />
            </div>
            <div className={styles.arrow} style={{ rotate: '34.14deg', top: '60%', left: '44%' }}>
                <Image src={Arrow} alt='arrow' fill />
            </div>
            <div className={styles.whiteBackgroundThree}>
                <Image src={WhiteBackground} alt='stats' fill />
                <div className={styles.innerPrecentage} style={{right: '10%'}}>
                    {chosenVote}
                </div>
                <div className={styles.innerText} style={{left: '10%'}}>
                    מהמצביעים
                </div>
            </div>
        </div>
    )
}