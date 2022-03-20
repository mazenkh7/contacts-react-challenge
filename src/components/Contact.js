import {FaHistory, FaPencilAlt, FaTimes} from 'react-icons/fa'
import EditContact from "./EditContact";

function Contact({toggleHistory, submitEdit, cancelEdit, contact, onDelete, doubleClick, onClick, onEdit}) {

    return (
        <>{ contact.editMode?//when edit button (pencil) is clicked
            <EditContact contact={contact} submitEdit={submitEdit} cancelEdit={cancelEdit}/>

            ://Normal viewing mode below

            <div className={`contact ${contact.expanded ? 'expanded' : ''}`}
                 onDoubleClick={() => {
                     doubleClick(contact.id);
                 }}
                 onClick={(e) => {
                     onClick(contact.id);
                 }}>
                <h3> {/* show first, last names and a delete x button */}
                    {contact.fname} {contact.lname}
                    <FaTimes style={{color: 'red'}} onClick={(e) => {
                        e.stopPropagation();
                    }}
                             onDoubleClick={(e) => {
                                 e.stopPropagation(); //so that the x button works bec it's a child of the task div
                                 onDelete(contact.id);
                             }}/>
                </h3>
                { //expansion condition
                    contact.expanded ? <>
                            <p>
                                {contact.number}
                                <FaPencilAlt onClick={(e) => {
                                    e.stopPropagation();
                                    onEdit(contact.id);
                                }}/>
                            </p>
                            <p>
                                {contact.email}
                                <FaHistory onClick={(e)=>{
                                    e.stopPropagation();
                                    toggleHistory(contact.id);
                                }}/>
                            </p>
                        </> //expanded look

                        : <></> //not expanded look
                }
            </div>
        }</>

            );
}

export default Contact;