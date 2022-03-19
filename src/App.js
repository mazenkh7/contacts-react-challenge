import Header from "./components/Header";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import {useState} from "react";

function App() {
    const [contacts,setContacts] = useState([
        {
            id: 1,
            firstName: 'Mazen',
            lastName: 'Mahmoud',
            number: '+201115484828',
            email: 'mazen.k.eissa@gmail.com',
            expanded: false,
        },
        {
            id: 2,
            firstName: 'Mario',
            lastName: 'Nunez',
            number: '+01234567890',
            email: 'mn@gmail.com',
            expanded: false,
        },
        {
            id: 3,
            firstName: 'Simona',
            lastName: 'Paulescu',
            number: '+09876543210',
            email: 'sp@gmail.com',
            false: true,
        }
    ]);
    const [showAdd, setShowAdd] = useState(false);
    const [expandAll, setExpandAll] = useState(false);
    function addContact(contact){
        const id = contacts.length +1;
        const newCon = {id,...contact};
        setContacts([...contacts,newCon]);
        console.log(contacts);
    }

    function toggleExpand(){
        setContacts(contacts.map((contact)=>expandAll?{...contact, expanded:false}:{...contact, expanded:true}))
        setExpandAll(!expandAll);
    }

    function deleteContact(id){
        setContacts(contacts.filter((contact)=>contact.id!==id))
    }

    function contactDoubleClick(id){
        console.log(id);
    }

    function contactOnClick(id){
        // console.log(id);
        setContacts(contacts.map((contact)=>contact.id===id?{...contact, expanded:!contact.expanded}:contact))
        //toggle expand
    }
    return (
        <div className="container">

            <Header onAdd={()=>setShowAdd(!showAdd)} showAdd={showAdd} expandAll={expandAll} toggleExpand={toggleExpand}/>
            {showAdd&& <AddContact onAdd={addContact}/>}
            {
                contacts.length > 0?
                <Contacts contacts={contacts} onDelete={deleteContact} doubleClick={contactDoubleClick} click={contactOnClick}/>
                : 'No Contacts Yet'
            }
        </div>
    );
}

export default App;
