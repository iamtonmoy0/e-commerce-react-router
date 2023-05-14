import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";

export const Order = () => {
	const products=useLoaderData();
	const [cart,setCart]=useState([products]);
	const handleRemove=(id)=>{
		const remaining=cart.filter(product=>product.id !== id);
		setCart(remaining);
		removeFromDb(id)
	}
	
	
	return (
		<div className="shop-container">
			<div className="products-container">
				{
					products.map(product=><ReviewItem key={product.id} product={product} handleRemove={handleRemove}/>)
				}
				
			</div>
			<div className="cart-container">
				<Cart cart={products} />

			</div>
			
		</div>
	);
}


