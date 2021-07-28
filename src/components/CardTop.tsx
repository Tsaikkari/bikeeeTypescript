import { TopProps } from '../types';

const CardTop = ({ make }: TopProps) => {
  return (
    <div className='card-top'>
      <h4 className="make-name">{make}</h4>
    </div>
  )
}

export default CardTop;
