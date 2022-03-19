import PropTypes from 'prop-types';
import AddButton from "./AddButton";

function Header({title, onAdd, showAdd, expandAll, toggleExpand}) {

    return (
        <header className={'header'}>
            <h1>{title}</h1>
            <AddButton onClick={toggleExpand} color={expandAll?'red':'green'} text={expandAll?'Collapse all':'Expand all'}/>
            <AddButton onClick={onAdd} color={showAdd?'red':'green'} text={showAdd?'Close':'Add'}/>
        </header>
    );
}

Header.defaultProps = {
    title: 'Contacts',
}
Header.propTypes ={
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color:'red',
    backgroundColor:'black',
}


export default Header;








