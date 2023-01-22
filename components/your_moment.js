import { useInView } from 'react-intersection-observer';
import styles from '../styles/moment.module.css';
import Image from 'next/image';
import ThreeOurOfFourCircles from '../images/three_out_of_four_circles.svg'


// This frame shows
export default function Turn() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce:'true'});

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : styles.greyBackground}`}>
            <div ref={ref} className={styles.text}>
                והנה<br />
                הגיע<br />
                הרגע<br />
                <span style={{color:'white'}}>שלך<br /></span> 
            </div>
            <div className={styles.circles}>
                <Image src={ThreeOurOfFourCircles} alt="3/4" fill />
            </div>
        </div>
    )
}