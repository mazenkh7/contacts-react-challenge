import Header from "./components/Header";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import {useState, useEffect} from "react";
import axios from 'axios';

function App() {
    const [contacts, setContacts] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [expandAll, setExpandAll] = useState(false);
    const API_ENDPOINT = 'https://contacts-api-challenge.herokuapp.com/contacts';
    // const API_ENDPOINT = 'http://localhost:8000/contacts';
    useEffect(() => {
        axios.get(API_ENDPOINT).then(response => {
            setContacts(response.data.map((d)=> ({...d, editMode: false, expanded: false})));
        })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function addContact(contact) {
        axios.post(API_ENDPOINT, contact).then(response => {
            setContacts(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    function toggleExpand() {
        setContacts(contacts.map((contact) => expandAll ? {...contact, expanded: false} : {...contact, expanded: true}))
        setExpandAll(!expandAll);
    }

    function deleteContact(id) {
        axios.delete(API_ENDPOINT + '/' + id).then(response => {
            // console.log(response);
            // setContacts(response.data.map((d)=> ({...d, editMode: false})));
            setContacts(contacts.filter((c)=>c.id!==id));
        })
            .catch(error => {
                console.log(error);
            });
    }

    function submitEdit(contact){
        console.log(API_ENDPOINT + '/' + contact.id,contact);
        axios.put(API_ENDPOINT + '/' + contact.id,contact).then(response => {
            setContacts(contacts.map((d)=> d.id===contact.id? {...contact, expanded:true} : d));
        })
            .catch(error => {
                console.log(error);
            });
    }

    function editContact(id){
        setContacts(contacts.map((contact) => contact.id === id ? {...contact, editMode: true} : contact));
        console.log(id);
    }

    function cancelEdit(id){
        setContacts(contacts.map((contact) => contact.id === id ? {...contact, editMode: false} : contact));
        console.log("called",id);
    }

    function contactDoubleClick(id) {
        console.log(id);
    }

    function contactOnClick(id) {
        // console.log(id);
        setContacts(contacts.map((contact) => contact.id === id ? {...contact, expanded: !contact.expanded} : contact))
        //toggle expand
    }

    return (
        <div className="container">

            <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} expandAll={expandAll}
                    toggleExpand={toggleExpand}/>
            {showAdd && <AddContact onAdd={addContact}/>}
            {
                contacts.length > 0 ?
                    <Contacts contacts={contacts} submitEdit={submitEdit} cancelEdit={cancelEdit} onEdit={editContact} onDelete={deleteContact} doubleClick={contactDoubleClick}
                              click={contactOnClick}/>
                    : 'No Contacts Yet'
            }
        </div>
    );
}

export default App;
