import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logoAsset from "@/assets/logo.png.asset.json";

import { useServerFn } from "@tanstack/react-start";
import { registerForCourse } from "@/lib/registrations.functions";
import { CheckCircle, Users, GraduationCap, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";


export const Route = createFileRoute("/")({
  head: () => ({
    title: "Medical Astrology Advanced Course | Seehmmara Numerology",
    meta: [
      {
        name: "description",
        content: "Complete Advanced Medical Astrology Course by Surrjit. 100% FREE. Not a Webinar. Enroll now to master advanced techniques.",
      },
      { property: "og:title", content: "Medical Astrology Advanced Course | Seehmmara Numerology" },
      { property: "og:description", content: "Master Medical Astrology with Surrjit's complete advanced course. No webinar, no sales pitch. Register for FREE today." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const courseDate = new Date("2026-08-15T21:00:00+05:30");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const whatsappLink = "https://chat.whatsapp.com/G35u0y8UqBv9L5m4x7eR1z"; // Replace with your actual group link

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +courseDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);


  const Feature = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
      <span className="text-foreground/90">{children}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary/30">
      {/* Disclaimer Bar */}
      <div className="bg-primary py-2.5 text-center text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground sm:text-xs">
        ⚠️ THIS IS A FULL ADVANCED COURSE — NOT A FREE WEBINAR
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-card/80 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logoAsset.url} alt="Seehmmara Numerology" className="h-10 w-10 object-contain bg-white rounded-full p-1 shadow-sm sm:h-12 sm:w-12" />
            <span className="text-xl font-black tracking-tighter text-primary sm:text-2xl">SEEHMMARA NUMEROLOGY</span>
          </div>
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {["Home", "About", "Curriculum", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" size="sm" className="hidden gap-2 border-primary/20 hover:bg-primary/5 sm:flex" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>Join Group</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" className="hidden gap-2 border-primary/20 hover:bg-primary/5 sm:flex" asChild title="Call Support">
              <a href="tel:+918559091319">
                <Phone className="h-4 w-4 text-primary" />
                <span>Call</span>
              </a>
            </Button>
            <Button size="sm" className="h-9 px-4 text-xs font-bold sm:hidden" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Enroll</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-24 md:pb-32" id="home">
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col space-y-6 text-center"
            >
              <div className="inline-flex self-center rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold text-secondary ring-1 ring-inset ring-secondary/20 sm:text-sm">
                A Complete Advanced Course • 100% FREE
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-7xl">
                Medical Astrology <br />
                <span className="text-secondary">Advanced Course</span>
              </h1>
              <div className="mx-auto max-w-xl space-y-4">
                <div className="flex flex-col gap-2 rounded-xl border border-secondary/20 bg-secondary/5 p-4 text-center">
                  <p className="text-sm font-bold text-primary sm:text-base">
                    📅 Date: <span className="text-secondary">15th August 2026</span>
                  </p>
                  <p className="text-sm font-bold text-primary sm:text-base">
                    ⏰ Time: <span className="text-secondary">09:00 PM IST</span>
                  </p>
                </div>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Master the profound connection between celestial bodies and human health. 
                  <span className="block mt-2 font-black text-primary uppercase tracking-tight">
                    "THIS IS NOT A WEBINAR. THIS IS THE COMPLETE ADVANCED COURSE."
                  </span>
                  No sales pitch. No hidden costs. Just pure knowledge.
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
                <Button size="lg" className="h-12 w-full gap-2 px-8 text-lg font-bold shadow-lg shadow-primary/20 sm:h-14 sm:w-auto" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Enroll Now <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <div className="flex items-center gap-4 text-left">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop"
                    ].map((url, i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted sm:h-10 sm:w-10 overflow-hidden">
                        <img src={url} alt="Student" className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold text-primary">10k+ Students</p>
                    <p className="text-muted-foreground">Already enrolled</p>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-4 shadow-xl shadow-primary/5 ring-1 ring-primary/5 sm:p-6 mx-auto">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground sm:text-sm">Registration Closes In</p>
                <div className="flex gap-4 sm:gap-8">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Mins", value: timeLeft.minutes },
                    { label: "Secs", value: timeLeft.seconds },
                  ].map((unit) => (
                    <div key={unit.label} className="text-center">
                      <span className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">{String(unit.value).padStart(2, '0')}</span>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{unit.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-primary py-10 text-primary-foreground sm:py-12"
      >
        <div className="container mx-auto grid grid-cols-2 gap-y-10 gap-x-4 px-4 text-center md:grid-cols-4">
          {[
            { label: "Live Classes", value: "20+" },
            { label: "Expert Hours", value: "50+" },
            { label: "Students", value: "10k+" },
            { label: "Rating", value: "4.9/5" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-2xl font-black text-secondary sm:text-3xl md:text-4xl">{stat.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* About Course Section */}
      <section className="py-16 md:py-24" id="about">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto max-w-7xl space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-primary sm:text-5xl md:text-6xl">Why This Course?</h2>
              <p className="text-base text-muted-foreground italic sm:text-lg">"Complete Course — No hidden upsells, no sales pitch during class"</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/5 sm:p-8">
                <h3 className="text-lg font-bold text-primary sm:text-xl">What is Medical Astrology?</h3>
                <div className="flex-1 space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Medical Astrology is an ancient science that associates various parts of the body, diseases, and drugs as under the influence of the sun, moon, and planets, along with the twelve astrological signs.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    By analyzing your birth chart, we can identify potential health vulnerabilities and time periods when extra care is needed.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/5 border-t-4 border-secondary sm:p-8">
                <h3 className="text-lg font-bold text-primary sm:text-xl">Advanced Level Curriculum</h3>
                <div className="flex-1 space-y-3">
                  <Feature>Understanding Body Parts & Planets</Feature>
                  <Feature>Disease Identification in Charts</Feature>
                  <Feature>Timing of Ailments</Feature>
                  <Feature>Effective Remedial Measures</Feature>
                  <Feature>Mental Health & Planetary Alignment</Feature>
                </div>
              </div>

              <div className="flex flex-col space-y-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/5 border-l-4 border-secondary sm:p-8">
                <h3 className="text-lg font-bold text-primary sm:text-xl">Instructor: Surrjit</h3>
                <div className="flex-1 space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    With years of experience in Numerology and Astrology, Surrjit has mentored thousands of students globally. 
                    His teaching style is practical, research-oriented, and focused on real-world results.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base italic">
                    Join us to learn how to bridge the gap between spiritual energy and physical wellbeing.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" className="h-14 gap-2 px-10 text-lg font-bold shadow-xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Join The Course Now <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-muted py-24" id="register">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center space-y-8"
          >
            <div className="rounded-3xl bg-card p-8 shadow-2xl shadow-primary/10 ring-1 ring-primary/5 sm:p-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-primary sm:text-4xl">Join the Official Group</h2>
                  <p className="text-lg text-muted-foreground">Click below to join the WhatsApp group and receive all class links, notes, and session updates directly.</p>
                </div>
                
                <Button size="lg" className="w-full h-16 text-xl font-bold bg-[#25D366] hover:bg-[#128C7E] border-none text-white shadow-xl shadow-green-500/20" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-7 w-7 fill-current" />
                    Join WhatsApp Group Now
                  </a>
                </Button>
                
                <p className="text-sm text-muted-foreground font-medium">
                  ✨ 100% Free Access • Official Announcements Only • Secure Community
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24" id="faq">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-12">
            <h2 className="text-center text-3xl font-black text-primary sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {[
                { q: "Is this really a full course or just a webinar?", a: "This is a 100% full advanced course. There is no sales pitch, no 'buy the course' at the end, and no hidden upsells. Our goal is to spread quality knowledge." },
                { q: "Is the course really free?", a: "Yes, this batch is completely free as part of our mission to empower astrologers and healers." },
                { q: "Will I get a certificate?", a: "Yes, students who attend all live classes will receive a professional certificate from Seehmmara Numerology." },
                { q: "What is the duration of the course?", a: "The course spans 15+ hours of intensive live learning over multiple sessions starting 15th August." },
                { q: "How can I join?", a: "You can click any of the 'Enroll Now' or 'Join WhatsApp' buttons across this page to join our official community." },
              ].map((faq, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-primary/5 sm:p-6"
                >
                  <h3 className="text-base font-bold text-primary sm:text-lg">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-16 pb-8 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 border-b border-primary-foreground/10 pb-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="Seehmmara Numerology" className="h-10 w-10 object-contain bg-white rounded-full p-1 sm:h-12 sm:w-12" />
                <span className="text-2xl font-black tracking-tighter">SEEHMMARA NUMEROLOGY</span>
              </div>
              <p className="text-sm leading-relaxed opacity-70">
                Empowering healers and astrologers through authentic, advanced knowledge in Medical Astrology and Numerology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:col-span-1 lg:col-span-2 lg:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-secondary">Quick Links</h4>
                <nav className="flex flex-col gap-2 text-sm opacity-70">
                  {["Home", "About", "Curriculum", "FAQ"].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-secondary hover:opacity-100 transition-colors">
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-secondary">Contact Us</h4>
                <div className="space-y-2 text-sm opacity-70">
                  <p>Email: seehmmaranumerology@gmail.com</p>
                  <p>
                    WhatsApp: <a href="https://wa.me/918559091319" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">+91 85590 91319</a>
                  </p>
                  <p>
                    Call: <a href="tel:+918559091319" className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">+91 85590 91319</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[10px] font-bold uppercase tracking-widest opacity-40 sm:flex-row">
            <p>© 2026 Seehmmara Numerology. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#register" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#register" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 border-t bg-card/80 p-3 backdrop-blur-md md:hidden">
        <Button variant="outline" className="h-12 w-12 shrink-0 p-0 rounded-full border-primary/20" asChild title="Call Now">
          <a href="tel:+918559091319">
            <Phone className="h-5 w-5 text-primary" />
          </a>
        </Button>
        <Button className="flex-1 h-12 font-bold shadow-lg shadow-primary/10" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Register for FREE</a>
        </Button>
      </div>
    </div>
  );
}