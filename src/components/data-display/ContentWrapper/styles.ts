import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.section`
  flex: 1;
  width: 100%;
  max-width: 1120px;
  
  height: 740px;

  background: ${({ theme }) => theme.elements};
  border-radius: 8px;

  margin: 3rem auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem;
  padding-bottom: 0;

  & > img {
    height: 32px;
    margin-bottom: 3px;
  }

  section {
    padding: 0.75rem;
    display: flex;
    gap: 0.5rem;
  }
`;

const activeIconCss = css`
  color: ${({ theme }) => theme.primary};  
`;

export const IconBox = styled(Link)<{ active?: boolean }>`
  padding: 0.25rem;
  box-sizing: border-box;
  position: relative;

  color: ${({ theme }) => theme.white};

  ${({ active }) => active && activeIconCss}

  cursor: pointer;

  &:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;

    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.5rem;
`;
