import PreLoginPage from "@/components/Layout/PreLoginPage";
import FeaturesPage from "@/components/FeaturesPage";
import { pacingStats } from "@/pages/PreLogin/Features/PacingRhythm/pacing-stats";

function PacingRhythm() {
    return (
        <PreLoginPage>
            <FeaturesPage
                badge="Pacing & Rhythm Analysis"
                heading="Optimize Your Video's Timing and Tempo"
                description="Get AI-powered insights on your video's pacing, rhythm, and timing to create content that maintains perfect momentum and keeps viewers engaged throughout."
                ctaHeading="Master the Perfect Video Rhythm for Maximum Impact"
                blurbStats={pacingStats}
            />
        </PreLoginPage>
    )
}

export default PacingRhythm