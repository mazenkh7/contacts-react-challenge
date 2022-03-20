import Button from "./Button";
import History from "./History";

function HistoryHeader({historyContact, toggleHistory}){
    return(
        <div className={'container'}>
            <header className={'header'}>
                <h1>History</h1>
                <Button color={'red'} text={'Close'} onClick={toggleHistory}/>
            </header>
            {/*<h2>{historyContact.fname} {historyContact.lname}</h2>*/}
            {/*<h4>{historyContact.number}</h4>*/}
            {/*<h4>{historyContact.email}</h4>*/}
            <History historyContact={historyContact}/>
        </div>
    )
}

export default HistoryHeader;