import { useInView } from 'react-intersection-observer';
import styles from '../styles/link_to_vote.module.css';
import Image from 'next/image';
import confetti from '../images/confetti.svg'

export default function LinkToVote() {
    const { ref: ref, inView: elementIsVisible } = useInView({ triggerOnce: 'true' });

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div ref={ref} className={styles.text}>
                לינק להצבעה ישלח אלייך ברגע שההצבעה תפתח
            </div>
            <div className={styles.confetti}>
                <Image src={confetti} fill />
            </div>
        </div>
    )
}
