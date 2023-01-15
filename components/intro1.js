import { useInView } from 'react-intersection-observer';
import styles from '../styles/intro1.module.css';
import Image from 'next/image';
import DownArrow from '../images/down_arrow.svg'
import OneOurOfFourCircles from '../images/one_out_of_four_circles.svg'


// This frame shows
export default function Intro1() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce:'true'});

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div ref={ref} className={styles.text}>
                עוד שנה<br />
                עברה ויצרנו<br />
                <span style={{color:'white'}}>במיוחד<br /></span> 
                <span style={{color:'white'}}>בשבילך<br /></span>
                משהו קטן<br />
                מאיתנו
            </div>
            <div className={styles.downArrow}>
                <Image src={DownArrow} alt="scroll down" fill />
            </div>
            <div className={styles.circles}>
                <Image src={OneOurOfFourCircles} alt="1/4" fill />
            </div>
        </div>
    )
}