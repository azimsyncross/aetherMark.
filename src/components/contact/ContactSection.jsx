import {
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";

// FAQCard component for the FAQ section
const FAQCard = ({ question, answer }) => (
  <div className="bg-[#1e293b]/60 rounded-xl p-6">
    <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
    <p className="text-gray-400">{answer}</p>
  </div>
);

// InputField component for the form
const InputField = ({ id, name, type = "text", placeholder, required }) => (
  <div>
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-300 mb-2 block"
    >
      {placeholder}
      {required && <span className="text-purple-400"> *</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 bg-[#1e293b] border-2 border-transparent rounded-lg focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-500"
    />
  </div>
);

// SelectField component for the form dropdowns
const SelectField = ({ id, name, label, children }) => (
  <div>
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-300 mb-2 block"
    >
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        name={name}
        className="w-full px-4 py-3 bg-[#1e293b] border-2 border-transparent rounded-lg focus:outline-none focus:border-purple-500 appearance-none transition-colors"
      >
        {children}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const ContactPage = () => {
  const faqs = [
    {
      question: "How quickly can we begin?",
      answer:
        "We can typically initiate your marketing campaigns within 1-2 business days after our initial consultation and agreement execution.",
    },
    {
      question: "Do you partner with businesses of all sizes?",
      answer:
        "Absolutely! We collaborate with startups, scaling businesses, and established enterprises. Our solutions are tailored to fit your specific requirements and investment level.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We monitor key performance indicators that align with your business objectives – lead generation, conversion optimization, revenue growth, and ROI. You receive comprehensive monthly analytics.",
    },
    {
      question: "What distinguishes you from other agencies?",
      answer:
        "Our data-driven methodology, partnership approach, and commitment to transparency differentiate us. We function as growth partners, not just service providers.",
    },
  ];

  const contactDetails = [
    {
      icon: User,
      title: "Executive Leadership",
      content: "ROBERT THURSON",
    },
    {
      icon: Mail,
      title: "Email Contact",
      content: "campbellcamilanqb413@hotmail.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+1 640-272-0406",
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "Pine Place 32, Farmington, MN 55024, United States",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9:00 AM - 6:00 PM CST",
    },
  ];

  return (
    <div className="bg-[#0B0F19] text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Top Section: Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              Connect With Us
            </h1>
            <p className="text-gray-300 text-lg">
              We're dedicated to your business success. Reach out through any
              channel, and we'll respond with strategic insights within 24
              hours.
            </p>
            <div className="space-y-4 pt-4">
              {contactDetails.map(({ icon: Icon, title, content }) => (
                <div key={title} className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-400">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#111827] p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                  id="full-name"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                  id="company-name"
                  name="companyName"
                  placeholder="Company Name"
                />
                <InputField
                  id="phone-number"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <SelectField
                  id="service"
                  name="service"
                  label="Service Interest"
                >
                  <option>Select a service</option>
                  <option>Digital Marketing</option>
                  <option>SEO</option>
                  <option>Web Design</option>
                </SelectField>
                <SelectField id="budget" name="budget" label="Budget Range">
                  <option>Select budget range</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </SelectField>
              </div>

              <div>
                <label
                  htmlFor="project-details"
                  className="text-sm font-medium text-gray-300 mb-2 block"
                >
                  Project Details<span className="text-purple-400"> *</span>
                </label>
                <textarea
                  id="project-details"
                  name="details"
                  rows="4"
                  placeholder="Tell us about your business goals, current challenges, and what you're looking to achieve..."
                  required
                  className="w-full px-4 py-3 bg-[#1e293b] border-2 border-transparent rounded-lg focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold text-white mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Come see us in person or get directions to our location
          </p>
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.7841712100767!2d-93.13765122482486!3d44.642327987900295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f64a8bb5ca21c5%3A0x941443ea7c956b91!2s32%20Pine%20Pl%2C%20Farmington%2C%20MN%2055024%2C%20USA!5e0!3m2!1sen!2sbd!4v1753334735239!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              Common questions about our services and partnership approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <FAQCard
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
