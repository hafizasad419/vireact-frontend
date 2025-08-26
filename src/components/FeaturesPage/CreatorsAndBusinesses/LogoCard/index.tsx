interface LogoCardProps {
    text: string;
    style: string;
}

function LogoCard({ text, style }: LogoCardProps) {
    return (
        <div className="mx-8 flex items-center">
            <span className={`text-lg font-medium text-gray-300 ${style}`}>
                {text}
            </span>
        </div>
    );
}

export default LogoCard;
