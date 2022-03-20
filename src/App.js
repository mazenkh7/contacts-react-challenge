import ContactsHeader from "./components/ContactsHeader";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import {useState, useEffect} from "react";
import axios from 'axios';
import HistoryHeader from "./components/HistoryHeader";

function App() {
    const [contacts, setContacts] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [expandAll, setExpandAll] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [historyContact, setHistoryContact] = useState();
    const [mount, setMount] = useState(false);
    const CONTACTS_API = 'https://contacts-api-challenge.herokuapp.com/contacts';
    const EDITS_API = 'https://contacts-api-challenge.herokuapp.com/edits';
    // const EDITS_API = 'http://localhost:8000/edits';
    // const CONTACTS_API = 'http://localhost:8000/contacts';
    const fetchContacts = () => {
        axios.get(CONTACTS_API).then(response => {
            setContacts(response.data.map((d) => ({...d, editMode: false, expanded: false})));
            setHistoryContact(contacts[0]);
        })
            .catch(error => {
                console.log(error);
            });
    }
    //function bellow runs on page load
    useEffect(() => {
        if (!mount) {
            setMount(true);
            fetchContacts();
        }
    }, [fetchContacts, mount]);

    function createEditEntry(contact) {
        return {
            "contactid": contact.id,
            "fname": contact.fname,
            "lname": contact.lname,
            "number": contact.number,
            "email": contact.email
        };
    }

    //add contact post request, and retrieve new list of contacts
    function addContact(contact) {
        axios.post(CONTACTS_API, contact).then(response => {
            setContacts([...contacts, response.data]);
            axios.post(EDITS_API, createEditEntry(response.data))
        }).catch(() => {
            alert("Email taken by another contact");
        });
    }

    function toggleShowHistory() {
        setShowHistory(!showHistory);
    }

    function toggleExpand() {
        setContacts(contacts.map((contact) => expandAll ? {...contact, expanded: false} : {...contact, expanded: true}))
        setExpandAll(!expandAll);
    }

    function deleteContact(id) {
        axios.delete(CONTACTS_API + '/' + id).then(response => {
            // console.log(response);
            // setContacts(response.data.map((d)=> ({...d, editMode: false})));
            setContacts(contacts.filter((c) => c.id !== id));
        })
            .catch(error => {
                console.log(error);
            });
    }

    function submitEdit(contact) {
        console.log(CONTACTS_API + '/' + contact.id, contact);
        axios.put(CONTACTS_API + '/' + contact.id, contact).then(response => {
            setContacts(contacts.map((d) => d.id === contact.id ? {...contact, expanded: true} : d));
            axios.post(EDITS_API, createEditEntry(contact)).then(() => {
                setHistoryContact(contact);
            });
        }).catch(error => {
            alert("Email taken by another contact")
        });
    }

    function editContact(id) {
        setContacts(contacts.map((contact) => contact.id === id ? {...contact, editMode: true} : contact));
    }

    function cancelEdit(id) {
        setContacts(contacts.map((contact) => contact.id === id ? {...contact, editMode: false} : contact));
    }

    function contactDoubleClick(id) {
        console.log(id);
    }

    function contactOnClick(id) {

        setContacts(contacts.map((contact) => contact.id === id ? {...contact, expanded: true} : {
            ...contact,
            expanded: false,
            editMode: false
        }))
        setHistoryContact(contacts.filter((c) => c.id === id)[0])
    }

    return (
        <div className={'twp-pages'}>
            <div className="container">
                <ContactsHeader onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} expandAll={expandAll}
                                toggleExpand={toggleExpand}/>
                {showAdd && <AddContact onAdd={addContact}/>}
                {
                    contacts.length > 0 ?
                        <Contacts contacts={contacts} toggleHistory={toggleShowHistory} submitEdit={submitEdit}
                                  cancelEdit={cancelEdit}
                                  onEdit={editContact} onDelete={deleteContact} doubleClick={contactDoubleClick}
                                  click={contactOnClick}/>
                        : 'No Contacts Yet'
                }
            </div>

            {showHistory ? <HistoryHeader historyContact={historyContact} toggleHistory={toggleShowHistory}/> : <></>}
        </div>
    );
}

export default App;
