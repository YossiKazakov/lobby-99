import { useInView } from 'react-intersection-observer';
import styles from '../styles/intro1.module.css';
import Image from 'next/image';
import TwoOurOfFourCircles from '../images/two_out_of_four_circles.svg'


// This frame shows
export default function Unregular() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce:'true'});

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : styles.greyBackground}`}>
            <div ref={ref} className={styles.text}>
                השנה<br />
                ההשקעה<br />
                שלך הניבה<br />
                <span style={{color:'white'}}>הישגים<br /></span> 
                <span style={{color:'white'}}>בלתי רגילים<br /></span>
                משהו קטן<br />
                מאיתנו
            </div>
            <div className={styles.circles}>
                <Image src={TwoOurOfFourCircles} alt="2/4" fill />
            </div>
        </div>
    )
}