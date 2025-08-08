"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ChevronLeft, ChevronRight, Home, Users, Briefcase, MessageSquare, Phone, Mail, MapPin, Star, Shield, TrendingUp, Key, Scale } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

const heroImages = [
  "/luxury-modern-apartment.png",
  "/premium-villa-garden.png",
  "/high-end-penthouse-living-room.png",
  "/modern-residential-complex.png"
]

export default function REITOPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    propertyType: "",
    message: ""
  })

  const [strategyFormData, setStrategyFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyBudget: "",
    timeframe: "",
    investmentGoals: "",
    preferredDate: "",
    preferredTime: ""
  })

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleStrategyInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setStrategyFormData({
      ...strategyFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleStrategySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Strategy call booked:", strategyFormData)
    alert("Thank you! Your strategy call has been booked. We'll contact you soon to confirm the details.")
    setStrategyFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      propertyBudget: "", 
      timeframe: "", 
      investmentGoals: "", 
      preferredDate: "", 
      preferredTime: "" 
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your inquiry! We'll get back to you soon.")
    setFormData({ name: "", email: "", propertyType: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jocecQzFM4p7TcetVa0wrVJ7GbajK2.png"
              alt="REITO Logo"
              width={120}
              height={40}
              className="rounded"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-[#3b3b3b] hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2"
            >
              <Home size={16} />
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#3b3b3b] hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2"
            >
              <Users size={16} />
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#3b3b3b] hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2"
            >
              <Briefcase size={16} />
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-[#3b3b3b] hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('strategy-call')}
              className="bg-[#ff6b00] text-white px-6 py-2 rounded-full hover:bg-[#e55a00] transition-colors duration-300"
            >
              Book a Strategy Call
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#3b3b3b]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-[#3b3b3b] hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2"
              >
                <Home size={16} />
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-[#3b3b3b] hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2"
              >
                <Users size={16} />
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-[#3b3b3b] hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2"
              >
                <Briefcase size={16} />
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-[#3b3b3b] hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2"
              >
                <MessageSquare size={16} />
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('strategy-call')}
                className="block w-full text-left bg-[#ff6b00] text-white px-6 py-2 rounded-full hover:bg-[#e55a00] transition-colors duration-300"
              >
                Book a Strategy Call
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Real Estate
            <span className="block text-[#ff6b00]">Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 max-w-2xl mx-auto">
            Your trusted partner for exclusive properties and personalized real estate solutions in Hyderabad
          </p>
          <p className="text-2xl md:text-3xl font-semibold mb-8 text-[#ff6b00]">
            Co-own, Co-grow with REITO
          </p>
          <Button 
            onClick={() => scrollToSection('strategy-call')}
            className="bg-[#ff6b00] hover:bg-[#e55a00] text-white px-8 py-4 text-lg rounded-full transition-colors duration-300"
          >
            Book a Strategy Call
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentImageIndex ? 'bg-[#ff6b00]' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
                About REITO
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide personalized, end-to-end support to property buyers, ensuring a seamless and transparent real estate experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <Image
                  src="/real-estate-team-meeting.png"
                  alt="REITO team"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#3b3b3b]">
                  Your Trusted Real Estate Partner
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At REITO, we understand that buying property is one of life's most significant investments. That's why we've built our reputation on providing expert guidance, transparent processes, and personalized service that puts your needs first.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team of experienced professionals brings deep market knowledge and a commitment to excellence, ensuring you make informed decisions with confidence.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#ff6b00]">500+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#ff6b00]">₹100Cr+</div>
                    <div className="text-gray-600">Properties Sold</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#3b3b3b] mb-4">Meet Our Expert Team</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our dedicated professionals bring years of experience and deep market insights to help you make the best real estate decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Image
                    src="/team-member-1.png"
                    alt="Team Member"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-[#3b3b3b] mb-2">Rajesh Patel</h4>
                  <p className="text-[#ff6b00] font-semibold mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">
                    15+ years in real estate with expertise in luxury properties and investment strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Image
                    src="/team-member-2.png"
                    alt="Team Member"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-[#3b3b3b] mb-2">Priya Sharma</h4>
                  <p className="text-[#ff6b00] font-semibold mb-3">Head of Sales</p>
                  <p className="text-gray-600 text-sm">
                    Expert in client relations and property matching with 12+ years of experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Image
                    src="/team-member-3.png"
                    alt="Team Member"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-[#3b3b3b] mb-2">Arjun Reddy</h4>
                  <p className="text-[#ff6b00] font-semibold mb-3">Legal Advisor</p>
                  <p className="text-gray-600 text-sm">
                    Specialized in real estate law and documentation with 10+ years of practice.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive real estate solutions tailored to your unique needs and investment goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#ff6b00]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff6b00]/20 transition-colors duration-300">
                    <Briefcase className="text-[#ff6b00]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#3b3b3b] mb-4">Property Advisory</h3>
                  <p className="text-gray-600">
                    Expert guidance on property selection, market analysis, and investment potential to help you make informed decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#ff6b00]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff6b00]/20 transition-colors duration-300">
                    <Scale className="text-[#ff6b00]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#3b3b3b] mb-4">Legal Support</h3>
                  <p className="text-gray-600">
                    Complete legal assistance including documentation, due diligence, and compliance to ensure secure transactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#ff6b00]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff6b00]/20 transition-colors duration-300">
                    <Key className="text-[#ff6b00]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#3b3b3b] mb-4">Off-Market Access</h3>
                  <p className="text-gray-600">
                    Exclusive access to premium properties not available on the open market, giving you first-mover advantage.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#ff6b00]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff6b00]/20 transition-colors duration-300">
                    <TrendingUp className="text-[#ff6b00]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#3b3b3b] mb-4">Investment Strategy</h3>
                  <p className="text-gray-600">
                    Personalized investment strategies and portfolio optimization to maximize your real estate returns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our satisfied clients who trusted REITO with their real estate investments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-[#ff6b00] fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "REITO made our dream home purchase seamless. Their market knowledge and negotiation skills saved us both time and money. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/professional-headshot.png"
                      alt="Client"
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-[#3b3b3b]">Rajesh Kumar</div>
                      <div className="text-gray-500 text-sm">IT Executive</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-[#ff6b00] fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "The off-market properties REITO showed us were exceptional. Their personalized approach and attention to detail exceeded our expectations."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/professional-woman-headshot.png"
                      alt="Client"
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-[#3b3b3b]">Priya Sharma</div>
                      <div className="text-gray-500 text-sm">Business Owner</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-[#ff6b00] fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "Professional, transparent, and results-driven. REITO helped us build a profitable real estate portfolio. Their investment advice is invaluable."
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/professional-man-headshot.png"
                      alt="Client"
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-[#3b3b3b]">Arjun Reddy</div>
                      <div className="text-gray-500 text-sm">Investor</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Call Booking Section */}
      <section id="strategy-call" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
                Book Your Strategy Call
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Schedule a personalized consultation with our real estate experts to discuss your investment goals and property requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Strategy Call Form */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#3b3b3b] mb-6">Schedule Your Call</h3>
                  <form onSubmit={handleStrategySubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="strategy-name" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="strategy-name"
                          name="name"
                          value={strategyFormData.name}
                          onChange={handleStrategyInputChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00]"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="strategy-phone" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          id="strategy-phone"
                          name="phone"
                          value={strategyFormData.phone}
                          onChange={handleStrategyInputChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00]"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="strategy-email" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="strategy-email"
                        name="email"
                        value={strategyFormData.email}
                        onChange={handleStrategyInputChange}
                        required
                        className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00]"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="property-budget" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                          Property Budget *
                        </label>
                        <select
                          id="property-budget"
                          name="propertyBudget"
                          value={strategyFormData.propertyBudget}
                          onChange={handleStrategyInputChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00] p-3"
                        >
                          <option value="">Select budget range</option>
                          <option value="50L-1Cr">₹50L - ₹1Cr</option>
                          <option value="1Cr-2Cr">₹1Cr - ₹2Cr</option>
                          <option value="2Cr-5Cr">₹2Cr - ₹5Cr</option>
                          <option value="5Cr-10Cr">₹5Cr - ₹10Cr</option>
                          <option value="10Cr+">₹10Cr+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeframe" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                          Purchase Timeframe *
                        </label>
                        <select
                          id="timeframe"
                          name="timeframe"
                          value={strategyFormData.timeframe}
                          onChange={handleStrategyInputChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00] p-3"
                        >
                          <option value="">Select timeframe</option>
                          <option value="immediate">Immediate (0-3 months)</option>
                          <option value="short">Short term (3-6 months)</option>
                          <option value="medium">Medium term (6-12 months)</option>
                          <option value="long">Long term (1+ years)</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferred-date" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                          Preferred Date *
                        </label>
                        <Input
                          type="date"
                          id="preferred-date"
                          name="preferredDate"
                          value={strategyFormData.preferredDate}
                          onChange={handleStrategyInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00]"
                        />
                      </div>
                      <div>
                        <label htmlFor="preferred-time" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="preferred-time"
                          name="preferredTime"
                          value={strategyFormData.preferredTime}
                          onChange={handleStrategyInputChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00] p-3"
                        >
                          <option value="">Select time slot</option>
                          <option value="9-10">9:00 AM - 10:00 AM</option>
                          <option value="10-11">10:00 AM - 11:00 AM</option>
                          <option value="11-12">11:00 AM - 12:00 PM</option>
                          <option value="2-3">2:00 PM - 3:00 PM</option>
                          <option value="3-4">3:00 PM - 4:00 PM</option>
                          <option value="4-5">4:00 PM - 5:00 PM</option>
                          <option value="5-6">5:00 PM - 6:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="investment-goals" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                        Investment Goals & Requirements
                      </label>
                      <Textarea
                        id="investment-goals"
                        name="investmentGoals"
                        value={strategyFormData.investmentGoals}
                        onChange={handleStrategyInputChange}
                        rows={4}
                        className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00]"
                        placeholder="Tell us about your investment goals, preferred locations, property type, etc..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#ff6b00] hover:bg-[#e55a00] text-white py-3 rounded-lg transition-colors duration-300"
                    >
                      Book Strategy Call
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Call Benefits */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#3b3b3b] mb-6">What You'll Get</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="text-[#ff6b00]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3b3b3b]">Personalized Investment Strategy</h4>
                        <p className="text-gray-600">Tailored advice based on your budget, goals, and timeline</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Key className="text-[#ff6b00]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3b3b3b]">Exclusive Property Access</h4>
                        <p className="text-gray-600">First look at off-market and premium properties</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="text-[#ff6b00]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3b3b3b]">Risk Assessment</h4>
                        <p className="text-gray-600">Comprehensive analysis of market trends and investment risks</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Scale className="text-[#ff6b00]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3b3b3b]">Legal Guidance</h4>
                        <p className="text-gray-600">Expert advice on documentation and compliance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-[#3b3b3b] mb-4">Call Duration & Format</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span>45-60 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format</span>
                      <span>Video/Phone Call</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost</span>
                      <span className="text-[#ff6b00] font-semibold">FREE</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-[#ff6b00]/5 p-6 rounded-lg">
                  <h4 className="font-semibold text-[#3b3b3b] mb-4">Need Immediate Assistance?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-[#ff6b00]" size={16} />
                      <span className="text-gray-600">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-[#ff6b00]" size={16} />
                      <span className="text-gray-600">strategy@reito.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Keep original contact section but rename ID */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions or need more information? We're here to help with all your real estate needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#3b3b3b] mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00]"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00]"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00] p-3"
                      >
                        <option value="">Select property type</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="plot">Plot</option>
                        <option value="commercial">Commercial</option>
                        <option value="investment">Investment Property</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#3b3b3b] mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full rounded-lg border-gray-300 focus:border-[#ff6b00] focus:ring-[#ff6b00]"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#ff6b00] hover:bg-[#e55a00] text-white py-3 rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#3b3b3b] mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-[#ff6b00]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3b3b3b]">Phone</h4>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-gray-600">+91 87654 32109</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-[#ff6b00]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3b3b3b]">Email</h4>
                        <p className="text-gray-600">info@reito.com</p>
                        <p className="text-gray-600">sales@reito.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-[#ff6b00]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3b3b3b]">Office</h4>
                        <p className="text-gray-600">
                          123 Business District,<br />
                          Banjara Hills, Hyderabad<br />
                          Telangana 500034
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-[#3b3b3b] mb-4">Office Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b3b3b] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="text-3xl font-bold mb-4">REITO</div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Your trusted partner for premium real estate solutions in Hyderabad. We make property investment simple, transparent, and profitable.
                </p>
                <div className="flex space-x-4">
                  <Badge variant="outline" className="border-[#ff6b00] text-[#ff6b00]">
                    Premium Properties
                  </Badge>
                  <Badge variant="outline" className="border-[#ff6b00] text-[#ff6b00]">
                    Expert Guidance
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="block text-gray-300 hover:text-[#ff6b00] transition-colors duration-300"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="block text-gray-300 hover:text-[#ff6b00] transition-colors duration-300"
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="block text-gray-300 hover:text-[#ff6b00] transition-colors duration-300"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="block text-gray-300 hover:text-[#ff6b00] transition-colors duration-300"
                  >
                    Contact
                  </button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <div className="space-y-2 text-gray-300">
                  <div>Property Advisory</div>
                  <div>Legal Support</div>
                  <div>Off-Market Access</div>
                  <div>Investment Strategy</div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} REITO. All rights reserved. | Designed for premium real estate excellence.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
