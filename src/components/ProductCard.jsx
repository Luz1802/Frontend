import { useState } from 'react';
import styles from './Productcard.module.css';

function ProductCard ( {name, category, price, image, description } ) { 
    const [ liked, setLiked ] = useState(0);
    const [ isLiked, setIsLiked ] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLiked(liked - 1);
            setIsLiked(false);
        } else {
            setLiked(liked + 1);
            setIsLiked(true);
        }
    };

    return (

        <article className = {styles.productCard}>
            <img src = { image } alt = { name } className = {styles.productImage} />
            <div className = {styles.productInfo}>
                <span className = {styles.productCategory}>{ category }</span>
                <h3 className = {styles.productName}>{ name }</h3>
                <p className = {styles.productDescription}>{ description }</p>
                <div className = {styles.productFooter}>
                    <span className = {styles.productPrice}>${price }</span>
                    <button 
                    className = {`${styles.btnLike} ${isLiked ? styles.liked : ''}`}
                    onClick = { handleLike }
                    >
                        { isLiked ? '❤️' : '🤍' } { liked } Me gusta
                    </button>
                </div>
            </div>
        </article>
    )
}


export default ProductCard;