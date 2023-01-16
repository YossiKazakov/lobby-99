import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import clickHere from '../images/click.svg'
import continueImg from '../images/continue.svg'

import Subject from './subject.js'
import Modal from './modal.js';

import styles from '../styles/acts.module.css';

// This frame shows
export default function Acts() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});
    const [openModal, setOpenModal] = useState(false);
    const [content, setContent] = useState("");
    const subjectOne = "נושא ראשון";
    const subjectOneContent = "כאן יש הסבר על כל הנושא הראשון";

    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            {/* subject 1 */}
            <div ref={ref} className={styles.subject1}>
                <Subject title={subjectOne} content={subjectOneContent} setOpenModal={setOpenModal} setContent={setContent}/>
            </div>
            {/* subject 2 */}
            <div ref={ref} className={styles.subject2}>
                <Subject title={"נושא שני"} content={"כאן יש הסבר שונה"} setOpenModal={setOpenModal} setContent={setContent}/>
            </div> 
            {/* subject 3 */}
            <div ref={ref} className={styles.subject3}>
                <Subject title={"נושא שלישי"} content={"כאן יש הסבר אחר"} setOpenModal={setOpenModal} setContent={setContent}/>
            </div>
            {/* subject 4 */}
            <div ref={ref} className={styles.subject4}>
                <Subject title={"נושא רביעי"} content={" כאן יש הסבר שונה לגמרי"} setOpenModal={setOpenModal} setContent={setContent}/>
            </div>
            {/* subject 5 */}
            <div ref={ref} className={styles.subject5}>
                <Subject title={"נושא חמישי"} content={"כאן יש הסבר אחר לגמרי"} setOpenModal={setOpenModal} setContent={setContent}/>
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