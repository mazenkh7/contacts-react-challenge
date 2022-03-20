import {useEffect, useState} from "react";
import axios from "axios";


function History({historyContact}){
    // const EDITS_API = 'http://localhost:8000/edits';
    const EDITS_API = 'https://contacts-api-challenge.herokuapp.com/edits';

    const [edits,setEdits] = useState([]);

    useEffect(()=>{
        console.log("modified");
        // console.log("hi history",id);
        axios.get(EDITS_API).then(response=>{
            setEdits(response.data.filter((c) => c.contactid === historyContact.id).reverse());
            // setEdits(response.data)
        }).catch(error => {
            console.log(error);
        });
    },[historyContact]);
    return(

        <div className={'scroll-view'}>
            {
                edits.map((edit) => (

                <div className={'contact'} key={edit.id}>
                    <h3>{edit.fname} {edit.lname}</h3>
                    <h5>{edit.number} {edit.email}</h5>
                </div>
            ))}
        </div>
    );
}

export default History;