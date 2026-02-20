import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only — no backend
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-8 space-y-6"
        >
          {[
            { name: "name" as const, label: "Name", type: "text" },
            { name: "email" as const, label: "Email", type: "email" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <input
                type={field.type}
                value={form[field.name]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                required
                placeholder=" "
                className="peer w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
              />
              <label className="absolute left-4 top-3 text-sm text-muted-foreground transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-background px-1">
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              placeholder=" "
              rows={4}
              className="peer w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors resize-none"
            />
            <label className="absolute left-4 top-3 text-sm text-muted-foreground transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-background px-1">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-display font-semibold text-sm bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(186_100%_50%/0.4)] transition-all duration-300"
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:giridhar@example.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
