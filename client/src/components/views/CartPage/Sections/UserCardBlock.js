import React from 'react';
import "./UserCardBlock.css";

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if(images.length > 0){
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (

        props.products && props.products.map((product, index) => (
            <tr key={index}>
                <td>
                    <img style = {{ width: '70px'}} alt="product" src={renderCartImage(product.images)} />  {product.name}
                </td>
                <td>
                    {product.quantity} 개
                </td>
                <td>
                    {(Number(product.price)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
                </td>
                <td>
                    <button onClick={() => props.removeItem(product._id)}>
                        Remove
                    </button>
                </td>
            </tr>
        ))
    )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product Quantity</th>
                        <th>Proudct Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
