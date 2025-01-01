import DiscussionBanner from "../../components/section/discussion/banner"
import ChatRoomChat from "../../components/section/discussion/chat"
import DiscussionMessageFromCreator from "../../components/section/discussion/messageFromCreator"

const PageChatRoom = () => {
    return (
        <>
        <DiscussionBanner />
        <ChatRoomChat />
        <DiscussionMessageFromCreator />
        </>
    )
}

export default PageChatRoom