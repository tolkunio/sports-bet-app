import s from './Logo.module.scss';
import {Icon} from "../Icon/Icon";
const Logo = () => {
    return (
        <div className={s.logo}>
            <Icon iconId={'logo'} height={'20'} width={'100'} viewBox={'0 0 100 20'}/>
        </div>
    );
};

export default Logo;
