import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const sentiments = [
  <SentimentVeryDissatisfiedIcon color='error' />,
  <SentimentDissatisfiedIcon color='error' />,
  <SentimentNeutralIcon color='warning' />,
  <SentimentSatisfiedIcon color='success' />,
  <SentimentVerySatisfiedIcon color='success' />,
];

interface SentimentIconProps {
  magnitude: number;
  score: number;
}

const SentimentIcon = (props: SentimentIconProps) => {
  return <>{sentiments[Math.round((props.score + 1) * 2)]}</>;
};

export default SentimentIcon;
