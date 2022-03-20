import {useState} from "react";

function AddContact({onAdd}) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    function onSubmit(e){
        e.preventDefault();
        if(!fname){
            alert("First name required");
            return;
        }
        onAdd({fname,lname,number,email});
        setLname('');
        setFname('');
        setNumber('');
        setEmail('');
    }

    return (
        <form className={'add-form'} onSubmit={onSubmit}>
            <div className={'form-control'}>
                <label>Name</label>
            </div>
            <div className={'form-control'}>
                <input type={'text'} placeholder={'First name'} value={fname}
                       onChange={(e)=>{setFname(e.target.value)}}/>
                <input type={'text'} placeholder={'Last name'} value={lname}
                       onChange={(e)=>{setLname(e.target.value)}}/>
            </div>
            <div className={'form-control'}>
                <label>Number</label>
            </div>
            <div className={'form-control'}>
                <input type={'text'} placeholder={'Add number'} value={number}
                       onChange={(e)=>{setNumber(e.target.value)}}/>
            </div>
            <div className={'form-control'}>
                <label>Email</label>
                </div>
            <div className={'form-control'}>
                <input type={'text'} placeholder={'Add email'} value={email}
                       onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <input className={'btn-block btn'} type={'submit'} value={'Save Contact'}/>
        </form>
    );
}

export default AddContact;