import Skeleton from "react-loading-skeleton";

const ChatSkeleton = () => {
  return (
    <div className="flex items-start gap-1">
      <Skeleton height={40} width={40} borderRadius={100} />
      <div className="flex flex-col">
        <div className="flex items-center gap-px">
          <Skeleton height={14} width={70} />
          <Skeleton height={10} width={70} />
        </div>
        <Skeleton height={36} width={300} />
      </div>
    </div>
  );
};

export default ChatSkeleton;
