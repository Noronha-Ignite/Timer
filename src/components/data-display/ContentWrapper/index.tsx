import * as S from './styles';
import { Timer, Scroll } from 'phosphor-react';
import Logo from '../../../assets/icons/logo.svg'

type ContentWrapperProps = {
  activeSection: 'timer' | 'history',
  children?: React.ReactNode
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ activeSection, children }) => {
  return (
    <S.Container>
      <S.Header>
        <img src={Logo} />

        <section>
          <S.IconBox active={activeSection === 'timer'}>
            <Timer size={24} />
          </S.IconBox>
          <S.IconBox active={activeSection === 'history'}>
            <Scroll size={24} />
          </S.IconBox>
        </section>
        
      </S.Header>

      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  );
}