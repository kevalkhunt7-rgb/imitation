import React from 'react'
import { Hero } from '../components/Hero'
import { FeaturedCollections } from '../components/FeaturedCollections'
import { BestSellers } from '../components/BestSeller'
import { BridalShowcase } from '../components/BridalShowcase'
import { PremiumBanner } from '../components/Banner'
import { Testimonials } from '../components/testimonials'
import { InstagramGallery } from '../components/InstaGallary'
import { Footer } from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedCollections />
            <BestSellers />
            <BridalShowcase />
            <PremiumBanner/>
            <Testimonials/>
            <InstagramGallery/>
            <Footer/>
            
        </div>
    )
}

export default Home