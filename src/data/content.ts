import { company, companyContact } from "./company"

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
    label: "Acasă",
    href: "/",
    children: [
      { label: "Acasă", href: "/" },
    ],
  },
  { label: "Despre noi", href: "/about" },
  { label: "Servicii", href: "/services" },
  { label: "Portofoliu", href: "/projects" },
  {
    label: "Mai multe",
    href: "/services",
    children: [
      { label: "Servicii", href: "/services" },
      { label: "Portofoliu", href: "/projects" },
      { label: "Galerie foto", href: "/gallery" },
      { label: "Întrebări frecvente", href: "/faqs" },
    ],
  },
  { label: "Contacte", href: "/contact" },
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
  { title: "Curățenie exterioară cu drone", slug: "curatenie-drone", image: "/images/service-image-1.jpg" },
  { title: "Curățenie după reparație", slug: "dupa-reparatie", image: "/images/service-image-2.jpg" },
  { title: "Curățenie generală", slug: "curatenie-generala", image: "/images/service-image-3.jpg" },
  { title: "Curățare chimică a mobilierului moale", slug: "mobilier-moale", image: "/images/service-image-4.jpg" },
  { title: "Spălare geamuri și vitrine", slug: "geamuri-vitrine", image: "/images/service-image-5.jpg" },
  { title: "Spălare fațade", slug: "spalare-fatade", image: "/images/service-image-6.jpg" },
  { title: "Spălare pavaj, terase și parcări", slug: "pavaj-terase", image: "/images/service-image-7.jpg" },
  { title: "Curățare acoperișuri și jgheaburi", slug: "acoperisuri-jgheaburi", image: "/images/service-image-8.jpg" },
]

export const services = serviceCatalog.slice(0, 4)

export const sidebarServices = serviceCatalog.slice(0, 5)

export const whyChoose = [
  "Echipamente profesionale",
  "Soluții potrivite pentru fiecare suprafață",
  "Evaluare la necesitate",
  "Răspuns rapid la solicitări",
]

export const whyStats = [
  { value: "15+", label: "servicii disponibile" },
  { value: "10 min", label: "timp de răspuns" },
  { value: "100%", label: "rezultate garantate" },
]

export const benefits = [
  {
    title: "Curățenie atentă",
    text: "Curățăm atent fiecare detaliu, pentru un spațiu impecabil.",
    icon: "/images/icon-benefit-item-1.svg",
  },
  {
    title: "Soluții profesionale",
    text: "Folosim soluții adaptate materialului și suprafeței.",
    icon: "/images/icon-benefit-item-2.svg",
  },
  {
    title: "Servicii complete",
    text: "Pentru case, oficii, spații comerciale și clădiri.",
    icon: "/images/icon-benefit-item-3.svg",
  },
  {
    title: "Rezultate vizibile",
    text: "Spații curate, îngrijite și pregătite de utilizare.",
    icon: "/images/icon-benefit-item-4.svg",
  },
]

export const benefitPoints = [
  "Fără schele sau nacelă pentru lucrările la înălțime",
  "Mai rapid cu tehnologia dronelor",
  "Echipă instruită și autorizată",
]

export type ProjectCategory = "all" | "locuinte" | "comercial" | "exterior" | "dupa_reparatie"

export const projectFilters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "toate" },
  { id: "locuinte", label: "locuințe" },
  { id: "comercial", label: "comercial" },
  { id: "exterior", label: "exterior" },
  { id: "dupa_reparatie", label: "după reparație" },
]

export type Project = {
  title: string
  category: Exclude<ProjectCategory, "all">
  label: string
  image: string
}

