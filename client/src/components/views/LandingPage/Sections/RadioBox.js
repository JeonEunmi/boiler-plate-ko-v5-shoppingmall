import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';

const { Panel } = Collapse;

function RadioBox(props) {

    const [RadioCk, setRadioCk] = useState(0)

    const handleToggle = (e) => {

        setRadioCk(e.target.value);
        props.handelFilters(e.target.value);

    }
    const renderRadioLists = () => (
        props.list && props.list.map(value => (

            <Radio key={value._id} value={value._id}> {value.name} </Radio>
        ))
    )

    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Price" key="1">
                    <Radio.Group onChange={handleToggle} value={RadioCk}>
                        {renderRadioLists()}
                    </Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox
