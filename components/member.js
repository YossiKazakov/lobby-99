import Image from 'next/image';

import styles from '../styles/member.module.css';

import Opening from './opening_frame';
import Name  from './name';
import Unique from './unique';
import Past from './past';
import Future from './future';
import Connector from './theconnector';

import turn from '../images/turn.svg'
import equal from '../images/equal.svg'
import Frame3 from './frame_3';


export default function Member({ member }) {
    return (
    <div className={styles.container}>
        <div className={styles.frame}>
            <Opening />
        </div>
        <div className={styles.frame}>
            <Name name={member.name}/>
        </div>
        <div className={styles.frame}>
            <Unique />
        </div>
        <div className={styles.frame}>
            <Past />
        </div>
        <div className={styles.frame}> 
            <Connector />
        </div>
        
        {/* in the meantime just photos */}
        <div className={styles.frame}>
            <Frame3 image={
                <Image id='equal' src={equal} alt="all voices are equal" fill/>
            }/>
        </div>
        <div className={styles.frame}>
            <Frame3 image={
                <Image id='turn' src={turn} alt="now it's your turn" fill/>
            }/>
        </div>
        
        <div className={styles.frame}>
            <Future />
        </div>
    </div>
    )}