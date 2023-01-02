import { useInView } from 'react-intersection-observer';
import styles from './member.module.css';

export default function Frame2() {
    const { ref: ref, inView: elementIsVisible } = useInView({triggerOnce: true});


    return (<>
        <div ref={ref} className={styles.frame}>
            <div className="content">
                <h2 className={`${styles.hidden} ${elementIsVisible ? styles.show : ''}`}>
                    לורם איפסום דולור סיט אמט, קונסקטטור אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף־קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה ש”יצמה ברורק“. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. ושבעגט לבם סולגק. בראיט ולחת צורק מונחף, בגורמי מג׳מש. תרבנך וסתעד לכנו סתשם השמה – לתכי מורגם בורק? לתיג ישבעס.
                </h2>
            </div>
        </div>
        </>
        )}