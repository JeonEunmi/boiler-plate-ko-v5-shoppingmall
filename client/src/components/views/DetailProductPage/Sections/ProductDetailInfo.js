import React from 'react';
import { Descriptions } from 'antd';

function ProductDetailInfo(props) {
    return (
        <div>
            <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="상세정보"><div dangerouslySetInnerHTML={ {__html: props.detail.description} }></div></Descriptions.Item>
            </Descriptions>
            
        </div>
    )
}

export default ProductDetailInfo
