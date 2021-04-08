import React from 'react'

class Header extends React.Component {
    handleKeyUp = (event) => {
        const {keyCode,target} = event
        if(keyCode !== 13){
            return
        }else{
            if(target.value === ''){
                alert('Invalid input')
            }else{
            const id = (this.props.len + 1)
            const todoObj = {id:id, name:target.value, done:false}
            this.props.update(todoObj)
            target.value=''
            }
        }

    }
    render() {  
        
        return (
            <div>
                <input onKeyUp={this.handleKeyUp} type="text" name="" id="" placeholder='Enter to add' />
            </div>
        )
    }
}

export default Header