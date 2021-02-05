import React, { useState } from 'react'
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        // 누른 것의 index를 구하고 (없는 value를 넣으면 -1을 반환함)
        const currentIndex = Checked.indexOf(value);

        // 전체 checked 된 state 에서 현재 누른 checkbox가 이미 있다면 -> false
        const newChecked = [...Checked]

        if(currentIndex === -1){
            // state에 넣어준다.
            newChecked.push(value)
        }else {
            // 빼준다
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked);
        props.handelFilters(newChecked);

    }

    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (

        <React.Fragment key = {index}>
            <Checkbox onChange={() => handleToggle(value._id)} checked={Checked.indexOf(value._id) === -1 ? false : true} />
            <span>{value.name} </span>
        </React.Fragment>

    ))

    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="Continent" key="1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
