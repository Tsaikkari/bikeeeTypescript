import CardTop from './CardTop';
import CardBottom from './CardBottom';
import { BikeProps } from '../types';

const Card = ({ model, occurrences, make }: BikeProps) => {
  return (
    <div className='card'>
      <CardTop model={model} />
      <CardBottom make={make} occurrences={occurrences} />
    </div>
  )
}

export default Card;
