import s from './Header.module.scss';
import Logo from "../../components/Logo/Logo";
export const Header = () => {
    return (
        <header className={s.header}>
            <Logo/>
        </header>
    );
};


