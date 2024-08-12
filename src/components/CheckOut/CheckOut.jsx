import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import './checkout.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const CheckOut = () => {
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        emailConfirmacion: ''
    })
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    const { totalPrice, cart, removeProduct, clearCart } = useCartContext();

    const handleValores = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };


    const manejarFormulario = (e) => {
        e.preventDefault();

        if (!user.nombre || !user.apellido || !user.telefono || !user.email || !user.emailConfirmacion) {
            setError('Por favor complete todos los campos requeridos');
            return;
        }
        if (user.email !== user.emailConfirmacion) {
            setError('Los emails no coinciden')
            return;
        }

        const order = {
            items: cart.map((product) => ({
                id: product.id,
                nombre: product.title,
                cantidad: product.quantity
            })),
            total: totalPrice(),
            fecha: new Date(),
            nombre: user.nombre,
            apellido: user.apellido,
            telefono: user.telefono,
            email: user.email
        };

        Promise.all(
            order.items.map(async (productOrder) => {
                const db = getFirestore();
                const productRef = doc(db, 'products', productOrder.id);

                const productDoc = await getDoc(productRef);
                const stockActual = productDoc.data().stock;
                await updateDoc(productRef, {
                    stock: stockActual - productOrder.cantidad
                })
            })
        )
            .then(() => {
                const db = getFirestore();
                addDoc(collection(db, 'orders'), order)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        removeProduct();

                        Swal.fire({
                            title: '¡Gracias por tu compra!',
                            text: `Tu número de seguimiento es: ${docRef.id} `,
                            icon: 'success',
                            iconColor: 'rgb(231, 75, 101)',
                            color: 'black',
                            confirmButtonColor: 'rgb(231, 75, 101)'

                        })
                        clearCart();
                    })
                    .catch((error) => {
                        console.log('No se pudo crear la orden', error);
                        setError('Error en la orden')
                    })
            })
            .catch((error) => {
                console.log('No se pudo actualizar el stock', error);
                setError('No se actualizó el stock');
            });

        setUser({
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            emailConfirmacion: ''
        });
    };
    return (
        <div className='checkout'>
            <div className='div-form-compra'>
                <h2 className='h2-confirm'>Confirmación de compra</h2>
                <form className='form-compra' action="" onSubmit={manejarFormulario}>
                    <div>
                        <label>Nombre</label>
                        <input
                            type="text"
                            value={user.nombre}
                            onChange={handleValores}
                            name='nombre'
                        />
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input
                            type="text"
                            value={user.apellido}
                            onChange={handleValores}
                            name='apellido'
                        />
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input
                            type="number"
                            value={user.telefono}
                            onChange={handleValores}
                            name='telefono'
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={handleValores}
                            name='email'
                        />
                    </div>
                    <div>
                        <label>Confirmar email</label>
                        <input
                            type="email"
                            value={user.emailConfirmacion}
                            onChange={handleValores}
                            name='emailConfirmacion'
                        />
                    </div>
                    <div>
                        <button type='submit'>Enviar</button>
                    </div>

                    {error && <p>{error}</p>}


                </form>
            </div>
            <div className='resumen-compra'>
                <h2 className='h2-confirm'>Resumen de la compra</h2>
                {cart.map((product) => (
                    <div className='resumen' key={product.id}>
                        <img className='img-checkout' src={product.img} alt="" />
                        <div>
                            <p className='p-checkout'> {product.title} x {product.quantity} </p>
                            <p>$ {product.quantity * product.price}</p>
                        </div>
                    </div>
                ))}
                <div className='total'>
                    <h4>Total</h4>
                    <h4> ${totalPrice()}</h4>
                </div>

            </div>
        </div>
    )
}

export default CheckOut

