import React from 'react'
import {Button} from 'antd'
import {WechatOutlined} from '@ant-design/icons'
import { DatePicker } from 'antd';

export default class App extends React.Component{


    render(){
        const { RangePicker } = DatePicker;
        return(
            <div>
                <Button type='primary'>BTN</Button>
                <WechatOutlined/>
                <div style={{textAlign:'center'}}>
                <RangePicker />
            </div>
            </div>
        )
    }
}
