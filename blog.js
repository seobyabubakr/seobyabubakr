// Blog filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            blogCards.forEach(card => {
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

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForms = document.querySelectorAll('.newsletter-form, .sidebar-newsletter');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate subscription
            button.textContent = 'Subscribing...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for subscribing! You\'ll receive our latest updates soon.');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    });
});

// Social sharing functionality
document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = window.location.href;
            const title = document.title;
            
            if (this.classList.contains('twitter')) {
                const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                window.open(twitterUrl, '_blank', 'width=600,height=400');
            } else if (this.classList.contains('linkedin')) {
                const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                window.open(linkedinUrl, '_blank', 'width=600,height=400');
            } else if (this.classList.contains('facebook')) {
                const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                window.open(facebookUrl, '_blank', 'width=600,height=400');
            } else if (this.classList.contains('copy')) {
                navigator.clipboard.writeText(url).then(() => {
                    // Show success message
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    this.style.background = '#10b981';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.background = '';
                    }, 2000);
                }).catch(() => {
                    alert('Failed to copy link. Please copy manually: ' + url);
                });
            }
        });
    });
});

// Pagination functionality
document.addEventListener('DOMContentLoaded', function() {
    const pageButtons = document.querySelectorAll('.page-btn, .page-number');
    
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            
            // Remove active class from all page numbers
            document.querySelectorAll('.page-number').forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked page number
            if (this.classList.contains('page-number')) {
                this.classList.add('active');
            }
            
            // Simulate page loading
            const blogGrid = document.querySelector('.blog-grid');
            blogGrid.style.opacity = '0.5';
            
            setTimeout(() => {
                blogGrid.style.opacity = '1';
                // Here you would typically load new content
                console.log('Loading page...');
            }, 500);
        });
    });
});

// Reading progress bar
function createReadingProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const article = document.querySelector('.post-body');
        if (!article) return;
        
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        const progress = Math.min(
            Math.max((scrollTop - articleTop + windowHeight) / articleHeight, 0),
            1
        );
        
        const progressBarElement = document.querySelector('.reading-progress-bar');
        if (progressBarElement) {
            progressBarElement.style.width = (progress * 100) + '%';
        }
    });
}

// Initialize reading progress bar on blog post pages
if (document.querySelector('.post-body')) {
    createReadingProgressBar();
}

// Table of contents for blog posts
function createTableOfContents() {
    const postBody = document.querySelector('.post-body');
    if (!postBody) return;
    
    const headings = postBody.querySelectorAll('h2, h3');
    if (headings.length < 2) return;
    
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Table of Contents</h3><ul></ul>';
    
    const tocList = toc.querySelector('ul');
    
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        a.className = heading.tagName.toLowerCase();
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
    
    // Insert TOC after the first paragraph
    const firstParagraph = postBody.querySelector('p');
    if (firstParagraph) {
        firstParagraph.parentNode.insertBefore(toc, firstParagraph.nextSibling);
    }
}

// Initialize table of contents
if (document.querySelector('.post-body')) {
    createTableOfContents();
}

// Add smooth scrolling for table of contents links
document.addEventListener('click', function(e) {
    if (e.target.matches('.table-of-contents a')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add estimated reading time calculation
function calculateReadingTime() {
    const postBody = document.querySelector('.post-body');
    if (!postBody) return;
    
    const text = postBody.textContent;
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    const readTimeElement = document.querySelector('.read-time');
    if (readTimeElement) {
        readTimeElement.textContent = `${readingTime} min read`;
    }
}

// Initialize reading time calculation
if (document.querySelector('.post-body')) {
    calculateReadingTime();
}

// Add hover effects to blog cards
document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
    });
});

// Add search functionality for blog
function addBlogSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search blog posts...';
    searchInput.className = 'blog-search';
    
    const filterSection = document.querySelector('.blog-filter .container');
    if (filterSection) {
        filterSection.appendChild(searchInput);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const blogCards = document.querySelectorAll('.blog-card');
            
            blogCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
                
                if (title.includes(searchTerm) || 
                    description.includes(searchTerm) || 
                    tags.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Initialize blog search
document.addEventListener('DOMContentLoaded', addBlogSearch);
