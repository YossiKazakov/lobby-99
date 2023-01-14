import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Thankyou from '../images/opening-frame/third-frame.svg';
import styles from '../styles/opening.module.css';

export default function OpeningThird() {
    return (
        <div className={styles.container}>
            <Image src={Thankyou} alt="Thank You" fill />
        </div>
    )
}