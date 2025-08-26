import { FaLink } from "react-icons/fa";

function InputWithButton({
    buttonText = "Analyze my video",
    inputPlaceholder = "Drop a video link",
}) {
    return (
        <div className="relative max-w-2xl">
            {/* Chain icon */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                <FaLink className="w-5 h-5" />
            </div>

            {/* Input field */}
            <input
                type="text"
                placeholder={inputPlaceholder}
                className="w-full bg-dark-input-bg text-white placeholder-gray-400 rounded-full py-4 pl-12 pr-40 border-0 outline-none focus:ring-2 focus:ring-gray-600"
            />

            {/* Button positioned inside the input */}
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-secondary !rounded-full">
                {buttonText}
            </button>
        </div>
    )
}

export default InputWithButton