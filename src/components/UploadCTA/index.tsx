import UploadVideoInput from '@/components/UI/UploadVideoInput'

interface UploadCTAInterface {
    uploadButtonText?: string;
    onUploadClick?: () => void;
}

function UploadCTA({ uploadButtonText = "Upload Here", onUploadClick }: UploadCTAInterface) {

    return (
        <div className="flex justify-center w-full mb-6">
            <div className="flex items-center flex-col sm:flex-row gap-6">
                <UploadVideoInput
                />
                <p className="text-sm text-gray-400">or</p>
                <button
                    className="btn-outline px-8 py-4 text-lg border-none !rounded-full"
                    onClick={onUploadClick}
                >
                    {uploadButtonText}
                </button>
            </div>
        </div>
    )
}

export default UploadCTA