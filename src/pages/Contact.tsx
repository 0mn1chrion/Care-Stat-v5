import { motion } from 'motion/react';

export default function Contact() {
  return (
    <>
      <section className="bg-medium-bg py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              We're here to answer your questions and help you find the right care solution for your loved ones.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6">Visit Our <span className="text-primary">Addison Office</span></h2>
                <p className="text-gray-text text-lg">Stop by during our business hours, or call us 24/7 for urgent assistance.</p>
              </div>

              <div className="space-y-6">
                <div className="bg-light-bg rounded-3xl p-8 flex items-start gap-6 hover:shadow-xl transition-all border border-transparent hover:border-primary">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"><i className="fa-solid fa-map-pin text-white text-2xl"></i></div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2">Address</h3>
                    <p className="text-gray-text text-lg">311 N Chestnut St Ste B2<br />Addison, IL 60101</p>
                    <a href="https://maps.google.com/?q=311+N+Chestnut+St+Ste+B2+Addison+IL+60101" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-bold mt-3 hover:underline"><span>Get Directions</span> <i className="fa-solid fa-external-link-alt text-sm"></i></a>
                  </div>
                </div>

                <a href="tel:+16307583430" className="block bg-light-bg rounded-3xl p-8 flex items-start gap-6 hover:shadow-xl transition-all border border-transparent hover:border-primary group">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"><i className="fa-solid fa-phone text-dark-text text-2xl"></i></div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1">Phone</h3>
                    <p className="text-3xl font-bold text-primary font-heading mb-2">(630) 758-3430</p>
                    <span className="text-sm font-medium text-gray-text bg-white px-3 py-1 rounded-full shadow-sm">Tap to call us directly</span>
                  </div>
                </a>

                <div className="bg-light-bg rounded-3xl p-8 flex items-start gap-6 border border-transparent hover:border-primary">
                  <div className="w-16 h-16 bg-dark-bg rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"><i className="fa-solid fa-clock text-white text-2xl"></i></div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold mb-4 font-heading">Business Hours</h3>
                    <div className="space-y-3 text-lg">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-text">Monday - Friday</span><span className="font-bold">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-gray-text">Saturday - Sunday</span><span className="font-bold text-primary">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map & Form */}
            <motion.div 
              className="relative space-y-8"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-light-bg h-[300px] lg:h-[400px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.8674825264!2d-87.98907622367654!3d41.93079797115588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd00c6c5d0d5b%3A0x9b5c5f5c5c5f5c5f!2s311%20N%20Chestnut%20St%2C%20Addison%2C%20IL%2060101!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="CareStat Location"></iframe>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-bl-full opacity-5 pointer-events-none"></div>
                <h3 className="text-2xl font-bold font-heading mb-6">Send us a Message</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your interest! A CareStat representative will contact you soon."); }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" className="w-full bg-light-bg border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                      <input type="tel" id="phone" placeholder="(555) 123-4567" className="w-full bg-light-bg border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                      <input type="email" id="email" placeholder="john@example.com" className="w-full bg-light-bg border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">How can we help?</label>
                    <textarea id="message" rows={4} placeholder="Tell us a little about your situation..." className="w-full bg-light-bg border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-dark-bg text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors text-lg">
                    Request Call Back
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
