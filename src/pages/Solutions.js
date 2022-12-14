import Notify from "../components/home/Notify";
import Header from "../components/home/Header";
function Solutions() {
  return (
    <div>
      <Notify />
      <Header />
      <div>
        <div
          className=""
          style={{
            backgroundColor: "#005073",
            color: "#ffffff",
            fontFamily: "Times New Roman",
          }}
        >
          <div className="p-4 m-2">
            <div className="row">
              <div className="col-md-8"></div>
              <div className="col-md-3 row">
                <input
                  type="text"
                  className="rounded-pill px-3 py-2"
                  placeholder="Type here to Search"
                />
              </div>
              <div className="col-md-1"><button className="btn" style={{color:"white"}}><i className=" fa fa-play px-3 pt-1" style={{ fontSize: 30 }}></i></button></div>

            </div>
            <h1 className="py-4">Text</h1>

            <h2 className="py-4 col-11">Dear User!</h2>
            <h4 className="py-2 col-12">
              Kindly write down your query in the search bar provided. Your
              query is fed as an input at the backend and passed as a parameter
              into a dedicated method that allows the query to be forwarded as
              the direct query to the browser. The results and resources
              returned by the browse search are then redirected to the front end
              of the web application and hence, displayed for you to explore and
              troubleshoot the issue.
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
      </div>
      <hr className="" style={{ border: "5px solid #eee" }} />
      <div>
        <div
          className=""
          style={{
            backgroundColor: "#005073",
            color: "#ffffff",
            fontFamily: "Times New Roman",
          }}
        >
          <div className="p-4 m-2">
          <div className="row">
              <div className="col-md-8"></div>
              <div className="col-md-3 row">
                <input
                  type="text"
                  className="rounded-pill px-3 py-2"
                  placeholder="Speak here to Search"
                />
              </div>
              <div className="col-md-1"><button className="btn" style={{color:"white"}}><i className=" fa fa-microphone px-3 pt-1" style={{ fontSize: 30 }}></i></button></div>
            </div>
            <h1 className="py-4">Speech-to-Text:</h1>

            <h2 className="py-4 col-11">Dear User!</h2>
            <h4 className="py-2 col-12">
              Kindly tap on the microphone symbol and speak your issue or
              concern clearly. A dedicated method would convert your speech
              input into text (query), which is fed as an input at the backend,
              and passed as a parameter into a dedicated method that allows the
              query to be forwarded as the direct query to the browser. The
              results and resources returned by the browse search are then
              redirected to the front end of the web application and hence,
              displayed for you to explore and troubleshoot the issue. Here, the
              output is also returned in speech format. Hence, besides seeing
              the outputs visibly, our system would also be able to talk back to
              you.
            </h4>
            {/* <h4 className="py-4 col-12">
              You can input your issue, error, or your query via text or speech.
              Our system is wonderfully equipped to report back to you the
              potential causes of the error and mitigation measures you can take
              to troubleshoot it - in text and speech both.
            </h4> */}
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
      </div>
    </div>
  );
}

export default Solutions;
