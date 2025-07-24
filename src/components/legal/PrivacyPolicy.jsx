// Import previously created components

// Reusable component for each policy section to maintain consistency
const PolicySection = ({ number, title, description, points }) => (
  <div className="mb-10">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
      {number}. {title}
    </h2>
    {description && (
      <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
    )}
    {points && (
      <ul className="space-y-3 pl-5">
        {points.map((point, index) => (
          <li key={index} className="flex">
            <span className="text-purple-400 mr-3 mt-1">•</span>
            <span className="text-gray-300 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// The main component for the Privacy Policy page
const PrivacyPolicy = () => {
  // Data structure for all privacy policy sections, making it easy to manage
  const privacyPolicyData = [
    {
      number: 1,
      title: "Information Collection",
      description:
        "We collect information that you provide voluntarily when establishing accounts, utilizing our services, submitting inquiries, or engaging with our platforms. This includes:",
      points: [
        "Personal identification details (name, email, phone, address)",
        "Business information and company details",
        "Payment and billing data",
        "Communication records and feedback",
        "Marketing preferences and interests",
      ],
    },
    {
      number: 2,
      title: "How We Use Information",
      description:
        "We utilize collected information for business purposes, including:",
      points: [
        "Delivering, maintaining, and enhancing our services",
        "Processing transactions and sending related communications",
        "Sending technical updates, security alerts, and support messages",
        "Responding to inquiries, questions, and customer service requests",
        "Communicating about services, features, and opportunities",
        "Monitoring usage patterns and analyzing service performance",
      ],
    },
    {
      number: 3,
      title: "Information Sharing",
      description: "We may share your information in these circumstances:",
      points: [
        "With service providers and partners who assist in delivering our services",
        "When required by law or to respond to legal processes",
        "To protect the rights and safety of AetherMark and others",
        "In connection with business transactions like mergers or acquisitions",
      ],
    },
    {
      number: 4,
      title: "Data Security",
      description:
        "We implement comprehensive security measures to protect your information from unauthorized access, modification, disclosure, or destruction. However, no internet transmission or electronic storage method is completely secure.",
    },
    {
      number: 5,
      title: "Cookies and Tracking",
      description:
        "We use cookies and similar technologies to track website activity and store preferences. Cookies are small data files that may include unique identifiers. You can configure your browser to refuse cookies or alert you when cookies are sent. However, some features may not function properly without cookies.",
    },
    {
      number: 6,
      title: "Your Rights",
      description:
        "You have certain rights regarding your personal information:",
      points: [
        "Right to access, update, or delete your information",
        "Right to correct inaccurate or incomplete information",
        "Right to object to processing of your personal information",
        "Right to data portability",
        "Right to withdraw consent where applicable",
      ],
    },
    {
      number: 7,
      title: "Data Retention",
      description:
        "We retain personal information as long as we have a legitimate business need. When no longer needed, we will delete or anonymize it, or securely store and isolate it from further processing.",
    },
    {
      number: 8,
      title: "International Transfers",
      description:
        "Your information may be transferred to and processed in locations outside your jurisdiction where data protection laws may differ.",
    },
    {
      number: 9,
      title: "Children's Privacy",
      description:
        "Our services are not intended for individuals under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.",
    },
    {
      number: 10,
      title: "Policy Updates",
      description:
        'We may update this Privacy Policy periodically. We will notify you of changes by posting the updated policy on this page and updating the "Last updated" date.',
    },
    {
      number: 11,
      title: "Contact Information",
      description: "For refund requests or questions about this policy:",
      points: [
        <>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:campbellcamilanqb413@hotmail.com"
            className="text-cyan-400 hover:underline"
          >
            campbellcamilanqb413@hotmail.com
          </a>
        </>,
        <>
          <strong>Phone:</strong> +1 640-272-0406
        </>,
        "Address: Pine Place 32, Farmington, MN 55024, United States",
        "Business Hours: Mon-Fri: 9:00 AM - 6:00 PM CST",
      ],
    },
  ];

  return (
    <div className="bg-[#0B0F19]">
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {privacyPolicyData.map((section) => (
            <PolicySection
              key={section.number}
              number={section.number}
              title={section.title}
              description={section.description}
              points={section.points}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
