import styled from 'styled-components';
import { InputType } from '.';

export const InputContainer = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;

    color: ${({ theme }) => theme.placeholder};

    cursor: pointer;
  }

  & button:first-child {
    left: 12px;
  }
  & button:last-child {
    right: 12px;
  }
`;

export const Input = styled.input<{ inputType: InputType }>`
  width: ${({ inputType }) => inputType === 'normal' ? 276 : 72}px;
  background: none;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.placeholder };
  padding: 0.75rem 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white };

  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder };
  }

  &:not(:placeholder-shown), &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.white };
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