export const projects: Project[] = [
  {
    title: "Curățenie pentru locuințe",
    category: "locuinte",
    label: "locuințe",
    image: "/images/project-1.jpg",
  },
  {
    title: "Spații comerciale impecabile",
    category: "comercial",
    label: "comercial",
    image: "/images/project-2.jpg",
  },
  {
    title: "Curățenie exterioară cu drone",
    category: "exterior",
    label: "exterior",
    image: "/images/project-3.jpg",
  },
  {
    title: "Curățenie după reparație",
    category: "dupa_reparatie",
    label: "după reparație",
    image: "/images/project-4.jpg",
  },
  {
    title: "Spălare fațade și geamuri",
    category: "exterior",
    label: "exterior",
    image: "/images/project-5.jpg",
  },
  {
    title: "Curățare profesională a tapiseriei",
    category: "locuinte",
    label: "locuințe",
    image: "/images/project-6.jpg",
  },
]

export const pageProjects: Project[] = [
  ...projects,
  {
    title: "Pavaj, terase și parcări curate",
    category: "exterior",
    label: "exterior",
    image: "/images/project-7.jpg",
  },
  {
    title: "Curățare acoperișuri și jgheaburi",
    category: "exterior",
    label: "exterior",
    image: "/images/project-8.jpg",
  },
  {
    title: "Curățenie pentru oficii",
    category: "comercial",
    label: "comercial",
    image: "/images/project-9.jpg",
  },
]

export const steps = [
  {
    no: "01",
    title: "Trimite solicitarea",
    text: "Trimite poze sau video cu obiectul pentru o ofertă exactă.",
    image: "/images/how-work-image-1.jpg",
  },
  {
    no: "02",
    title: "Evaluăm lucrarea",
    text: "La necesitate, ne deplasăm pentru evaluare.",
    image: "/images/how-work-image-2.jpg",
  },
  {
    no: "03",
    title: "Curățăm profesional",
    text: "Lucrăm cu echipamente profesionale și soluții potrivite.",
    image: "/images/how-work-image-3.jpg",
  },
  {
    no: "04",
    title: "Te bucuri de rezultat",
    text: "Spațiul rămâne curat, îngrijit și pregătit de utilizare.",
    image: "/images/how-work-image-4.jpg",
  },
]

export const skills = [
  { title: "Curățenie", value: 95 },
  { title: "Profesionalism", value: 100 },
]

export const planFeatures = [
  "Preț calculat individual",
  "Evaluare la necesitate",
  "Soluții profesionale",
  "Rezultate garantate",
]

export const plans = [
  {
    name: "Pachet de bază",
    price: "de la 70 lei",
    icon: "/images/icon-pricing-item-1.svg",
    featured: false,
  },
  {
    name: "Pachet standard",
    price: "la ofertă",
    icon: "/images/icon-pricing-item-2.svg",
    featured: true,
  },
  {
    name: "Pachet premium",
    price: "individual",
    icon: "/images/icon-pricing-item-3.svg",
    featured: false,
  },
]

export const pricingNotes = [
  { icon: "/images/icon-pricing-benefit-1.svg", label: "Ofertă personalizată" },
  { icon: "/images/icon-pricing-benefit-2.svg", label: "Preț transparent" },
  { icon: "/images/icon-pricing-benefit-3.svg", label: "Consultare rapidă" },
]

export const testimonials = [
  {
    name: "Ana V., Chișinău",
    image: "/images/author-1.jpg",
    quote:
      "Serviciul cu drone ne-a salvat timp și buget. Rezultatul a fost impecabil.",
  },
  {
    name: "Client Dronova Sky",
    image: "/images/author-2.jpg",
    quote:
      "O echipă atentă, punctuală și profesionistă. Spațiul a rămas impecabil.",
  },
  {
    name: "Client Dronova Sky",
    image: "/images/author-3.jpg",
    quote:
      "Curățenie profesionistă, cu atenție la fiecare detaliu.",
  },
]

