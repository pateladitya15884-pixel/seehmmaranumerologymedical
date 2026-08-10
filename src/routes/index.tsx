import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logoAsset from "@/assets/logo.png.asset.json";
import surrjitAsset from "@/assets/surrjit.png.asset.json";
import { useServerFn } from "@tanstack/react-start";
import { registerForCourse } from "@/lib/registrations.functions";
import { CheckCircle, Users, GraduationCap, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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
  const register = useServerFn(registerForCourse);
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "" });
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 12, minutes: 45, seconds: 0 });

  const [isRegistered, setIsRegistered] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const result = await register({ data: formData });
      setIsRegistered(true);
      setWhatsappLink(result.whatsappLink);
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed");
    } finally {
      setIsPending(false);
    }
  };

  const Feature = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
      <span className="text-foreground/90">{children}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary/30">
      {/* Disclaimer Bar */}
      <div className="sticky top-0 z-50 bg-primary py-2 text-center text-xs font-bold tracking-wider text-primary-foreground sm:text-sm">
        ⚠️ THIS IS A FULL ADVANCED COURSE — NOT A FREE WEBINAR
      </div>

      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Seehmmara Numerology" className="h-12 w-12 object-contain bg-white rounded-full p-1 shadow-sm" />
            <span className="hidden text-xl font-bold tracking-tight text-primary sm:block">Seehmmara Numerology</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {["Home", "About", "Curriculum", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium transition-colors hover:text-secondary">
                {item}
              </a>
            ))}
          </nav>
          <Button variant="outline" className="gap-2 border-primary/20 hover:bg-primary/5" asChild>
            <a href="https://wa.me/919999999999">
              <MessageCircle className="h-4 w-4" />
              <span>Contact Support</span>
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32" id="home">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-bold text-secondary ring-1 ring-inset ring-secondary/20">
                A Complete Advanced Course • 100% FREE
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">
                Medical Astrology <br />
                <span className="text-secondary">Advanced Course</span>
              </h1>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground lg:mx-0">
                Master the profound connection between celestial bodies and human health. 
                <span className="block mt-2 font-bold text-primary italic">
                  "THIS IS NOT A WEBINAR. THIS IS THE COMPLETE ADVANCED COURSE."
                </span>
                No sales pitch. No hidden costs. Just pure knowledge.
              </p>
              
              <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button size="lg" className="h-14 gap-2 px-8 text-lg font-bold shadow-lg shadow-primary/20" asChild>
                  <a href="#register">
                    Enroll Now <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <div className="flex items-center gap-4 text-left">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-primary">1,200+ Students</p>
                    <p className="text-muted-foreground">Already enrolled this batch</p>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 shadow-xl shadow-primary/5 ring-1 ring-primary/5 lg:items-start">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Registration Closes In</p>
                <div className="flex gap-4 sm:gap-8">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Mins", value: timeLeft.minutes },
                    { label: "Secs", value: timeLeft.seconds },
                  ].map((unit) => (
                    <div key={unit.label} className="text-center">
                      <span className="text-3xl font-black text-primary sm:text-4xl">{String(unit.value).padStart(2, '0')}</span>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{unit.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-secondary/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border-8 border-card shadow-2xl">
                {/* Replace with real instructor image if available */}
                <div className="aspect-[3/4] bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-32 w-32 text-primary/20" />
                  <p className="absolute bottom-8 left-0 right-0 text-center font-bold text-primary">Surrjit — Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-primary py-8 text-primary-foreground">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {[
            { label: "Live Classes", value: "20+" },
            { label: "Expert Hours", value: "50+" },
            { label: "Students", value: "10k+" },
            { label: "Rating", value: "4.9/5" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-black text-secondary">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Course Section */}
      <section className="py-24" id="about">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black text-primary sm:text-5xl">Why This Course?</h2>
              <p className="text-lg text-muted-foreground italic">"Complete Course — No hidden upsells, no sales pitch during class"</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-2xl bg-card p-8 shadow-sm ring-1 ring-primary/5">
                <h3 className="text-xl font-bold text-primary">Advanced Level Curriculum</h3>
                <div className="space-y-3">
                  <Feature>Understanding Body Parts & Planets</Feature>
                  <Feature>Disease Identification in Charts</Feature>
                  <Feature>Timing of Ailments</Feature>
                  <Feature>Effective Remedial Measures</Feature>
                </div>
              </div>
              <div className="space-y-4 rounded-2xl bg-card p-8 shadow-sm ring-1 ring-primary/5 border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-primary">Instructor: Surrjit</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  With years of experience in Numerology and Astrology, Surrjit has mentored thousands of students globally. 
                  His teaching style is practical, research-oriented, and focused on real-world results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-muted py-24" id="register">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl">
            <div className="rounded-3xl bg-card p-8 shadow-2xl shadow-primary/10 ring-1 ring-primary/5 sm:p-12">
              {!isRegistered ? (
                <div className="space-y-8">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-black text-primary">Reserve Your Free Seat</h2>
                    <p className="text-muted-foreground">Limited spots available for this batch.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                      placeholder="Full Name" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="h-12 bg-muted/50 border-transparent focus:bg-card"
                    />
                    <Input 
                      placeholder="WhatsApp Phone Number" 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="h-12 bg-muted/50 border-transparent focus:bg-card"
                    />
                    <Input 
                      placeholder="Email Address" 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="h-12 bg-muted/50 border-transparent focus:bg-card"
                    />
                    <Input 
                      placeholder="City" 
                      required 
                      value={formData.city}
                      onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      className="h-12 bg-muted/50 border-transparent focus:bg-card"
                    />
                    <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold mt-4" disabled={isPending}>
                      {isPending ? "Registering..." : "Join The Advanced Course"}
                    </Button>
                  </form>
                  <p className="text-center text-xs text-muted-foreground">
                    By registering, you agree to receive communications regarding this course.
                  </p>
                </div>
              ) : (
                <div className="text-center space-y-8 py-8 animate-in fade-in zoom-in duration-500">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-3xl font-black text-primary">Registration Complete!</h2>
                    <p className="text-muted-foreground">You're one step away. Join our official WhatsApp group to get class links and materials.</p>
                  </div>
                  <Button size="lg" className="w-full h-16 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E] border-none text-white shadow-xl shadow-green-500/20" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-6 w-6 fill-current" />
                      Join WhatsApp Group
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" id="faq">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-12">
            <h2 className="text-center text-3xl font-black text-primary sm:text-5xl">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {[
                { q: "Is this really a full course or just a webinar?", a: "This is a 100% full advanced course. There is no sales pitch, no 'buy the course' at the end, and no hidden upsells. Our goal is to spread quality knowledge." },
                { q: "Is the course really free?", a: "Yes, this batch is completely free as part of our mission to empower astrologers and healers." },
                { q: "Will I get a certificate?", a: "Yes, students who attend all live classes and complete the assessment will receive a professional certificate from Seehmmara Numerology." },
                { q: "What is the duration of the course?", a: "The course spans 15+ hours of intensive live learning over multiple sessions." },
              ].map((faq, i) => (
                <div key={i} className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/5">
                  <h3 className="text-lg font-bold text-primary">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-16 pb-8 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 border-b border-primary-foreground/10 pb-12 md:grid-cols-3">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src={logoAsset.url} alt="Seehmmara Numerology" className="h-12 w-12 object-contain bg-white rounded-full p-1" />
                <span className="text-xl font-bold tracking-tight">Seehmmara Numerology</span>
              </div>
              <p className="text-sm opacity-70">
                Empowering healers and astrologers through authentic, advanced knowledge in Medical Astrology and Numerology.
              </p>
            </div>
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
              <p className="text-sm opacity-70">Email: info@seehmmara.com</p>
              <p className="text-sm opacity-70">Support: +91 99999 99999</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[10px] font-bold uppercase tracking-widest opacity-40 sm:flex-row">
            <p>© 2026 Seehmmara Numerology. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-card/80 p-4 backdrop-blur-md md:hidden">
        <Button className="w-full h-12 font-bold" asChild>
          <a href="#register">Register for FREE Course</a>
        </Button>
      </div>
    </div>
  );
}