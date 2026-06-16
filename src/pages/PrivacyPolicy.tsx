import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-16 bg-dark-bg text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-primary rounded-full opacity-5 blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4">Privacy Policy</h1>
            <p className="text-white/60 text-sm font-mono uppercase tracking-wider">Effective Date: June 12, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-dark-text">
          <motion.div 
            className="font-body leading-relaxed text-gray-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Introduction</h2>
              <p>
                CareStat Healthcare Services respects your privacy and is committed to protecting the personal information you provide through our website. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-dark-bg mt-6 mb-3">Information You Provide Voluntarily</h3>
              <p className="mb-4">
                When you contact us, request services, or apply for employment, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Employment history</li>
                <li>Professional certifications</li>
                <li>Resume or application materials</li>
                <li>Any information you voluntarily provide through forms or communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-dark-bg mt-6 mb-3">Website Usage Information</h3>
              <p className="mb-4">
                We may automatically collect limited information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Browser type</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited</li>
                <li>Date and time of visits</li>
              </ul>
              <p>
                This information helps us improve our website and services.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">How We Use Your Information</h2>
              <p className="mb-4">
                We may use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries</li>
                <li>Provide information about our services</li>
                <li>Review employment applications</li>
                <li>Communicate with job applicants</li>
                <li>Improve website performance</li>
                <li>Maintain business records</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Employment Applications */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Employment Applications</h2>
              <p className="mb-4">
                Information submitted through caregiver or employment applications will be used solely for recruitment, hiring, and employment-related purposes.
              </p>
              <p>
                Applicants should not provide Social Security Numbers, banking information, or other highly sensitive personal information through initial online application forms unless specifically requested through secure channels.
              </p>
            </div>

            {/* Information Sharing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100 font-heading">Information Sharing</h2>
              <p className="mb-4">
                We do not sell personal information. We may share information only:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With authorized employees or contractors who need the information to perform their duties</li>
                <li>When required by law</li>
                <li>To protect our legal rights</li>
                <li>With service providers that assist in operating our business and website</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Data Security</h2>
              <p className="mb-4">
                We take reasonable administrative, technical, and organizational measures to protect personal information from unauthorized access, use, or disclosure.
              </p>
              <p>
                However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Retention of Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Retention of Information</h2>
              <p>
                We retain personal information only as long as reasonably necessary for business, legal, hiring, or operational purposes.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Third-Party Services</h2>
              <p className="mb-4">
                Our website may use third-party services such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Workspace</li>
                <li>Google Forms</li>
                <li>Google Analytics</li>
                <li>Website hosting providers</li>
              </ul>
              <p className="mt-4">
                These providers may process information according to their own privacy policies.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Links to Other Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
              </p>
            </div>

            {/* Children’s Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Children’s Privacy</h2>
              <p>
                Our services and website are not directed toward children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-dark-bg font-heading mb-4 border-b pb-2 border-gray-100">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.
              </p>
            </div>

            {/* Contact Information */}
            <div id="contact-info" className="bg-light-bg border border-primary/10 rounded-2xl p-6 sm:p-8 mt-12 shadow-sm">
              <h2 className="text-xl font-bold text-dark-bg font-heading mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have questions regarding this Privacy Policy, please contact us at:
              </p>
              <address className="not-italic text-gray-text space-y-2">
                <p className="font-semibold text-dark-bg">CareStat Healthcare Services</p>
                <p className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-primary text-sm"></i>
                  <a href="tel:+16307583430" className="hover:text-primary transition-colors">(630) 758-3430</a>
                </p>
                <p className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-primary text-sm"></i>
                  <a href="mailto:carestathealthcare@gmail.com" className="hover:text-primary transition-colors">carestathealthcare@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <i className="fa-solid fa-map-marker-alt text-primary text-sm font-heading"></i>
                  <span>311 N Chestnut St, Addison, IL 60101</span>
                </p>
              </address>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
