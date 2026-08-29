import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  ArrowRight,
  ShoppingCart,
  Check,
  ChevronDown,
  Video,
  Globe,
  Gift,
  Star,
  FileText,
  PlayCircle,
  Search,
  X,
  User,
  Lock,
  Clock,
  Eye,
  ArrowLeft
} from 'lucide-react'
import logo from './assets/logo.svg'
import book1Img from './assets/book1.svg'
import book2Img from './assets/book2.svg'
import book3Img from './assets/book3.svg'
import book4Img from './assets/book4.svg'
import book5Img from './assets/book5.svg'
import book6Img from './assets/book6.svg'
import course1Img from './assets/course1.svg'
import course2Img from './assets/course2.svg'
import course3Img from './assets/course3.svg'
import course4Img from './assets/course4.svg'
import course5Img from './assets/course5.svg'
import course6Img from './assets/course6.svg'
import rwandaJpg from './assets/rwanda.jpg'
import algeriaJpg from './assets/algeria.jpg'
import angolaJpg from './assets/angola.jpg'
import beninJpg from './assets/benin.jpg'
import botswanaJpg from './assets/botswana.jpg'
import burundiJpg from './assets/burundi.jpg'
import membershipJpg from './assets/membership.jpg'
import './App.css'

// Custom SVG social icons
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
)

