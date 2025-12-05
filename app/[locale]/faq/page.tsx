import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('faq.title'),
    description: t('faq.subtitle'),
  };
}

export default async function FAQPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('faq');

  const faqs = [
    {
      question: 'What types of pipes do you manufacture?',
      questionAr: 'ما أنواع الأنابيب التي تصنعونها؟',
      answer:
        'We manufacture a wide range of industrial pipes including steel, plastic, copper, stainless steel, ductile iron, and PVC pipes.',
      answerAr:
        'نصنع مجموعة واسعة من الأنابيب الصناعية بما في ذلك الفولاذ والبلاستيك والنحاس والفولاذ المقاوم للصدأ والحديد المرن وأنابيب PVC.',
    },
    {
      question: 'What industries do you serve?',
      questionAr: 'ما هي الصناعات التي تخدمونها؟',
      answer:
        'We serve various industries including oil & gas, construction, water treatment, chemical processing, power generation, and mining.',
      answerAr:
        'نخدم صناعات متنوعة بما في ذلك النفط والغاز والبناء ومعالجة المياه والمعالجة الكيميائية وتوليد الطاقة والتعدين.',
    },
    {
      question: 'Do you provide international shipping?',
      questionAr: 'هل تقدمون شحن دولي؟',
      answer:
        'Yes, we provide shipping services to various countries. Contact our sales team for shipping options and pricing.',
      answerAr:
        'نعم، نقدم خدمات الشحن إلى دول مختلفة. اتصل بفريق المبيعات لدينا للحصول على خيارات الشحن والأسعار.',
    },
    {
      question: 'What certifications do your products have?',
      questionAr: 'ما هي الشهادات التي تحصل عليها منتجاتكم؟',
      answer:
        'Our products meet international standards including ISO, ASTM, and other relevant certifications. Visit our Certificates page for details.',
      answerAr:
        'منتجاتنا تلبي المعايير الدولية بما في ذلك ISO وASTM وشهادات أخرى ذات صلة. زر صفحة الشهادات للحصول على التفاصيل.',
    },
    {
      question: 'Can I request a custom pipe specification?',
      questionAr: 'هل يمكنني طلب مواصفات أنبوب مخصصة؟',
      answer:
        'Yes, we offer custom manufacturing services. Please contact our engineering team to discuss your specific requirements.',
      answerAr:
        'نعم، نقدم خدمات التصنيع المخصصة. يرجى الاتصال بفريق الهندسة لدينا لمناقشة متطلباتك المحددة.',
    },
    {
      question: 'What is your minimum order quantity?',
      questionAr: 'ما هي الحد الأدنى لكمية الطلب؟',
      answer:
        'Minimum order quantities vary by product type. Please contact our sales team for specific MOQ information.',
      answerAr:
        'تختلف الحد الأدنى لكميات الطلب حسب نوع المنتج. يرجى الاتصال بفريق المبيعات لدينا للحصول على معلومات MOQ المحددة.',
    },
  ];

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <AccordionItem value={`item-${index}`} className="border-charcoal-800">
                  <AccordionTrigger className="text-left text-gray-200 hover:text-primary-400">
                    {locale === 'ar' ? faq.questionAr : faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-400">
                      {locale === 'ar' ? faq.answerAr : faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

