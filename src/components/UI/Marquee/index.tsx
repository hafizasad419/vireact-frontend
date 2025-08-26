import React from 'react';
import Marquee from 'react-fast-marquee';

interface MarqueeProps {
    children: React.ReactNode;
    speed?: number;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    gradient?: boolean;
    gradientColor?: string;
    gradientWidth?: number;
    className?: string;
    width?: string | number;
    height?: string | number;
    loop?: number;
    delay?: number;
    play?: boolean;
    style?: React.CSSProperties;
}

function CustomMarquee({
    children,
    speed = 40,
    direction = 'left',
    pauseOnHover = false,
    gradient = false,
    gradientColor = '#ffffff',
    gradientWidth = 50,
    className = '',
    width = '100%',
    height = 'auto',
    loop = 0,
    delay = 0,
    play = true,
    style = {},
}: MarqueeProps) {
    return (
        <div 
            className={className}
            style={{ 
                width, 
                height,
                ...style 
            }}
        >
            <Marquee
                speed={speed}
                direction={direction}
                pauseOnHover={pauseOnHover}
                gradient={gradient}
                gradientColor={gradientColor}
                gradientWidth={gradientWidth}
                loop={loop}
                delay={delay}
                play={play}
            >
                {children}
            </Marquee>
        </div>
    );
}

export default CustomMarquee;