import { connect } from "react-redux";
import List from '../components/List';
import { toggle } from "../redux/actions";

const mapState = (state, ownProps) => {
    let todosFiltered = state.todos;
    if (ownProps.location.pathname === '/done') 
        todosFiltered = todosFiltered.filter(elem => elem.done)
    if (ownProps.location.pathname === '/not-done')
        todosFiltered = todosFiltered.filter(elem => !elem.done)
    return {
        items: todosFiltered
    }
};

const mapDispatch = (dispatch) => {
    return {
        toggle: (element) => dispatch(toggle(element))
    }
}

export default connect(mapState, mapDispatch)(List);