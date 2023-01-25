import React, { useState } from 'react';
import Image from 'next/image';

import exit from '../images/acts/exit.svg'
import one from '../images/acts/one.svg'
import two from '../images/acts/two.svg'
import three from '../images/acts/three.svg'

import styles from '../styles/modal.module.css';

// This is the modal that open with a content on the chosen subject
export default function Modal({ open, onClose, input }) {
    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContainer} onClick={(e) => {e.stopPropagation();}}>
                <div className={styles.closeBtn} onClick={onClose}>
                    <Image id='exit' src={exit} alt="close" fill/>
                </div>
                <div className={styles.content}>
                    <Content section={input[0]} num={one} />
                    <Content section={input[1]} num={two} />
                    <Content section={input[2]} num={three} />
                </div>
            </div>
        </div>
    )}

export const Content = ({ section, num }) => {
    if (section == "")
    {return(<></>)}
    return(<p>
        <div className={styles.num}>
            <Image id='number' src={num} alt="" fill/>
        </div>
        <div className={styles.section}>
        { section }
        </div>
    </p>)
}