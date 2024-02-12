import s from './SectionTitle.module.scss';
type SectionTitlePropsType ={
    title:string
}
export const SectionTitle = ({title}:SectionTitlePropsType) => {
    return (
        <h1 className={s.sectionTitle}>
            {title}
        </h1>
    );
};
