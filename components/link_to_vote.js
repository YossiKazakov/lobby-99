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
                    <span style={{color: 'rgb(252, 101, 60)'}}>שלך</span>
                    <br/>
                    !להשפיע
                </div>
                <div ref={ref} className={styles.text}>
                    לינק להצבעה ישלח אליך כשההצבעה תפתח
                </div>
            </div>
        </div>
    )
}
