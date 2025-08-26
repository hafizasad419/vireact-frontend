import UploadCTA from "@/components/UploadCTA";

interface CTAProps {
    inputButtonText: string;
    inputPlaceholder: string;
    ctaHeading: string;
}

function CTA({ inputButtonText, inputPlaceholder, ctaHeading }: CTAProps) {
    return (
        <div className="w-full max-w-7xl mx-auto py-16">
            <h1 className="font-bold mb-8 text-center">{ctaHeading}</h1>
            <UploadCTA 
            inputButtonText={inputButtonText}
            inputPlaceholder={inputPlaceholder}
            />
        </div>
    )
}

export default CTA;