import styled from 'styled-components';

export const ButtonComponent = styled.button`
  width: 100%;

  padding: 1rem 2.5rem;

  font-size: 1rem;

  background-color: ${({ theme }) => theme.primary};
  border: 0;
  border-radius: 8px;

  color: ${({ theme }) => theme.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.primaryDark};
    pointer-events: none;

    * {
      opacity: .5;
    }
  }
`;
