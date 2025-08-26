import type { PreLoginNavItem } from "@/types/header";
import { FaVideo, FaChartLine, FaYoutube, FaStar, FaSlidersH, FaHeadphones } from "react-icons/fa";

export const navItems: PreLoginNavItem[] = [
    {
        label: 'Features',
        href: '/features',
        hasDropdown: true,
        dropdownItems: [
            {
                id: 1,
                title: "Viral View Predictor",
                description: "Predict your reach before posting",
                href: "/features/viral-predictor",
                icon: FaChartLine,
            },
            {
                id: 2,
                title: "FlowPulse™",
                description: "AI checks pacing & engagement flow",
                href: "/features/flowpulse",
                icon: FaVideo,
            },
            {
                id: 3,
                title: "Caption Clarity",
                description: "Fix captions for max retention",
                href: "/features/caption-clarity",
                icon: FaYoutube,
            },
            {
                id: 4,
                title: "Hook Strength Analyzer",
                description: "Rate your opening 3–5 seconds",
                href: "/features/hook-analyzer",
                icon: FaStar,
            },
            {
                id: 5,
                title: "Pacing & Rhythm Score",
                description: "See if your video’s too fast or slow",
                href: "/features/pacing-rhythm",
                icon: FaSlidersH,
            },
            {
                id: 6,
                title: "Audio Insight",
                description: "Keep voices clear & audio pro-level",
                href: "/features/audio-insight",
                icon: FaHeadphones,
            }
        ]
        
    },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Get in touch', href: '/get-in-touch' }
];