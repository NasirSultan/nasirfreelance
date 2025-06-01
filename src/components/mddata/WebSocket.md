

# Creating a Real-Time Multi-Window Chat with React and WebSocket

Real-time communication is a key feature in modern web applications, enabling instant message exchange between users. This project demonstrates building a simple yet effective real-time chat app using a Node.js WebSocket server and React on the frontend, with multiple independent chat popup windows.

### Backend: WebSocket Server with Node.js

The backend uses the `ws` library to create a WebSocket server listening on port 3001. When clients connect, the server listens for messages and broadcasts each message to all other connected clients except the sender. This enables real-time message exchange among multiple users.

### Frontend: React Chat Popup Component

On the frontend, a reusable React `ChatPopup` component manages its own WebSocket connection. Each instance acts as a separate chat window with a unique username, maintaining its own chat history and connection status.

Key features include:

* Connection status indicators (Connected, Disconnected, Error)
* Sending messages with username prefixes
* Receiving and displaying messages from other users
* Showing the chat partner’s name dynamically once a message is received
* Minimizable and expandable chat windows
* Input box with send-on-enter and a Send button

### Multi-Window Communication

The main app renders multiple `ChatPopup` instances with distinct usernames, allowing users to chat in real-time through separate UI windows. The architecture supports easy expansion for more users or chat rooms.

---

This approach provides a lightweight, scalable way to implement real-time chat functionality using standard WebSocket technology combined with React’s component model. You can build on this foundation by adding features like message persistence, authentication, typing indicators, and more.

 [Github Code](https://github.com/NasirSultan/node-react-websocket-chat)