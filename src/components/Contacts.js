import Contact from "./Contact";
function Contacts({submitEdit, cancelEdit, contacts, onDelete,click, doubleClick, onEdit, toggleHistory}) {
    return (
        <div className={'scroll-view'}>
            {contacts.map((contact) => (
                <Contact key={contact.id} toggleHistory={toggleHistory} submitEdit={submitEdit} cancelEdit={cancelEdit} onEdit={onEdit} contact={contact} onDelete = {onDelete} doubleClick={doubleClick} onClick={click}/>
            ))}
        </div>
    );
}

export default Contacts;