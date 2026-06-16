import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Caregivers() {
  return (
    <>
      <section className="bg-dark-bg text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://assets.ls-assets.com/provider/istock/1351187123.jpg?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">Our <span className="text-primary">Caregivers</span></h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We don't just hire employees. We carefully select compassionate professionals to become part of the CareStat family.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">The Vetting Process</h2>
            <p className="text-gray-text text-lg max-w-2xl mx-auto">Because we trust them with our family, so you can trust them with yours. Only the top candidates pass our rigorous multi-step screening.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[ 
              { step: 1, title: "Background Checks", icon: "fa-fingerprint", desc: "National and state-level criminal background checks, plus rigorous identity verification." },
              { step: 2, title: "License Verification", icon: "fa-certificate", desc: "Strict verification of all nursing and care licenses with the state of Illinois." },
              { step: 3, title: "Personality Assessment", icon: "fa-face-smile", desc: "Interviews focused on empathy, patience, and the ability to handle high-stress situations." },
              { step: 4, title: "Continuous Training", icon: "fa-book-open-reader", desc: "Ongoing mandatory education on Alzheimer's, fall prevention, and emergency protocols." }
            ].map((s, i) => (
              <motion.div 
                key={i}
                className="bg-light-bg rounded-3xl p-8 relative pt-12 border border-transparent hover:border-primary transition-all group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {s.step}
                </div>
                <i className={`fa-solid ${s.icon} text-4xl text-accent2 mb-6 opacity-50 group-hover:opacity-100 transition-opacity`}></i>
                <h3 className="text-xl font-bold font-heading mb-3">{s.title}</h3>
                <p className="text-gray-text leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-8">Join Our Team</h2>
          <p className="text-xl text-white/90 mb-10">Are you a dedicated healthcare professional looking to make a real difference in Addison? We are always looking for top talent.</p>
          <a 
            id="apply-today-btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKNexsjqqmmO5LGZv6YeiAI-dLm8WC-JFPoi0pkWmTvbjTFg/viewform?usp=publish-editor" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-primary px-10 py-5 rounded-button font-bold text-lg shadow-xl hover:bg-dark-bg hover:text-white transition-all inline-block"
          >
            Apply Today
          </a>
          <p id="apply-today-certification" className="text-base text-white/80 mt-6 max-w-2xl mx-auto font-body leading-relaxed">
            I certify that the information provided is accurate to the best of my knowledge and understand that submitting this application does not guarantee employment.
          </p>
        </motion.div>
      </section>
    </>
  );
}
