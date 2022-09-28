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
            <h1 className="py-4 col-11">Hello User!</h1>
            <h4 className="py-2 col-12">
              Welcome to the NASS - your one shop stop for all the networking
              doubts. We at Network Assistant Solution Service aim to develop
              and present a platform that not only addresses and identifies your
              networking issues but also provides you with the most intelligent
              solution and efficient resources for accurate troubleshooting.
            </h4>
            <h4 className="py-4 col-12">
              You can input your issue, error, or your query via text or speech.
              Our system is wonderfully equipped to report back to you the
              potential causes of the error and mitigation measures you can take
              to troubleshoot it - in text and speech both.
            </h4>
            <h3 className="py-3">
              We hope <u> net-works</u> for you.
            </h3>
            {/* <a
              href="/"
              className="btn btn-warning fs-5 px-4 p-2 mt-3 mb-3 rounded-pill"
            >
We hope net-works for you.
            </a> */}
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <div className="py-4 ps-3">
              <span className="pe-md-1 ps-md-2">
                <img
                  src="./assets/bot.png"
                  className=""
                  alt=""
                  style={{ height: 45, width: 45 }}
                />
              </span>
              <span
                className="p-2 ms-2 ms-md-2 rounded"
                style={{ color: "white", backgroundColor: "#005073" }}
              >
                Hello, I am Nass
              </span>
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
              <i
                className="fa fa-microphone px-md-3 px-3"
                style={{ fontSize: 25 }}
              ></i>
              <i className="fa fa-send-o " style={{ fontSize: 25 }}></i>
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
