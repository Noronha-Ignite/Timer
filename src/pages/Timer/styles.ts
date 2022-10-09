import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  max-width: 720px;

  header {
    display: flex;

    align-items: center;

    span {
      color: ${({ theme }) => theme.title};
      font-size: 1.125rem;
      font-weight: 700;
      white-space: nowrap;
    }

    input {
      margin: 0 8px;
    }
  }

  main {
    margin: 4rem 0;
  }

  footer {
    width: 100%;
  }
`;
