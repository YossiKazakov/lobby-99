import Image from 'next/image';

import styles from '../styles/member.module.css';

import OpeningOne from './opening_frame1';
import OpeningTwo from './opening_frame2';
import ThankYou from './opening_frame3';
import Name from './name';
import Unique from './unique';
import Past from './past';
import Future from './future';
import Connector from './theconnector';
import NextVote from './next_vote_frame';

import turn from '../images/turn.svg'
import equal from '../images/equal.svg'
import Frame3 from './frame_3';
import React, { useEffect, useRef } from 'react';


export default function Member({ member }) {
    const openingOneRef = useRef(null) // The following is responsible for the auto scroll
    const openingTwoRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            openingTwoRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 3000);
    }, []);
    return (
        <div className={styles.container}>
            <div ref={openingOneRef} className={styles.frame}>
                <OpeningOne />
            </div>
            <div ref={openingTwoRef} className={styles.frame}>
                <OpeningTwo />
            </div>
            <div className={styles.frame}>
                <ThankYou />
            </div>
            <div className={styles.frame}>
                <Name name={member.name} />
            </div>
            <div className={styles.frame}>
                <Unique />
            </div>
            <div className={styles.frame}>
                <Past />
            </div>

            {/* in the meantime just photos */}
            <div className={styles.frame}>
                <Connector />
            </div>
            <div className={styles.frame}>
                <Frame3 image={
                    <Image id='equal' src={equal} alt="all voices are equal" fill />
                } />
            </div>
            <div className={styles.frame}>
                <Frame3 image={
                    <Image id='turn' src={turn} alt="now it's your turn" fill />
                } />
            </div>

            <div className={styles.frame}>
                <Future />
            </div>

            <div className={styles.frame}>
                <NextVote name={member.name} />
            </div>
        </div>
    )
}