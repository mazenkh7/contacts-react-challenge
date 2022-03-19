import PropTypes from "prop-types";

function AddButton({color,text, onClick}){

    return(
        <button onClick={onClick} style={{backgroundColor:color}} className={"btn"}>
            {text}
        </button>
    );
}

AddButton.defaultProps = {
}

AddButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default AddButton;