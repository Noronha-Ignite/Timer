import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  * {
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
  }

  h3 {
    padding: 0 1.25rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.divider};

    color: ${({ theme }) => theme.white};
  }

  h4 {
    color: ${({ theme }) => theme.primary};
  }
`;
