import SockJS from 'sockjs-client'
import { Stomp } from "@stomp/stompjs";

let stompClient = null
const handlers = []

export const connect = () => {
    const socket = new SockJS('/gs-guide-websocket')
    stompClient = Stomp.over(socket);
    stompClient.debug = () =>{}

    stompClient.connect({}, frame => {
        // console.log('Connected: ' + frame)
        stompClient.subscribe('/topic/activity', message => {
            handlers.forEach(handler => handler(JSON.parse(message.body)))
        });
    });
}
export const addHandler = handler => {
    handlers.push(handler)
}

export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect()
    }
    console.log("Disconnected")
}

export const sendMessage = message => {
    stompClient.send("/app/changeMessage", {}, JSON.stringify(message))
}