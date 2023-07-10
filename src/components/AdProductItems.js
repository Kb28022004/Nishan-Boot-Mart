import React from 'react'
import FormatPrice from '../Helper/FormatPrice';

const AdProductItems = ({product}) => {
  return (
    <div className="card">
    <figure>
        <img src={product.image} alt={product.name} />
        <figcaption className='caption'>{product.category}</figcaption>
    </figure>
    <div className="card-data">
        <div className="card-data-flex">
            <h3>{product.name}</h3>
            <p className="card-data--price">
                {<FormatPrice price={product.price}/>}
            </p>
        </div>
    </div>
</div>
  )
}
 export default AdProductItems