import s from './Event.module.scss';
import {Icon} from "../../../../components/Icon/Icon";

type EventPropsType = {
    clubTitle: string,
    soccerTitle: string,
    date: string,
    time: string,
    score: Array<number>
}
export const Event = ({clubTitle, soccerTitle, date, time, score}: EventPropsType) => {
    return (
        <div className={s.event}>
            <div className={s.infoBlock}>
                <div className={s.info}>
                    <a href={'#'}>{clubTitle}</a>
                    <a href={'#'}> {soccerTitle}</a>
                </div>
                <div className={s.details}>
                    <Icon iconId={'bb'}/>
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

            </div>
        </div>
    );
};

