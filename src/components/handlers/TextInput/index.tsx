import { HTMLAttributes } from 'react';

import * as S from './styles';

export type InputType = 'normal' | 'number';

type TextInputProps = {
  inputType?: InputType
} & HTMLAttributes<HTMLInputElement>;

export const TextInput: React.FC<TextInputProps> = ({
  inputType = 'normal',
  ...props
}) => {
  return (
      <S.Input
        inputType={inputType}
        type="text"
        {...props}
      />
  )
}
