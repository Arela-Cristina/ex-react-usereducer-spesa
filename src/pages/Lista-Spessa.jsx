import { useState } from 'react';
import style from './Lista-Spessa.module.css';
import groseryCart from '../../public/carrito-de-compras.png';

export default function ListaDellaSpessa() {


    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    const [product, setProduct] = useState(products);

    const [addProduct, AddedProducts] = useState([])

    return (
        <section className={style.customList}>

            <div className={style.titleList}>Lista de la Spessa</div>

            {product.map((p, i) => {
                console.log('product:', p, 'index:', i);

                return (
                    <div key={i} className={style.list}>

                        <ul>
                            <li>Prodotto: {p.name}</li>
                        </ul>


                        <ul>
                            <li>Prezzo: {p.price} €</li>
                        </ul>

                        <button className={style.addButton}>Aggiungi
                            <img className={style.cart} src={groseryCart} alt="grosery cart" />
                        </button>
                    </div>
                );
            })}
        </section>
    )
}