import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import db from "../../firebase";
import './Plans.css';

/** NOTE: MODULE UNDER DEBUGGING FOR PAYMENT REDIRECT FAILURE */
function Plans() {
    const [products, setProducts] = useState([]);
    const [subscription, setSubscription] = useState(null);
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        db.collection('customers')
            .doc(user.uid)
            .collection('subscriptions')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(async subscription => {
                    setSubscription({
                        role: subscription.data().role,
                        current_period_end: subscription.data().current_period_end.seconds,
                        current_period_start: subscription.data().current_period_start.seconds,
                    })
                })
            })
    }, [user.uid])

    useEffect(() => {
        db.collection("products")
            .where("active", "==", true)
            .get()
            .then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async (productDoc) => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection('prices').get();
                    priceSnap.docs.forEach((price) => {
                        console.log('price snap', price.data());

                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        };
                    });
                });
                setProducts(products)
            });
    }, []);


    /** BELOW BLOCK IS UNDER DEBUGGING FOR PAYMENT REDIRECT FAILURE */
    const checkout = async (priceId) => {
        const docRef = await db.collection('customers')
            .doc(user.uid)
            .collection('checkout_sessions')
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                alert(`An error occured' ${error.message}`);
            }

            if (sessionId) {
                /** API TEST KEY REMOVED FOR PRIVACY */
                const stripe = await loadStripe('*********************************');
                stripe.redirectToCheckout({ sessionId })
            }
        })
    }

    return (
        <div className='plans'>
            <br />
            {subscription && <p>Renewal Date: {new Date(subscription.current_period_end * 1000).toLocaleDateString()}</p>}
            {Object.entries(products).map(([productId, productData]) => {
                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);
                return (
                    <div key={productId} className={`${isCurrentPackage && 'plans__plan--disabled'} plans__plan`}>
                        <div className='plans__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => checkout(productData?.name)}>{isCurrentPackage ? 'Current Package' : 'Subscribe'}</button>
                    </div>
                )
            })}
            <div>
                <h3>Placeholder to test payment gateway integration</h3>
                <button className='plans__paymentTestButton' onClick={() => { window.location = 'https://buy.stripe.com/test_4gw6pFdXz0ZT7gk001' }}>Pay Now</button>
            </div>
        </div>
    )
}

export default Plans;