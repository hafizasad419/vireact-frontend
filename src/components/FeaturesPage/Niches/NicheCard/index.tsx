interface NicheCardProps {
    category: string;
    title: string;
    description: string;
    placeholderClass: string;
}

function NicheCard({ category, title, description, placeholderClass }: NicheCardProps) {
    return (
        <div className="mx-4 min-w-[320px]">
            {/* Category Label */}
            <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-md">
                    {category}
                </span>
            </div>

            {/* Content Card */}
            <div className="relative rounded-xl bg-white/10 border border-white/20 overflow-hidden h-64">
                {/* Placeholder Image Div */}
                <div className={`w-full h-full ${placeholderClass} relative`}>
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
                        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                        <p className="text-gray-300 text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NicheCard;
