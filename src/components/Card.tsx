import CardTop from './CardTop';
import CardBottom from './CardBottom';
import { BikeProps } from '../types';

const Card = ({ model, occurrences, make }: BikeProps) => {
  return (
    <div className='card'>
      <CardTop make={make} />
      <CardBottom model={model} occurrences={occurrences} />
    </div>
  )
}

export default Card;
