// Website data for modals
const websiteData = {
    techinsider: {
        name: "TechInsider Pro",
        category: "Technology & Innovation",
        icon: "fas fa-globe",
        da: "65",
        traffic: "50K+ Monthly",
        linkType: "DoFollow",
        indexing: "Fast (24-48 hours)",
        description: "A leading technology blog covering the latest trends in AI, software development, and digital innovation. With a strong focus on emerging technologies and their practical applications, TechInsider Pro has become a trusted source for tech professionals and enthusiasts worldwide.",
        features: [
            "High Domain Authority (DA 65)",
            "Fast indexing and publication",
            "Editorial review process",
            "Active social media presence",
            "Mobile-optimized content",
            "Regular publishing schedule"
        ],
        requirements: [
            "Original, high-quality content (1000+ words)",
            "Relevant to technology, AI, or digital innovation",
            "Include relevant images and graphics",
            "Proper attribution and citations",
            "No promotional content in the main body",
            "Author bio with relevant expertise"
        ],
        price: "$200 - $350",
        turnaround: "3-5 business days",
        url: "https://techinsiderpro.com"
    },
    businessgrowth: {
        name: "Business Growth Hub",
        category: "Business & Entrepreneurship",
        icon: "fas fa-briefcase",
        da: "58",
        traffic: "35K+ Monthly",
        linkType: "DoFollow",
        indexing: "Fast (24-48 hours)",
        description: "Expert insights on business strategy, marketing, and growth hacking for entrepreneurs and business owners. This publication focuses on practical, actionable advice that helps businesses scale and succeed in competitive markets.",
        features: [
            "B2B focused content",
            "Expert author network",
            "High-quality editorial standards",
            "Regular case studies",
            "Active community engagement",
            "Professional design"
        ],
        requirements: [
            "Business-focused content (800+ words)",
            "Include actionable insights",
            "Case studies or examples preferred",
            "Professional tone and style",
            "No overly promotional content",
            "Include relevant business metrics"
        ],
        price: "$150 - $280",
        turnaround: "4-6 business days",
        url: "https://businessgrowthhub.com"
    },
    healthwellness: {
        name: "Health & Wellness Today",
        category: "Health & Lifestyle",
        icon: "fas fa-heart",
        da: "72",
        traffic: "80K+ Monthly",
        linkType: "DoFollow",
        indexing: "Fast (24-48 hours)",
        description: "Comprehensive health and wellness content covering nutrition, fitness, mental health, and medical insights. This high-authority site is trusted by healthcare professionals and wellness enthusiasts worldwide.",
        features: [
            "Medical review process",
            "High traffic volume",
            "Trusted by healthcare professionals",
            "Comprehensive health coverage",
            "Expert medical contributors",
            "Evidence-based content"
        ],
        requirements: [
            "Health/wellness focused content (1200+ words)",
            "Evidence-based information",
            "Proper medical citations",
            "No medical advice without disclaimers",
            "Include relevant health statistics",
            "Author must have health expertise"
        ],
        price: "$250 - $400",
        turnaround: "5-7 business days",
        url: "https://healthwellnesstoday.com"
    },
    digitalmarketing: {
        name: "Digital Marketing Insights",
        category: "Digital Marketing",
        icon: "fas fa-laptop-code",
        da: "61",
        traffic: "45K+ Monthly",
        linkType: "DoFollow",
        indexing: "Fast (24-48 hours)",
        description: "Latest trends and strategies in digital marketing, SEO, social media, and online advertising. This publication is a go-to resource for marketing professionals looking to stay ahead of industry trends.",
        features: [
            "SEO and marketing focus",
            "Industry news and updates",
            "Case studies and examples",
            "Expert contributor network",
            "Regular trend analysis",
            "Professional community"
        ],
        requirements: [
            "Digital marketing focused content (1000+ words)",
            "Include current trends or data",
            "Actionable strategies and tips",
            "Include relevant examples",
            "Professional marketing tone",
            "No outdated information"
        ],
        price: "$180 - $320",
        turnaround: "3-5 business days",
        url: "https://digitalmarketinginsights.com"
    },
    educationforward: {
        name: "Education Forward",
        category: "Education & Learning",
        icon: "fas fa-graduation-cap",
        da: "55",
        traffic: "30K+ Monthly",
        linkType: "DoFollow",
        indexing: "Fast (24-48 hours)",
        description: "Educational content covering online learning, career development, and academic insights. This publication serves students, educators, and professionals looking to advance their knowledge and skills.",
        features: [
            "Academic quality standards",
            "Student and educator focus",
            "Research-based content",
            "Career development resources",
            "Learning methodology insights",
            "Educational community"
        ],
        requirements: [
            "Education/learning focused content (900+ words)",
            "Include learning outcomes",
            "Research-based information",
            "Academic tone and style",
            "Include relevant studies or data",
            "Author must have education background"
        ],
        price: "$120 - $250",
        turnaround: "4-6 business days",
        url: "https://educationforward.com"
    },
    lifestylehome: {
        name: "Lifestyle & Home",
        category: "Lifestyle & Home",
        icon: "fas fa-home",
        da: "48",
        traffic: "25K+ Monthly",
        linkType: "DoFollow",
        indexing: "Fast (24-48 hours)",
        description: "Home improvement, interior design, and lifestyle tips for modern living. This publication focuses on practical advice for creating beautiful, functional living spaces.",
        features: [
            "Visual content focus",
            "DIY and home improvement",
            "Active community engagement",
            "Regular project showcases",
            "Expert design contributors",
            "Seasonal content themes"
        ],
        requirements: [
            "Lifestyle/home focused content (800+ words)",
            "Include high-quality images",
            "Step-by-step instructions preferred",
            "Seasonal or trending topics",
            "Personal experience or expertise",
            "Visual appeal and inspiration"
        ],
        price: "$100 - $200",
        turnaround: "3-5 business days",
        url: "https://lifestylehome.com"
    }
};

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const websiteCards = document.querySelectorAll('.website-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            websiteCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Modal functionality
function openWebsiteModal(websiteId) {
    const modal = document.getElementById('websiteModal');
    const data = websiteData[websiteId];
    
    if (!data) {
        console.error('Website data not found for ID:', websiteId);
        return;
    }

    // Update modal content
    document.getElementById('modalTitle').textContent = data.name + ' - Details';
    document.getElementById('modalIcon').className = data.icon;
    document.getElementById('modalWebsiteName').textContent = data.name;
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalDA').textContent = data.da;
    document.getElementById('modalTraffic').textContent = data.traffic;
    document.getElementById('modalLinkType').textContent = data.linkType;
    document.getElementById('modalIndexing').textContent = data.indexing;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalPrice').textContent = data.price;
    document.getElementById('modalTurnaround').textContent = data.turnaround;

    // Update features
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = '';
    data.features.forEach(feature => {
        const featureElement = document.createElement('span');
        featureElement.className = 'feature-tag';
        featureElement.textContent = feature;
        featuresContainer.appendChild(featureElement);
    });

    // Update requirements
    const requirementsContainer = document.getElementById('modalRequirements');
    requirementsContainer.innerHTML = '';
    data.requirements.forEach(requirement => {
        const requirementElement = document.createElement('li');
        requirementElement.textContent = requirement;
        requirementsContainer.appendChild(requirementElement);
    });

    // Store current website data for other functions
    modal.currentWebsiteData = data;

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

function closeWebsiteModal() {
    const modal = document.getElementById('websiteModal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function contactAboutWebsite() {
    const modal = document.getElementById('websiteModal');
    const websiteData = modal.currentWebsiteData;
    
    if (websiteData) {
        // Create email subject and body
        const subject = `Guest Posting Inquiry - ${websiteData.name}`;
        const body = `Hi,\n\nI'm interested in guest posting on ${websiteData.name}.\n\nCould you please provide more information about:\n- Available slots\n- Content requirements\n- Pricing details\n- Timeline\n\nThank you!`;
        
        // Open email client
        window.location.href = `mailto:info@seobyabuakr.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    
    closeWebsiteModal();
}

function visitWebsite() {
    const modal = document.getElementById('websiteModal');
    const websiteData = modal.currentWebsiteData;
    
    if (websiteData) {
        window.open(websiteData.url, '_blank');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('websiteModal');
    if (event.target === modal) {
        closeWebsiteModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeWebsiteModal();
    }
});

// Add hover effects to website cards
document.addEventListener('DOMContentLoaded', function() {
    const websiteCards = document.querySelectorAll('.website-card');
    
    websiteCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
    });
});

// Add loading animation for modal
function showModalLoading() {
    const modal = document.getElementById('websiteModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-loading">
            <div class="loading-spinner"></div>
            <p>Loading website details...</p>
        </div>
    `;
}

// Add search functionality
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search websites...';
    searchInput.className = 'website-search';
    
    const filterSection = document.querySelector('.filter-section .container');
    filterSection.appendChild(searchInput);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const websiteCards = document.querySelectorAll('.website-card');
        
        websiteCards.forEach(card => {
            const websiteName = card.querySelector('h3').textContent.toLowerCase();
            const category = card.querySelector('.website-category').textContent.toLowerCase();
            const description = card.querySelector('.website-description').textContent.toLowerCase();
            
            if (websiteName.includes(searchTerm) || 
                category.includes(searchTerm) || 
                description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', addSearchFunctionality);
