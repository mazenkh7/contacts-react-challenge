import {FaPencilAlt, FaTimes} from 'react-icons/fa'

function Contact({contact, onDelete, doubleClick, onClick}) {
    return (
        <div className={`contact ${contact.expanded ? 'expanded' : ''}`}
             onDoubleClick={() => {
                 doubleClick(contact.id);
             }}
             onClick={(e) => {
                 onClick(contact.id);
             }}>
            <h3> {/* show first, last names and a delete x button */}
                {contact.firstName} {contact.lastName}
                <FaTimes style={{color: 'red'}} onClick={(e) => {
                    e.stopPropagation(); //so that the x button works bec it's a child of the task div
                    onDelete(contact.id);
                }}/>
            </h3>
            { //expansion condition
                contact.expanded ?
                    <>
                        <p>
                            {contact.number}
                            <FaPencilAlt onClick={(e) => {
                                e.stopPropagation();
                                console.log("editing",contact.id);
                            //edit???
                            }
                            }/>
                        </p>
                        <p>{contact.email}</p>
                    </> //expanded look

                    : <></> //not expanded look
            }
        </div>
    );
}

export default Contact;