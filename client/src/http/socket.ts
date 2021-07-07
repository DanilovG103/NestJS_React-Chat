import socketIOClient from "socket.io-client"

export class Socket {
  private static instance : any

  private constructor() {}

  public static getInstance(): any {
    if (!Socket.instance) {
      Socket.instance = socketIOClient('http://localhost:8081',{reconnection: true,transports: ["websocket"], autoConnect: true})
    }

    return Socket.instance
  }
}

export const WS = Socket.getInstance()
