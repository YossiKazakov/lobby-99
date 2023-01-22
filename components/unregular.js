import { useInView } from 'react-intersection-observer';
import styles from '../styles/intro1.module.css';
import Image from 'next/image';
import OneOurOfFourCircles from '../images/one_out_of_four_circles.svg'


// This frame shows
export default function Intro1() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce:'true'});

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
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
                <Image src={OneOurOfFourCircles} alt="1/4" fill />
            </div>
        </div>
    )
}