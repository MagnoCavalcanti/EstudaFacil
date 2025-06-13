document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Header scroll effect
  const header = document.querySelector(".header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Animate stats on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const statsSection = document.querySelector(".hero-stats")
  if (statsSection) {
    observer.observe(statsSection)
  }

  function animateStats(statsContainer) {
    const statNumbers = statsContainer.querySelectorAll(".stat-number")

    statNumbers.forEach((stat) => {
      const finalValue = stat.textContent
      const numericValue = Number.parseInt(finalValue.replace(/\D/g, ""))
      const suffix = finalValue.replace(/\d/g, "")

      if (!isNaN(numericValue)) {
        animateNumber(stat, 0, numericValue, suffix, 2000)
      }
    })
  }

  function animateNumber(element, start, end, suffix, duration) {
    const startTime = performance.now()

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const current = Math.floor(start + (end - start) * easeOutQuart(progress))
      element.textContent = current + suffix

      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      }
    }

    requestAnimationFrame(updateNumber)
  }

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4)
  }

  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll(".progress-fill")

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target
          const width = progressBar.style.width

          progressBar.style.width = "0%"

          setTimeout(() => {
            progressBar.style.width = width
          }, 200)

          progressObserver.unobserve(progressBar)
        }
      })
    },
    { threshold: 0.5 },
  )

  progressBars.forEach((bar) => {
    progressObserver.observe(bar)
  })

  // Feature cards hover effect
  const featureCards = document.querySelectorAll(".feature-card")

  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Dashboard preview interaction
  const dashboardPreview = document.querySelector(".dashboard-preview")

  if (dashboardPreview) {
    dashboardPreview.addEventListener("mouseenter", function () {
      this.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)"
    })

    dashboardPreview.addEventListener("mouseleave", function () {
      this.style.transform = "perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)"
    })
  }

  // Add loading animation to buttons
  const primaryButtons = document.querySelectorAll(".btn-primary")

  primaryButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Se for um link para o dashboard, adiciona efeito de loading
      if (this.getAttribute("href") === "index.html") {
        e.preventDefault()

        const originalText = this.textContent
        this.textContent = "Carregando..."
        this.style.opacity = "0.7"

        setTimeout(() => {
          window.location.href = "index.html"
        }, 1000)
      }
    })
  })
})

// Add CSS for mobile menu
const style = document.createElement("style")
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: var(--color-white);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: var(--shadow-md);
            padding: 20px 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 15px 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`
document.head.appendChild(style)
