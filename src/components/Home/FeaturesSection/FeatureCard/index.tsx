import { type Feature } from '@/components/Home/FeaturesSection/features-items';

interface FeatureCardProps {
    feature: Feature;
}

function FeatureCard({ feature }: FeatureCardProps) {

    return (
        <div className="glassmorphism rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center relative">
            {/* Feature Number Badge */}
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white/20">
                <span className="text-white font-bold text-lg md:text-xl">
                    {feature.id}
                </span>
            </div>

            {/* Creative Short Text */}
            <div className="mb-4">
                <span className="text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase">
                    {feature.creativeText}
                </span>
            </div>

            {/* Multiple Icons Container */}
            <div className="flex items-center justify-center gap-3 mb-6">
                {feature.icons.map((IconComponent, index) => (
                    <div
                        key={index}
                        className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-xl flex items-center justify-center shadow-lg"
                    >
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-gray-400" />
                    </div>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-[1.2] text-white mb-4">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base font-roboto font-normal leading-[1.4375] text-white">
                {feature.description}
            </p>
        </div>
    );
}

export default FeatureCard;