export const testimonialStats = [
  { value: "3x", label: "mai rapid cu drone" },
  { value: "15+", label: "servicii disponibile" },
  { value: "100%", label: "rezultate garantate" },
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
    question: "Ce servicii oferiți?",
    answer: "Oferim curățenie cu drone, curățenie după reparație, curățenie generală, tapiserie, spălare geamuri, fațade, pavaj și multe altele.",
  },
  {
    question: "Cum pot solicita o ofertă?",
    answer: "Trimiteți-ne poze sau video cu obiectul. La necesitate, ne deplasăm pentru evaluare.",
  },
  {
    question: "Lucrați pentru spații comerciale?",
    answer: "Da, curățăm case, oficii, spații comerciale și clădiri.",
  },
  {
    question: "Cum vă pot contacta?",
    answer: "Ne puteți suna sau scrie pe WhatsApp la +373 79 893 715.",
  },
]

export const posts = [
  {
    title: "Curățenie după reparație",
    excerpt: "Eliminăm rapid praful și reziduurile de construcție.",
    image: "/images/post-1.jpg",
  },
  {
    title: "Curățenie exterioară cu drone",
    excerpt: "Ajungem acolo unde echipele tradiționale nu pot.",
    image: "/images/post-2.jpg",
  },
  {
    title: "Curățare chimică a tapiseriei",
    excerpt: "Împrospătăm canapelele și fotoliile prin curățare profesională.",
    image: "/images/post-3.jpg",
  },
]

export const quickLinks = [
  { label: "Acasă", href: "/" },
  { label: "Despre noi", href: "/about" },
  { label: "Servicii", href: "/services" },
  { label: "Portofoliu", href: "/projects" },
  { label: "Contacte", href: "/contact" },
]

export const footerServices = sidebarServices.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}))

export const galleryImages = Array.from({ length: 9 }, (_, index) => `/images/gallery-${index + 1}.jpg`)

export const videoThumbs = [3, 5, 2, 1, 4, 9, 6, 8, 7].map((id) => `/images/gallery-${id}.jpg`)

export const teamMembers = [
  { name: "Dronova Sky Cleaning", role: "Echipă de curățenie profesională", image: "/images/team-1.jpg" },
  { name: "Dronova Sky Cleaning", role: "Specialiști în curățenie", image: "/images/team-2.jpg" },
  { name: "Dronova Sky Cleaning", role: "Echipă instruită și autorizată", image: "/images/team-3.jpg" },
  { name: "Dronova Sky Cleaning", role: "Servicii profesionale", image: "/images/team-4.jpg" },
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
    title: "Curățenie pentru orice spațiu",
    text: "Oferim servicii profesionale pentru case, oficii, spații comerciale și clădiri.",
  },
  {
    no: "02",
    title: "Tehnologie și atenție la detalii",
    text: "Lucrăm cu echipamente profesionale și soluții potrivite pentru fiecare suprafață.",
  },
]

export const promiseItems = [
  {
    title: "Calitate fără compromisuri",
    text: "Curățăm atent, pentru rezultate impecabile și spații pregătite de utilizare.",
    icon: "/images/icon-promise-item-1.svg",
  },
  {
    title: "Soluții de încredere",
    text: "Alegem soluția potrivită pentru fiecare lucrare și fiecare suprafață.",
    icon: "/images/icon-promise-item-2.svg",
  },
]

export const serviceSolutions = [
  { title: "Soluții adaptate lucrării", icon: "/images/icon-service-solution-1.svg" },
  { title: "Echipamente profesionale", icon: "/images/icon-service-solution-2.svg" },
  { title: "Rezultate impecabile", icon: "/images/icon-service-solution-3.svg" },
]

export const serviceCarePoints = [
  "Curățăm praful de construcție, murdăria depusă și urmele de pe sticlă.",
  "Spălăm fațade, geamuri, vitrine, pavaj, terase și parcări.",
  "Fără schele sau nacelă pentru curățenia exterioară cu drone.",
  "Timp de execuție redus și rezultate profesionale.",
]

