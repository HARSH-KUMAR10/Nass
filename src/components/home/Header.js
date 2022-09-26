function Header(){
    return (
        <div className="p-3 row justify-content-between shadow">
            <div className="col-md-4 col-10 h3 overflow-hidden">
                NASS - Network Assistant
            </div>
            <div className="col-md-3 col-2 row justify-content-around align-items-center">
                <div className="col-3"><i className="fa fa-sign-in" style={{fontSize:20}}></i></div>
                <div className="col-3"><i className="fa fa-user-plus" style={{fontSize:20}}></i></div>
                <div className="col-3"><i className="fa fa-address-card-o" style={{fontSize:20}}></i></div>
            </div>
        </div>
    )
}

export default Header;