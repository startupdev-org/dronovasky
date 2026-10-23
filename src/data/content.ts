export type NavChild = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home - Main", href: "/" },
      { label: "Home - Video", href: "/" },
      { label: "Home - Slider", href: "/" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/#blog" },
  {
    label: "Pages",
    href: "/services",
    children: [
      { label: "Service Details", href: "/services/deep-cleaning" },
      { label: "Blog Details", href: "/#blog" },
      { label: "Our Projects", href: "/projects" },
      { label: "Projects details", href: "/projects" },
      { label: "Our Team", href: "/about#team" },
      { label: "Team Details", href: "/about#team" },
      { label: "Pricing Plan", href: "/#pricing" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Image Gallery", href: "/gallery" },
      { label: "Video Gallery", href: "/videos" },
      { label: "FAQs", href: "/faqs" },
      { label: "404", href: "/404" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
]

export const clientAvatars = [
  "/images/satisfy-client-img-1.jpg",
  "/images/satisfy-client-img-2.jpg",
  "/images/satisfy-client-img-3.jpg",
  "/images/satisfy-client-img-4.jpg",
]

export type ServiceItem = {
  title: string
  slug: string
  image: string
}

export const serviceCatalog: ServiceItem[] = [
  { title: "Water Testing & Balancing", slug: "water-testing", image: "/images/service-image-1.jpg" },
  { title: "Deep Cleaning Services", slug: "deep-cleaning", image: "/images/service-image-2.jpg" },
  { title: "Equipment & Inspection", slug: "equipment-inspection", image: "/images/service-image-3.jpg" },
  { title: "Emergency Pool Services", slug: "emergency-pool", image: "/images/service-image-4.jpg" },
  { title: "Advanced Pool Maintenance", slug: "advanced-maintenance", image: "/images/service-image-5.jpg" },
  { title: "Precision Water Treatment", slug: "precision-treatment", image: "/images/service-image-6.jpg" },
  { title: "Efficient Tile Restoration", slug: "tile-restoration", image: "/images/service-image-7.jpg" },
  { title: "Quick Damage Check", slug: "damage-check", image: "/images/service-image-8.jpg" },
]

export const services = serviceCatalog.slice(0, 4)

export const sidebarServices = serviceCatalog.slice(0, 5)

export const whyChoose = [
  "Eco-Friendly Cleaning Solutions",
  "Advanced Equipment & Techniques",
  "Affordable & Transparent Pricing",
  "24/7 Emergency Pool Assistance",
]

export const whyStats = [
  { value: "5K+", label: "Happy Customer" },
  { value: "25+", label: "Years of Experience" },
  { value: "500+", label: "Pools Serviced" },
]

export const benefits = [
  {
    title: "Sparkling Water",
    text: "Sparkling Water Enjoy crystal-clear water with our meticulous pool a always looks inviting.",
    icon: "/images/icon-benefit-item-1.svg",
  },
  {
    title: "Safe, Balanced Chemistry",
    text: "Sparkling Water Enjoy crystal-clear water with our meticulous pool a always looks inviting.",
    icon: "/images/icon-benefit-item-2.svg",
  },
  {
    title: "Hassle-Free Maintenance",
    text: "Sparkling Water Enjoy crystal-clear water with our meticulous pool a always looks inviting.",
    icon: "/images/icon-benefit-item-3.svg",
  },
  {
    title: "Extended Pool Life",
    text: "Sparkling Water Enjoy crystal-clear water with our meticulous pool a always looks inviting.",
    icon: "/images/icon-benefit-item-4.svg",
  },
]

export const benefitPoints = [
  "Sparkling Water, Always Refreshing and Inviting",
  "Safe, Balanced Water Chemistry for Healthy Swimming",
  "Trusted, Skilled Technicians Dedicated to Quality Service",
]

export type ProjectCategory = "all" | "residential" | "repairs" | "cleaning" | "maintenance"

export const projectFilters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "all" },
  { id: "residential", label: "Residential" },
  { id: "repairs", label: "Repairs" },
  { id: "cleaning", label: "Cleaning" },
  { id: "maintenance", label: "Maintenance" },
]

export type Project = {
  title: string
  category: Exclude<ProjectCategory, "all">
  label: string
  image: string
}

export const projects: Project[] = [
  {
    title: "Stunning Residential",
    category: "residential",
    label: "Residential",
    image: "/images/project-1.jpg",
  },
  {
    title: "Commercial Pool Excellence",
    category: "repairs",
    label: "Repairs",
    image: "/images/project-2.jpg",
  },
  {
    title: "Expert Repairs and Restorations",
    category: "cleaning",
    label: "cleaning",
    image: "/images/project-3.jpg",
  },
  {
    title: "Deep Cleaning for Crystal Clarity",
    category: "cleaning",
    label: "cleaning",
    image: "/images/project-4.jpg",
  },
  {
    title: "Seasonal Maintenance Made Easy",
    category: "maintenance",
    label: "Maintenance",
    image: "/images/project-5.jpg",
  },
  {
    title: "Chemical Balance Mastery",
    category: "residential",
    label: "Residential",
    image: "/images/project-6.jpg",
  },
]

export const pageProjects: Project[] = [
  ...projects,
  {
    title: "Effective Maintenance Healthy Pool",
    category: "maintenance",
    label: "Maintenance",
    image: "/images/project-7.jpg",
  },
  {
    title: "Advanced Repairs for Clear Water",
    category: "repairs",
    label: "Repairs",
    image: "/images/project-8.jpg",
  },
  {
    title: "Reliable Residential for Water",
    category: "residential",
    label: "Residential",
    image: "/images/project-9.jpg",
  },
]

export const steps = [
  {
    no: "01",
    title: "Book a Service",
    text: "Book a Service Easily schedule a your pool cleaning at a time.",
    image: "/images/how-work-image-1.jpg",
  },
  {
    no: "02",
    title: "Personalized Plan",
    text: "Book a Service Easily schedule a your pool cleaning at a time.",
    image: "/images/how-work-image-2.jpg",
  },
  {
    no: "03",
    title: "Expert Cleaning",
    text: "Book a Service Easily schedule a your pool cleaning at a time.",
    image: "/images/how-work-image-3.jpg",
  },
  {
    no: "04",
    title: "Ongoing Support",
    text: "Book a Service Easily schedule a your pool cleaning at a time.",
    image: "/images/how-work-image-4.jpg",
  },
]

export const skills = [
  { title: "Cleaning", value: 82 },
  { title: "Maintenance", value: 92 },
]

export const planFeatures = [
  "Essential Pool Care",
  "Comprehensive Pool Support",
  "Expert Fixes Guaranteed",
  "Immediate Attention When Needed",
]

export const plans = [
  {
    name: "Basic Plan",
    price: "$10",
    icon: "/images/icon-pricing-item-1.svg",
    featured: false,
  },
  {
    name: "standard plan",
    price: "$20",
    icon: "/images/icon-pricing-item-2.svg",
    featured: true,
  },
  {
    name: "premium plan",
    price: "$30",
    icon: "/images/icon-pricing-item-3.svg",
    featured: false,
  },
]

export const pricingNotes = [
  { icon: "/images/icon-pricing-benefit-1.svg", label: "Get 30 day free trial" },
  { icon: "/images/icon-pricing-benefit-2.svg", label: "No any hidden fees pay" },
  { icon: "/images/icon-pricing-benefit-3.svg", label: "You can cancel anytime" },
]

export const testimonials = [
  {
    name: "Jenny Wilson",
    image: "/images/author-1.jpg",
    quote:
      "My pool has never looked better! I especially love how they take the time to explain what they're doing and ensure everything is balanced correctly. Truly a worry-free experience!",
  },
  {
    name: "Sophia Reynolds",
    image: "/images/author-2.jpg",
    quote:
      "My pool has never looked better! I especially love how they take the time to explain what they're doing and ensure everything is balanced correctly. Truly a worry-free experience!",
  },
  {
    name: "Michael Carter",
    image: "/images/author-3.jpg",
    quote:
      "My pool has never looked better! I especially love how they take the time to explain what they're doing and ensure everything is balanced correctly. Truly a worry-free experience!",
  },
]

export const testimonialStats = [
  { value: "99%", label: "Committed to delivering excellence satisfaction." },
  { value: "10K+", label: "Our customers inspire our sustainable mission." },
  { value: "50K+", label: "Our customers inspire our sustainable vision." },
]

export const partnerLogos = [
  "/images/company-supports-logo-1.svg",
  "/images/company-supports-logo-2.svg",
  "/images/company-supports-logo-3.svg",
  "/images/company-supports-logo-4.svg",
  "/images/company-supports-logo-5.svg",
  "/images/company-supports-logo-6.svg",
  "/images/company-supports-logo-3.svg",
  "/images/company-supports-logo-5.svg",
]

export const faqs = [
  {
    question: "How often should my pool be cleaned?",
    answer:
      "Our regular maintenance includes thorough skimming, vacuuming, and brushing to keep your pool spotless.",
  },
  {
    question: "What services are included in regular maintenance?",
    answer:
      "Our regular maintenance includes thorough skimming, vacuuming, and brushing to keep your pool spotless.",
  },
  {
    question: "Do you provide emergency pool services?",
    answer:
      "Our regular maintenance includes thorough skimming, vacuuming, and brushing to keep your pool spotless.",
  },
  {
    question: "How do I schedule or change a service?",
    answer:
      "Our regular maintenance includes thorough skimming, vacuuming, and brushing to keep your pool spotless.",
  },
]

export const posts = [
  {
    title: "How to Extend the Life of Your Pool",
    excerpt: "Proper maintenance can significantly increase your pool's lifespan.",
    image: "/images/post-1.jpg",
  },
  {
    title: "Signs Your Pool Needs Professional",
    excerpt: "Proper maintenance can significantly increase your pool's lifespan.",
    image: "/images/post-2.jpg",
  },
  {
    title: "Benefits Regular Pool Maintenance",
    excerpt: "Proper maintenance can significantly increase your pool's lifespan.",
    image: "/images/post-3.jpg",
  },
]

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "services", href: "/services" },
  { label: "blog", href: "/#blog" },
  { label: "Contact us", href: "/contact" },
]