export const serviceDetailSteps = [
  {
    no: "01",
    title: "Solicită o ofertă",
    text: "Trimite poze sau video cu obiectul.",
    image: "/images/how-work-image-1.jpg",
  },
  {
    no: "02",
    title: "Evaluare personalizată",
    text: "Stabilim soluția potrivită pentru lucrare.",
    image: "/images/how-work-image-1.jpg",
  },
  {
    no: "03",
    title: "Curățenie profesională",
    text: "Echipa noastră realizează lucrarea atent și eficient.",
    image: "/images/how-work-image-1.jpg",
  },
]

export const detailFaqs = [
  {
    question: "Cum se calculează prețul?",
    answer: "Prețul se calculează individual, în funcție de suprafață și gradul de murdărie.",
  },
  {
    question: "Pentru ce spații oferiți servicii?",
    answer: "Pentru locuințe, oficii, spații comerciale și clădiri.",
  },
  {
    question: "Este posibilă evaluarea la locație?",
    answer: "Da, la necesitate ne deplasăm pentru evaluare.",
  },
  {
    question: "Cum pot programa lucrarea?",
    answer: "Contactați-ne telefonic sau pe WhatsApp pentru a stabili detaliile.",
  },
]

export const faqGroups = [
  {
    id: "general",
    title: "Informații generale",
    items: detailFaqs,
  },
  {
    id: "cleaning",
    title: "Procesul de curățenie",
    items: [
      {
        question: "Ce include curățenia după reparație?",
        answer: "Eliminăm praful de construcție, murdăria depusă și urmele de pe sticlă, fațade și pardoseli.",
      },
      {
        question: "Ce include curățenia cu drone?",
        answer: "Curățare fațade la înălțime, spălare geamuri exterioare și curățare panouri solare, fără schele sau nacelă.",
      },
      {
        question: "Ce tipuri de suprafețe curățați?",
        answer: "Curățăm geamuri, vitrine, fațade, pavaj, terase, parcări, acoperișuri, jgheaburi și tapiserie.",
      },
      {
        question: "Folosiți soluții profesionale?",
        answer: "Da, folosim soluții profesionale adaptate fiecărui material și tip de suprafață.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Recomandări",
    items: [
      {
        question: "Când este recomandată curățarea jgheaburilor?",
        answer: "Periodic, pentru prevenirea infiltrațiilor și blocajelor; menținem scurgerile funcționale și acoperișul curat.",
      },
      {
        question: "Când este recomandată curățarea tapiseriei?",
        answer: "Pentru canapele, fotolii și saltele cu pete sau mirosuri.",
      },
      {
        question: "Când este recomandată curățenia cu drone?",
        answer: "Pentru clădiri înalte și suprafețe greu accesibile, unde sunt necesare rezultate rapide și sigure.",
      },
      {
        question: "Cât de repede răspundeți solicitărilor?",
        answer: "Ne propunem să revenim rapid, de obicei în aproximativ 10 minute.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Prețuri și ofertare",
    items: [
      {
        question: "Cum se stabilește prețul?",
        answer: "Prețul este calculat individual, în funcție de lucrare.",
      },
      {
        question: "Pot primi o ofertă personalizată?",
        answer: "Da, trimiteți poze sau video cu obiectul și vă oferim detaliile necesare.",
      },
      {
        question: "Care sunt prețurile pentru tapiserie?",
        answer: "De exemplu, curățarea chimică începe de la 70 lei pe unitate; prețul final depinde de articol și dimensiune.",
      },
      {
        question: "Unde vă pot trimite detaliile?",
        answer: "Ne puteți contacta telefonic, pe WhatsApp sau prin formularul de pe site.",
      },
    ],
  },
]

export const contactCards = [
  {
    title: "Sună-ne",
    text: company.phone.display,
    href: companyContact.phoneHref,
    icon: "/images/icon-phone.svg",
  },
  {
    title: "Scrie-ne",
    text: company.email,
    href: companyContact.emailHref,
    icon: "/images/icon-mail.svg",
  },
  {
    title: "Adresa noastră",
    text: company.address,
    href: "",
    icon: "/images/icon-location.svg",
  },
]

export const YOUTUBE_ID = "Y-x0efG1seA"
