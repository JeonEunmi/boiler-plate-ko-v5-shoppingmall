import React from 'react';
import { Descriptions, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';

function ProductInfo(props) {

    let price=(Number(props.detail.price)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    const dispatch = useDispatch();
    
    const onClickHandler = () => {

        // 필요한 정보를 cart 필드에다가 넣어준다.
        dispatch(addToCart(props.detail._id));

    }

    return (
        <div>
            <Descriptions title="정보" bordered>
                <Descriptions.Item label="가격">{price} 원</Descriptions.Item>
                <Descriptions.Item label="sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display : 'flex', justifyContent : 'center' }}>
                <Button size= "large" shape="round" type="danger" onClick={onClickHandler}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo
