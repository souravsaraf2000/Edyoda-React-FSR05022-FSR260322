import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return <div className={styles.headerContainer}>
        <div className={styles.menuContainer}>
            <div className={styles.menuItems}>Index</div>
            <div className={styles.menuItems}>Food</div>
            <div className={styles.menuItems}>About</div>
        </div>
    </div>
}

export default Header;