import Auth from "../pages/auth";
import Chat from "../pages/chat";

export const authRoutes = [
    {
        path: '/auth',
        component: Auth
    },
    {
        path: '/chat',
        component: Chat
    }
]

export const publicRoutes = [
    {
        path: '/auth',
        component: Auth
    }
]