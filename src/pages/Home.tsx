import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* PREMIUM HERO SECTION */}
      <section className="relative min-h-screen flex items-center py-24 overflow-hidden bg-white">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-light-bg rounded-full opacity-60 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-medium-bg rounded-full opacity-50 blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Content */}
            <motion.div 
              className="text-center lg:text-left space-y-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-light-bg text-primary px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm border border-medium-bg">
                <i className="fa-solid fa-star"></i>
                <span className="uppercase tracking-wider">Homemaker & Caregiving</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] font-heading text-dark-bg tracking-tight">
                Expert Home Care,<br />
                <span className="text-primary relative inline-block mt-2">
                  Family Energy.
                  <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-3 lg:h-4 text-accent/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-text font-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Serving Addison, IL with compassionate caregiving and homemaker services.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                <Link to="/contact" className="group flex items-center justify-center gap-3 bg-primary text-white px-9 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5 relative overflow-hidden">
                  <span className="relative z-10">Get Care Today</span>
                  <i className="fa-solid fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform"></i>
                  <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
                <Link to="/caregivers" className="group flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-dark-bg px-9 py-4 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all shadow-sm">
                  <span>Join Our Team</span>
                </Link>
              </div>
            </motion.div>

            {/* Premium Image Composition */}
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-medium-bg rounded-[2.5rem] transform rotate-3"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-h-[700px]">
                <img src="https://assets.ls-assets.com/provider/istock/2211174570.jpg?w=1200" alt="Caregiver assisting patient" className="w-full h-full object-cover relative z-0 transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute bottom-10 -left-12 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 flex items-center gap-5 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-primary text-2xl">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
                <div>
                  <p className="text-3xl font-bold font-heading text-dark-bg">15+</p>
                  <p className="text-gray-text font-medium text-sm">Years in Addison</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* OUR ETHOS SECTION */}
      <section className="py-24 lg:py-32 bg-dark-bg text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Our Ethos</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Mission */}
            <motion.div 
              className="relative p-10 lg:p-14 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 text-8xl text-primary/20 font-heading select-none font-bold">M</div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-heading flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl shrink-0"><i className="fa-solid fa-bullseye"></i></span>
                Mission
              </h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-body">
                CareStat Healthcare Services will be a leader in the industry by committing to a holistic approach to client care and positive results involving the client, their family, and the caregivers.
              </p>
            </motion.div>

            {/* Right Column: Philosophy */}
            <motion.div 
              className="relative p-10 lg:p-14 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 text-8xl text-accent/10 font-heading select-none font-bold">P</div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-heading flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-accent text-dark-bg flex items-center justify-center text-xl shrink-0"><i className="fa-solid fa-lightbulb"></i></span>
                Philosophy
              </h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-body">
                We value a learning, teaching, research-based approach, which fosters a professional, ethical and legal environment. It is within this environment that our staff will excel in promoting and providing quality customer service in the delivery of personal care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-light-bg via-white to-medium-bg relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6 text-dark-text">
              <i className="fa-solid fa-badge-check"></i>
              <span className="text-sm font-semibold">Our Promise to You</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading">The <span className="text-primary">CareStat</span> Commitment</h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto mt-6">Three core principles that guide every interaction with your family and loved ones.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[ 
              { title: "Reliability", icon: "fa-clock", color: "from-primary to-accent3", desc: "We show up on time, every time. Your peace of mind is our priority.", points: ["Consistent scheduling", "Backup coverage"], mobileExtra: "Our Specialty" },
              { title: "Professionalism", icon: "fa-user-shield", color: "from-accent2 to-accent", desc: "Fully vetted and compassionate caregivers who treat your family with respect.", points: ["Background screened", "Certified & trained"], desktopExtra: "Our Specialty" },
              { title: "Clarity", icon: "fa-comments", color: "from-gray-text to-dark-bg", desc: "Transparent communication. You'll always know what's happening and why.", points: ["Status updates", "Family meetings"] }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all group border border-gray-100`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {item.mobileExtra && <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 rounded-full text-sm font-bold text-dark-text shadow-lg block md:hidden whitespace-nowrap">{item.mobileExtra}</div>}
                {item.desktopExtra && <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 rounded-full text-sm font-bold text-dark-text shadow-lg hidden md:block whitespace-nowrap">{item.desktopExtra}</div>}
                <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${item.color} rounded-full`}></div>
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${item.icon} text-white font-heading text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">{item.title}</h3>
                <p className="text-gray-text text-lg leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-3">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-medium-bg rounded-full flex items-center justify-center"><i className="fa-solid fa-check text-primary text-xs"></i></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent rounded-full blur-2xl"></div>
        </div>
        <motion.div 
          className="relative max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading">Ready to Start Your Care Journey?</h2>
          <p className="text-xl text-white/90 mb-10">Take the first step toward peace of mind. Schedule a free consultation today and let us show you why families trust CareStat.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-button font-bold text-lg shadow-xl hover:bg-accent transition-all transform hover:-translate-y-1">
              <i className="fa-solid fa-calendar-check"></i> <span>Schedule Free Consultation</span>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2"><i className="fa-solid fa-shield-check"></i><span className="text-sm font-medium">Fully Insured</span></div>
            <div className="flex items-center gap-2"><i className="fa-solid fa-star"></i><span className="text-sm font-medium">Free Assessment</span></div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
