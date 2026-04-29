import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F9FBFA] scroll-mt-32 overflow-hidden">
      <div className="w-[90%] mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >

            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">
              About {siteConfig.doctorName}
            </h2>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-8 leading-tight tracking-tight font-serif">
              A Lifetime Dedicated to <br />
              <span className="text-brand-teal font-normal">Family Care & Healing.</span>
            </h3>

            {/* ================= BIO ================= */}
            <div className="space-y-6 text-slate-500 mb-10 text-sm md:text-[16px] leading-relaxed font-light">

              <p>
                {siteConfig.doctorName}'s journey into chiropractic care began early — she grew up watching her father
                serve families through chiropractic care that combined science, skill, and heart. Inspired by the deep
                trust between doctor and patient, she pursued healthcare with purpose.
              </p>

              <p>
                She earned her Bachelor of Science from the South Dakota School of Mines & Technology and graduated as
                Valedictorian from Northwestern College of Chiropractic in 2007, also earning her Acupuncture Certification.
              </p>

              <p>
                In 2025, she completed her Diplomate in Chiropractic Pediatrics (D.A.B.C.P.) through the American Chiropractic
                Association Council on Chiropractic Pediatrics — a distinction held by only a small number of chiropractors nationwide.
              </p>

              <p>
                Today, she is one of the few chiropractors in Wyoming specializing in prenatal and pediatric care while also
                treating patients of all ages — from infants with feeding issues to adults with chronic pain and posture problems.
              </p>

              <p>
                Her care philosophy is simple: listen first, use conservative natural care, and treat the root cause — not just symptoms.
              </p>

              <p>
                She uses techniques including Diversified, Drop, Activator, Webster, CranioSacral Therapy, acupuncture,
                kinesiotaping, and soft tissue therapies tailored to each patient.
              </p>

              <p>
                Recognized nationally, she has served in leadership roles within the American Chiropractic Association and
                has received multiple awards including Pediatric Chiropractor of the Year and Wyoming Chiropractor of the Year.
              </p>

              <p>
                Outside the clinic, she lives in Worland with her family and enjoys country life surrounded by horses,
                goats, dogs, and cats — staying deeply connected to family-centered wellness.
              </p>

            </div>

            {/* ================= HIGHLIGHTS ================= */}
            <div className="grid grid-cols-2 gap-6 mb-10">

              {[
                { label: 'Specialty', val: 'Pediatric & Prenatal Care' },
                { label: 'Certification', val: 'D.A.B.C.P (2025)' },
                { label: 'Experience', val: '18+ Years' },
                { label: 'Focus', val: 'Family Wellness' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="border-l-2 border-brand-teal/20 pl-4 py-1"
                >
                  <p className="text-[9px] uppercase font-black tracking-widest text-brand-teal mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm font-bold text-brand-blue">
                    {stat.val}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* ================= CTA ================= */}
            <motion.div
              whileHover={{ x: 10 }}
              className="group flex items-center space-x-6 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:bg-brand-teal transition-colors">
                <Heart className="w-6 h-6" />
              </div>

              <div>
                <p className="text-sm font-bold text-brand-blue mb-1">
                  Our Philosophy
                </p>
                <p className="text-xs text-slate-400 group-hover:text-brand-teal transition-colors">
                  Care Beyond Symptoms
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >

            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(12,16,20,0.2)]">

              <img
                src="https://images.squarespace-cdn.com/content/v1/53f8ea76e4b0586eb80b8a9c/03ce189b-72e4-460a-a0a4-ecd5274fdf0d/CloudPeakChiroWellness_2020_014b+sutro.jpg?format=750w"
                alt="Dr. Sarah in practice"
                className="w-full aspect-[4/5] object-cover"
              />

            </div>

            {/* DECOR */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-slate-200 rounded-full -z-10" />

          </motion.div>

        </div>
      </div>
    </section>
  );
}