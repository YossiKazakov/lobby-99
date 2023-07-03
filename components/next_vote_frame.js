import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { RWebShare } from "react-web-share";

import BackGroundPic from '../images/next-vote-frame/next-vote-background1.svg'
import StarWithLobby from '../images/next-vote-frame/orange_star_with_text_and_link.svg'
import PurpleBackground from '../images/next-vote-frame/purple_background_for_timer.svg'
import ShareStar from '../images/next-vote-frame/share_purple_star.svg'
import Lobby99 from '../images/next-vote-frame/orange_loby99.svg'

import styles from '../styles/nextvote.module.css';

const shareText = "השנה לקחתי חלק בהישגים משמעותיים עבור החברה הישראלית יחד עם לובי 99";
const absoluteTextContent = "מחכים לך בהצבעה";
const now = new Date();
const voteDate = new Date(now); // The voteDate variable will change according to the actual date of voting
voteDate.setDate(voteDate.getDate() + 1); // Right now it just set to tomorrow
voteDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());

const Countdown = () => {
    const [countdown, setCountdown] = useState('');
    const targetDate = new Date(voteDate).getTime();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date().getTime();
            const distance = targetDate - currentDate;

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

            setCountdown(`${hours}:${minutes}:${seconds}`);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return <div>{countdown}</div>
}

export default function NextVote({ name, id }) {
    return (
        <div className={styles.container}>
            <Image id='backGroundSvg' src={BackGroundPic} alt='background' fill />
            <div className={styles.inner}>
                <div className={styles.textAndTime}>
                    <div className={styles.text}>
                        <span>{","}{name}</span><span>{absoluteTextContent}</span>
                    </div>
                    <div className={styles.purpleBackground}>
                        <Image id='purpleBackgroundSvg' src={PurpleBackground} alt='timer' fill />
                        <div className={styles.time}>
                            <Countdown />
                        </div>
                    </div>
                </div>
                <div className={styles.orangeLoby}>
                    <Image id='orangelobby' src={Lobby99} alt='Lobby99' fill />
                </div>
                <div className={styles.orangeStar}>
                    <Link href="https://lobby99.org.il/"><Image id='lobbystar' src={StarWithLobby} alt='Click Here' fill /></Link>
                </div>
                <div className={styles.purpleStar}>
                    <RWebShare
                        data={{
                            text: shareText,
                            url: `https://lobby-delta.vercel.app/${id}`,
                            title: "לובי 99 - המקף שמחבר בין ההמון לשלטון",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <Image id='sharestar' src={ShareStar} alt='Click Here' fill />
                    </RWebShare>
                </div>
            </div>
        </div>
    )
}
