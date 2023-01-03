import styles from '../styles/member.module.css';
import Frame1  from './frame_1';
import Frame2 from './frame_2';
import Frame3 from './frame_3';
import Frame4 from './frame_4';

export default function Member({ member }) {
    return (
    <div className={styles.container}>
        <div className={styles.frame}>
            <Frame1 name={member.name}/>
        </div>
        <div className={styles.frame}>
            <Frame2 />
        </div>
        <div className={styles.frame}>
            <Frame3 />
        </div>
        <div className={styles.frame}>
            <Frame4 />
        </div>
    </div>
    )}