function App() {
  const [activePage, setActivePage] = useState('home') // 'home', 'store', 'membership', 'courses', or 'investment'
  const [activeLang, setActiveLang] = useState('EN')
  const [selectedCategory, setSelectedCategory] = useState('All Items')
  const [selectedCourseCategory, setSelectedCourseCategory] = useState('All Courses')
  const [languagesOpen, setLanguagesOpen] = useState(false)
  const [familyOpen, setFamilyOpen] = useState(false)
  const [courseLanguagesOpen, setCourseLanguagesOpen] = useState(false)
  const [courseFamilyOpen, setCourseFamilyOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [notification, setNotification] = useState(null)
  
  // Modals
  const [previewCourse, setPreviewCourse] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Capacity Building', href: '#' },
    { name: 'Store', href: '#store', isStore: true },
    { name: 'Membership', href: '#membership', isMembership: true },
    { name: 'Pricing', href: '#' },
    { name: 'News & Events', href: '#' },
    { name: 'Cross Cutting', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const quickLinks = [
    { name: 'About', href: '#' },
    { name: 'Capacity Building', href: '#' },
    { name: 'Store', href: '#store', isStore: true },
    { name: 'Membership', href: '#membership', isMembership: true },
    { name: 'Pricing', href: '#' },
    { name: 'News & Events', href: '#' },
    { name: 'Cross Cutting', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const membershipCards = [
    {
      id: 1,
      title: 'Online courses',
      description: 'Our database gives you access to a wide range of online courses include ICT/AI, and Animations.',
      icon: <PlayCircle size={28} />,
      tag: 'Core Benefit',
      isCoursesBtn: true
    },
    {
      id: 2,
      title: 'Investment opportunity guides Per African Country',
      description: 'Our database allows you to explore every African country and discover the investment opportunities available in each one. You\'ll find detailed insights on sectors, market potential,...',
      icon: <Globe size={28} />,
      tag: 'Exclusive',
      isInvestmentBtn: true
    },
    {
      id: 3,
      title: 'Live streaming',
      description: 'Join Our Weekly Live Streaming via YouTube or Restream to enjoy interactive sessions with us.',
      icon: <Video size={28} />,
      tag: 'Interactive'
    },
    {
      id: 4,
      title: 'E-Cards',
      description: 'Explore our exclusive collection of beautifully designed E-Cards, perfect for sharing meaningful moments with your loved ones. Whether you\'re celebrating a Birthday, sending...',
      icon: <Gift size={28} />,
      tag: 'BONUS'
    },
    {
      id: 5,
      title: '300+ Business Ideas',
      description: 'We offer more than 300 business ideas with their one page business plans.',
      icon: <Star size={28} />,
      tag: 'Premium Only'
    },
    {
      id: 6,
      title: 'E-books & Templates',
      description: 'Collection of digital versions of books and templates that can be read on electronic device.',
      icon: <FileText size={28} />,
      tag: 'Premium Only'
    }
  ]

  const books = [
    {
      id: 1,
      title: 'Meditation for spiritual...',
      fullTitle: 'Meditations for Spiritual Growth',
      category: 'Spiritual & Devotional',
      price: 12000,
      description: 'Grow deeper in your walk with God. Meditations for Spiritual Growth is an inspiring devotional book designed to move beyond indifference to bold faith.',
      cover: book1Img
    },
    {
      id: 2,
      title: "Let's Learn Kinyarwand...",
      fullTitle: "Let's Learn Kinyarwanda - Part 2",
      category: 'Languages',
      price: 4000,
      description: "Let's Learn Kinyarwanda – Part 2 is a fun and engaging vocabulary book for children aged 8–12 featuring everyday market scenes and interactive exercises.",
      cover: book2Img
    },
    {
      id: 3,
      title: "Let's Learn Kinyarwand...",
      fullTitle: "Let's Learn Kinyarwanda: At the Market - Part 1 (Book 4)",
      category: 'Languages',
      price: 4000,
      description: "Let's Learn Kinyarwanda: At the Market – Part 1 is a fun bilingual book for children aged 8–12 that introduces basic daily vocabulary in immersive contexts.",
      cover: book3Img
    },
    {
      id: 4,
      title: 'Mastering ICT & AI Handbook',
      fullTitle: 'Mastering ICT & Artificial Intelligence Handbook',
      category: 'ICT/AI & Graphic Design',
      price: 15000,
      description: 'Practical guide to artificial intelligence, graphic design, and modern digital tools for professionals and students seeking high-demand skills.',
      cover: book4Img
    },
    {
      id: 5,
      title: 'Strategic Business Management',
      fullTitle: 'Strategic Business Management for Public & NGOs',
      category: 'Business Management',
      price: 18000,
      description: 'Essential frameworks for scaling businesses, public sector projects, and non-profit organizations with sustainable operational strategies.',
      cover: book5Img
    },
    {
      id: 6,
      title: 'Family Empowerment Guide',
      fullTitle: 'Family Empowerment & Community Growth Manual',
      category: 'Family Empowerment',
      price: 9500,
      description: 'Practical tools and resources for household financial literacy, community leadership, and fostering strong supportive family structures.',
      cover: book6Img
    }
  ]

  const courses = [
    {
      id: 1,
      title: 'Developing a business plan',
      category: 'Business Management',
      duration: '6m 10s',
      instructor: 'B-doers',
      description: 'Developing a business plan course. Learn how to structure financial projections, value propositions, and growth strategy.',
      thumbnail: course1Img
    },
    {
      id: 2,
      title: 'Computer ni iki ikora ite video ya 2',
      category: 'ICT/AI & Graphic Design',
      duration: '8m 45s',
      instructor: 'B-doers',
      description: 'Isomo rya computer rirambuye kubyerekeye imikorere yayo n\'uburyo bwo kuyikoresha neza mu mirimo ya buri munsi.',
      thumbnail: course2Img
    },
    {
      id: 3,
      title: 'Comment Démarrer, Formaliser et Développer...',
      category: 'Business Management',
      duration: '12m 30s',
      instructor: 'B-doers',
      description: 'Le processus de planification d\'entreprise - de l\'idée à l\'action pour les entrepreneurs de la Francophonie.',
      thumbnail: course3Img
    },
    {
      id: 4,
      title: 'How to become a good leader in your business',
      category: 'Business Management',
      duration: '9m 15s',
      instructor: 'B-doers',
      description: '6 leadership traits to transform your business, manage teams effectively, and scale operations.',
      thumbnail: course4Img
    },
    {
      id: 5,
      title: 'What you need to know to manage the Human...',
      category: 'Business Management',
      duration: '10m 20s',
      instructor: 'B-doers',
      description: 'Human resource management essentials for growing enterprises, performance tracking, and talent retention.',
      thumbnail: course5Img
    },
    {
      id: 6,
      title: 'Microsoft excel Isomo rya 2',
      category: 'ICT/AI & Graphic Design',
      duration: '14m 00s',
      instructor: 'B-doers',
      description: 'Isomo rya Microsoft Excel video ya 2: Imbonerahamwe, formulas zibanze, n\'uburyo bwo gusesengura amakuru.',
      thumbnail: course6Img
    }
  ]

  const countries = [
    {
      id: 1,
      name: 'RWANDA',
      description: 'Rwanda stands as one of the most remarkable examples of socio-economic transformation in modern Africa. In just three decades since the 1994 genocide, the country has risen from...',
      image: rwandaJpg
    },
    {
      id: 2,
      name: 'ALGERIA',
      description: 'Algeria is bordered to the northeast by Tunisia; to the east by Libya; to the southeast by Niger; to the southwest by Mali, Mauritania, and Western Sahara; to the west by Morocco; and to the nort...',
      image: algeriaJpg
    },
    {
      id: 3,
      name: 'ANGOLA',
      description: 'Angola, located in Southern Africa, has a wide variety of landscapes, including the sub-Saharan desert that reaches Namibia, mild Atlantic beaches, and a complex system of...',
      image: angolaJpg
    },
    {
      id: 4,
      name: 'BENIN',
      description: 'Benin officially the Republic of Benin and formerly known as Dahomey, is a country in West Africa. It is bordered by Togo to the west, Nigeria to the east, Burkina Faso to the northwest, and Niger to...',
      image: beninJpg
    },
    {
      id: 5,
      name: 'BOTSWANA',
      description: 'The officially the Republic of Botswana is a landlocked country in Southern Africa whose capital is Gaborone. Botswana is topographically flat, with up to 70 percent of its territory being th...',
      image: botswanaJpg
    },
    {
      id: 6,
      name: 'BURUNDI',
      description: 'Officially the Republic of Burundi, is a landlocked country in the Great Rift Valley where the African Great Lakes region and East Africa converge. It is bordered by Rwanda to the north, Tanzania to t...',
      image: burundiJpg
    }
  ]

  const stats = [
    { icon: <Users size={24} />, value: '5,000+', label: 'Trained Doers' },
    { icon: <Award size={24} />, value: '98%', label: 'Satisfaction Rate' },
    { icon: <BookOpen size={24} />, value: '15+', label: 'Expert Programs' },
    { icon: <TrendingUp size={24} />, value: '100+', label: 'Partners Empowered' },
  ]

  const features = [
    {
      title: 'Capacity Building',
      desc: 'Practical skills development for individuals and organizations aiming for excellence.',
      tag: 'Core Focus'
    },
    {
      title: 'Consultancy Services',
      desc: 'Expert strategic solutions for public sectors, businesses, NGOs, and FBOs.',
      tag: 'Professional'
    },
    {
      title: 'Tech & AI Training',
      desc: 'Cutting-edge courses in ICT, Artificial Intelligence, Graphic Design, and Animation.',
      tag: 'Future Ready'
    },
    {
      title: 'Language Courses',
      desc: 'Master English, Swahili, and Kinyarwanda to expand your global reach.',
      tag: 'Global'
    }
  ]

  const categories = [
    'All Items',
    'ICT/AI & Graphic Design',
    'Languages',
    'Public Sector',
    'Business Management',
    'NGOs & FBOs Management',
    'Family Empowerment',
    'Spiritual & Devotional'
  ]

  const courseCategories = [
    'All Courses',
    'ICT/AI & Graphic Design',
    'Languages',
    'Public Sector',
    'Business Management',
    'NGOs & FBOs Management',
    'Family Empowerment'
  ]

  const filteredBooks = selectedCategory === 'All Items'
    ? books
    : books.filter(b => b.category === selectedCategory || (selectedCategory === 'Languages' && b.category === 'Languages'))

  const filteredCourses = courses.filter(c => {
    const matchesCat = selectedCourseCategory === 'All Courses' || c.category === selectedCourseCategory
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const handleAddToCart = (book) => {
    if (!cart.some(item => item.id === book.id)) {
      setCart([...cart, book])
    }
    const notifId = Date.now()
    setNotification({
      message: `"${book.fullTitle.substring(0, 28)}..." added to cart`,
      id: notifId
    })
    setTimeout(() => {
      setNotification(prev => (prev?.id === notifId ? null : prev))
    }, 3500)
  }

  const isBookInCart = (id) => cart.some(item => item.id === id)

  // Helper to handle previous page navigation
  const handlePrevious = () => {
    if (activePage === 'store' || activePage === 'membership') {
      setActivePage('home');
    } else if (activePage === 'courses' || activePage === 'investment') {
      setActivePage('membership');
    } else {
      setActivePage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-container">
      {/* HEADER / NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">
          <a
            href="#"
            className="logo-wrapper"
            onClick={(e) => { e.preventDefault(); setActivePage('home'); }}
          >
            <img src={logo} alt="B-doers Logo" className="brand-logo" />
          </a>

          <nav className="nav-menu">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`nav-link ${
                  (link.isStore && activePage === 'store') || (link.isMembership && (activePage === 'membership' || activePage === 'courses' || activePage === 'investment')) ? 'active-nav' : ''
                }`}
                onClick={(e) => {
                  if (link.isStore) {
                    e.preventDefault();
                    setActivePage('store');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (link.isMembership) {
                    e.preventDefault();
                    setActivePage('membership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    setActivePage('home');
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="lang-switcher">
              <button
                className={`lang-btn ${activeLang === 'EN' ? 'active' : ''}`}
                onClick={() => setActiveLang('EN')}
              >
                EN
              </button>
              <button
                className={`lang-btn ${activeLang === 'FR' ? 'active' : ''}`}
                onClick={() => setActiveLang('FR')}
              >
                FR
              </button>
            </div>
            <a href="#" className="btn-login" onClick={(e) => { e.preventDefault(); setShowAuthModal(true); }}>
              Login / Register
            </a>
          </div>
        </div>
      </header>

      {/* DYNAMIC CONTENT PAGES */}
      {activePage === 'home' ? (
        <main className="main-content">
          <section className="hero-banner">
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>
            
            <div className="hero-content">
              <div className="badge-pill">
                <Sparkles size={14} className="sparkle-icon" />
                <span>Awakening The Giant Within</span>
              </div>

              <h1 className="hero-title">Welcome to B-doers Ltd.</h1>
              <h2 className="hero-subtitle">
                We offer:{' '}
                <span className="highlight-yellow">
                  Professional Capacity Building
                </span>
              </h2>
              <p className="hero-tagline">
                Empowering leaders, professionals, and organizations through transformative, hands-on training and strategic consultancy.
              </p>

              <div className="hero-buttons">
                <a href="#" className="btn-primary btn-glow" onClick={(e) => { e.preventDefault(); setActivePage('membership'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  EXPLORE MEMBERSHIP <Award size={18} />
                </a>
                <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); setActivePage('store'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  VISIT STORE <ShoppingCart size={18} />
                </a>
              </div>
            </div>
          </section>

          <section className="stats-section">
            <div className="stats-container">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-icon-box">{stat.icon}</div>
                  <div className="stat-info">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="features-section">
            <div className="section-header">
              <span className="section-tag">WHAT WE DO</span>
              <h2 className="section-title">Transforming Ideas Into Action</h2>
              <p className="section-subtitle">
                Discover our comprehensive offerings designed to elevate individuals and institutions.
              </p>
            </div>

            <div className="features-grid">
              {features.map((item, idx) => (
                <div key={idx} className="feature-card">
                  <div className="card-badge">{item.tag}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                  <a
                    href="#"
                    className="card-link"
                    onClick={(e) => {
                      if (idx === 0) {
                        e.preventDefault();
                        setActivePage('membership');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>
      ) : activePage === 'store' ? (
        <main className="main-content store-page">
          <div className="page-nav-bar">
            <button className="global-prev-btn" onClick={handlePrevious}>
              <ArrowLeft size={16} /> Previous
            </button>
          </div>

          <section className="store-hero">
            <div className="store-hero-overlay"></div>
            <div className="store-hero-content">
              <h1 className="store-hero-title">Our Store</h1>
              <p className="store-hero-subtitle">Explore our collection of digital resources</p>
            </div>
          </section>

          <section className="store-catalog-section">
            <div className="store-container">
              <aside className="store-sidebar">
                <div className="sidebar-box">
                  <h3 className="sidebar-title">Browse by Category</h3>
                  <ul className="category-list">
                    {categories.map((cat, idx) => {
                      const isSelected = selectedCategory === cat
                      const hasDropdown = cat === 'Languages' || cat === 'Family Empowerment'

                      return (
                        <li key={idx} className="category-item-wrapper">
                          <button
                            className={`category-btn ${isSelected ? 'active' : ''}`}
                            onClick={() => {
                              setSelectedCategory(cat)
                              if (cat === 'Languages') setLanguagesOpen(!languagesOpen)
                              if (cat === 'Family Empowerment') setFamilyOpen(!familyOpen)
                            }}
                          >
                            <span>{cat}</span>
                            {hasDropdown && <ChevronDown size={16} className={`dropdown-chevron ${((cat === 'Languages' && languagesOpen) || (cat === 'Family Empowerment' && familyOpen)) ? 'open' : ''}`} />}
                          </button>

                          {cat === 'Languages' && languagesOpen && (
                            <ul className="sub-category-list">
                              <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory('Languages'); }}>Kinyarwanda Books</a></li>
                              <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory('Languages'); }}>English & Swahili</a></li>
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </aside>

              <div className="store-products-area">
                <div className="catalog-top-bar">
                  <span className="results-count">Showing {filteredBooks.length} resources</span>
                </div>

                <div className="books-grid">
                  {filteredBooks.map((book) => {
                    const inCart = isBookInCart(book.id)

                    return (
                      <div key={book.id} className="book-card">
                        <div className="book-cover-container">
                          <img src={book.cover} alt={book.fullTitle} className="book-cover-img" />
                        </div>
                        
                        <div className="book-info">
                          <h4 className="book-title" title={book.fullTitle}>{book.title}</h4>
                          <div className="book-price">RWF {book.price.toLocaleString()}</div>
                          <p className="book-desc">{book.description}</p>

                          <button
                            type="button"
                            className={`btn-add-cart ${inCart ? 'in-cart' : ''}`}
                            onClick={() => handleAddToCart(book)}
                          >
                            {inCart ? (
                              <>
                                <Check size={18} /> In Cart
                              </>
                            ) : (
                              <>
                                <ShoppingCart size={18} /> Add to Cart
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {notification && (
            <div className="cart-notification-popup">
              <div className="notif-content">
                <ShoppingCart size={18} className="notif-cart-icon" />
                <span>Cart: {cart.length} item{cart.length > 1 ? 's' : ''}</span>
                <button className="notif-btn-ghost" onClick={() => alert('Viewing Cart contents!')}>Go to Cart</button>
                <button className="notif-btn-solid" onClick={() => alert('Proceeding to checkout!')}>Checkout</button>
              </div>
            </div>
          )}
        </main>
      ) : activePage === 'membership' ? (
        <main className="main-content membership-page">
          <div className="page-nav-bar">
            <button className="global-prev-btn" onClick={handlePrevious}>
              <ArrowLeft size={16} /> Previous
            </button>
          </div>

          {/* Membership Hero with membership.jpg background */}
          <section className="membership-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(30, 58, 138, 0.82) 100%), url(${membershipJpg})` }}>
            <div className="membership-hero-overlay"></div>
            <div className="membership-hero-content">
              <h1 className="membership-hero-title">Standard/Premium Contents</h1>
              <p className="membership-hero-subtitle">Access our exclusive collection of standard and premium contents</p>
              
              <div className="membership-ticker">
                <span className="ticker-item"><span className="dot-green"></span> New course every week</span>
                <span className="ticker-item"><span className="dot-green"></span> Three live stream per week</span>
                <span className="ticker-item"><span className="dot-green"></span> New ebooks every month</span>
              </div>
            </div>
          </section>

          <section className="membership-about-section">
            <div className="membership-container">
              <div className="about-glass-card">
                <p className="about-text">
                  BDOERS membership platform is created to empower Africa's organisations & businesses specifically African's young leaders and entrepreneurs with practical knowledge, business opportunities, and tools for real success. BDOERS membership platform is more than a membership platform. It is a digital ecosystem designed for young people in Rwanda, Francophone Africa, and Anglophone Africa who want to grow financially, professionally, and personally. Inside the platform members gain access to a powerful collection of resources carefully created to help them build their organisations, career and business with confidence. BDOERS membership platform exists because Africa's youth have potential, creativity, and ambition — but often lack access to organized, practical, and relevant resources tailored to their needs.
                </p>
                <p className="about-text">
                  Our goal is to build a generation of doers: young entrepreneurs, visionary leaders, skilled professionals, creative innovators, and empowered Africans. Whether you speak English or French, whether you are starting a business, planning your career, improving your skills, or searching for opportunities — BDOERS is your home for growth. This is not just a platform. This is a movement of Africans choosing action over excuses, vision over limitation, and impact over survival.
                </p>
                <div className="about-footer-tag">
                  Join BDOERS membership platform. Learn. Build. Grow. Lead.
                </div>
              </div>
            </div>
          </section>

          <section className="membership-benefits-section">
            <div className="membership-container">
              <div className="section-header">
                <span className="section-tag">EXCLUSIVE ACCESS</span>
                <h2 className="section-title">What's Inside Your Membership</h2>
                <p className="section-subtitle">
                  Explore high-impact resources crafted for ambitious leaders and creators.
                </p>
              </div>

              <div className="membership-grid">
                {membershipCards.map((card) => (
                  <div key={card.id} className="membership-card">
                    <div className="card-top-row">
                      <div className="card-icon-box">{card.icon}</div>
                      <span className={`membership-tag ${card.tag.includes('Premium') ? 'tag-premium' : card.tag === 'BONUS' ? 'tag-bonus' : 'tag-core'}`}>
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="membership-card-title">{card.title}</h3>
                    <p className="membership-card-desc">{card.description}</p>

                    <button
                      type="button"
                      className="btn-view-content"
                      onClick={() => {
                        if (card.isCoursesBtn) {
                          setActivePage('courses');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else if (card.isInvestmentBtn) {
                          setActivePage('investment');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          alert(`Opening content for: ${card.title}`);
                        }
                      }}
                    >
                      View Full Content <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      ) : activePage === 'courses' ? (
        <main className="main-content courses-page">
          <div className="page-nav-bar">
            <button className="global-prev-btn" onClick={handlePrevious}>
              <ArrowLeft size={16} /> Previous
            </button>
          </div>

          <section className="courses-hero">
            <div className="courses-hero-overlay"></div>
            <div className="courses-hero-content">
              <h1 className="courses-hero-title">Online courses</h1>
              <p className="courses-hero-subtitle">Our database gives you access to a wide range of online courses include ICT/AI, and Animations.</p>
            </div>
          </section>

          <div className="courses-search-bar-wrapper">
            <div className="courses-search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="courses-search-input"
              />
            </div>
          </div>

          <section className="store-catalog-section">
            <div className="store-container">
              <aside className="store-sidebar">
                <div className="sidebar-box">
                  <h3 className="sidebar-title">Browse by Category</h3>
                  <ul className="category-list">
                    {courseCategories.map((cat, idx) => {
                      const isSelected = selectedCourseCategory === cat
                      const hasDropdown = cat === 'Languages' || cat === 'Family Empowerment'

                      return (
                        <li key={idx} className="category-item-wrapper">
                          <button
                            className={`category-btn ${isSelected ? 'active' : ''}`}
                            onClick={() => {
                              setSelectedCourseCategory(cat)
                              if (cat === 'Languages') setCourseLanguagesOpen(!courseLanguagesOpen)
                              if (cat === 'Family Empowerment') setCourseFamilyOpen(!courseFamilyOpen)
                            }}
                          >
                            <span>{cat}</span>
                            {hasDropdown && <ChevronDown size={16} className={`dropdown-chevron ${((cat === 'Languages' && courseLanguagesOpen) || (cat === 'Family Empowerment' && courseFamilyOpen)) ? 'open' : ''}`} />}
                          </button>

                          {cat === 'Languages' && courseLanguagesOpen && (
                            <ul className="sub-category-list">
                              <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedCourseCategory('Languages'); }}>Kinyarwanda</a></li>
                              <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedCourseCategory('Languages'); }}>English</a></li>
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </aside>

              <div className="store-products-area">
                <div className="catalog-top-bar">
                  <span className="results-count">Showing {filteredCourses.length} courses</span>
                </div>

                <div className="books-grid">
                  {filteredCourses.map((course) => (
                    <div key={course.id} className="book-card course-card">
                      <div className="book-cover-container course-thumbnail-box" onClick={() => setPreviewCourse(course)}>
                        <img src={course.thumbnail} alt={course.title} className="book-cover-img" />
                        <div className="play-overlay">
                          <div className="play-circle-btn">
                            <PlayCircle size={36} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="book-info">
                        <span className="course-cat-badge">{course.category}</span>
                        <h4 className="book-title" title={course.title}>{course.title}</h4>
                        <div className="course-meta-row">
                          <span className="course-instructor"><User size={14} /> {course.instructor}</span>
                          <span className="course-duration"><Clock size={14} /> {course.duration}</span>
                        </div>

                        <button
                          type="button"
                          className="btn-view-details"
                          onClick={() => setPreviewCourse(course)}
                        >
                          <Eye size={16} /> View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {previewCourse && (
            <div className="modal-backdrop" onClick={() => setPreviewCourse(null)}>
              <div className="course-preview-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={() => setPreviewCourse(null)}>
                  <X size={20} />
                </button>

                <div className="preview-modal-grid">
                  <div className="preview-video-pane">
                    <img src={previewCourse.thumbnail} alt={previewCourse.title} className="preview-thumb" />
                    <div className="modal-play-center" onClick={() => setShowAuthModal(true)}>
                      <div className="play-circle-btn pulse">
                        <PlayCircle size={44} />
                      </div>
                    </div>
                  </div>

                  <div className="preview-info-pane">
                    <span className="course-cat-badge">{previewCourse.category}</span>
                    <h2 className="preview-course-title">{previewCourse.title}</h2>
                    
                    <div className="preview-meta">
                      <span><User size={14} /> {previewCourse.instructor}</span>
                      <span><Clock size={14} /> {previewCourse.duration}</span>
                    </div>

                    <hr className="modal-divider" />

                    <div className="preview-desc-box">
                      <h4>Course Description</h4>
                      <p>{previewCourse.description}</p>
                    </div>

                    <hr className="modal-divider" />

                    <div className="preview-actions">
                      <button
                        type="button"
                        className="btn-watch-red"
                        onClick={() => {
                          setPreviewCourse(null);
                          setShowAuthModal(true);
                        }}
                      >
                        <PlayCircle size={18} /> WATCH COURSE
                      </button>
                      <button
                        type="button"
                        className="btn-cancel-gray"
                        onClick={() => setPreviewCourse(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      ) : (
        /* INVESTMENT OPPORTUNITY GUIDES PER AFRICAN COUNTRY (THINKING MAN HERO PHOTO) */
        <main className="main-content investment-page">
          <div className="page-nav-bar">
            <button className="global-prev-btn" onClick={handlePrevious}>
              <ArrowLeft size={16} /> Previous
            </button>
          </div>

          <section className="courses-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(30, 58, 138, 0.82) 100%), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80')` }}>
            <div className="courses-hero-overlay"></div>
            <div className="courses-hero-content">
              <h1 className="courses-hero-title">Investment opportunity guides Per African Country</h1>
              <p className="courses-hero-subtitle">Our database allows you to explore every African country and discover the investment opportunities available in each one. You'll find detailed insight...</p>
            </div>
          </section>

          <section className="store-catalog-section">
            <div className="membership-container">
              <div className="catalog-top-bar" style={{ marginBottom: '2rem' }}>
                <span className="results-count">Showing {countries.length} Country Guides</span>
              </div>

              <div className="books-grid">
                {countries.map((country) => (
                  <div
                    key={country.id}
                    className="book-card country-card"
                    onClick={() => setShowAuthModal(true)}
                  >
                    <div className="book-cover-container country-cover-box">
                      <img src={country.image} alt={country.name} className="book-cover-img" />
                      <div className="play-overlay">
                        <span className="country-hover-pill">View Opportunities <ArrowRight size={16} /></span>
                      </div>
                    </div>
                    
                    <div className="book-info">
                      <h4 className="book-title" style={{ color: '#2563eb', fontSize: '1.2rem', marginBottom: '0.6rem' }}>{country.name}</h4>
                      <p className="book-desc">{country.description}</p>

                      <button
                        type="button"
                        className="btn-read-more"
                        onClick={(e) => { e.stopPropagation(); setShowAuthModal(true); }}
                      >
                        READ MORE →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* AUTH MODAL */}
      {showAuthModal && (
        <div className="modal-backdrop" onClick={() => setShowAuthModal(false)}>
          <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowAuthModal(false)}>
              <X size={20} />
            </button>

            <div className="auth-modal-header">
              <h2>Hi, Welcome back!</h2>
            </div>

            <form className="auth-form" onSubmit={(e) => { e.preventDefault(); alert('Login successful!'); setShowAuthModal(false); }}>
              <div className="form-group">
                <label>Username or Email Address</label>
                <div className="input-with-icon">
                  <User size={18} className="field-icon" />
                  <input type="text" placeholder="Enter your username or email" required />
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="input-with-icon">
                  <Lock size={18} className="field-icon" />
                  <input type="password" placeholder="Enter your password" required />
                </div>
              </div>

              <div className="form-options">
                <label className="remember-label">
                  <input type="checkbox" /> Keep me signed in
                </label>
                <a href="#" className="forgot-link" onClick={(e) => { e.preventDefault(); alert('Password reset link sent!'); }}>Forgot Password?</a>
              </div>

              <button type="submit" className="btn-auth-login">
                Login
              </button>

              <div className="auth-divider-row">
                <span>Or continue with</span>
              </div>

              <button
                type="button"
                className="btn-google-login"
                onClick={() => { alert('Google Login simulated!'); setShowAuthModal(false); }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.2v3.15C3.18 21.32 7.23 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.2C.44 8.13 0 9.84 0 12s.44 3.87 1.2 5.39l4.08-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.18 2.68 1.2 6.61l4.08 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
                </svg>
                Login with Google
              </button>

              <p className="auth-footer-text">
                Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); alert('Registration modal opened!'); }}>Register Now</a>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="newsletter-box">
            <div className="newsletter-text">
              <h3>Stay Updated with B-DOERS</h3>
              <p>Subscribe to get our latest news, courses, and event updates.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address..." required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo-row">
                <img src={logo} alt="B-doers Logo" className="footer-logo" />
                <span className="brand-title">B-DOERS</span>
              </div>
              <p className="brand-desc">
                Empowering individuals, families, and organizations through
                practical capacity building, consultancy, and resources that turn
                ideas into action.
              </p>
            </div>

            <div className="footer-links-col">
              <h3 className="footer-heading">QUICK LINKS</h3>
              <ul className="footer-links-list">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="footer-link"
                      onClick={(e) => {
                        if (link.isStore) {
                          e.preventDefault();
                          setActivePage('store');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else if (link.isMembership) {
                          e.preventDefault();
                          setActivePage('membership');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-col">
              <h3 className="footer-heading">GET IN TOUCH</h3>

              <div className="contact-item">
                <div className="contact-icon-bg">
                  <Mail size={18} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a href="mailto:bdoers23@gmail.com" className="contact-value">
                    bdoers23@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bg">
                  <Phone size={18} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">(+250) 788 600 851</span>
                  <span className="contact-value">(+250) 788 355 483</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-bg">
                  <MapPin size={18} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="footer-bottom">
            <h4 className="social-title">Stay connected with Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="social-icon-btn" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
            <p className="copyright-text">
              &copy; 2026 B-DOERS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App