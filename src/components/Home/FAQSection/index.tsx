import { useState } from 'react';
import HomeSection from '@/components/HomeSection';
import FAQItem from '@/components/Home/FAQSection/FAQItem';
import { faqs } from '@/components/Home/FAQSection/faq-items';

function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);



    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <HomeSection
            className="overflow-hidden"
            background="transparent"
            padding="small"
            overflow="hidden"
            sectionHeader={{
                badge: "FAQ's",
                title: "All You Need to Know"
            }}
        >
            {/* Main content card */}
            <div className="relative z-10 w-full max-w-4xl mx-auto py-12
                glassmorphism shadow-lg overflow-hidden rounded-2xl"
            >
                <div className="space-y-4 px-8">
                    {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        faq={faq}
                        index={index}
                        openFAQ={openFAQ}
                        toggleFAQ={toggleFAQ}
                    />
                    ))}
                </div>
            </div>
        </HomeSection>
    );
}

export default FAQSection;