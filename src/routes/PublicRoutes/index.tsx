import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import Fallback from "@/components/Fallback";

const Home = lazy(() => import('@/pages/PreLogin/Home'));
const Pricing = lazy(() => import('@/pages/PreLogin/Pricing'));
const Login = lazy(() => import('@/pages/PreLogin/Login'));
const Signup = lazy(() => import('@/pages/PreLogin/Signup'));

function PublicRoutes() {

    return (
        <Suspense fallback={<Fallback />}>
            <Routes>
                <Route path='*' element={<Navigate to="/" />} />
                <Route path='/' element={<Home />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                {/* <Route path='/fallback' element={<Fallback />} /> */}
            </Routes>
        </Suspense>
    )
}

export default PublicRoutes