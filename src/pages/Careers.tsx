import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <>
      <section className="bg-light-bg py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
              <i className="fa-solid fa-briefcase text-primary"></i>
              <span className="text-sm font-medium text-dark-text">Careers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">Join Our <span className="text-primary">Team</span></h1>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Build a rewarding career making a real difference in the lives of seniors in Addison.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Now Hiring Section */}
      <section className="py-20 lg:py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hidden md:block"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-white flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/20 text-dark-bg px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-accent/30">
                <i className="fa-solid fa-briefcase text-primary"></i> <span>Join Our Team</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-dark-bg mb-6">Now Hiring</h2>
              <p className="text-lg text-gray-text leading-relaxed font-body mb-6">
                We are always looking for compassionate personnel. Call our office regarding current employment opportunities.
              </p>
              
              <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                <li className="flex items-center gap-2 text-dark-bg font-medium">
                  <i className="fa-solid fa-check text-primary"></i> Minimal experience required
                </li>
                <li className="flex items-center gap-2 text-dark-bg font-medium">
                  <i className="fa-solid fa-check text-primary"></i> Training provided
                </li>
              </ul>
              <div className="flex items-center gap-2 text-dark-bg font-medium mt-3 sm:mt-4 justify-center md:justify-start">
                <i className="fa-solid fa-check text-primary"></i> Competitive Salary & Rewarding Career
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1 group">
                <span>Call (630) 758-3430</span>
                <i className="fa-solid fa-phone group-hover:rotate-12 transition-transform"></i>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Block 1: Our Promise */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center p-10 lg:p-14 bg-light-bg rounded-[2.5rem] border border-primary/10 relative overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-tr-full"></div>
            
            <div className="relative z-10 text-center mb-6">
              <i className="fa-solid fa-handshake-angle text-primary text-4xl mb-4"></i>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-dark-bg">Our Promise</h2>
            </div>
            <p className="text-[1.1rem] lg:text-lg text-gray-text leading-relaxed font-body relative z-10">
              We value the opinion of our clients, staff, and other industry partners. The suggestions and ideas that are given to us will be used to develop and improve the company's policies and procedures so that the organization would attain its highest potential as dictated in our company's philosophy and mission. If you have any suggestions or creative ideas that could improve the quality of our service delivery, please contact our office at: (630) 758-3430, or fax at: (630) 206-1211. All calls will be recorded and reviewed. We continue to look for ways to surpass industry standards in customer service.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
