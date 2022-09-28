import React from "react";

function Chat() {
  const [chats,setChats] = React.useState([
    {user:"nass",text:"Hello, I am Nass"},
  ])
  const [search, setSearch] = React.useState("");

  const randomHello = () => {
    var hello = ["Hello, how can I help you?","Greetings for the day.","Hey there, how may I help you today?"];
    return hello[Math.floor(Math.random()*3)];
  }

  const randomBye = () => {
    var bye = ["Thanks for using our service.","Until next time.","See you again, thanks bye"];
    return bye[Math.floor(Math.random()*3)];
  }

  const getAnswerGoogle = (search) =>{
    fetch("http://localhost:8001/google",{
      method:"POST",
      body:JSON.stringify({search})
    }).then(res=>res.json()).then(response=>{
      setChats([...chats,
        {user:"user",text:search},
        {user:"nass",text:response.data + " - Response from google"}
      ]);
    })
  }

  const getAnswerWiki = (search) =>{
    fetch("http://localhost:8001/wiki",{
      method:"POST",
      body:JSON.stringify({search})
    }).then(res=>res.json()).then(response=>{
      setChats([...chats,
        {user:"user",text:search},
        {user:"nass",text:response.data + " - Response from Wikipedia"}
      ]);
    })
  }

  const getAnswerIBM = (search) =>{
    console.log('front : ',search);
    fetch(`https://nass-server.herokuapp.com/IBM?search=${search}`).then(res=>res.json()).then(response=>{
      console.log(response);
      setChats([...chats,
        {user:"user",text:search},
        {user:"nass",text:response.data + " - Response from IBM Watson Discovery"}
      ]);
    })
  }

  const splitAndSearch = () => {
    console.log(search);
    var texts = search.split(" ");
    var answered = false;
    for (var i=0;i<texts.length;i++) {
      var text = texts[i].toLowerCase();
      if (
        text === "hi" ||
        text === "hello" ||
        text === "greetings" ||
        text === "hey"
      ) {
        setChats([...chats,{user:"user",text:search},{user:"nass",text:randomHello()}]);
        answered = true;
        break;
      }else if (
        text === "bye" ||
        text === "goodbye"
      ) {
        setChats([...chats,{user:"user",text:search},{user:"nass",text:randomBye()}]);
        answered = true;
        break;
      }
    }
    if(!answered){
      console.log("API : ",search);
      getAnswerIBM(search);
    }
    setSearch("");
    window.location.href="#bottom";
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
        <div className="col-md-6">
          <div className="p-2" style={{backgroundColor:'#005073'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0a2nCTQc2VBbF-fuB7WrfO5Ten4VIP7cdRG1lUeDX&s" width="30" className="img-fluid rounded"/>
            {" "}<span className="h5 text-light">Nass</span>
          </div>
          <div className=" overflow-auto my-3" style={styles.chat}>
            {chats.map((item,index)=>(
              <ChatBox item={item} index={index}/>
            ))}
            {/* <div className="py-5"></div> */}
          </div>
          <span id="bottom"></span>
          <div className="row">
            <div className="col-md-10 ps-md-2 pe-md-2 col-9 ps-3">
              <input
                type="text"
                className="form-control p-2"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div className="col-md-2 col-3">
              <i
                className="fa fa-microphone px-md-3 px-3"
                style={{ fontSize: 25 }}
              ></i>
              <button className="btn" onClick={()=>splitAndSearch()}><i className="fa fa-play" style={{ fontSize: 25 }}></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function ChatBox({item,index}){
  const [open,setOpen] = React.useState(false);
  return(
    <>
              {item.user==="nass"?(<div key={index}
              className="p-2 m-2 col-6 rounded"
              style={{ color: "black", backgroundColor: "#ddd" }}>
                <div >
              {item.text.length>250?(<>{!open?(<>{item.text.slice(0,250)} ...</> ):(<>{item.text}</>)}</>):(<>{item.text}</>)}

              {item.text.length>250?(
              <div className="row justify-content-between">
                <div className="col-1"></div>
                <div className="col-3">
                  <button className="btn text-dark" style={{fontSize:10}} onClick={()=>setOpen(!open)}>{open?"Close":"See more"}</button>
                </div>
                </div>):(<></>)}
            </div></div>):(<div className="row justify-content-around m-2" key={index}>
              <span className="col-5"></span>
              <span
              className="p-2 ms-2 ms-md-2 col-6 rounded"
              style={{ color: "white", backgroundColor: "#005073"  }}
            >
              {item.text}
            </span>
            </div>)}
            </>
  )
}

const styles = {
  chat: {
    height: "65vh",
    fontSize: 13,
  },
};


export default Chat;