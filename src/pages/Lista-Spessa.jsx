import { useState } from 'react';
import style from './Lista-Spessa.module.css';

export default function ListaDellaSpessa() {


    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    const [product, setProduct] = useState(products);

    return (
        <section className={style.customList}>

            <div className={style.titleList}>Lista de la Spessa</div>

            {product.map((p, i) => {
                console.log('product:', p, 'index:', i);

                return (
                    <div key={i} className={style.list}>

                        <ul>
                            <li>{p.name}</li>
                        </ul>


                        <ul>
                            <li>{p.price} €</li>
                        </ul>

                    </div>
                );
            })}
        </section>
    )
}