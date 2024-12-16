export interface feedback {
  name: string;
  email: string;
  message: string;
}

export interface chat {
  name: string;
  chat: string;
}

export interface dataChat extends chat {
  id: number;
  createdAt: string;
  updateAt: string;
}
