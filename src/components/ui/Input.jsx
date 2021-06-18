import clss from './Input.module.css';

const Input = ({ label, inputAttr }) => {
  return (
    <div className={clss.input}>
      <label htmlFor={inputAttr.id}>{label}</label>
      <input {...inputAttr} />
    </div>
  );
};

export default Input;
