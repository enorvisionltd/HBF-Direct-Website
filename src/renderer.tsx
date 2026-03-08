import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="HBF Direct Limited - A Venture Studio Building Scalable Businesses. MCA-regulated Core Investment Company supporting startups from idea to IPO." />
        <meta name="keywords" content="venture studio, startup funding, business ecosystem, investment, entrepreneurship, HBF Direct" />
        <title>HBF Direct Limited | Venture Studio Building Scalable Businesses</title>
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Tailwind Config */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: '#0A2540',
                    accent: '#2A6EF2',
                    light: '#F7F9FC'
                  },
                  fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
                    heading: ['Poppins', 'Inter', 'sans-serif']
                  }
                }
              }
            }
          `
        }}></script>
      </head>
      <body class="antialiased">
        {children}
        
        {/* Mobile Menu Script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Mobile menu toggle
              const mobileMenuBtn = document.getElementById('mobile-menu-btn');
              const mobileMenu = document.getElementById('mobile-menu');
              
              if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                  mobileMenu.classList.toggle('active');
                });
              }
              
              // Smooth scroll for anchor links
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                    target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                });
              });
              
              // Fade in animations on scroll
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };
              
              const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                  }
                });
              }, observerOptions);
              
              document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
              });
            });
          `
        }}></script>
      </body>
    </html>
  )
})
