import CountUI from '../../components/Count'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        add:(number)=>{dispatch(createIncrementAction(number))},
        minus:(number)=>{dispatch(createDecrementAction(number))},
        asyncAdd:(number)=>{dispatch(createIncrementAsyncAction(number, 500))},
}
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)