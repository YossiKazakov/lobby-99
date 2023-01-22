import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';


import styles from '../styles/member.module.css';

import Opening from './opening_frame';
import Intro1 from './intro1';
import Intro2 from './intro2';


import Name from './name';
import Equal from './equal';
import Future from './future';
import NextVote from './next_vote_frame';
import LobbyEmpire from './lobby_empire';
import Unregular from './unregular';
import Makaf from './ha_makaf';
import Votes from './votes_stats'
import YourMoment from './your_moment'


import Acts from './acts';

export default function Member({ member }) {
    const ref = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }, 1300);
    }, []);
    console.log(member)

    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <Opening />
            </div>
            <div ref={ref} className={styles.frame}>
                <Intro1 />
            </div>
            <div className={styles.frame}>
                <Intro2 name={member.name} />
            </div>
            <div className={styles.frame}>
                <LobbyEmpire />
            </div>
            <div className={styles.frame}>
                <Unregular />
            </div>
            <div className={styles.frame}>
                <Acts />
            </div>
            <div className={styles.frame}>
                <Makaf />
            </div>
            <div className={styles.frame}>
                <Votes />
            </div>
            <div className={styles.frame}>
                <YourMoment />
            </div>
            <div className={styles.frame}>
                <Name name={member.name} join_at={member.join_at} />
            </div>
            <div className={styles.frame}>
                <Equal />
            </div>
            <div className={styles.frame}>
                <Future />
            </div>
            <div className={styles.frame}>
                <NextVote name={member.name} id={member.id} />
            </div>
        </div>
    )
}