import { useState } from 'react';
import { FaLink, FaVideo, FaArrowLeft, FaWandMagicSparkles } from 'react-icons/fa6';
import VideoURLInput from '@/components/UI/VideoURLInput';
import VideoUploadInput from '@/components/UI/VideoUploadInput';
import { UPLOAD_VALIDATION } from '@/constants';

interface UploadPageProps {
    selectedFeatureIds: string[];
    onBack: () => void;
    onAnalyze: (data: { type: 'url' | 'file'; content: string | File }) => void;
}

function UploadPage({ selectedFeatureIds, onBack, onAnalyze }: UploadPageProps) {
    const [uploadType, setUploadType] = useState<'url' | 'file'>('url');
    const [url, setUrl] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [error, setError] = useState('');
    const [isValidating, setIsValidating] = useState(false);

    const validateUrl = (url: string): boolean => {
        const { URL } = UPLOAD_VALIDATION;
        const patterns = [
            URL.YOUTUBE_REGEX,
            URL.TIKTOK_REGEX,
            URL.INSTAGRAM_REGEX,
            URL.TWITTER_REGEX,
            URL.FACEBOOK_REGEX
        ];
        
        return patterns.some(pattern => pattern.test(url));
    };

    const handleUrlSubmit = () => {
        if (!url.trim()) {
            setError('Please enter a URL');
            return;
        }

        if (!validateUrl(url)) {
            setError('Please enter a valid URL from supported platforms (YouTube, TikTok, Instagram, Twitter, Facebook)');
            return;
        }

        setError('');
        onAnalyze({ type: 'url', content: url });
    };

    const handleFileSelect = (file: File) => {
        setSelectedFile(file);
        setError('');
    };

    const handleFileError = (errorMessage: string) => {
        setError(errorMessage);
    };

    const handleFileSubmit = () => {
        if (!selectedFile) {
            setError('Please select a video file');
            return;
        }

        setError('');
        onAnalyze({ type: 'file', content: selectedFile });
    };

    const handleAnalyze = () => {
        if (uploadType === 'url') {
            handleUrlSubmit();
        } else {
            handleFileSubmit();
        }
    };

    const isAnalyzeDisabled = uploadType === 'url' 
        ? !url.trim() || !validateUrl(url)
        : !selectedFile;

    return (
        <div className="px-2 sm:px-4 py-6 sm:py-8">
            {/* Background Gradient Circle */}
            <div className="absolute top-20 sm:top-32 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-primary rounded-full opacity-30 blur-3xl" />

            {/* Header */}
            <div className="text-center mb-8">
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6"
                >
                    <FaArrowLeft className="w-4 h-4" />
                    <span>Back to Features</span>
                </button>
                
                <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
                    Upload Your Short Video
                </h2>
                <p className="text-white/80 text-lg font-roboto">
                    Choose how you'd like to provide your video for analysis
                </p>
            </div>

            {/* Upload Type Selector */}
            <div className="flex justify-center mb-8">
                <div className="flex bg-gray-800 rounded-lg p-1 relative z-10">
                    <button
                        onClick={() => {
                            console.log('URL tab clicked');
                            setUploadType('url');
                        }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 cursor-pointer ${
                            uploadType === 'url'
                                ? 'bg-white text-black'
                                : 'text-white/60 hover:text-white'
                        }`}
                    >
                        <FaLink className="w-4 h-4" />
                        <span>URL Link</span>
                    </button>
                    <button
                        onClick={() => {
                            console.log('File tab clicked');
                            setUploadType('file');
                        }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 cursor-pointer ${
                            uploadType === 'file'
                                ? 'bg-white text-black'
                                : 'text-white/60 hover:text-white'
                        }`}
                    >
                        <FaVideo className="w-4 h-4" />
                        <span>Upload File</span>
                    </button>
                </div>
            </div>

            {/* Upload Content */}
            <div className="max-w-2xl mx-auto">
                {uploadType === 'url' ? (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-white text-sm font-semibold mb-3">
                                Enter Video URL
                            </label>
                            <VideoURLInput
                                value={url}
                                onChange={setUrl}
                                onError={setError}
                            />
                            <div className="mt-3 text-gray-400 text-sm">
                                Supported platforms: YouTube, TikTok, Instagram, Twitter, Facebook
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-white text-sm font-semibold mb-3">
                                Select Video File
                            </label>
                            <VideoUploadInput
                                onFileSelect={handleFileSelect}
                                onError={handleFileError}
                            />
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-red-400 text-sm">{error}</p>
                    </div>
                )}

                {/* Selected Features Summary */}
                <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Analysis Features</h3>
                    <div className="flex flex-wrap gap-2">
                        {selectedFeatureIds.map((featureId) => (
                            <span
                                key={featureId}
                                className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full"
                            >
                                {featureId.replace('_', ' ').toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Analyze Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleAnalyze}
                        disabled={isAnalyzeDisabled}
                        className={`btn-primary !rounded-full flex items-center gap-2 ${
                            isAnalyzeDisabled ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        <FaWandMagicSparkles className="w-5 h-5" />
                        <span>Start Analysis</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadPage;
