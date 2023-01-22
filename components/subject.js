import React, { useState } from 'react';
import Image from 'next/image';

import subjectBg from '../images/subject-bg.svg'
import subjectBtn from '../images/subject-btn.svg'

import styles from '../styles/acts.module.css';

// This frame shows
export default function Subject({ title, content, setOpenModal, setContent }) {

    return (<>
                <div className={styles.subject}>
                    <Image id='subject-bg' src={subjectBg} alt="subject" fill/>
                    <div className={styles.subjectTitle}>
                        {title}
                    </div>
                </div>
                <div className={styles.modalButton} onClick={() => (setOpenModal(true), setContent(content))} >
                    <Image id='subject-btn' src={subjectBtn} alt="read more" fill/>
                </div>
            </>
    )}