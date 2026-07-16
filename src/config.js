/* ============================================================
   >>> EDIT THE CONFIG BELOW WITH REAL BUSINESS DETAILS <<<
   This is the ONLY place content/contact details should live —
   every page, nav link, and Messenger/Viber button on the site
   reads from here. Do not hardcode business details into pages.
   ============================================================ */

export const CONFIG = {
  companyName: "Bluelink Technology",
  tagline: "Every system your business runs on, on one link.",
  description:
    "We're committed to delivering business solutions that create better experiences for you and your customers.",

  // Contact details
  phone: "+639XXXXXXXXX", // TODO
  phoneDisplay: "+63 9XX XXX XXXX", // TODO
  email: "hello@TODO.com", // TODO

  // Facebook page username — the part after facebook.com/
  facebookPage: "TODOFacebookPageUsername",

  // Viber number in international format (no + sign)
  viberNumber: "639XXXXXXXXX", // TODO

  address: "Iloilo City, Philippines", // TODO: refine if needed

  // Primary nav — drives Navbar.jsx
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Services offered under the Bluelink umbrella — drives Services.jsx / Home.jsx.
  // `icon` must have a matching entry in the ICONS map in src/components/ServicesGrid.jsx.
  // `shortLabel` is used in the compact NodeMap diagram; `name` is used everywhere else.
  services: [
    {
      slug: "web-development",
      name: "Web Development",
      shortLabel: "Web Dev",
      summary: "Websites and web applications built for your business.",
      icon: "Globe",
      status: "online",
    },
    {
      slug: "mobile-development",
      name: "Mobile Development",
      shortLabel: "Mobile Dev",
      summary: "iOS and Android apps for your customers.",
      icon: "Smartphone",
      status: "online",
    },
    {
      slug: "staff-augmentation",
      name: "Staff Augmentation",
      shortLabel: "Staff Aug",
      summary: "Skilled developers embedded in your team.",
      icon: "Users",
      status: "online",
    },
    {
      slug: "product-design",
      name: "Product Design",
      shortLabel: "UX Design",
      summary: "UI/UX design for digital products.",
      icon: "Palette",
      status: "online",
    },
    {
      slug: "custom-software-development",
      name: "Custom Software Development",
      shortLabel: "Custom SW",
      summary: "Bespoke software built around your workflow.",
      icon: "Code2",
      status: "online",
    },
    {
      slug: "branding",
      name: "Branding",
      shortLabel: "Branding",
      summary: "Visual identity and brand systems.",
      icon: "Sparkles",
      status: "online",
    },
  ],

  social: {
    facebook: "", // TODO: full URL
    messenger: "", // derived below, or override
  },
};

// Derived links — computed once from the raw CONFIG fields above.
export const LINKS = {
  tel: `tel:${CONFIG.phone}`,
  mailto: `mailto:${CONFIG.email}`,
  messenger: `https://m.me/${CONFIG.facebookPage}`,
  viber: `viber://chat?number=%2B${CONFIG.viberNumber}`,
  facebook: CONFIG.social.facebook || `https://facebook.com/${CONFIG.facebookPage}`,
};
