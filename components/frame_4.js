import { useInView } from 'react-intersection-observer';
import styles from '../styles/member.module.css';
import Image from 'next/image';
import maintanceImage from '../under_maintenance.png'
import Share from './share';

export default function Frame4() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});


    return (<>
        <div ref={ref} className={styles.frame}>
            <div className="content">
            <span className={`${styles.hidden} ${elementIsVisible ? styles.show : ''}`}> 
                        <Image id="under_maintenance" src={maintanceImage} alt="under maintenance" width={600} height={500}/>
                    </span>

                    <Share/>
            </div>
        </div>
        </>
        )}