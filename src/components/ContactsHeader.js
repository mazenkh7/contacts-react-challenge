import Button from "./Button";

function ContactsHeader({onAdd, showAdd, expandAll, toggleExpand}) {

    return (
        <header className={'header'}>
            <h1>Contacts</h1>
            <div className={'twp-pages'}>
            <Button onClick={toggleExpand} color={expandAll?'red':'green'} text={expandAll?'Collapse all':'Expand all'}/>
            <Button onClick={onAdd} color={showAdd?'red':'green'} text={showAdd?'Close':'Add'}/>
            </div>
        </header>
    );
}

export default ContactsHeader;








