import Auth from "../pages/auth";
import Chat from "../pages/chat";

export const authRoutes = [
    {
        path: '/chat',
        component: Chat
    }
]

export const publicRoutes = [
    {
        path: '/login',
        component: Auth
    },
    {
        path: '/registration',
        component: Auth
    }
]