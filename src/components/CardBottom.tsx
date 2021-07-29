import { BottomProps } from '../types';

const CardBottom = ({ make, occurrences }: BottomProps) => {
  return (
    <div className='card-bottom'>
      <h1 className='make'>{make}</h1>
      <p className='instock'>In stock: {occurrences}</p>
    </div>
  )
}

export default CardBottom;
