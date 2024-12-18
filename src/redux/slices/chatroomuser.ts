import { createSlice } from "@reduxjs/toolkit";

interface stateChatroomuser {
  addChat: boolean;
}

const initialState: stateChatroomuser = {
  addChat: false,
};

const FeaturesChatRoomUser = createSlice({
  name: "ChatRoomUser",
  initialState,
  reducers: {
    handleAddChatUser: (state) => {
      state.addChat = !state.addChat;
    },
  },
});

export const { handleAddChatUser } = FeaturesChatRoomUser.actions;
export default FeaturesChatRoomUser.reducer;
