import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import lobbyLogo from '../images/lobby-logo.svg';
import styles from '../styles/opening.module.css';

// This is the opening frame, it shows the lobby logo

export default function Opening() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});

    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.lobbyLogo}>
                <div className={`${''} ${elementIsVisible ? styles.hidden : ''}`}>
                    <Image id='lobby-logo' src={lobbyLogo} alt="Lobby 99 Logo" fill/>
                </div>
                <div className={`${styles.hidden} ${elementIsVisible ? styles.show : ''}`}>
                    <div className={styles.text}>
                        במיוחד<br/>עבורך
                    </div>
                </div>
            </div>
        </div>
    )}