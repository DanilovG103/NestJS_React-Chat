import Auth from "../pages/auth";
import Chat from "../pages/chat";

export const routes = [
    {
        path: '/chat',
        component: Chat
    },
    {
        path: '/login',
        component: Auth
    },
    {
        path: '/registration',
        component: Auth
    }
]
    