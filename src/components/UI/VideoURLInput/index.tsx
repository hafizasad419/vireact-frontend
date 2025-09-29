import { FaLink } from "react-icons/fa";
import { platformOptions } from "@/components/UI/VideoURLInput/platform-options-items";
import { useTypingEffect } from "@/hooks/useTypingEffect";

interface VideoURLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    onError?: (error: string) => void;
    className?: string;
}

function VideoURLInput({ value = '', onChange, onError, className = '' }: VideoURLInputProps) {
    const typingText = useTypingEffect({
        options: platformOptions,
        typingSpeed: 100,
        deletingSpeed: 100,
        pauseDuration: 2000,
        transitionDelay: 500
    });

    const placeholderText = `Drop a ${typingText}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange?.(newValue);
        
        // Clear any previous errors when user starts typing
        if (onError && newValue.trim()) {
            onError('');
        }
    };

    return (
        <div className={`relative max-w-lg ${className}`}>
            {/* Chain icon */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                <FaLink className="w-5 h-5" />
            </div>

            {/* Input field */}
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholderText}
                className="w-full bg-dark-input-bg text-white placeholder-gray-400 rounded-full py-4 pl-12 pr-40 border-0 outline-none focus:ring-2 focus:ring-gray-600"
            />
        </div>
    )
}

export default VideoURLInput