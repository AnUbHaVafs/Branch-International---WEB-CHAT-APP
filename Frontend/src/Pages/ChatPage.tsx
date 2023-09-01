// import axios from "axios";
import { useState } from "react";
import { Box } from "@chakra-ui/layout";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

// type Props = {};

const ChatPage: any = () => {
  // const [chats, setChats] = useState<any>([]);
  // const fetchChats = async () => {
  //   const { data } = await axios.get("http://localhost:5000/api/chat");
  //   console.log(data);
  //   setChats(data);
  // };
  // useEffect(() => {
  //   fetchChats();
  // }, []);
  const [fetchAgain, setFetchAgain] = useState<any>(false);
  const { user }: any = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
        backgroundColor={"white"}
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
