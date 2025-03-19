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

    // stato lista spessa
    const [product, setProduct] = useState(products);

    //stato carrello della spesa
    const [addedProduct, addProducts] = useState([])


    const updateProductQuantity = (product) => {

        const productIsAdded = addedProduct.map((p) =>
            p.name === product.name
                ? { ...p, quantity: p.quantity + 1 }
                : p
        )

        addProducts(productIsAdded);
    }


    const handleClickAddProduct = (product) => {

        const productIsAlreadyAdded = addedProduct.find(p => p.name === product.name)

        if (productIsAlreadyAdded) {
            updateProductQuantity(productIsAlreadyAdded);

        } else {
            const addNewProduct = [...addedProduct, {
                name: product.name,
                price: product.price,
                quantity: 1
            }];

            addProducts(addNewProduct);
        }
    }

    const removeFromCart = (product) => {
        const productIsAdded = addedProduct.map((p) =>
            p.name === product.name
                ? { ...p, quantity: p.quantity - 1 }
                : p
        ).filter(p => p.quantity > 0)

        addProducts(productIsAdded);
    }


    const handleClickRemoveProduct = (product) => {
        console.log('prodotto rimosso:', product);

        const productIsAlreadyAdded = addedProduct.find(p => p.name === product.name)

        if (productIsAlreadyAdded) {
            removeFromCart(productIsAlreadyAdded);
        }
    }

    const total = () => {
        return addedProduct.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0).toFixed(2);
    };

    return (
        <>
            <section className={style.customList}>
                <div className={style.titleList}>Lista de la Spessa</div>

                {product.map((p, i) => {

                    return (
                        <div key={i} className={style.list}>

                            <ul>
                                <li>Prodotto: {p.name}</li>
                            </ul>

                            <ul>
                                <li>Prezzo: {p.price} €</li>
                            </ul>

                            <button
                                className={style.addButton}
                                onClick={() => { handleClickAddProduct(p) }}
                            >Aggiungi
                                <img className={style.cart} src={groseryCart} alt="grosery cart" />
                            </button>

                        </div>
                    );
                })}
            </section>

            <section className={style.customList}>
                <div className={style.titleList}>Prodotti aggiunti al Carrello</div>
                {addedProduct.map((ap, i) => {
                    console.log('product:', ap, 'index:', i);

                    return (
                        <div key={i} className={style.list}>

                            <ul>
                                <li>Prodotto: {ap.name}</li>
                            </ul>


                            <ul>
                                <li>Prezzo: {ap.price} €</li>
                            </ul>

                            <ul>
                                <li>Quantita: {ap.quantity}</li>
                            </ul>

                            <button
                                className={style.addButton}
                                onClick={() => { handleClickRemoveProduct(ap) }}
                            >Rimuovi
                            </button>

                        </div>
                    );
                })}

                <span>Totale da pagare</span>
                <span>{total()}</span>

            </section>
        </>
    )
}