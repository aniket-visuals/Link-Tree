import { motion } from 'motion/react';
import { Instagram, Youtube, Star, ArrowRight, Play, Mail, User, Linkedin } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.976H5.078z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
  </svg>
);

export default function App() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      }
    },
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/aniket_visuals/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@aniket_visuals", label: "YouTube" },
    { icon: XIcon, href: "https://x.com/Ankitxed", label: "X (Twitter)" },
    { icon: TelegramIcon, href: "https://t.me/aniketvisuals", label: "Telegram", iconClass: "-ml-1 mt-1" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aniketvisuals/", label: "LinkedIn" },
  ];

  const mainLinks = [
    { title: "PORTFOLIO", icon: Play, href: "https://editorsraj.vercel.app/", primary: true },
    { title: "CONTACT ME", icon: Mail, href: "https://t.me/aniket_visuals" },
    { title: "ABOUT ME", icon: User, href: "#" },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-bg-dark text-text-primary selection:bg-gold-start/30">
      {/* Cinematic Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        {/* Primary Glow */}
        <div className="absolute top-[28%] left-[35%] w-96 h-96 bg-gold-start/10 rounded-full blur-[80px] animate-pulse -translate-x-1/2 -translate-y-1/2" />
        {/* Blue Glow */}
        <div className="absolute top-[32%] right-[35%] w-96 h-96 bg-blue-500/5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[420px] mx-auto px-5 py-16 flex flex-col items-center">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full flex flex-col items-center"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-gold-start/20 blur-xl animate-pulse" />
              <div className="logo-glass relative z-10">
                <img 
                  src="https://res.cloudinary.com/df5rgwdng/image/upload/v1774265974/Untitled-03-01-01_omqlkj.jpg" 
                  alt="Aniket - Cinematic Video Editor" 
                  className="w-28 h-28 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-widest mb-2 text-liquid-glass">
              ANIKET RAJ
            </h1>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div variants={itemVariants} className="flex gap-4 mb-10">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group"
              >
                <link.icon className={`w-5 h-5 text-text-secondary group-hover:text-white transition-colors ${link.iconClass || ''}`} />
              </a>
            ))}
          </motion.div>

          {/* Main Link Buttons Section */}
          <motion.div variants={itemVariants} className="w-full flex flex-col gap-4 mb-10">
            {mainLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`w-full h-[60px] ${link.primary ? 'btn-liquid-primary' : 'glass-panel'} rounded-[20px] px-4 flex items-center justify-between group shimmer-effect active:scale-[0.98]`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <link.icon className="w-5 h-5 text-white/70 group-hover:text-gold-start transition-colors" />
                  </div>
                  <span className="text-sm font-semibold tracking-wider text-white/90 group-hover:text-white transition-colors">
                    {link.title}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors transform group-hover:translate-x-1" />
              </a>
            ))}
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
