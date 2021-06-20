import React from 'react';
import clss from './Input.module.css';

const Input = React.forwardRef(({ label, inputAttr }, ref) => {
  return (
    <div className={clss.input}>
      <label htmlFor={inputAttr.id}>{label}</label>
      <input ref={ref} {...inputAttr} />
    </div>
  );
});

export default Input;
