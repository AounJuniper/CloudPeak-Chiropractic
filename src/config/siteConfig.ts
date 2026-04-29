export type SiteConfig = {
  siteName: string;
  logo?: string;

  primaryColor: string;
  secondaryColor: string;

  phone: string;
  email: string;
  address: string;

  doctorName: string; // 👈 NEW FIELD

  heroTitle?: string;
  heroSubtitle?: string;
  footerCredit?: string;
};

export const siteConfig: SiteConfig = {
  siteName: "",
  logo: "https://images.squarespace-cdn.com/content/v1/53f8ea76e4b0586eb80b8a9c/1540158154510-7ZSNKGJW5CDC4TJ814FU/CloudPeak_logo-01.png?format=500w",

  primaryColor: "#59847f",
  secondaryColor: "#0f2953",

  phone: "(307) 347-3500",
  email: "info@westernplains.com",
  address: "618 Coburn Ave, Worland, WY 82401",

  doctorName: "Dr. Sarah Radabaugh", // 👈 yahan change karna hai sirf

  heroTitle: "Pain Free Life Starts Here",
  heroSubtitle: "Professional Chiropractic Care You Can Trust",
  footerCredit: "Created by Aoun"
};