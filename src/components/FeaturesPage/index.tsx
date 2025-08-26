import HeroSection from "@/components/FeaturesPage/HeroSection"
import StatsBlurbs from "@/components/FeaturesPage/StatsBlurbs"
import CreatorsAndBusinesses from "@/components/FeaturesPage/CreatorsAndBusinesses"
import Niches from "@/components/FeaturesPage/Niches"
import CTA from "@/components/FeaturesPage/CTA"

function FeaturesPage() {
    return (
        <div>
            <HeroSection
                badge="Shorts Views Predictor"
                heading="Predict Your Next Viral Video Before You Post"
                description="Upload your video, and our AI-powered Viral View Predictor shows you how likely it is to trend — with instant feedback on hooks, captions, pacing, and audience engagement."
                cta="Predict my video views"
            />
            <StatsBlurbs />
            <CreatorsAndBusinesses />
            <Niches />
            <CTA 
                inputButtonText="Predict my video views"
                inputPlaceholder="Drop a link to your video"
                ctaHeading="Predict Your Video's Viral Potential in Seconds"
            />
        </div>
    )
}

export default FeaturesPage