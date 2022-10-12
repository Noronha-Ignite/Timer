import { useTimer } from '../../../hooks/useTimer'
import * as S from './styles'

export const TimerClock = () => {
  const { currentTimer } = useTimer();

  const mins = Math.floor(currentTimer.secondsRemaining / 60);
  const seconds = currentTimer.secondsRemaining - (mins * 60);

  const minsStr = mins.toString().length === 2 ? mins.toString() : `0${mins}`
  const secsStr = seconds.toString().length === 2 ? seconds.toString() : `0${seconds}`

  return (
    <S.Container>
      <h3>{minsStr[0]}</h3>
      <h3>{minsStr[1]}</h3>
      <h4>:</h4>
      <h3>{secsStr[0]}</h3>
      <h3>{secsStr[1]}</h3>
    </S.Container>
  )
}
