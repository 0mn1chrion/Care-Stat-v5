import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-dark-bg text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <i className="fa-solid fa-handshake text-accent"></i>
              <span className="text-white/80 text-sm font-medium">Our Story</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nearly Two Decades of <span className="text-accent">Unwavering Service</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn about CareStat's deep roots in the Addison community, and why families have trusted us since 2008.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img src="https://assets.ls-assets.com/provider/istock/2222845313.jpg?w=1200" alt="Caregiver and senior patient smiling" className="w-full h-[450px] lg:h-[550px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent rounded-2xl p-6 shadow-2xl animate-pulse">
                <div className="text-center text-dark-text">
                  <p className="text-4xl font-bold font-heading">2008</p>
                  <p className="text-sm font-semibold">Established</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 space-y-6 text-white/90"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold font-heading text-white">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                Founded in 2008, CareStat Healthcare Services was born from a simple but profound belief: every individual deserves to age with dignity, surrounded by respect and expert care, in the comfort of their own home.
              </p>
              <p className="text-lg leading-relaxed">
                Over the past 15 years, we have grown from a small local initiative in Addison, IL into one of DuPage County's most trusted home health providers. We haven't just built a business; we've built a family of dedicated caregivers and satisfied clients.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div><p className="text-3xl lg:text-4xl font-bold text-primary font-heading">15+</p><p className="text-sm text-white/60">Years Serving</p></div>
                <div><p className="text-3xl lg:text-4xl font-bold text-accent font-heading">1,000+</p><p className="text-sm text-white/60">Families Helped</p></div>
                <div><p className="text-3xl lg:text-4xl font-bold text-white font-heading">24/7</p><p className="text-sm text-white/60">Care Available</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-4">Why Choose <span className="text-primary">CareStat?</span></h2>
            <p className="text-gray-text max-w-2xl mx-auto text-lg">We understand that inviting someone into your home requires immense trust. We earn that trust every single day.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-light-bg p-8 rounded-3xl"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-2xl text-primary"><i className="fa-solid fa-heart-pulse"></i></div>
              <h3 className="text-2xl font-bold mb-3 font-heading">Personalized Care Plans</h3>
              <p className="text-gray-text leading-relaxed">No two individuals are the same. We conduct thorough free assessments to craft a living assistance plan tailored specifically to the medical, physical, and emotional needs of your loved one.</p>
            </motion.div>

            <motion.div 
              className="bg-light-bg p-8 rounded-3xl"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-2xl text-primary"><i className="fa-solid fa-shield-halved"></i></div>
              <h3 className="text-2xl font-bold mb-3 font-heading">Licensed & Insured</h3>
              <p className="text-gray-text leading-relaxed">We operate with full transparency. CareStat is fully licensed by the state of Illinois and comprehensively insured to give your family complete peace of mind.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-medium-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold font-heading mb-6">Ready to learn more?</h2>
            <p className="text-xl text-gray-text mb-8">Meet the exceptional caregivers who make our mission a reality.</p>
            <Link to="/caregivers" className="inline-flex items-center gap-2 bg-dark-bg text-white px-8 py-4 rounded-button font-bold text-lg hover:bg-primary transition-all">
              Meet Our Caregivers <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
