import { useRef, useState } from 'react';
import Input from '../../ui/Input';
import clss from './MealItemForm.module.css';

const MealItemForm = ({ itemId, onAddItem }) => {
  const inputRef = useRef();
  const [isInputValid, setIsInputValid] = useState(true);

  const handleSubmit = ev => {
    ev.preventDefault();
    const amount = +inputRef.current.value.trim();

    if (!amount || amount < 1 || amount > 5) {
      return setIsInputValid(false);
    }

    onAddItem(amount);
    setIsInputValid(true);
  };

  return (
    <form className={clss.form} onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        label="Amount"
        inputAttr={{
          id: itemId,
          name: 'amount',
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!isInputValid && <p>Invalid amount</p>}
    </form>
  );
};

export default MealItemForm;
