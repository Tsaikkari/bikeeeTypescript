import { BottomProps } from '../types';

const CardBottom = ({ model, occurrences }: BottomProps) => {
  return (
    <div className='card-bottom'>
      <h1 className='model'>{`${model[0].toUpperCase()}${model.slice(1)}`}</h1>
      <p className='instock'>In stock: {occurrences}</p>
    </div>
  )
}

export default CardBottom;
