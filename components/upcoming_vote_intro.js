import { useInView } from 'react-intersection-observer';
import styles from '../styles/moment.module.css';
import Image from 'next/image';
import FourOurOfFourCircles from '../images/four_out_of_four_circles.svg'


// This frame shows
export default function UpcommingVoteIntro() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce:'true'});

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : styles.yellowBackground}`}>
            <div ref={ref} className={styles.text} style={{fontSize : '500%'}}>
                אלו<br />
                הנושאים<br />
                שיעלו<br />
                להצבעה<br />
                <span style={{color:'white'}}>הקרובה<br /></span> 
            </div>
            <div className={styles.circles}>
                <Image src={FourOurOfFourCircles} alt="4/4" fill />
            </div>
        </div>
    )
}