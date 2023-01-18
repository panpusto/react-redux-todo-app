import { connect } from "react-redux";
import Form from "../components/Form";
import { add } from "../redux/actions";

const mapDispatch = (dispatch) => {
    return {
        addToDo: (element) => dispatch(add(element))
    }
};

export default connect(null, mapDispatch)(Form);
