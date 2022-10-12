import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  variant: 'init' | 'stop'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <S.ButtonComponent {...props}>
      {children}
    </S.ButtonComponent>
  )
}
