import { connect } from "react-redux";
import List from '../components/List';

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

export default connect(mapState)(List)