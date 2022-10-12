import { HandPalm, Play } from "phosphor-react";
import * as S from './styles';

import { ContentWrapper } from "../../components/data-display/ContentWrapper"
import { TextInput } from "../../components/handlers/TextInput";
import { Button } from "../../components/handlers/Button";
import { TimerClock } from "../../components/data-display/TimerClock";
import { useTimer } from "../../hooks/useTimer";

export const Timer = () => {
  const { setCurrentTimerInfo, handleToggleTimer, currentTimer } = useTimer();

  const handleChangeTimerTitle = (value: string) => {
    setCurrentTimerInfo({
      title: value,
    })
  }
  const handleChangeTimerValue = (value: string) => {
    const secondsRemaining = Number(value) * 60;

    setCurrentTimerInfo({
      secondsRemaining,
    })
  }

  return (
    <ContentWrapper activeSection="timer">
      <S.Content>
        <header>
          <span>Vou trabalhar em</span>
          <TextInput
            placeholder="Dê um nome para o seu projeto"
            onInputChange={handleChangeTimerTitle}
          />
          <span>durante</span>
          <TextInput
            placeholder="00"
            inputType="number"
            onInputChange={handleChangeTimerValue}
          />
          <span>minutos</span>
        </header>

        <main>
          <TimerClock />
        </main>

        <footer>
          <Button
            onClick={handleToggleTimer}
            disabled={!currentTimer.secondsRemaining || !currentTimer.title}
            variant={currentTimer.running ? 'stop' : 'init'}
          >
            {currentTimer.running ? (
              <>
                <HandPalm />
                <span>Interromper</span>
              </>
            ) : (
              <>
                <Play />
                <span>Começar</span>
              </>
            )}
          </Button>
        </footer>
      </S.Content>
    </ContentWrapper>
  )
}