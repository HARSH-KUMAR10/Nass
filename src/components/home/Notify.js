function Notify(){
    return (
        <div className="row justify-content-between p-2" style={{fontSize:12,backgroundColor:'#eee'}}>
            <div className="col-6">Notification goes here</div>
            <div className="col-3 row justify-content-around">
                <div className="col-3">About</div>
                <div className="col-3">Solutions</div>
                <div className="col-3">Connect</div>
            </div>
        </div>
    )
}

export default Notify;