import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Lobby99Innitial from '../images/opening-frame/first-frame.svg';
import styles from '../styles/opening.module.css';

export default function OpeningOne() {
    return (
        <div className={styles.container}>
            <Image src={Lobby99Innitial} alt="Lobby99" fill />
        </div>
    );
}

