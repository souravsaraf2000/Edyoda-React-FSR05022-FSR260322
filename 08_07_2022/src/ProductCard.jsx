import React from 'react';

function ProductCard({item, cardStyle, imageStyle}) {
    console.log(cardStyle)
    return ( 
        <div className={cardStyle}>
            <img src={item.thumbnail} alt='productImage' className={imageStyle} />
            <p><b>{item.title}</b></p>
            <p><i>{item.description}</i></p>
            <p><b>Price:</b> <i>{item.price} $</i></p>
            <p><b>Rating: {item.rating} / 5</b></p>
        </div>
    );
}

export default ProductCard;