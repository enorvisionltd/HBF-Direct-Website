import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen">
      {/* Navbar */}
      <nav class="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex justify-between items-center h-20">
            {/* Logo */}
            <div class="flex items-center">
              <div class="flex items-center space-x-2">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <div class="text-lg font-bold text-gray-900">HBF Direct Limited</div>
                  <div class="text-xs text-gray-500">Venture Studio</div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" class="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#studio" class="text-gray-700 hover:text-blue-600 transition">Venture Studio</a>
              <a href="#ecosystem" class="text-gray-700 hover:text-blue-600 transition">Ecosystem</a>
              <a href="#ventures" class="text-gray-700 hover:text-blue-600 transition">Ventures</a>
              <a href="#investors" class="text-gray-700 hover:text-blue-600 transition">Investors</a>
              <a href="#contact" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            {/* CTA Button */}
            <div class="hidden md:block">
              <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                Join Ecosystem
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button class="md:hidden text-gray-700" id="mobile-menu-btn">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" class="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div class="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                MCA-Regulated Venture Studio | ₹249.7 Cr Valuation
              </div>
              <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                HBF Direct Limited
              </h1>
              <div class="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
                A Venture Studio Building Scalable Businesses
              </div>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                We partner with founders, startups, and growing companies to build, scale, and globalize businesses through strategic support, capital access, and a powerful ecosystem.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="#startups" class="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-medium text-lg shadow-lg hover:shadow-xl">
                  Start Building
                </a>
                <a href="#investors" class="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-medium text-lg border-2 border-blue-600">
                  Raise Capital
                </a>
              </div>
            </div>

            {/* Right - Ecosystem Diagram */}
            <div class="relative">
              <div class="ecosystem-diagram">
                {/* Center Circle */}
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div class="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl">
                    <div class="text-center">
                      <div class="text-white font-bold text-lg">HBF</div>
                      <div class="text-blue-200 text-xs">Direct</div>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div class="relative w-full h-96">
                  {['Branding', 'Fundraising', 'Ecosystem', 'Global Trade', 'Investors', 'Founders', 'Partners', 'Ventures'].map((item, index) => (
                    <div 
                      class={`absolute ecosystem-node ecosystem-node-${index + 1}`}
                      style={{
                        animation: `orbit${index + 1} 20s linear infinite`,
                      }}
                    >
                      <div class="bg-white rounded-lg px-4 py-3 shadow-lg border border-blue-100 hover:border-blue-400 transition">
                        <div class="text-sm font-semibold text-gray-800 text-center whitespace-nowrap">{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section class="py-12 bg-white border-y border-gray-100">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-8">
            <p class="text-gray-600 font-medium">Building a Global Business Ecosystem</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {['Startups', 'Investors', 'Partners', 'Incubators', 'BSE India', 'T-Hub'].map(partner => (
              <div class="text-center">
                <div class="text-lg font-semibold text-gray-700">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section id="studio" class="py-20 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Venture Studio Model</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              HBF Direct operates as a venture studio supporting startups from idea to scale through four core pillars
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Branding & Marketing',
                description: 'Build powerful brands and reach the right audiences through structured marketing strategies',
                items: ['Brand Strategy', 'Digital Marketing', 'PR & Media', 'Community Engagement']
              },
              {
                icon: '💰',
                title: 'Capital & Fundraising',
                description: 'Connect with the right investors, funds, and strategic partners to scale your business',
                items: ['Investor Readiness', 'Pitch Strategy', 'VC Introductions', 'Cross-Border Investment']
              },
              {
                icon: '🚀',
                title: 'Ecosystem Support',
                description: 'Accelerate growth with operational and strategic support from our expert network',
                items: ['Business Strategy', 'Legal & Compliance', 'Technology Support', 'Talent Network']
              },
              {
                icon: '🌍',
                title: 'Global Expansion',
                description: 'Expand internationally through our global network and cross-border partnerships',
                items: ['Market Access', 'Trade Delegations', 'Global Investors', 'International Partnerships']
              }
            ].map(pillar => (
              <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-400 hover:-translate-y-2">
                <div class="text-5xl mb-4">{pillar.icon}</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                <ul class="space-y-2">
                  {pillar.items.map(item => (
                    <li class="flex items-center text-sm text-gray-700">
                      <svg class="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Studio Process */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p class="text-xl text-gray-600">Our proven three-stage process from idea to global scale</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Build',
                subtitle: 'Foundation',
                description: 'Validate ideas, develop business models, and launch your brand with strategic positioning',
                items: ['Idea Validation', 'Business Model', 'Product Launch', 'Brand Strategy']
              },
              {
                step: '02',
                title: 'Grow',
                subtitle: 'Expansion',
                description: 'Scale operations, build partnerships, and establish market presence with data-driven growth',
                items: ['Market Expansion', 'Strategic Partnerships', 'Revenue Scaling', 'Team Building']
              },
              {
                step: '03',
                title: 'Scale',
                subtitle: 'Global',
                description: 'Access capital, expand internationally, and achieve sustainable growth across markets',
                items: ['Capital Access', 'Global Expansion', 'Exit Strategy', 'IPO Readiness']
              }
            ].map((stage, index) => (
              <div class="relative">
                {index < 2 && (
                  <div class="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent transform translate-x-1/2"></div>
                )}
                <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition relative z-10">
                  <div class="text-6xl font-bold text-blue-100 mb-4">{stage.step}</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{stage.title}</h3>
                  <div class="text-blue-600 font-medium mb-4">{stage.subtitle}</div>
                  <p class="text-gray-600 mb-6">{stage.description}</p>
                  <ul class="space-y-2">
                    {stage.items.map(item => (
                      <li class="flex items-center text-sm text-gray-700">
                        <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Visual Section */}
      <section id="ecosystem" class="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">The HBF Ecosystem</h2>
            <p class="text-xl text-blue-200 max-w-3xl mx-auto">
              A comprehensive network connecting founders, investors, and global business communities
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { number: '100+', label: 'Companies Supported' },
              { number: '₹2000+ Cr', label: 'Target Valuation by 2030' },
              { number: '26+', label: 'Active Partnerships' }
            ].map(stat => (
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div class="text-4xl font-bold mb-2">{stat.number}</div>
                <div class="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>

          <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div class="grid md:grid-cols-4 gap-6">
              {[
                { icon: '👥', title: 'Founders Club India', desc: 'Community & Events Platform' },
                { icon: '🎯', title: 'NextHappen', desc: 'Full-Stack Event Management' },
                { icon: '🇮🇳', title: 'Bharatpreneurs', desc: 'Annual Entrepreneurship Summit' },
                { icon: '🏢', title: 'Strategic Equity', desc: '5-50% Investment Positions' }
              ].map(item => (
                <div class="text-center">
                  <div class="text-4xl mb-3">{item.icon}</div>
                  <div class="font-semibold mb-2">{item.title}</div>
                  <div class="text-sm text-blue-200">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Ventures & Initiatives</h2>
            <p class="text-xl text-gray-600">Building platforms and ecosystems across multiple sectors</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'NextHappen',
                category: 'Event Platform',
                description: 'Comprehensive event management and networking platform connecting event organizers with venues and sponsors',
                color: 'from-purple-500 to-purple-700'
              },
              {
                name: 'India Global Trade',
                category: 'Trade Ecosystem',
                description: 'Building cross-border trade networks connecting Indian businesses with global markets',
                color: 'from-green-500 to-green-700'
              },
              {
                name: 'Fashion India Forum',
                category: 'Industry Community',
                description: 'Premier platform for fashion industry networking, partnerships, and business development',
                color: 'from-pink-500 to-pink-700'
              },
              {
                name: 'Gear Healthcare',
                category: 'Healthcare Platform',
                description: 'Innovative healthcare solutions connecting patients, providers, and medical technology',
                color: 'from-blue-500 to-blue-700'
              },
              {
                name: 'Founders Club India',
                category: 'Founder Community',
                description: 'Exclusive community and event platform for startup founders and entrepreneurs',
                color: 'from-orange-500 to-orange-700'
              },
              {
                name: 'Bharatpreneurs',
                category: 'Annual Summit',
                description: 'India\'s largest entrepreneurship summit launching 2026, connecting the startup ecosystem',
                color: 'from-red-500 to-red-700'
              }
            ].map(venture => (
              <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div class={`h-48 bg-gradient-to-br ${venture.color} p-8 flex items-center justify-center`}>
                  <div class="text-center">
                    <div class="text-white text-3xl font-bold mb-2">{venture.name}</div>
                    <div class="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm inline-block">
                      {venture.category}
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4 leading-relaxed">{venture.description}</p>
                  <button class="text-blue-600 font-medium hover:text-blue-700 transition flex items-center group">
                    Explore Platform
                    <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section class="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20">
          <svg class="w-full h-full" viewBox="0 0 1000 600">
            {/* Simplified world map paths */}
            <path d="M200,200 L250,180 L300,200 L350,170 L400,190" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
            <path d="M450,250 L500,230 L550,240 L600,220" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
          </svg>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Global Network</h2>
            <p class="text-xl text-blue-200">Operating across multiple continents with strategic partnerships</p>
          </div>

          <div class="grid md:grid-cols-5 gap-6">
            {[
              { region: 'India', cities: 'Mumbai, Hyderabad, Bangalore', status: 'Primary Hub' },
              { region: 'Australia', cities: 'Sydney, Melbourne', status: 'Strategic Partner' },
              { region: 'Middle East', cities: 'Dubai, Abu Dhabi', status: 'Expanding' },
              { region: 'Southeast Asia', cities: 'Singapore, Bangkok', status: 'Network' },
              { region: 'Europe', cities: 'London, Amsterdam', status: 'Connections' }
            ].map(location => (
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition">
                <div class="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4 mx-auto">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2 text-center">{location.region}</h3>
                <p class="text-blue-200 text-sm mb-2 text-center">{location.cities}</p>
                <div class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs text-center">
                  {location.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Startups Section */}
      <section id="startups" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 h-full flex items-center justify-center">
                <div class="text-center">
                  <div class="text-8xl mb-4">🚀</div>
                  <div class="text-2xl font-bold text-gray-800">Build Your Startup</div>
                  <div class="text-blue-600 mt-2">With HBF Ecosystem</div>
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Build Your Startup With HBF</h2>
              <p class="text-xl text-gray-600 mb-8">
                Join India's leading MCA-regulated venture studio and access comprehensive support from inception to IPO
              </p>
              <ul class="space-y-4 mb-8">
                {[
                  'Brand building and market positioning',
                  'Fundraising and investor connections',
                  'Strategic partnerships and ecosystem access',
                  'Global expansion and market entry',
                  'Operational support and scaling expertise',
                  '5-50% strategic equity partnership model'
                ].map(benefit => (
                  <li class="flex items-start">
                    <div class="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" class="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-medium text-lg inline-block shadow-lg hover:shadow-xl">
                Apply as Founder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* For Investors Section */}
      <section id="investors" class="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Access Curated Investment Opportunities</h2>
              <p class="text-xl text-gray-600 mb-8">
                Join our investor network and access pre-vetted startups and growth ventures across multiple sectors
              </p>
              <ul class="space-y-4 mb-8">
                {[
                  'Early stage startup investments (5-50% equity positions)',
                  'Growth-stage ventures with proven business models',
                  'Cross-border investment opportunities',
                  'Co-investment with strategic partners',
                  'Portfolio support and value creation',
                  'Access to BSE, Standard Chartered, KFintech network'
                ].map(benefit => (
                  <li class="flex items-start">
                    <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <div class="flex items-start">
                  <div class="text-3xl mr-4">📈</div>
                  <div>
                    <div class="font-semibold text-gray-900 mb-1">Strong Track Record</div>
                    <div class="text-gray-600 text-sm">205% 3-year CAGR | 50-65% annual growth</div>
                  </div>
                </div>
              </div>
              <a href="#contact" class="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-medium text-lg inline-block shadow-lg hover:shadow-xl">
                Join Investor Network
              </a>
            </div>
            <div class="order-1 md:order-2">
              <div class="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-12 h-full flex items-center justify-center">
                <div class="text-center">
                  <div class="text-8xl mb-4">💼</div>
                  <div class="text-2xl font-bold text-gray-800">Strategic Investments</div>
                  <div class="text-green-600 mt-2">High-Growth Ventures</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="max-w-5xl mx-auto px-6 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Build the Future of Business Together</h2>
          <p class="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join HBF Direct Limited's ecosystem and access the resources, network, and support you need to build a successful global business
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-medium text-lg shadow-xl">
              Join Ecosystem
            </a>
            <a href="#contact" class="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition font-medium text-lg border-2 border-white/30">
              Partner With Us
            </a>
            <a href="#investors" class="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-medium text-lg shadow-xl">
              Invest With HBF
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" class="bg-slate-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - Company */}
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <div class="font-bold">HBF Direct Limited</div>
                  <div class="text-xs text-gray-400">Venture Studio</div>
                </div>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                A Venture Studio Building Scalable Businesses. MCA-regulated Core Investment Company with ₹249.7 Cr valuation.
              </p>
            </div>

            {/* Column 2 - Company */}
            <div>
              <h4 class="font-bold mb-4">Company</h4>
              <ul class="space-y-2">
                <li><a href="#home" class="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#studio" class="text-gray-400 hover:text-white transition">Venture Studio</a></li>
                <li><a href="#ecosystem" class="text-gray-400 hover:text-white transition">Ecosystem</a></li>
                <li><a href="#ventures" class="text-gray-400 hover:text-white transition">Ventures</a></li>
              </ul>
            </div>

            {/* Column 3 - Programs */}
            <div>
              <h4 class="font-bold mb-4">Programs</h4>
              <ul class="space-y-2">
                <li><a href="#startups" class="text-gray-400 hover:text-white transition">For Startups</a></li>
                <li><a href="#investors" class="text-gray-400 hover:text-white transition">For Investors</a></li>
                <li><a href="#contact" class="text-gray-400 hover:text-white transition">Partners</a></li>
                <li><a href="#ecosystem" class="text-gray-400 hover:text-white transition">Founders Club</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h4 class="font-bold mb-4">Contact</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 mr-2 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span class="text-gray-400 text-sm">contact@hbfdirect.com</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 mr-2 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-gray-400 text-sm">Mumbai, India<br/>Expanding to Hyderabad via T-Hub</span>
                </li>
                <li class="flex items-center space-x-3 mt-4">
                  <a href="#" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                    <span class="text-sm font-bold">in</span>
                  </a>
                  <a href="#" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                    <span class="text-sm font-bold">𝕏</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-800 pt-8">
            <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div>
                © 2026 HBF Direct Limited. All rights reserved. | MCA-Regulated Core Investment Company
              </div>
              <div class="md:text-right">
                <a href="#" class="hover:text-white transition">Privacy Policy</a>
                <span class="mx-2">•</span>
                <a href="#" class="hover:text-white transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
})

export default app
