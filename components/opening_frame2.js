import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Overview from '../images/opening-frame/second-frame.svg';
import Thankyou from '../images/opening-frame/third-frame.svg';
import styles from '../styles/opening.module.css';

export default function OpeningTwo() {
    return (
        <div className={styles.container}>
            <Image src={Overview} alt="Overview" fill />
        </div>
    );
}
