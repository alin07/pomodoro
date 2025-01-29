import { formatSecondsToTime } from '../utils/time'

import './loadingBar.css'
const cleanPercentage = (percentage: number) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = (props: { percentage: number; color: string; }) => {
  const { percentage, color } = props
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill='transparent'
      stroke={strokePct !== circ ? color : ''}
      strokeWidth={'2rem'}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

const Text = (props: { text: string; }) => {
  const { text } = props
  return (
    <text
      x='50%'
      y='50%'
      fill='#ffffffde'
      dominantBaseline='central'
      textAnchor='middle'
      fontSize={'1.5em'}
    >
      {text}
    </text>
  );
};

const LoadingBar = (props: { progress: number; total: number; isBreak: boolean }) => {
  const { progress, total, isBreak } = props

  const percentage = ((total - progress) / total) * 100;
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle color='light-grey' percentage={0} />
        <Circle color={isBreak ? 'LightSkyBlue' : 'Tomato'} percentage={pct} />
      </g>
      <Text text={formatSecondsToTime(progress)} />
    </svg>
  );
};

export default LoadingBar