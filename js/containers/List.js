import { connect } from "react-redux";
import List from '../components/List';
import { toggle, remove, removeAter2Sec } from "../redux/actions";

const mapState = (state, ownProps) => {
    let todosFiltered = state.todos;
    if (ownProps.location.pathname === '/done') 
        todosFiltered = todosFiltered.filter(elem => elem.done)
    if (ownProps.location.pathname === '/not-done')
        todosFiltered = todosFiltered.filter(elem => !elem.done)
    return {
        items: todosFiltered,
        filter: ownProps.location.pathname
    }
};

const mapDispatch = (dispatch) => {
    return {
        toggle: (element) => dispatch(toggle(element)),
        remove: (element) => dispatch(remove(element)),
        asyncRemove: (element) => dispatch(removeAter2Sec(element))
    }
};

export default connect(mapState, mapDispatch)(List);