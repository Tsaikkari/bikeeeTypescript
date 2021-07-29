import { TopProps } from '../types';

const CardTop = ({ model }: TopProps) => {
  return (
    <div className='card-top'>
      <h4 className='model'>{`${model[0].toUpperCase()}${model.slice(1)}`}</h4>
    </div>
  )
}

export default CardTop;
