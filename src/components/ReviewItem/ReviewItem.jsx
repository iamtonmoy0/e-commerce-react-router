
import './ReviewItem.css';
export const ReviewItem = (product) => {
	const {name,price,img}=product.product; 
		return (
		<div>
			<ul className="review-cart">
				<img src={img} alt=""  />
				<h3>{name}</h3>
				<p>Price :{price} $</p>
			</ul>
		</div>
	);
}


