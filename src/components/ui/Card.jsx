import clss from './Card.module.css';

const Card = ({ className, children }) => {
  return <div className={`${clss.card} ${className ?? ''}`}>{children}</div>;
};

export default Card;
