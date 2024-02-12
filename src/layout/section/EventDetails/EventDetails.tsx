import s from './EventDetails.module.scss';
import {mockEvents} from "../../../mock/mockForEventDetails";
import {useParams} from "react-router-dom";
import {mockOddType} from "../../../mock/mockForEventDetails";
import {useState} from "react";
import {ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";

export const EventDetails = () => {
    const params = useParams();
    let navigate = useNavigate();
    const userId = params && params.userId ? parseInt(params.userId) : 0;
    const data = mockEvents[userId];
    const currentOdds = mockOddType;
    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    }
    // Проверка, выбрана ли радиокнопка
    const isOptionSelected = selectedOption !== '';

    const handleBet = () => {
        const result = `Спасибо, ваша ставка [Матч:
                                    ${data.clubTitle.toUpperCase()}, 
                                    со ставкой:[${selectedOption.toUpperCase()}] принята!`;
        return navigate("/",{state:{msg:result,isNotificaton:true}});
    }
    return (
        <section className={s.eventDetails}>
            <div className={s.container}>
                <h3 className={s.soccerTitle}>{data.soccerTitle}</h3>
                <span className={s.date}>{data.date}</span>
                <div className={s.radioGroup}>
                    {
                        currentOdds.map(item => <div>
                            <input
                                type="radio"
                                value={item.value}
                                checked={selectedOption === item.value}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor={item.value}>
                                {item.value}
                            </label>
                        </div>)
                    }
                </div>
                <button className={s.btn}
                        disabled={!isOptionSelected}
                        onClick={handleBet}>
                    Сделать ставку
                </button>
            </div>
        </section>
    );
};

