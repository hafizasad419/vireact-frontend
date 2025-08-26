import CustomMarquee from '@/components/UI/Marquee';
import NicheCard from './NicheCard';
import { nicheData } from './niche-data';

interface Niche {
    category: string;
    title: string;
    description: string;
    placeholderClass: string;
}

function Niches() {
    return (
        <div className="w-full max-w-7xl mx-auto py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="font-bold text-white mb-4">
                    FROM IDEA TO VIRAL — {' '}
                    <span className="text-gradient-primary">INSTANT PREDICTIONS</span> MADE EASY
                </h2>
            </div>

            {/* Content Cards Section */}
            <div className="relative">
                <CustomMarquee
                    speed={25}
                    direction="right"
                    pauseOnHover={false}
                    gradient={false}
                    className="py-4"
                >
                    {nicheData.map((niche: Niche) => (
                        <NicheCard
                            key={niche.category}
                            category={niche.category}
                            title={niche.title}
                            description={niche.description}
                            placeholderClass={niche.placeholderClass}
                        />
                    ))}
                </CustomMarquee>
            </div>
        </div>
    );
}

export default Niches;
