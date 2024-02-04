import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";
// import { ChatList } from 'react-chat-engine';
interface ChatProps {
  user: User;
}

export default function Page(props: ChatProps) {
  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{ position: "absolute", top: "0px", left: "0px" }}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
      <PrettyChatWindow
        projectId= "c16a06c0-9cc6-4a76-9f80-47b448adf730"
        username={props.user.email || ""}
        secret={props.user.uid}
        style={{ height: "20%" }}
      />
       {/* <ChatList {...props} /> */}
      
    </div>
  );
}