import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Chat() {
  const [record, setRecord] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [chats, setChats] = React.useState([
    { user: "nass", text: "Hello, I am Nass" },
  ]);
  const [search, setSearch] = React.useState("");

  const { transcript, resetTranscript } = useSpeechRecognition();
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log("not supported");
    return null;
  }

  const randomHello = () => {
    var hello = [
      "Hello, how can I help you?",
      "Greetings for the day.",
      "Hey there, how may I help you today?",
    ];
    return hello[Math.floor(Math.random() * hello.length)];
  };

  const randomBye = () => {
    var bye = [
      "Thanks for using our service.",
      "Until next time.",
      "See you again, thanks bye",
    ];
    return bye[Math.floor(Math.random() * bye.length)];
  };

  const getAnswerGoogle = (search) => {
    console.log('Google:',search)
    fetch(`https://nass-server.herokuapp.com/google?search=${search}`)
      .then((res) => res.json())
      .then(async (response) => {
        console.log(response);
        var temp = await chats.filter((item) => item.text !== "loading...");
        console.log(temp);
        if (response.statusCode === 200) {
          setChats([
            ...chats,
            { user: "user", text: search },
            { user: "nass", text: response.data + " - Response from google" },
          ]);
          window.location.href = "#bottom";
        } else {
          setChats([
            ...temp,
            { user: "user", text: search },
            {
              user: "nass",
              text: "Unable to follow up on your request.  - Response from IBM Watson Wikipedia",
            },
          ]);
          window.location.href = "#bottom";
        }
      });
  };

  const getAnswerWiki = (search) => {
    fetch(`https://nass-server.herokuapp.com/wiki?search=${search}`)
      .then((res) => res.json())
      .then(async (response) => {
        console.log(response);
        var temp = await chats.filter((item) => item.text !== "loading...");
        console.log(temp);
        if (response.statusCode === 200) {
          setChats([
            ...chats,
            { user: "user", text: search },
            {
              user: "nass",
              text: response.data + " - Response from Wikipedia",
            },
          ]);
          window.location.href = "#bottom";
        } else {
          setChats([
            ...temp,
            { user: "user", text: search },
            {
              user: "nass",
              text: "Unable to follow up on your request.  - Response from IBM Watson Wikipedia",
            },
          ]);
          window.location.href = "#bottom";
        }
      });
  };

  const getAnswerIBM = (search) => {
    console.log("front : ", search);
    fetch(`https://nass-server.herokuapp.com/IBM?search=${search}`)
      .then((res) => res.json())
      .then(async (response) => {
        console.log(response);
        var temp = await chats.filter((item) => item.text !== "loading...");
        console.log(temp);
        if (response.statusCode === 200) {
          setChats([
            ...temp,
            { user: "user", text: search },
            {
              user: "nass",
              text: response.data + " - Response from IBM Watson Discovery",
            },
          ]);
          window.location.href = "#bottom";
        } else {
          setChats([
            ...temp,
            { user: "user", text: search },
            {
              user: "nass",
              text: "Unable to follow up on your request.  - Response from IBM Watson Discovery",
            },
          ]);
          window.location.href = "#bottom";
        }
      });
  };

  const splitAndSearch = async (search, num) => {
    if (search === "" || search === null || search === undefined) {
      alert("Please enter string to search");
      return;
    }
    search.replace(".", "");
    search.replace(",", "");
    var texts = search.split(" ");
    console.log(texts);
    var answered = false;
    for (var i = 0; i < texts.length; i++) {
      var text = texts[i].toLowerCase();
      if (
        text === "hi" ||
        text === "hello" ||
        text === "greetings" ||
        text === "hey"
      ) {
        setChats([
          ...chats,
          { user: "user", text: search },
          { user: "nass", text: randomHello() },
        ]);
        answered = true;
        break;
      } else if (text === "bye" || text === "goodbye") {
        setChats([
          ...chats,
          { user: "user", text: search },
          { user: "nass", text: randomBye() },
        ]);
        answered = true;
        break;
      }
    }
    if (!answered) {
      console.log("API : ", search);
      await setChats([...chats, { user: "nass", text: "loading ..." }]);
      if (num === 1) await getAnswerIBM(search);
      else if (num === 2) await getAnswerWiki(search);
      else await getAnswerGoogle(search);
      console.log("API : ", search);
    }
    setSearch("");
  };
  return (
    <div>
      <div className="row">
        <div
          className="col-md-6"
          style={{
            backgroundColor: "#005073",
            color: "#ffffff",
            fontFamily: "Times New Roman",
          }}
        >
          <div className="p-5 m-2">
            <h1 className="py-4 col-11">Hello User!</h1>
            <h5 className="py-2 col-12">
              Welcome to the NASS - your one shop stop for all the networking
              doubts. We at Network Assistant Solution Service aim to develop
              and present a platform that not only addresses and identifies your
              networking issues but also provides you with the most intelligent
              solution and efficient resources for accurate troubleshooting.
            </h5>
            <h5 className="py-4 col-12">
              You can input your issue, error, or your query via text or speech.
              Our system is wonderfully equipped to report back to you the
              potential causes of the error and mitigation measures you can take
              to troubleshoot it - in text and speech both.
            </h5>
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
        <div className="col-md-6">
          <div className="p-2" style={{ backgroundColor: "#005073" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0a2nCTQc2VBbF-fuB7WrfO5Ten4VIP7cdRG1lUeDX&s"
              width="30"
              className="img-fluid rounded"
            />{" "}
            <span className="h5 text-light">NASS</span>
          </div>
          <div className=" overflow-auto my-3" style={styles.chat}>
            {chats.map((item, index) => (
              <ChatBox item={item} key={index} />
            ))}
            {/* <div className="py-5"></div> */}
            <div className="text-center" style={{ fontSize: 10 }} id="bottom">
              Welcome to Network Assistant Software Service
            </div>
          </div>

          <div className="row">
            <div className="col-md-10 ps-md-2 pe-md-2 col-9 ps-3">
              <input
                type="text"
                className="form-control p-1 mt-2"
                value={search}
                style={{fontSize:13}}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div className="col-md-2 col-3">
              <button
                className="btn"
                onClick={() => {
                  setRecord(!record);
                  if (!record) {
                    SpeechRecognition.startListening();
                  } else {
                    SpeechRecognition.stopListening();
                    console.log(transcript);
                    setSearch(transcript);
                    splitAndSearch(transcript, 1);
                  }
                }}
              >
                <i
                  className={
                    "px-md-3 pt-2 px-3 " +
                    (record ? "fa fa-pause" : "fa fa-microphone")
                  }
                  style={{ fontSize: 20 }}
                ></i>
              </button>
              {/* <i className="fa fa-send-o " style={{ fontSize: 25 }}></i> */}
              <button className="btn" onClick={() => splitAndSearch(search, 1)}>
                <i
                  className="fa fa-play pt-2 px-1"
                  style={{ fontSize: 20 }}
                ></i>
              </button>
            </div>
          </div>
          <div className="mx-1">
            <button
              className="btn btn-outline-dark m-1 p-1"
              onClick={() => splitAndSearch(search, 3)}
              style={{ fontSize: 10, fontWeight: 600 }}
            >
              Google
            </button>
            <button
              className="btn btn-outline-dark m-1 p-1"
              onClick={() => splitAndSearch(search, 2)}
              style={{ fontSize: 10, fontWeight: 600 }}
            >
              Wikipedia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBox({ item, index }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {item.user === "nass" ? (
        <div
          key={index}
          className="p-2 m-2 col-6 rounded"
          style={{ color: "black", backgroundColor: "#ddd" }}
        >
          <div>
            {item.text.length > 250 ? (
              <>
                {!open ? <>{item.text.slice(0, 250)} ...</> : <>{item.text}</>}
              </>
            ) : (
              <>{item.text}</>
            )}

            {item.text.length > 250 ? (
              <div className="row justify-content-between">
                <div className="col-1"></div>
                <div className="col-3">
                  <button
                    className="btn text-dark"
                    style={{ fontSize: 10 }}
                    onClick={() => setOpen(!open)}
                  >
                    {open ? "Close" : "See more"}
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div className="row justify-content-around m-2" key={index}>
          <span className="col-5"></span>
          <span
            className="p-2 ms-2 ms-md-2 col-6 rounded"
            style={{ color: "white", backgroundColor: "#005073" }}
          >
            {item.text}
          </span>
        </div>
      )}
    </>
  );
}

const styles = {
  chat: {
    height: "60vh",
    fontSize: 13,
  },
};

export default Chat;
