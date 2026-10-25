export const companyLogo = "/images/Dronova Logo White.png"

export const company = {
  name: "DronovaSky",
  phone: {
    display: "079893715",
    href: "tel:+37379893715",
  },
  email: "info@dronovasky.com",
  address: "mun. Chișinău, Ion Inculeț, 105/4, ap.(of.) 61",
  mapEmbedUrl:
    "https://maps.app.goo.gl/NhxXJmngKSXeRuKX8",
  socials: [
    { icon: "fa-brands fa-facebook-f", label: "Facebook", href: "https://www.facebook.com/p/Dronova-Sky-Cleaning-61588542039224/" },
    { icon: "fa-brands fa-instagram", label: "Instagram", href: "https://www.instagram.com/dronovasky.md/" },
  ],
} as const

export const companyContact = {
  phoneHref: company.phone.href,
  emailHref: `mailto:${company.email}`,
}
