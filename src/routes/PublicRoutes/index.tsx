import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import Fallback from "@/components/Fallback";

const Home = lazy(() => import('@/pages/PreLogin/Home'));
const Pricing = lazy(() => import('@/pages/PreLogin/Pricing'));
const Login = lazy(() => import('@/pages/PreLogin/Login'));
const Signup = lazy(() => import('@/pages/PreLogin/Signup'));
const ViralPredictor = lazy(() => import('@/pages/PreLogin/Features/ViralPredictor'));
const FlowPulse = lazy(() => import('@/pages/PreLogin/Features/FlowPulse'));
const CaptionClarity = lazy(() => import('@/pages/PreLogin/Features/CaptionClarity'));
const HookAnalyzer = lazy(() => import('@/pages/PreLogin/Features/HookAnalyzer'));
const PacingRhythm = lazy(() => import('@/pages/PreLogin/Features/PacingRhythm'));
const AudioInsight = lazy(() => import('@/pages/PreLogin/Features/AudioInsight'));
const FAQs = lazy(() => import('@/pages/PreLogin/FAQs'));
const GetInTouch = lazy(() => import('@/pages/PreLogin/GetInTouch'));

function PublicRoutes() {

    return (
        <Suspense fallback={<Fallback />}>
            <Routes>
                <Route path='*' element={<Navigate to="/" />} />
                <Route path='/' element={<Home />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                {/* Features */}
                <Route path='/features/viral-predictor' element={<ViralPredictor />} />
                <Route path='/features/flowpulse' element={<FlowPulse />} />
                <Route path='/features/caption-clarity' element={<CaptionClarity />} />
                <Route path='/features/hook-analyzer' element={<HookAnalyzer />} />
                <Route path='/features/pacing-rhythm' element={<PacingRhythm />} />
                <Route path='/features/audio-insight' element={<AudioInsight />} />

                {/* FAQs */}
                <Route path='/frequently-asked-questions' element={<FAQs />} />
                <Route path='/get-in-touch' element={<GetInTouch />} />
                {/* <Route path='/fallback' element={<Fallback />} /> */}
            </Routes>
        </Suspense>
    )
}

export default PublicRoutes