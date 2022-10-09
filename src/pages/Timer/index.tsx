import { Play } from "phosphor-react";
import * as S from './styles';

import { ContentWrapper } from "../../components/data-display/ContentWrapper"
import { TextInput } from "../../components/handlers/TextInput";
import { Button } from "../../components/handlers/Button";
import { TimerClock } from "../../components/data-display/TimerClock";

export const Timer = () => {
  return (
    <ContentWrapper activeSection="timer">
      <S.Content>
        <header>
          <span>Vou trabalhar em</span>
          <TextInput
            placeholder="Dê um nome para o seu projeto"
          />
          <span>durante</span>
          <TextInput
            placeholder="00"
            inputType="number"
          />
          <span>minutos</span>
        </header>

        <main>
          <TimerClock />
        </main>

        <footer>
          <Button>
            <Play />
            <span>Começar</span>
          </Button>
        </footer>
      </S.Content>
    </ContentWrapper>
  )
}