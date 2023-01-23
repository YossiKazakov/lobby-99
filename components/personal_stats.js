import Image from "next/image";
import styles from '../styles/personal_stats.module.css'
import ExclamationStar from '../images/personal-stats-frame/exclamation_star.svg'
import { numOfVotes } from "../data/consts";



export default function PersonalStats({ numOfPersonalVotes }){
    numOfPersonalVotes = 0
    if (numOfPersonalVotes == 0) {
        return (
            <StillDidntVote />
        )
    }
    else {
        return (
            <WishToHereMore />
        )
    }
}

function StillDidntVote(){
    return(
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

function WishToHereMore(){

}