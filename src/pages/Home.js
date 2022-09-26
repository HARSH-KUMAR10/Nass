import Notify from "../components/home/Notify"
import Header from "../components/home/Header"
import Chat from "../components/Chat";
function Home(){
    return(
        <div>
            <Notify/>
            <Header/>
            <Chat/>
        </div>
    )
}

export default Home;