import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { ReviewItem } from "../ReviewItem/ReviewItem";

export const Order = () => {
	const products=useLoaderData()
	
	
	return (
		<div className="shop-container">
			<div className="products-container">
				{
					products.map(product=><ReviewItem key={product.id} product={product}/>)
				}
				
			</div>
			<div className="cart-container">
				<Cart cart={products}/>

			</div>
			
		</div>
	);
}


