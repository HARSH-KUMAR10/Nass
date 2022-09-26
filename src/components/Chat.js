function Chat() {
  return (
    <div>
      <div className="row">
        <div
          className="col-md-7"
          style={{
            backgroundColor: "#005073",
            color: "#ffffff",
            fontFamily: "Times New Roman",
          }}
        >
          <div className="p-5 m-2">
            <h2 className="py-4 col-11">
              Empowering all people with career possibilities
            </h2>
            <h5 className="py-2 col-12">
              NASS - Network Assistant transforms the lives of learners,
              educators and communities through the power of technology,
              education and career opportunities. Available to anyone, anywhere.
            </h5>
            <h5 className="py-3 col-12">
              We’re currently providing assistance for you to solve your
              networking issues remotely.
            </h5>
            <a
              href="/"
              className="btn btn-warning fs-5 px-4 p-2 mt-3 mb-3 rounded-pill"
            >
              Explore remote tools and tips
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <div className="py-4 ps-3">
              <span className="pe-md-1 ps-md-2">                
              <img src="./assets/bot.png" className="" alt="" style={{height:45, width:45}}/>  
                </span>
              <span className="p-2 ms-2 ms-md-2 rounded" style={{color:"white",backgroundColor:"#005073"}}>Hello, I am Nass</span> 
            </div>
          </div>
          <div className=" overflow-auto" style={styles.chat}>
            {/* <div className="py-5"></div> */}
          </div>
          <div className="row">
            <div className="col-md-10 ps-md-2 pe-md-2 col-9 ps-3">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-2 col-3">
              <i className="fa fa-microphone px-md-3 px-3" style={{fontSize:25}}></i> 
              <i className="fa fa-send-o " style={{fontSize:25}}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  chat: {
    height: "68vh",
  },
};
export default Chat;
