import { useInView } from 'react-intersection-observer';
import styles from './member.module.css';
import Image from 'next/image';
import maintanceImage from '../under_maintenance.png'


export default function Member({ member }) { // Make component for every refference
    const { ref: ref1, inView: elementIsVisible1 } = useInView();
    const { ref: ref2, inView: elementIsVisible2 } = useInView();
    const { ref: ref3, inView: elementIsVisible3 } = useInView();
    const { ref: ref4, inView: elementIsVisible4 } = useInView();


    return (<>
        <div ref={ref1} className="row">
            <div className="content">
                <h1>היי,
                <span className={`${styles.hidden} ${elementIsVisible1 ? styles.show : ''}`}> 
                    {member.name}<br/></span>
                ברוך הבא לסיכום השנה<br/>
                שהוכן במיוחד עבורך</h1>
            </div>
        </div>
        <div ref={ref2} className="row">
            <div className="content">
                <h2 className={`${styles.hidden} ${elementIsVisible2 ? styles.show : ''}`}>
                    לורם איפסום דולור סיט אמט, קונסקטטור אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף־קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה ש”יצמה ברורק“. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. ושבעגט לבם סולגק. בראיט ולחת צורק מונחף, בגורמי מג׳מש. תרבנך וסתעד לכנו סתשם השמה – לתכי מורגם בורק? לתיג ישבעס.
                </h2>
            </div>
        </div>

        <div ref={ref3} className="row">
            <div className="content">
                <div className="left-content">
                    <span className={`${styles.rocket} ${elementIsVisible3 ? styles.animateRocket : ''}`}>
                    🚀
                    </span>
                </div>
            </div>
        </div>

        <div ref={ref4} className="row">
            <div className="content">
                <div className="center-content">
                    <span className={`${styles.hidden} ${elementIsVisible4 ? styles.show : ''}`}> 
                        <Image id="under_maintenance" src={maintanceImage} alt="under maintenance" width={600} height={500}/>
                    </span>
                </div>
            </div>
        </div>

    </>)}