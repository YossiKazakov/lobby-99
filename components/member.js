import React, { useEffect, useRef} from 'react';
import { useInView } from 'react-intersection-observer';


import styles from '../styles/member.module.css';

import Opening from './opening_frame';
import Intro1 from './intro1';
import Intro2 from './intro2';


import Name  from './name';
import Unique from './unique';
import Future from './future';
import Connector from './theconnector';
import NextVote from './next_vote_frame';

import Acts from './acts';

export default function Member({ member }) {
    const ref = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }, 3000);
    }, []);


    return (
    <div className={styles.container}>
        <div className={styles.frame}>
            <Opening />
        </div>
        <div  ref={ref} className={styles.frame}>
            <Intro1 />
        </div>
        <div  className={styles.frame}>
                <Intro2 />
        </div>

        <div className={styles.frame}>
            <Name name={member.name} join_at={member.join_at}/>
        </div>
        <div className={styles.frame}>
            <Unique />
        </div>

        <div className={styles.frame}> 
            <Connector />
        </div>
        
        <div className={styles.frame}>
            <Future />
        </div>

            
        <div className={styles.frame}>
                <NextVote name={member.name} />
        </div>
        <div className={styles.frame}>
                <Acts />
        </div>
    </div>
    )
}