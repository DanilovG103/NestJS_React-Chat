import socketIOClient from "socket.io-client"

export class Socket {
  private static instance : any

  private constructor() {}

  public static getInstance(): any {
    if (!Socket.instance) {
      Socket.instance = socketIOClient('http://localhost:4001',{reconnection: true,transports: ["websocket"]})
    }

    return Socket.instance
  }
}

export const WS = Socket.getInstance()