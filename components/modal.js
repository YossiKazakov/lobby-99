import React, { useState } from 'react';
import Image from 'next/image';

import exit from '../images/exit.svg'
import styles from '../styles/modal.module.css';

// This frame shows
export default function Modal({ open, onClose, input }) {
    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContainer} onClick={(e) => {e.stopPropagation();}}>
                <div className={styles.closeBtn} onClick={onClose}>
                    <Image id='exit' src={exit} alt="close" fill/>
                </div>
                <div className={styles.content}>
                    <p>{input}</p>
                </div>
            </div>
        </div>
    )}