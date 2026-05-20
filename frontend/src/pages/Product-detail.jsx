import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // IMPORT THE TILT COMPONENT
import {
    Heart,
    ShoppingBag,
    Star,
    Sparkles,
    Truck,
    ShieldCheck,
    RefreshCw,
    Eye,
    Check,
    Plus,
    Minus
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useParams } from 'react-router-dom';

// IMPORT DATA
import { premiumProducts } from '../components/data';

function ProductDetailPage({ product }) {
    const { id } = useParams();

    // DYNAMIC PRODUCT FETCH
    const currentProduct =
        product ||
        premiumProducts.find((p) => String(p.id) === String(id)) ||
        premiumProducts[0];
        
    // Cart Global States
    const { addToCart, cart } = useCart();
    
    // CONSUME GLOBAL WISHLIST FUNCTIONS
    const { wishlist, toggleWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    
    const [activeImageIdx, setActiveImageIdx] = useState(0);
    const [selectedFinish, setSelectedFinish] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [is360Mode, setIs360Mode] = useState(false);

    // Loupe Zoom Coordinates
    const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
    const imgRef = useRef(null);

    // Glow Track Coordinates for Fake 3D Light Layer
    const [glowStyle, setGlowStyle] = useState({ opacity: 0 });

    // Check statuses against global arrays
    const isAlreadyInCart = currentProduct ? cart.some((item) => item.id === currentProduct.id) : false;
    
    // REACTIVE CHECK
    const isWishlisted = currentProduct && wishlist 
        ? wishlist.some((item) => item.id === currentProduct.id) 
        : false;

    // Corrected Precision Magnifying Glass Zoom Algorithm
    const handleMouseMove = (e) => {
        if (!imgRef.current) return;

        const target = imgRef.current;
        const rect = target.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        setZoomStyle({
            display: 'block',
            left: `${x}px`,
            top: `${y}px`,
            backgroundImage: `url(${currentProduct.images?.[activeImageIdx] || currentProduct.image})`,
            backgroundPosition: `${xPercent}% ${yPercent}%`,
            backgroundSize: '250%',
            transform: 'translate(-50%, -50%)'
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ display: 'none' });
    };

    // Glow overlay tracker handler for Fake 3D Mode
    const handleGlowMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setGlowStyle({
            opacity: 1,
            background: `radial-gradient(circle 240px at ${x}px ${y}px, rgba(232, 199, 183, 0.25), transparent 80%)`
        });
    };

    const handleGlowLeave = () => {
        setGlowStyle({ opacity: 0 });
    };

    if (!currentProduct) {
        return (
            <div className="min-h-screen flex items-center justify-center text-stone-500 font-medium tracking-widest bg-[#FDF8F3]">
                ATELIER PIECE NOT FOUND
            </div>
        );
    }

    const activeDisplayImage = currentProduct.images?.[activeImageIdx] || currentProduct.image;
    
    const handleAddToBasket = () => {
        if (isAlreadyInCart) return;
        const activeFinishData = currentProduct.finishes?.[selectedFinish] || null;
        addToCart(currentProduct, quantity, activeFinishData);
        alert(`${currentProduct.title} added to shopping casket!`);
    };

    const handleWishlistToggle = () => {
        if (toggleWishlist) {
            toggleWishlist(currentProduct);
        } else {
            if (isWishlisted) {
                removeFromWishlist(currentProduct.id);
            } else {
                addToWishlist(currentProduct);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#FDF8F3] text-[#2C2C2C] font-sans overflow-x-hidden selection:bg-[#E8C7B7]/40 relative">

            {/* Ambient Radial Mesh Gradient Lights */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFF0EB] to-[#E8C7B7]/30 rounded-full blur-[140px] pointer-events-none mix-blend-multiply" />
            <div className="absolute top-[30%] right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#F7E7CE]/20 to-[#FFF0EB] rounded-full blur-[160px] pointer-events-none" />

            {/* Breadcrumb Navigation Track */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-16 pt-28 pb-6 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#2C2C2C]/50 flex items-center gap-2 flex-wrap">
                <span className="hover:text-[#B76E79] cursor-pointer transition-colors duration-300">Atelier</span>
                <span>/</span>
                <span className="hover:text-[#B76E79] cursor-pointer transition-colors duration-300">Collections</span>
                <span>/</span>
                <span className="text-[#2C2C2C] font-semibold">{currentProduct.title}</span>
            </div>

            {/* Interactive Main Body Segment */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-24 relative z-10">

                {/* LEFT COMPONENT: Image Architecture Display */}
                <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 lg:gap-6">

                    {/* Vertical/Horizontal Thumbnails Track */}
                    <div className="flex md:flex-col flex-row gap-3 overflow-x-auto md:overflow-x-visible justify-start md:justify-start py-2 md:py-0 no-scrollbar">
                        {currentProduct.images?.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveImageIdx(idx);
                                    setIs360Mode(false);
                                }}
                                className={`w-20 h-24 md:w-24 md:h-28 rounded-2xl overflow-hidden border transition-all duration-500 relative group flex-shrink-0 bg-white shadow-sm ${activeImageIdx === idx && !is360Mode
                                        ? 'border-[#B76E79] ring-2 ring-[#B76E79]/10 scale-105 shadow-md'
                                        : 'border-stone-200/60 hover:border-[#B76E79]/60'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Atelier View ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </button>
                        ))}

                        {/* Interactive 360/3D Toggle Button */}
                        <button
                            onClick={() => setIs360Mode(true)}
                            className={`w-20 h-24 md:w-24 md:h-28 rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col items-center justify-center gap-1.5 flex-shrink-0 text-[10px] font-bold tracking-widest ${is360Mode
                                    ? 'border-[#B76E79] bg-[#FFF0EB] text-[#B76E79] shadow-inner'
                                    : 'border-stone-200/60 bg-white/80 text-[#2C2C2C]/60 hover:border-[#B76E79]'
                                }`}
                        >
                            <RefreshCw className={`w-4 h-4 ${is360Mode ? 'animate-spin' : 'text-[#B76E79]'}`} style={{ animationDuration: '6s' }} />
                            <span>3D EXPERIENCE</span>
                        </button>
                    </div>

                    {/* Large Hero Master View Showcase Frame */}
                    <div className="flex-1 relative bg-white rounded-[2rem] border border-stone-200/60 shadow-xl shadow-stone-200/30 overflow-hidden group aspect-[4/5] max-h-[680px] flex items-center justify-center">

                        <AnimatePresence mode="wait">
                            {!is360Mode ? (
                                <motion.div
                                    key={activeImageIdx}
                                    initial={{ opacity: 0, scale: 0.99 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full relative cursor-zoom-in overflow-hidden"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        ref={imgRef}
                                        src={activeDisplayImage}
                                        alt={currentProduct.title}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />

                                    {/* Clean Tracking Loupe Zoom Engine Glass Overlay */}
                                    <div
                                        className="absolute hidden lg:block w-52 h-52 rounded-full border border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] pointer-events-none ring-4 ring-[#B76E79]/20"
                                        style={zoomStyle}
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="360"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full h-full relative overflow-hidden bg-gradient-to-b from-stone-50 to-white"
                                >
                                    {/* 3D PARALLAX TILT CONTAINER */}
                                    <Tilt
                                        perspective={1200}
                                        glareEnable={false}
                                        tiltMaxAngleX={12}
                                        tiltMaxAngleY={12}
                                        scale={1.02}
                                        gyroscope={true}
                                        transitionSpeed={1500}
                                        className="w-full h-full p-8 flex flex-col items-center justify-center relative preserve-3d"
                                        onMouseMove={handleGlowMove}
                                        onMouseLeave={handleGlowLeave}
                                    >
                                        {/* Dynamic Spotlight Glow Track */}
                                        <div 
                                            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30 mix-blend-screen"
                                            style={glowStyle}
                                        />

                                        {/* Parallax Product Image (moves slightly outward away from background layer) */}
                                        <img
                                            src={currentProduct.images?.[0] || currentProduct.image}
                                            alt="3D Interactive Layout View"
                                            className="w-4/5 h-auto object-contain mix-blend-darken transform-3d select-none pointer-events-none drop-shadow-[0_35px_40px_rgba(44,44,44,0.15)] group-hover:drop-shadow-[0_45px_50px_rgba(183,110,121,0.25)] transition-shadow duration-500"
                                            style={{ transform: 'translateZ(60px)' }}
                                        />

                                        {/* Bottom Action Subtext Banner (set structural depth via translateZ) */}
                                        <div 
                                            className="absolute bottom-6 bg-stone-900 text-[#FDF8F3] px-5 py-2.5 rounded-full text-[10px] font-medium tracking-[0.15em] shadow-lg flex items-center gap-2 transform-3d pointer-events-none z-20"
                                            style={{ transform: 'translateZ(30px)' }}
                                        >
                                            <Sparkles className="w-3 h-3 text-[#D4AF37] animate-spin" style={{ animationDuration: '4s' }} />
                                            <span>MOVE CURSOR TO ROTATE PIECE IN 3D SPACE</span>
                                        </div>
                                    </Tilt>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Custom Tag Indicator Overlay */}
                        {currentProduct.tag && (
                            <div className="absolute top-5 left-5 bg-stone-900 border border-stone-800 text-[#D4AF37] text-[10px] font-bold tracking-[0.15em] px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 z-40">
                                <Sparkles className="w-3 h-3 fill-current" />
                                <span>{currentProduct.tag}</span>
                            </div>
                        )}

                        {/* Virtual Try-On Interaction Triggers */}
                        <button className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-md hover:bg-stone-950 hover:text-white text-stone-900 text-[10px] font-bold tracking-[0.2em] px-5 py-3 rounded-xl shadow-md transition-all duration-300 border border-stone-200/40 flex items-center gap-2 group z-40">
                            <Eye className="w-3.5 h-3.5 text-[#B76E79] group-hover:text-[#D4AF37] transition-colors duration-300" />
                            <span>VIRTUAL TRY-ON</span>
                        </button>
                    </div>
                </div>

                {/* RIGHT COMPONENT: Action Panel Layout Details */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                    <div className="space-y-6">

                        {/* Titles Architecture Layout */}
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold tracking-[0.3em] text-[#B76E79] uppercase">
                                {currentProduct.subtitle || "EXCLUSIVE ATELIER EDITIONS"}
                            </p>
                            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C2C2C] leading-[1.15]">
                                {currentProduct.title}
                            </h1>
                        </div>

                        {/* Pricing Tiers & Reviews Block */}
                        <div className="flex items-center justify-between border-b border-stone-200/60 pb-5">
                            <div className="flex items-baseline gap-3.5">
                                <span className="font-serif text-3xl font-medium tracking-tight text-stone-900">
                                    ${currentProduct.price}
                                </span>

                                {currentProduct.originalPrice && (
                                    <>
                                        <span className="text-sm line-through text-stone-400">
                                            ${currentProduct.originalPrice}
                                        </span>
                                        <span className="text-[10px] font-bold text-[#B76E79] bg-[#FFF0EB] px-2.5 py-1 rounded-md tracking-widest">
                                            {Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100)}% OFF
                                        </span>
                                    </>
                                )}
                            </div>

                            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200/40 shadow-sm">
                                <div className="flex text-[#D4AF37]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-current" />
                                    ))}
                                </div>
                                <span className="text-[11px] font-bold text-stone-500 tracking-wider">(48)</span>
                            </div>
                        </div>

                        {/* Description Block */}
                        <p className="text-sm text-stone-600 leading-relaxed font-light">
                            {currentProduct.shortDesc || "Exquisitely designed signature silhouette crafted with premium refined materials, designed to accentuate clean classic geometry with contemporary wearability formats."}
                        </p>

                        {/* Premium Dynamic Finish Component Nodes */}
                        {currentProduct.finishes && currentProduct.finishes.length > 0 && (
                            <div className="space-y-3 pt-2">
                                <label className="text-[10px] font-bold tracking-[0.15em] text-stone-500 uppercase block">
                                    Select Precious Metal Finish:
                                </label>
                                <div className="flex gap-4">
                                    {currentProduct.finishes.map((finish, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedFinish(idx)}
                                            className={`w-10 h-10 rounded-full ${finish.class || 'bg-amber-100'} transition-all duration-300 relative flex items-center justify-center p-0.5 shadow-sm border border-stone-900/5`}
                                        >
                                            {selectedFinish === idx && (
                                                <motion.div
                                                    layoutId="activeFinishOutline"
                                                    className="absolute -inset-1.5 rounded-full border-2 border-[#B76E79]"
                                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                />
                                            )}
                                            {selectedFinish === idx && (
                                                <Check className="w-4 h-4 text-white drop-shadow-md stroke-[3]" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity and Wishlist Interactive Controls Row */}
                        <div className="flex items-center gap-4 pt-4">

                            {/* Qty Selector */}
                            <div className="space-y-2">
                                <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase block">QTY</span>
                                <div className="flex items-center bg-white border border-stone-200 rounded-full p-1.5 shadow-sm">
                                    <button
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-50 text-stone-600 transition-colors"
                                    >
                                        <Minus className="w-3.5 h-3.5" />
                                    </button>
                                    <span className="w-8 text-center text-sm font-semibold text-stone-800">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity((q) => q + 1)}
                                        className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-50 text-stone-600 transition-colors"
                                    >
                                        <Plus className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Wishlist Icon Switch */}
                            <div className="flex-1 space-y-2">
                                <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase block">Save To Box</span>
                                <button
                                    onClick={handleWishlistToggle}
                                    className={`w-full h-[52px] rounded-full border text-[11px] font-bold tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2.5 ${isWishlisted
                                            ? 'bg-red-50/60 border-red-200 text-[#B76E79] shadow-sm'
                                            : 'bg-white/60 border-stone-200 text-stone-700 hover:border-[#B76E79] hover:bg-white shadow-sm'
                                        }`}
                                >
                                    <Heart className={`w-4 h-4 transition-transform duration-300 ${isWishlisted ? 'fill-current text-[#B76E79] scale-110' : 'text-stone-400'}`} />
                                    <span>{isWishlisted ? 'ADDED TO ATELIER BOX' : 'ADD TO WISHLIST'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Core Call to Actions Checkout Array */}
                        <div className="space-y-3 pt-4">
                            <motion.button
                                onClick={handleAddToBasket}
                                disabled={isAlreadyInCart}
                                whileHover={isAlreadyInCart ? {} : { scale: 1.01 }}
                                whileTap={isAlreadyInCart ? {} : { scale: 0.99 }}
                                className={`w-full text-white font-bold text-[11px] tracking-[0.2em] py-4.5 rounded-full shadow-lg transition-all duration-500 flex items-center justify-center gap-2.5 ${
                                    isAlreadyInCart 
                                    ? 'bg-stone-400/80 cursor-not-allowed shadow-none' 
                                    : 'bg-gradient-to-r from-[#E8C7B7] via-[#B76E79] to-[#E8C7B7] shadow-[#B76E79]/20'
                                }`}
                            >
                                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                                <span>{isAlreadyInCart ? 'PRODUCT ALREADY IN CART' : 'ADD TO SHOPPING CART'}</span>
                            </motion.button>

                            <button className="w-full bg-stone-900 hover:bg-stone-950 text-[#FDF8F3] font-bold text-[11px] tracking-[0.2em] py-4.5 rounded-full shadow-md transition-all duration-300">
                                'RESERVE & COMPLIMENTARY EXPRESS BUY'
                            </button>
                        </div>
                    </div>

                    {/* Premium Authenticity Credentials Footer Grid */}
                    <div className="grid grid-cols-3 gap-3 bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-stone-200/60 text-center shadow-sm">
                        <div className="flex flex-col items-center justify-center p-1 gap-1.5">
                            <Truck className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-[9px] font-bold tracking-wider uppercase text-stone-700 leading-tight">
                                Free Insured Delivery
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-1 gap-1.5 border-x border-stone-200/60">
                            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-[9px] font-bold tracking-wider uppercase text-stone-700 leading-tight">
                                Lifetime Guarantee
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-1 gap-1.5">
                            <RefreshCw className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-[9px] font-bold tracking-wider uppercase text-stone-700 leading-tight">
                                30-Day Exchange
                            </span>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default ProductDetailPage;