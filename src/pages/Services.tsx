import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <section className="bg-light-bg py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
              <i className="fa-solid fa-hands-holding-child text-primary"></i>
              <span className="text-sm font-medium text-dark-text">What We Offer</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">Our <span className="text-primary">Services</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl lg:text-2xl text-gray-text leading-relaxed font-body">
              CareStat offers our clients assistance with daily grooming and personal needs. Tasks such as helping with:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              { title: "Bathing", icon: "fa-bath" },
              { title: "Dressing", icon: "fa-shirt" },
              { title: "Shampooing and hair care", icon: "fa-hands-bubbles" },
              { title: "Foot care (excluding nail trimming)", icon: "fa-shoe-prints" },
              { title: "Denture care", icon: "fa-tooth" },
              { title: "Shaving", icon: "fa-scissors" },
              { title: "Bedpan routines", icon: "fa-toilet-paper" },
              { title: "Eating", icon: "fa-utensils" },
              { title: "Ambulating and transfers", icon: "fa-person-walking" },
            ].map((svc, idx) => (
              <motion.div 
                key={idx}
                className="group cursor-default bg-light-bg rounded-3xl p-6 text-center border-2 border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4 min-h-[160px]"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <i className={`fa-solid ${svc.icon} text-primary group-hover:text-white text-xl transition-colors`}></i>
                </div>
                <h3 className="font-bold font-heading text-dark-bg text-sm sm:text-base leading-tight">
                  {svc.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20 bg-medium-bg rounded-3xl p-8 lg:p-12 border border-primary/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-10 -top-10 text-9xl text-primary/5">
              <i className="fa-solid fa-house-chimney"></i>
            </div>
            <p className="text-lg lg:text-xl text-dark-bg leading-relaxed font-body relative z-10 font-medium">
              If the client needs more services in shopping, menu planning and preparation, laundry and light housekeeping such as vacuuming, dusting, dry mopping, dish washing, cleaning the kitchen and bathroom, and changing linens, our trained caregivers would be able to provide these services.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Trust & Vetting Section */}
      <section className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-6">
              <i className="fa-solid fa-shield-check text-3xl"></i>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">CareStat... the wisest choice!</h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed font-body max-w-4xl mx-auto">
              Our clients can trust that they will receive high standards of service by personnel who are screened, trained and monitored as dictated by CareStat's company policies and procedures.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              "We conduct employment verifications on all of our staff members, as well as screen each applicant's criminal background record.",
              "CareStat requires all employees to complete the Company Orientation and Training program before being given an assignment.",
              "While out in the field, regular supervisory visits are conducted to monitor the staff’s performance to determine that services are being provided at the highest possible level.",
              "The company has instituted a Zero-Tolerance policy to curtail any misbehavior and would act immediately to correct any client concerns.",
              "Our office staff members are trained to treat each inquiry with importance and find a resolution in the most expedient manner.",
              "Any questions or concerns may be directed to the Supervisor at (630) 758-3430."
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start gap-5 bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors duration-300 border border-white/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center mt-0.5 shadow-sm">
                  <i className="fa-solid fa-check text-sm font-bold"></i>
                </div>
                <p className="text-white font-medium text-[1.1rem] leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 2: Call to Action */}
      <section className="py-20 bg-dark-bg text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">Need Help Deciding?</h2>
          <p className="text-lg text-white/80 mb-8">Contact us for a free, no-obligation assessment of your family's needs.</p>
          <Link to="/contact" className="inline-flex bg-primary text-white px-8 py-4 rounded-button font-bold text-lg hover:bg-accent hover:text-dark-text transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get a Free Assessment
          </Link>
        </motion.div>
      </section>
    </>
  );
}
