import React from 'react';

export const GlobalSchemas = () => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GoSirat",
    "url": "https://gosirat.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gosirat.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GoSirat",
    "url": "https://gosirat.com",
    "logo": "https://gosirat.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-309-9104803",
      "contactType": "customer service",
      "email": "info@gosirat.com",
      "areaServed": ["Islamabad", "Rawalpindi"],
      "availableLanguage": "en"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GoSirat",
    "image": "https://gosirat.com/logo.png",
    "url": "https://gosirat.com",
    "telephone": "+92-309-9104803",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No C-03, Bahrain Plaza Civic Centre, Bahria Town Phase 04",
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
};

export const WebPageSchema = ({ title, description, url }: { title: string, description: string, url: string }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQSchema = ({ faqs }: { faqs: { question: string, answer: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbSchema = ({ items }: { items: { name: string, url: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
