import React from 'react'
import SEO from '../components/SEO'
import {
  HeroAbout,
  MissionValues,
  TeamGrid,
  ProcessInline,
  WhyUs,
  Timeline,
  TechBadges,
  SocialProof,
  CTAWide,
  FAQ
} from '../components/about'

const Nosotros: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nosotros | Waynox Studio" 
        description="Conoce nuestro equipo, misión y valores. Desarrollamos apps y webs que venden con estrategia, diseño y código. Entregas realistas en 4-8 semanas." 
      />
      
      <HeroAbout />
      <MissionValues />
      <TeamGrid />
      <ProcessInline />
      <WhyUs />
      <Timeline />
      <TechBadges />
      <SocialProof />
      <FAQ />
      <CTAWide />
    </>
  )
}

export default Nosotros


