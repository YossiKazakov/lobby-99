import { useInView } from 'react-intersection-observer';

import styles from '../styles/link_to_vote.module.css';

export default function LinkToVote() {
    const { ref: ref, inView: elementIsVisible } = useInView({ triggerOnce: 'true' });

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div className={styles.inner}>
                <div className={styles.bigtext}>
                    זה הזמן
                    <br/>
                    שלך
                    <br/>
                    !להשפיע
                </div>
                <div ref={ref} className={styles.text}>
                    לינק להצבעה ישלח אלייך כאשר ההצבעה תפתח
                </div>
            </div>
        </div>
    )
}
