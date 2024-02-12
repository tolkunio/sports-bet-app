import s from './Event.module.scss';
import {Link} from "react-router-dom";
import {IScore} from "../../../../interfaces/IEventDetails";

type EventPropsType = {
    id:string,
    clubTitle: string,
    soccerTitle: string,
    date: string,
    time: string,
    scores: Array<IScore>
}
export const Event = ({id,clubTitle, soccerTitle, date, time, scores}: EventPropsType) => {
    return (
        <div className={s.event}>
            <div className={s.infoBlock}>
                <div className={s.info}>
                    <Link to={`/events/${id}`} className={s.link}>
                        {clubTitle}
                    </Link>
                    <a href={'#'}> {soccerTitle}</a>
                </div>
                <div className={s.details}>
                    <span className={s.bb}>BB</span>
                    <div className={s.date}>
                        <span>{date}</span>
                        <span>{time}</span>
                    </div>
                    <div className={s.null}>
                        <span>0</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div className={s.scoreBlock}>
                    {scores.map(item=>
                        <div className={s.score}>
                            <p className={s.odd}>{item.odd}</p>
                            <p className={s.value}>{item.score}</p>
                        </div>)}

            </div>
        </div>
    );
};

