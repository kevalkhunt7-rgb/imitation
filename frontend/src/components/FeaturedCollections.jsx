import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';

const collections = [
  {
    image: 'https://images.unsplash.com/photo-1611583027838-515a1087afdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NzkxNjY2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Royal Gold Layered Necklace',
    price: 89,
    originalPrice: 129,
    tag: 'BESTSELLER',
  },
  {
    image: 'https://images.unsplash.com/photo-1583937443325-97becde478a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzkxNjY2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Diamond Eternity Ring',
    price: 149,
    tag: 'NEW',
  },
  {
    image: 'https://images.unsplash.com/photo-1615197419962-90f21da0956d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGVhcnJpbmdzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzkxNjY2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Classic Pearl Drop Earrings',
    price: 65,
    originalPrice: 95,
  },
  {
    image: 'https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjBsdXh1cnl8ZW58MXx8fHwxNzc5MDg0NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Rose Gold Chain Bracelet',
    price: 79,
  },
  {
    image: 'https://images.unsplash.com/photo-1525740664269-1bb17f251737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZ29sZCUyMHdhdGNoJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzkxNjY2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Elegant Rose Gold Watch',
    price: 199,
    tag: 'TRENDING',
  },
  {
    image: 'https://images.unsplash.com/photo-1605821628253-8120cd950c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ2Vtc3RvbmUlMjBqZXdlbHJ5fGVufDF8fHx8MTc3OTE2NjY0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Emerald Statement Ring',
    price: 119,
  },
  {
    image: 'https://images.unsplash.com/photo-1577883751617-803a40e0057b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwcGVuZGFudCUyMGx1eHVyeXxlbnwxfHx8fDE3NzkxNjY2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Crystal Pendant Necklace',
    price: 99,
    originalPrice: 139,
  },
  {
    image: 'https://images.unsplash.com/photo-1481980235850-66e47651e431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBqZXdlbHJ5JTIwd2VkZGluZ3xlbnwxfHx8fDE3NzkxNjY2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Bridal Crown Set',
    price: 229,
    tag: 'BRIDAL',
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF9F6] to-white" id="collections">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-[#FFE5E8]/50 mb-4"
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#B76E79',
              letterSpacing: '0.1em',
            }}
          >
            FEATURED COLLECTIONS
          </motion.span>
          <h2
            className="font-serif mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: '#2C2C2C',
            }}
          >
            Our Signature Pieces
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: '#2C2C2C',
              opacity: 0.7,
            }}
          >
            Handpicked collections that embody elegance, craftsmanship, and timeless beauty
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full font-medium tracking-wide bg-white border-2 hover:bg-[#B76E79] hover:text-white hover:border-[#B76E79] transition-all duration-300 shadow-lg"
            style={{
              borderColor: '#B76E79',
              fontSize: '1rem',
            }}
          >
            View All Collections
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
