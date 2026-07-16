/* ============================================================
   >>> EDIT THE CONFIG BELOW WITH REAL BUSINESS DETAILS <<<
   This is the ONLY place content/contact details should live —
   every page, nav link, and Messenger/Viber button on the site
   reads from here. Do not hardcode business details into pages.
   ============================================================ */

export const CONFIG = {
  companyName: "Bluelink Technology",
  // Draft copy — replace with approved client copy when available.
  tagline: "Every system your business runs on, on one link.",
  description:
    "Bluelink is Iloilo's technology partner for growing businesses — starting with Iloilo CCTV, our security camera supply and installation service, with more solutions coming online.",

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
  services: [
    {
      slug: "cctv",
      name: "Iloilo CCTV",
      // Draft copy — replace with approved client copy when available.
      summary: "CCTV supply, installation, and monitoring setup for homes and businesses across Iloilo.",
      icon: "Camera",
      status: "online",
    },
    // TODO: add other Bluelink service lines here (set status: "soon" for unlaunched ones)
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
