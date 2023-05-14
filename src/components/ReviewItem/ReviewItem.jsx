
import './ReviewItem.css';
export const ReviewItem = ({product,handleRemove}) => {
		const {name,price,img,id,quantity}=product; 
		
		return (
		<div>
			<ul className="review-cart">
				<img src={img} alt=""  />
				<h3>{name}</h3>
				<p>Price :{price} $</p> 
				<p>Quantity: {quantity}</p>
				<button onClick={()=>handleRemove(id)}>Delete product</button>
			</ul>
		</div>
	);
}


