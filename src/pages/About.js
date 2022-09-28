import Notify from "../components/home/Notify";
import Header from "../components/home/Header";
function About() {
  return (
    <div>
      <Notify />
      <Header />
      <div
        className=""
        style={{
          backgroundColor: "#005073",
          color: "#ffffff",
          fontFamily: "Times New Roman",
        }}
      >
        <div className="p-5 m-2">
          <h1 className="py-4">Hello User!</h1>
          <h4 className="py-2">
            Welcome to the NASS - your one shop stop for all the networking
            doubts. We at Network Assistant Solution Service aim to develop and
            present a platform that not only addresses and identifies your
            networking issues but also provides you with the most intelligent
            solution and efficient resources for accurate troubleshooting.
          </h4>
          <h4 className="py-4">
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
    </div>
  );
}

export default About;
