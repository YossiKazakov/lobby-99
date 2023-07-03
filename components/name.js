import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react'
import { AutoTextSize } from 'auto-text-size'
import Image from 'next/image';

import nameBg from '../images/name-frame/name-bg.svg';
import fun from '../images/name-frame/how-much-fun.svg';
import smiley from '../images/name-frame/smileyy.svg';
import yearsImg from '../images/name-frame/years.svg';
import monthsImg from '../images/name-frame/months.svg';
import daysImg from '../images/name-frame/days.svg';
import hoursImg from '../images/name-frame/hours.svg';
import minutesImg from '../images/name-frame/minutes.svg';
import secondsImg from '../images/name-frame/secondss.svg';

import styles from '../styles/name.module.css';

// This frame shows the lobby member name and the time that paseed sience he joiend to lobby

export default function Name({ name, join_at }) {
    const { ref: ref, inView: elementIsVisible } = useInView({ triggerOnce: true });
    const [seconds, setSeconds] = useState();
    const [minutes, setMinutes] = useState();
    const [hours, setHours] = useState();
    const [days, setDays] = useState();
    const [months, setMonths] = useState();
    const [years, setYears] = useState();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const current = new Date();
            const join = new Date(join_at);
            const diff = new Date(current - join);
            setSeconds(diff.getSeconds());
            setMinutes(diff.getMinutes());
            setHours(diff.getHours());
            setDays(diff.getDate() - 1);
            setMonths(diff.getMonth());
            setYears(diff.getFullYear() - 1970);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className={`${styles.container} ${elementIsVisible ? styles.bg : ''}`}>
            <div className={styles.inner}>
                <div className={styles.left0}>
                    <Image id="left0" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.left1}>
                    <Image id="left1" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.left2}>
                    <Image id="left2" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.left3}>
                    <Image id="left3" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.left4}>
                    <Image id="left4" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.left5}>
                    <Image id="left5" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.right1}>
                    <Image id="right1" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.right2}>
                    <Image id="right2" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.right3}>
                    <Image id="right3" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.right4}>
                    <Image id="right4" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.right5}>
                    <Image id="right5" src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.topsmiley}>
                    <Image id='smiley' src={smiley} alt="smiley" fill />
                </div>
                <div className={styles.topsmileyabovename}>
                    <Image id='smiley' src={smiley} alt="smiley" fill />
                </div>
                <div ref={ref} className={styles.bottomsmiley}>
                    <Image id='smiley' src={smiley} alt="smiley" fill />
                </div>
                <div className={`${styles.hidden} ${elementIsVisible ? styles.show : ''}`}>
                    <div className={styles.fun}>
                        <Image id='fun' src={fun} alt="how much fun" fill />
                    </div>
                </div>
                <div className={styles.textcircle}>
                    <Image id='textcircle' src={nameBg} alt={name} fill />
                    {/* adjust the name size to match it's container size */}
                    <div className={styles.textname}>
                        <AutoTextSize mode="oneline" minFontSizePx={0} maxFontSizePx={55} fontSizePrecisionPx={0.1} style={{ color: '#FBFFDA' }}> {name} </AutoTextSize>
                    </div>
                    {/* ######### */}
                </div>

                <div className={styles.years}>
                    < DateComp num={years} dateImg={yearsImg} />
                </div>
                <div className={styles.months}>
                    < DateComp num={months} dateImg={monthsImg} />
                </div>
                <div className={styles.days}>
                    < DateComp num={days} dateImg={daysImg} />
                </div>
                <div className={styles.hours}>
                    < DateComp num={hours} dateImg={hoursImg} />
                </div>
                <div className={styles.minutes}>
                    < DateComp num={minutes} dateImg={minutesImg} />
                </div>
                <div className={styles.seconds}>
                    < DateComp num={seconds} dateImg={secondsImg} />
                </div>
            </div>
        </div>
    )
}

export const DateComp = ({ num, dateImg }) => {
    if (num == 0) { return (<Image id='smiley' src={smiley} alt="" fill />) }
    return (<>
        <Image id='date' src={dateImg} alt="" fill />
        <div className={styles.number}>{num}</div>
    </>)
}