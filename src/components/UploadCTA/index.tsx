import InputWithButton from '@/components/UI/InputWIthButton'
import { useState } from 'react';

interface UploadCTAInterface {
    inputButtonText?: string;
    inputPlaceholder?: string;
    uploadButtonText?: string;
    onUploadClick?: () => void;
}

function UploadCTA({ inputButtonText = "Analyze my video", inputPlaceholder = "Drop a video link", uploadButtonText = "Upload to analyze", onUploadClick }: UploadCTAInterface) {
    const [isUploading, setIsUploading] = useState(false);

    const handleUploadClick = () => {
        setIsUploading(true);
        onUploadClick?.();
    }

    return (
        <div className="flex justify-center w-full mb-6">
            <div className="flex items-center flex-col sm:flex-row gap-6">
                <InputWithButton
                    buttonText={inputButtonText}
                    inputPlaceholder={inputPlaceholder}
                />
                <p className="text-sm text-gray-400">or</p>
                <button
                    className="btn-outline px-8 py-4 text-lg !border-none"
                    onClick={onUploadClick}
                    disabled={isUploading}
                >
                    {uploadButtonText}
                </button>
            </div>
        </div>
    )
}

export default UploadCTA