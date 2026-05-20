import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Sparkles, 
  Play, 
  ArrowRight, 
  Heart, 
  MessageCircle, 
  Calendar, 
  Compass, 
  ChevronDown, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import { FiInstagram } from "react-icons/fi";
// --- MOCK PRODUCT CARD FOR SELF-CONTAINED EXECUTION ---
// In your project, replace this with your actual imports:
// import { ProductCard } from "../components/ProductCard";
// import { premiumProducts } from "../components/data";
const ProductCard = ({ product }) => (
  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-stone-100 flex flex-col h-full">
    <div className="aspect-[4/5] overflow-hidden relative bg-stone-100">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span className="text-white text-xs uppercase tracking-widest font-medium">View Atelier Piece</span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow bg-white">
      <span className="text-[10px] uppercase tracking-[0.2em] text-[#B76E79] font-semibold mb-1 block">{product.collection}</span>
      <h3 className="font-serif text-lg text-[#2C2C2C] mb-2 font-medium line-clamp-1">{product.title}</h3>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
        <span className="font-serif text-base text-stone-900 font-semibold">{product.price}</span>
        <span className="text-xs text-[#2C2C2C]/60 tracking-wider group-hover:text-[#B76E79] transition-colors flex items-center gap-1">
          Explore <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  </div>
);

const premiumProducts = [
  { id: 1, title: "Aurelia Diamond Drop Earrings", collection: "Royal Heritage", price: "$4,850", image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Seraphina Rose Gold Choker", collection: "Modern Minimal", price: "$3,200", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Marquise Cut Halo Engagement Ring", collection: "Bridal Collection", price: "$12,400", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Infinite Luminary Tennis Bracelet", collection: "Diamond Classics", price: "$8,900", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Nocturnal Emerald Statement Ring", collection: "Evening Glamour", price: "$6,750", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Solitaire Pear Drop Pendant", collection: "Diamond Classics", price: "$5,100", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" },
];

