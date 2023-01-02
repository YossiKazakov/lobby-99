import styles from './member.module.css';
import NameFrame  from './name_frame';
import Frame2 from './frame_2';
import Frame3 from './frame_3';
import Frame4 from './frame_4';

export default function Member({ member }) {
    return (
    <div className={styles.container}>
        <NameFrame name={member.name}/>
        <Frame2 />
        <Frame3 />
        <Frame4 />
    </div>
    )}