import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import subjectBg from '../images/subject-bg.svg'
import subjectBtn from '../images/subject-btn.svg'

import Modal from './modal.js';

import {subjectOne} from '../info.js'
import {subjectOneContent} from '../info.js'


import styles from '../styles/acts.module.css';

// This frame shows
export default function Acts() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});
    const [openModal, setOpenModal] = useState(false);


    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div ref={ref} className={styles.subject1}>
                <div className={styles.subject}>
                    <Image id='subject-bg' src={subjectBg} alt="subject" fill/>
                    <div className={styles.subjectTitle}>
                        {subjectOne}
                    </div>
                </div>
                <div className={styles.modalButton} onClick={() => setOpenModal(true)} >
                    <Image id='subject-btn' src={subjectBtn} alt="read more" fill/>
                </div>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} input={subjectOneContent}/>
        </div>
    )}