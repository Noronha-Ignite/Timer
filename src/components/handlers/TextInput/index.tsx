import { Minus, Plus } from 'phosphor-react';
import { HTMLAttributes, useEffect, useState } from 'react';

import * as S from './styles';

export type InputType = 'normal' | 'number';

type TextInputProps = {
  inputType?: InputType,
  onInputChange?: (value: string) => void;
} & HTMLAttributes<HTMLInputElement>;

export const TextInput: React.FC<TextInputProps> = ({
  inputType = 'normal',
  onInputChange,
  ...props
}) => {
  const [value, setValue] = useState('');

  const handleInputChange = (newValue: string) => {
    if (inputType === 'number' && newValue.length > 2) return;

    setValue(newValue)
  }
  
  const handleIncrement = () => {
    setValue(previous => {
      const previousNumber = Number(previous);

      if (isNaN(previousNumber) || previousNumber === 99) 
        return '';

      return (previousNumber + 1).toString()
    })
  }

  const handleDecrease = () => {
    setValue(previous => {
      const previousNumber = Number(previous);

      if (isNaN(previousNumber) || previousNumber - 1 < 1) 
        return '';

      return (previousNumber - 1).toString()
    })
  }

  useEffect(() => {
    onInputChange?.(value);
  }, [value]);

  return inputType === 'normal' ? (
    <S.Input
      inputType="normal"
      type="text"
      onChange={(e) => handleInputChange(e.target.value)}
      value={value}
      {...props}
    />
  ) : (
    <S.InputContainer>
      <button onClick={handleDecrease}>
        <Minus />
      </button>
      <S.Input
        max={99}
        inputType="number"
        type="number"
        onChange={(e) => handleInputChange(e.target.value)}
        value={value}
        {...props}
      />
      <button onClick={handleIncrement}>
        <Plus />
      </button>
    </S.InputContainer>
  )
}
