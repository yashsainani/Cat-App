import styles from './imgCard.module.css';

const ImgCard = ({source, setState}) => {
    const onClick = () => setState(source);

    return (
        <img src={source} alt="cat" onClick={onClick} className={styles.img} />
    );
};

export default ImgCard;