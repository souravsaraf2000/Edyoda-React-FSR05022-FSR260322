import React from 'react'                               
import styles from './Card.module.css'

const Card = (props) => {
    const {foodItems} = props;
    return ( 
        <div className={styles.cardContainer}>
            {
                foodItems.map(item => 
                    <div className={styles.card} id={item.name} key={item.name}>
                        <img src={item.imageLink} alt={item.name} className={styles.images}/>
                        <h4 className={styles.itemName}>{item.name}</h4>
                    </div>
                )
            }
        </div>
    );
}

export default Card;