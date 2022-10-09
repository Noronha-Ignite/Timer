import styled from 'styled-components';
import { InputType } from '.';


export const Input = styled.input<{ inputType: InputType }>`
  width: ${({ inputType }) => inputType === 'normal' ? 276 : 72}px;
  background: none;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.placeholder };
  padding: 0.75rem 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white };

  &::placeholder {
    color: ${({ theme }) => theme.placeholder };
  }

  &:not(:placeholder-shown), &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.white };
  }
`;
