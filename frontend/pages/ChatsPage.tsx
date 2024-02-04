import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";

interface ChatProps {
  user: User;
}

export default function Page(props: ChatProps) {
  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{ position: "absolute", top: "20px", left: "0px" }}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
      <PrettyChatWindow
        projectId="c16a06c0-9cc6-4a76-9f80-47b448adf730"
        username={props.user.email || ""}
        secret={props.user.uid}
        style={{
          height: "20%",
          // Add your custom styles here
          backgroundColor: "#e9c46a",
          border: "8px solid #e9c46a",
          borderRadius: "8px",
        }}
      />
      {/* <ChatList {...props} /> */}
    </div>
  );
}


