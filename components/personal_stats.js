import Image from "next/image";
import styles from '../styles/personal_stats.module.css'
import ExclamationStar from '../images/personal-stats-frame/exclamation.svg'
import { numOfVotes, minimalThreshold } from '../data/consts';
import YouveParticipated from '../images/personal-stats-frame/participates_in.svg'
import LeftStar from '../images/personal-stats-frame/left_star.svg'
import RightStar from '../images/personal-stats-frame/right_star.svg'
import TotalVotes from '../images/personal-stats-frame/votes_in_year.svg'
import WowHappyToHear from '../images/personal-stats-frame/happy_hearing_you.svg'
import HappyToHearMore from '../images/personal-stats-frame/happy_to_hear_more.svg'



export default function PersonalStats({ numOfPersonalVotes }) {

    if (numOfPersonalVotes == 0) {
        return (
            <StillDidntVote />
        )
    }
    else {
        const votedAllot = numOfPersonalVotes / numOfVotes > minimalThreshold
        return (
            <WishToHereMore numOfPersonalVotes={numOfPersonalVotes} votedAllot={votedAllot} />
        )
    }
}

function StillDidntVote() {
    return (
        <div className={styles.container}>
            <div className={styles.firstText}>
                עדיין לא השתתפת בהצבעות הלובי
            </div>
            <div className={styles.secondText}>
                זו ההזדמנות שלנו לשמוע ממך
            </div>
            <div className={styles.exclamationStar}>
                <Image src={ExclamationStar} alt="!!" fill />
            </div>
        </div>
    )
}

function WishToHereMore({ numOfPersonalVotes, votedAllot }) {
    return (
        <div className={styles.container}>
            <div className={styles.topText}>
                <Image src={YouveParticipated} fill />
            </div>
            <div className={styles.leftStar}>
                <Image src={LeftStar} fill />
                <div className={styles.textInLeftStar}>
                    {numOfPersonalVotes}
                </div>
            </div>
            <div className={styles.rightStar}>
                <Image src={RightStar} fill />
                <div className={styles.textInRightStar}>
                    {numOfVotes}
                </div>
            </div>
            <div className={styles.middleText}>
                <Image src={TotalVotes} fill />
            </div>
            <div className={styles.hearMore}>
                <Image src={votedAllot ? WowHappyToHear : HappyToHearMore} fill />
            </div>
        </div>
    )
}