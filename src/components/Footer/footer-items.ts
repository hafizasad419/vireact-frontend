import {
    SiWhatsapp,
    SiFacebook,
    SiInstagram,
    SiX,
    SiLinkedin,
    SiTiktok
} from 'react-icons/si';
import type { FooterSection } from '@/types/footer';

export const footerSections: FooterSection[] = [
    {
        title: 'COMPANY',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Career', href: '/career' },
            { label: 'Contact Us', href: '/contact' }
        ]
    },
    {
        title: 'QUICK LINKS',
        links: [
            { label: 'Features', href: '/features' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Resources', href: '/resources' },
            { label: 'Tools', href: '/tools' },
            { label: 'Pricing', href: '/pricing' }
        ]
    },
    {
        title: 'TRUST & LEGAL',
        links: [
            { label: 'Terms and Conditions', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms Of Services', href: '/terms-of-service' },
            { label: 'Cookies Preferences', href: '/cookies' },
            { label: 'Accessibility Statement', href: '/accessibility' }
        ]
    }
];

export const socialLinks = [
    { icon: SiWhatsapp, href: '/whatsapp', label: 'WhatsApp' },
    { icon: SiFacebook, href: '/facebook', label: 'Facebook' },
    { icon: SiInstagram, href: '/instagram', label: 'Instagram' },
    { icon: SiX, href: '/twitter', label: 'Twitter' },
    { icon: SiLinkedin, href: '/linkedin', label: 'LinkedIn' },
    { icon: SiTiktok, href: '/tiktok', label: 'TikTok' }
];