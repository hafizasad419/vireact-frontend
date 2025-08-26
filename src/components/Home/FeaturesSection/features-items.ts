import { FaAward, FaChartLine, FaClosedCaptioning, FaMusic, FaTiktok, FaUsers, FaVideo, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export interface Feature {
    id: number;
    creativeText: string;
    icons: React.ComponentType<{ className?: string }>[];
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        id: 1,
        creativeText: "SMART SCAN",
        icons: [FaVideo, FaMusic, FaClosedCaptioning],
        title: "AI-Powered Video Analysis",
        description: "Upload your video or paste a link—our AI reviews hooks, captions, pacing, visuals, and sounds to give you detailed feedback that boosts engagement."
    },
    {
        id: 2,
        creativeText: "GROW FAST",
        icons: [FaChartLine, FaUsers, FaAward],
        title: "AI-Powered Growth Recommendations",
        description: "No fluff. Get clear, step-by-step tips on how to improve views, likes, and subscriber growth—based on real platform trends."
    },
    {
        id: 3,
        creativeText: "ALL PLATFORMS",
        icons: [FaYoutube, FaInstagram, FaFacebook, FaTiktok],
        title: "Built for Every Platform",
        description: "Whether it's Shorts, Reels, TikToks, or Facebook videos—our tool analyzes and adapts feedback for each platform's algorithm."
    }
];
