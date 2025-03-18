import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Graph from './Graph';

interface ResultProps {
  graphData: number[][];
  WordsPerMinute: number;
  Accuracy: number;
  CorrectChars: number;
  CorrectWords: number;
  TotalChar: number;
}

function Result({
  graphData,
  WordsPerMinute,
  Accuracy,
  CorrectChars,
  TotalChar,
}: ResultProps) {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <div className="flex justify-between items-end mx-auto max-w-[1000px]">
      <div className="flex-col pb-[30px] ">
        <div style={{ color: theme.secondary }}>WPM</div>
        <div style={{ color: theme.primary }}>{WordsPerMinute}</div>
        <div style={{ color: theme.secondary }}>Accuracy</div>
        <div style={{ color: theme.primary }}>{Accuracy}%</div>
        <div style={{ color: theme.secondary }}>Characters</div>
        <div style={{ color: theme.primary }}>
          {TotalChar}/{CorrectChars}/{TotalChar - CorrectChars}
        </div>
      </div>
      <div>
        <Graph
          graphData={graphData}
          WordsPerMinute={WordsPerMinute}
          accuracy={Accuracy}
        ></Graph>
      </div>
    </div>
  );
}

export default Result;
