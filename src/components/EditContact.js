import {useState} from "react";

function EditContact({contact, submitEdit, cancelEdit}) {
    const [fname, setFname] = useState(contact.fname);
    const [lname, setLname] = useState(contact.lname);
    const [number, setNumber] = useState(contact.number);
    const [email, setEmail] = useState(contact.email);

    function onSubmit(e) {
        e.preventDefault();
        if(!fname || !lname || !number || !email){
            alert("Mandatory information missing");
            return;
        }
        submitEdit({"id":contact.id, "fname":fname, "lname":lname, "number":number, "email":email});
    }
    function onReset(e){
        e.preventDefault();
        cancelEdit(contact.id);
    }
    return (
        <form className={'contact expanded'} onSubmit={onSubmit} onReset={onReset}>

            <div className={'form-control'}>
                <input type={'text'} placeholder={'First name'} value={fname}
                       onChange={(e) => {
                           setFname(e.target.value)
                       }}/>
                <input type={'text'} placeholder={'Last name'} value={lname}
                       onChange={(e) => {
                           setLname(e.target.value)
                       }}/>
            </div>
            <div className={'form-control'}>
                <input type={'text'} placeholder={'Add number'} value={number}
                       onChange={(e) => {
                           setNumber(e.target.value)
                       }}/>
            </div>
            <div className={'form-control'}>
                <input className={'small-input'} type={'text'} placeholder={'Add email'} value={email}
                       onChange={(e) => {
                           setEmail(e.target.value)
                       }}/>
            </div>
            <div className={'form-control'}>
                <input className={'btn btn-half'} type={'submit'} value={'Save Changes'}/>
                <input className={'btn btn-half'} type={'reset'} value={'Cancel'}/>
            </div>
        </form>
    );
}

export default EditContact;