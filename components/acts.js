import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import data from '../data/past-subjects.json'
import clickHere from '../images/click.svg'
import continueImg from '../images/continue.svg'

import Subject from './subject.js'
import Modal from './modal.js';

import styles from '../styles/acts.module.css';

// This frame shows
export default function Acts() {
    if (!data) return <div>No data could be loaded...</div>
    const subjects = data['subjects']

    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});
    const [openModal, setOpenModal] = useState(false);
    const [content, setContent] = useState("");

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : styles.pinkBackground}`}>
            {/* subject 1 */}
            <div ref={ref} className={styles.subject1}>
                <Subject title={subjects[0]["title"]} content={subjects[0]["content"]} setOpenModal={setOpenModal} setContent={setContent}/>
            </div>
            {/* subject 2 */}
            <div ref={ref} className={styles.subject2}>
                <Subject title={subjects[1]["title"]} content={subjects[1]["content"]} setOpenModal={setOpenModal} setContent={setContent}/>
            </div> 
            {/* subject 3 */}
            <div ref={ref} className={styles.subject3}>
                <Subject title={subjects[2]["title"]} content={subjects[2]["content"]} setOpenModal={setOpenModal} setContent={setContent}/>
            </div>
            {/* subject 4 */}
            <div ref={ref} className={styles.subject4}>
                <Subject title={subjects[3]["title"]} content={subjects[3]["content"]} setOpenModal={setOpenModal} setContent={setContent}/>
            </div>
            {/* subject 5 */}
            <div ref={ref} className={styles.subject5}>
                <Subject title={subjects[4]["title"]} content={subjects[4]["content"]} setOpenModal={setOpenModal} setContent={setContent}/>
            </div>
            {/* this is the modal that open with every click on a subject */}
            <Modal open={openModal} onClose={() => setOpenModal(false)} input={content}/>
            <div className={styles.click}>
                <ClickImg content={content} />
            </div>
        </div>
    )}

export const ClickImg = ({ content }) => {
    if (content == "")
    {return(<Image id='click' src={clickHere} alt="click here" fill/>)}
    return(<Image id='continue' src={continueImg} alt="continue" fill/>)
}