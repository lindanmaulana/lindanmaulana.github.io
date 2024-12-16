
import { formatDistanceToNow } from 'date-fns';

export const formatTimeStamps = (timestamps: string) => {
  const date = new Date(timestamps);
  return `${formatDistanceToNow(date)} ago`;
};
