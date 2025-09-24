import { IoSparkles, IoStar, IoFlash, IoShield } from 'react-icons/io5';

export interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: IoSparkles,
    title: 'Early Access',
    description: 'Be among the first to experience our revolutionary platform'
  },
  {
    icon: IoStar,
    title: 'Exclusive Features',
    description: 'Access to premium features before public release'
  },
  {
    icon: IoFlash,
    title: 'Priority Support',
    description: 'Direct line to our founding team for feedback and support'
  },
  {
    icon: IoShield,
    title: 'Private Community',
    description: 'Join our exclusive growth community with industry leaders'
  }
];