export const footerServices = sidebarServices.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}))

export const galleryImages = Array.from({ length: 9 }, (_, index) => `/images/gallery-${index + 1}.jpg`)

export const videoThumbs = [3, 5, 2, 1, 4, 9, 6, 8, 7].map((id) => `/images/gallery-${id}.jpg`)

export const teamMembers = [
  { name: "David reynolds", role: "Senior Pool Technician", image: "/images/team-1.jpg" },
  { name: "Emily Watson", role: "Pool Maintenance Coordinator", image: "/images/team-2.jpg" },
  { name: "David reynolds", role: "Senior Pool Technician", image: "/images/team-3.jpg" },
  { name: "David reynolds", role: "Senior Pool Technician", image: "/images/team-4.jpg" },
]

export const teamSocials = [
  { icon: "fa-brands fa-instagram", label: "Instagram" },
  { icon: "fa-brands fa-facebook-f", label: "Facebook" },
  { icon: "fa-brands fa-dribbble", label: "Dribbble" },
  { icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
]

export const whatWeSteps = [
  {
    no: "01",
    title: "Book a advanced cleaning techniques service",
    text: "We use high-quality equipment and eco-friendly solutions to remove debris, balance chemicals, and maintain crystal-clear water.",
  },
  {
    no: "02",
    title: "Expert maintenance & repairs",
    text: "From routine inspections to timely repairs, our skilled technicians handle everything to prevent issues before they arise.",
  },
]

export const promiseItems = [
  {
    title: "Expert care",
    text: "Sparkling Water Enjoy crystal-clear water with our meticulous pool a always looks inviting.",
    icon: "/images/icon-promise-item-1.svg",
  },
  {
    title: "Trusted solutions",
    text: "Sparkling Water Enjoy crystal-clear water with our meticulous pool a always looks inviting.",
    icon: "/images/icon-promise-item-2.svg",
  },
]

export const serviceSolutions = [
  { title: "Custom Maintenance Plans Tailored", icon: "/images/icon-service-solution-1.svg" },
  { title: "Custom Pool Care Solutions", icon: "/images/icon-service-solution-2.svg" },
  { title: "Keeping Your Pool Pristine Your Way", icon: "/images/icon-service-solution-3.svg" },
]

export const serviceCarePoints = [
  "Tailored service plans designed to meet the unique.",
  "Experienced professionals dedicated to ensuring.",
  "Advanced cleaning techniques and high-quality.",
  "Timely, efficient, and hassle-free service delivery for.",
]

export const serviceDetailSteps = [
  {
    no: "01",
    title: "Book a Service",
    text: "Book a Service Easily schedule a your pool cleaning at a time.",
    image: "/images/how-work-image-1.jpg",
  },
  {
    no: "02",
    title: "Personalized plan",
    text: "Book a Service Easily schedule a your pool cleaning at a time.",
    image: "/images/how-work-image-1.jpg",
  },
  {
    no: "03",
    title: "Expert cleaning",
    text: "Expert cleaning Easily schedule a your pool cleaning at a time.",
    image: "/images/how-work-image-1.jpg",
  },
]

export const detailFaqs = [
  {
    question: "How often should my pool be cleaned?",
    answer:
      "Our regular maintenance includes thorough skimming, vacuuming, and brushing to eliminate debris, prevent algae buildup, and maintain crystal-clear water.",
  },
  {
    question: "What services are included in regular maintenance?",
    answer:
      "Our regular maintenance includes thorough skimming, vacuuming, and brushing to eliminate debris, prevent algae buildup, and maintain crystal-clear water.",
  },
  {
    question: "Do you provide emergency pool services?",
    answer:
      "Our regular maintenance includes thorough skimming, vacuuming, and brushing to eliminate debris, prevent algae buildup, and maintain crystal-clear water.",
  },
  {
    question: "How do I schedule or change a service?",
    answer:
      "Our regular maintenance includes thorough skimming, vacuuming, and brushing to eliminate debris, prevent algae buildup, and maintain crystal-clear water.",
  },
]

export const faqGroups = [
  {
    id: "general",
    title: "General information",
    items: detailFaqs,
  },
  {
    id: "cleaning",
    title: "Cleaning process",
    items: [
      {
        question: "How often should a pool be cleaned?",
        answer:
          "Deep cleaning includes thorough skimming, scrubbing pool walls, vacuuming debris, cleaning filters, balancing chemicals, and inspecting equipment for any issues.",
      },
      {
        question: "What does a deep cleaning service include?",
        answer:
          "Deep cleaning includes thorough skimming, scrubbing pool walls, vacuuming debris, cleaning filters, balancing chemicals, and inspecting equipment for any issues.",
      },
      {
        question: "How do you remove algae from a pool?",
        answer:
          "Deep cleaning includes thorough skimming, scrubbing pool walls, vacuuming debris, cleaning filters, balancing chemicals, and inspecting equipment for any issues.",
      },
      {
        question: "Do you use eco-friendly cleaning products?",
        answer:
          "Deep cleaning includes thorough skimming, scrubbing pool walls, vacuuming debris, cleaning filters, balancing chemicals, and inspecting equipment for any issues.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance tips",
    items: [
      {
        question: "How can I keep my pool water clear?",
        answer:
          "Pool chemical levels should be checked at least twice a week to maintain proper pH, chlorine, and alkalinity levels for safe and clear water.",
      },
      {
        question: "How often should I check my pool's chemical levels?",
        answer:
          "Pool chemical levels should be checked at least twice a week to maintain proper pH, chlorine, and alkalinity levels for safe and clear water.",
      },
      {
        question: "What is the best way to prevent pool equipment damage?",
        answer:
          "Pool chemical levels should be checked at least twice a week to maintain proper pH, chlorine, and alkalinity levels for safe and clear water.",
      },
      {
        question: "How do I winterize my pool to prevent damage?",
        answer:
          "Pool chemical levels should be checked at least twice a week to maintain proper pH, chlorine, and alkalinity levels for safe and clear water.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Service pricing",
    items: [
      {
        question: "How is pool cleaning service pricing determined?",
        answer:
          "Yes, we provide tailored service plans based on your pool's specific needs, ensuring cost-effective and efficient maintenance.",
      },
      {
        question: "Do you offer customized service plans?",
        answer:
          "Yes, we provide tailored service plans based on your pool's specific needs, ensuring cost-effective and efficient maintenance.",
      },
      {
        question: "Are there any additional charges apart from the service fee?",
        answer:
          "Yes, we provide tailored service plans based on your pool's specific needs, ensuring cost-effective and efficient maintenance.",
      },
      {
        question: "Do you offer discounts for long-term service contracts?",
        answer:
          "Yes, we provide tailored service plans based on your pool's specific needs, ensuring cost-effective and efficient maintenance.",
      },
    ],
  },
]

export const contactCards = [
  {
    title: "Give us a call",
    text: "+123 456 7890",
    href: "tel:123456789",
    icon: "/images/icon-phone.svg",
  },
  {
    title: "Send us message",
    text: "domainame@gmail.com",
    href: "mailto:domainame@gmail.com",
    icon: "/images/icon-mail.svg",
  },
  {
    title: "Visit our location",
    text: "123 High Street, Springfield, London SW1A 1AA, United Kingdom.",
    href: "",
    icon: "/images/icon-location.svg",
  },
]

export const YOUTUBE_ID = "Y-x0efG1seA"
