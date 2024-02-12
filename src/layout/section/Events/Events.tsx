import s from './Events.module.scss';
import {Event} from "./Event/Event";
import {mockEvents} from './../../../mock/mockForEventDetails';
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";

const Events = () => {
    let{state} = useLocation();

    let msg = '';
    let isNotificaton = false;

    if (state != null) {
        msg = state.msg
        isNotificaton = state.isNotificaton
    }

    const [showNotification, setShowNotification] = useState(isNotificaton);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [state]);


    return (
        <section className={s.events}>
            <div className={s.container}>
                {showNotification && (<h2 className={s.result}>
                    {msg}
                </h2>)}
                {mockEvents.map((event) =>
                    <Event id={event.id}
                           clubTitle={event.clubTitle}
                           soccerTitle={event.soccerTitle}
                           date={event.date}
                           time={event.time}
                           scores={event.scores}/>)
                }
            </div>
        </section>
    );
};

export default Events;
