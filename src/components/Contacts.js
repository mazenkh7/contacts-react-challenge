import Contact from "./Contact";

function Contacts({submitEdit, cancelEdit, contacts, onDelete,click, doubleClick, onEdit}) {
    return (
        <>
            {contacts.map((contact) => (
                <Contact key={contact.id} submitEdit={submitEdit} cancelEdit={cancelEdit} onEdit={onEdit} contact={contact} onDelete = {onDelete} doubleClick={doubleClick} onClick={click}/>
            ))}
        </>
    );
}

export default Contacts;