export default function LookBookPage() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const heroBgY = useTransform(scrollY, [0, 1000], [0, 350]);
  const heroTextY = useTransform(scrollY, [0, 1000], [0, 150]);

  const quotes = [
    { text: "Pure elegance in every single detail, written in gold.", author: "VOGUE EDITORIAL" },
    { text: "A timeless masterpiece that transitions beyond luxury jewelry.", author: "HARPER'S BAZAAR" },
    { text: "Redefining the modern heirloom beautifully for generations to come.", author: "THE ATELIER JOURNAL" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const collections = [
    { title: "Bridal Collection", desc: "Eternal promises cast in pure platinum and brilliant diamonds.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
    { title: "Royal Heritage", desc: "Regal geometry infused with deep historical craftsmanship.", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Minimal", desc: "Architectural profiles speaking volumes through fine delicate lines.", img: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80&w=800" },
    { title: "Evening Glamour", desc: "Deep rich tanzanites and emeralds tailored for moonlit settings.", img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=800" },
    { title: "Diamond Classics", desc: "The definitive standard of flawless brilliance made permanent.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" }
  ];

  const instagramGallery = [
    { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600", tag: "#AtelierElegance", likes: "2.4k", comments: "142" },
    { img: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&q=80&w=600", tag: "#LegacyDiamonds", likes: "4.1k", comments: "98" },
    { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600", tag: "#VogueLiving", likes: "1.8k", comments: "44" },
    { img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600", tag: "#SignatureGold", likes: "3.2k", comments: "210" },
    { img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600", tag: "#HighJewelry", likes: "5.6k", comments: "305" },
    { img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600", tag: "#TimelessHeirloom", likes: "2.9k", comments: "81" }
  ];

  return (
    <div className="bg-[#FDF8F3] text-[#2C2C2C] font-sans antialiased overflow-x-hidden selection:bg-[#E8C7B7]/40">
      
      {/* Global Ambient Glow Nodes */}
      <div className="absolute top-[120vh] left-[-20vw] w-[60vw] h-[60vw] bg-gradient-to-tr from-[#E8C7B7]/20 to-[#FFF0EB]/10 rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[450vh] right-[-10vw] w-[50vw] h-[50vw] bg-gradient-to-bl from-[#B76E79]/10 to-[#FDF8F3]/20 rounded-full blur-[160px] pointer-events-none" />

      {/* =====================================
          1. HERO LOOKBOOK SECTION
         ===================================== */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 w-full h-full scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#FDF8F3] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1920" 
            alt="Cinematic Campaign Background" 
            className="w-full h-full object-cover object-center transform"
          />
        </motion.div>

        {/* Ambient floating light particles */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] animate-pulse duration-10000" />

        <motion.div 
          style={{ y: heroTextY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center gap-2 mb-6 border border-[#E8C7B7]/30 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] fill-current animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">HAUTE JOAILLERIE CAMPAIGN</span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[1.05] mb-8">
            The Art of <br />
            <span className="italic text-[#E8C7B7] font-normal">Timeless Elegance</span>
          </h1>

          <p className="text-[#FDF8F3]/80 text-sm md:text-base font-light tracking-[0.15em] max-w-xl mx-auto mb-12 uppercase leading-relaxed">
            A visual symphony of rare brilliant diamonds, solid gold, and editorial masterworks curated for the connoisseur.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button className="group px-8 py-4 bg-[#2C2C2C] border border-stone-800 text-[#FDF8F3] hover:bg-[#B76E79] rounded-full text-xs font-semibold tracking-[0.2em] uppercase shadow-xl transition-all duration-500 flex items-center gap-3">
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-stone-900 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 flex items-center gap-2">
              <Play className="w-3 h-3 fill-current group-hover:text-[#B76E79] transition-colors" />
              <span>WATCH CAMPAIGN</span>
            </button>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-stone-400">
          <span className="text-[9px] tracking-[0.25em] font-bold text-stone-400/80 uppercase">Scroll to Discover</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>
        </div>
      </section>

      {/* =====================================
          2. EDITORIAL STORY SECTION
         ===================================== */}
      <section className="py-24 lg:py-36 container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Grid: Asymmetrical Images */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#E8C7B7]/10 to-transparent rounded-[3rem] blur-2xl pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="col-span-8 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-stone-900/10 aspect-[3/4] relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
                alt="Editorial Portrait" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="col-span-4 overflow-hidden rounded-[2rem] shadow-xl self-end mb-[-40px] aspect-[4/5] relative z-20 border-4 border-[#FDF8F3]"
            >
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                alt="Detail Close-up" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Text Block: Editorial Framing */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 space-y-8 lg:pl-6"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B76E79] uppercase block">THE PHILOSOPHY</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2C2C2C] font-light leading-tight tracking-tight">
                Crafted for moments that <span className="italic font-normal text-[#D4AF37]">deserve forever.</span>
              </h2>
            </div>
            
            <hr className="border-stone-200 w-24" />

            <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
              At our core lies an unyielding commitment to flawless artistic architectural composition. Every curvature, metal setting, and gemstone setting is selected with couture discipline. We don’t manufacture jewelry; we materialize legacies.
            </p>

            <blockquote className="border-left-2 border-[#E8C7B7] pl-4 italic font-serif text-lg text-stone-500/90 leading-relaxed bg-white/40 p-4 rounded-xl backdrop-blur-sm border border-stone-100">
              “True luxury isn’t about being noticed, it is about being remembered across generations.”
            </blockquote>

            <div className="pt-2">
              <button className="group text-xs font-bold tracking-[0.2em] text-stone-900 uppercase flex items-center gap-2.5 hover:text-[#B76E79] transition-colors duration-300">
                <span>OUR ARTISANAL HERITAGE</span>
                <span className="w-8 h-px bg-stone-900 group-hover:bg-[#B76E79] transition-all duration-300 group-hover:w-12" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================
          3. FEATURED LOOKBOOK COLLECTIONS
         ===================================== */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#FFF6F0] to-transparent overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B76E79] uppercase block">CURATED EDITORIALS</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2C2C] font-light tracking-tight">
              Seasonal Chapters
            </h2>
          </div>
          <p className="text-stone-500 text-xs sm:text-sm font-light tracking-wider max-w-md">
            Swipe or scroll through the structural collection narratives envisioned by our master stone setters and fashion designers this season.
          </p>
        </div>

        {/* Horizontal Scroll Track Wrapper */}
        <div className="overflow-x-auto pb-8 pt-4 px-4 sm:px-6 lg:px-16 flex gap-6 no-scrollbar snap-x snap-mandatory">
          {collections.map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="min-w-[290px] sm:min-w-[380px] w-[380px] aspect-[3/4] rounded-[2.2rem] overflow-hidden shadow-lg group relative snap-start flex flex-col justify-end p-6 sm:p-8 bg-stone-800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10 transition-opacity duration-500 group-hover:from-black/90" />
              <img 
                src={col.img} 
                alt={col.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              
              <div className="relative z-20 space-y-3 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">{col.title}</h3>
                <p className="text-white/70 font-light text-xs sm:text-sm tracking-wide leading-relaxed line-clamp-2">
                  {col.desc}
                </p>
                <div className="pt-2">
                  <button className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-300 flex items-center gap-2">
                    <span>EXPLORE STORY</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================
          4. IMMERSIVE FULL-WIDTH BANNER
         ===================================== */}
      <section className="relative py-48 md:py-64 bg-stone-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Close Up Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-65 scale-105"
        />
        
        {/* Abstract glowing ring background overlay */}
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[#D4AF37]/20 z-10 animate-ping opacity-25" style={{ animationDuration: '4s' }} />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-8">
          <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.4em] uppercase block">THE HIGH ATELIER</span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-light tracking-tight leading-tight">
            Jewelry That <span className="italic font-normal text-[#E8C7B7]">Becomes Legacy</span>
          </h2>
          <p className="text-stone-300 max-w-md mx-auto font-light text-sm tracking-wide leading-relaxed">
            Meticulously engineered artifacts designed to survive horizons, preserving beauty beautifully across linear time.
          </p>
          <div className="pt-4">
            <button className="px-8 py-4 bg-[#D4AF37] hover:bg-white text-stone-900 font-bold text-xs tracking-[0.25em] rounded-full uppercase transition-colors duration-500 shadow-xl">
              COMMISSION A DESIGN
            </button>
          </div>
        </div>
      </section>

      {/* =====================================
          5. LOOKBOOK PRODUCT SHOWCASE
         ===================================== */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#B76E79] uppercase block">THE LOOKBOOK EDITIONS</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#2C2C2C] tracking-tight">
            Featured Atelier Pieces
          </h2>
          <div className="w-12 h-px bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Responsive Grid showcasing 6 items exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {premiumProducts.slice(0, 6).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================
          6. VIDEO CAMPAIGN SECTION
         ===================================== */}
      <section className="py-20 bg-stone-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-6">
              <span className="text-[#B76E79] text-[11px] font-bold tracking-[0.3em] uppercase block">BRAND FILM</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight leading-tight">
                Behind The <br />
                <span className="italic font-normal text-[#E8C7B7]">Atelier Doors</span>
              </h2>
              <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed">
                Step inside our historical Parisian sanctuary where pure metallurgy converges seamlessly with fine diamond cutting artistry.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <button 
                  onClick={() => setIsVideoMuted(!isVideoMuted)}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-stone-300"
                  title={isVideoMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono">RUN TIME: 2M 14S</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden group shadow-2xl border border-white/5 bg-stone-900">
                
                {/* Decorative Video Placeholder Image mapping back to look/feel */}
                <img 
                  src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200" 
                  alt="Video Slate" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Glassmorphic Overlay Media Container Trigger */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
                  <button className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white shadow-xl transition-all duration-500 hover:scale-110 hover:bg-white hover:text-stone-950 group">
                    <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-40 group-hover:opacity-0" />
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 z-30 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl text-[10px] tracking-widest text-white/90 border border-white/5 font-light flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span>PREVIEW STREAM ACTIVE</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          7. TESTIMONIAL / QUOTE STRIP
         ===================================== */}
      <section className="py-16 bg-white border-y border-stone-200/60 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="font-serif text-xl sm:text-2xl text-[#2C2C2C] italic font-light tracking-wide">
                “{quotes[activeQuote].text}”
              </p>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#B76E79] uppercase block">
                — {quotes[activeQuote].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================
          8. INSTAGRAM / SOCIAL GALLERY
         ===================================== */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center space-y-2 mb-16">
          <div className="flex items-center justify-center gap-2 text-[#B76E79] mb-1">
            <FiInstagram className="w-4 h-4" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">INSTAGRAM Curation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2C2C] font-light tracking-tight">
            Shared Expressions
          </h2>
          <p className="text-xs text-stone-500 max-w-sm mx-auto font-light tracking-wide">
            Tag <span className="font-normal text-stone-900">#AtelierSignature</span> to share your high luxury styling compositions globally.
          </p>
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramGallery.map((post, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group bg-stone-100"
            >
              <img 
                src={post.img} 
                alt="Social Media Upload" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Dark Overlay showing interaction data */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10 text-white">
                <span className="text-[9px] font-semibold tracking-wider text-[#E8C7B7]">{post.tag}</span>
                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-current text-[#B76E79]" /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          9. FINAL LUXURY CTA
         ===================================== */}
      <section className="py-24 bg-gradient-to-t from-[#FFF0EB] via-[#FDF8F3] to-[#FDF8F3] relative overflow-hidden text-center border-t border-stone-200/40">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E8C7B7]/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 space-y-8 relative z-10">
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-stone-100">
              <Compass className="w-4 h-4 text-[#B76E79] animate-spin" style={{ animationDuration: '12s' }} />
            </div>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#2C2C2C] tracking-tight leading-tight">
            Begin Your <br />
            <span className="italic font-normal text-[#B76E79]">Signature Collection</span>
          </h2>
          
          <p className="text-stone-600 max-w-md mx-auto font-light text-sm sm:text-base leading-relaxed">
            Whether purchasing a profound heirloom piece or reserving a dedicated custom styling consultation session, your journey into absolute elegance awaits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#2C2C2C] hover:bg-[#B76E79] text-white font-bold text-xs tracking-[0.25em] rounded-full uppercase shadow-xl transition-colors duration-500">
              SHOP THE LOOKBOOK
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-800 hover:border-stone-900 font-bold text-xs tracking-[0.25em] rounded-full uppercase transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>BOOK STYLING CONCIERGE</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}