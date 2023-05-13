import Cart from "../Cart/Cart";

export const Order = () => {
	return (
		<div className="shop-container">
			<div className="products-container">
				Shop
			</div>
			<div className="cart-container">
				<Cart cart={[]}/>

			</div>
			
		</div>
	);
}


