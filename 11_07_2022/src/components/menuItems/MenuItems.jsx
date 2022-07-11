import React from 'react'
import styles from './MenuItems.module.css';

const MenuItems = () => {
    const itemNames = ['Pizza','Biriyani', 'Cake', 'Dosa', 'Sandwich']

    return ( 
        <div>
            <ul>
                {
                    itemNames.map(item => <a href={`./index.html#${item}`} key={item} className={styles.menuItems}><li>{item}</li></a>)
                }
            </ul>
        </div>
    );
}

export default MenuItems;