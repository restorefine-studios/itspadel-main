import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProShopHero from "../components/ProShop/ProShopHero";
import ProShopGallery from "../components/ProShop/ProShopGallery";
import ProShopAccessories from "../components/ProShop/ProShopAccessories";
import ProShopHire from "../components/ProShop/ProShopHire";
import proShopData from "../../languages/padelproshop.json";

export const metadata: Metadata = {
  title: "Padel Pro Shop | Rackets, Balls & Equipment – itspadel",
  description: "Shop premium padel equipment at the itspadel Pro Shop. Browse rackets, balls, bags, accessories, and hire gear — everything you need to play your best padel in Scotland.",
  keywords: [
    "padel pro shop",
    "padel rackets UK",
    "padel equipment Scotland",
    "buy padel gear",
    "padel accessories East Kilbride",
    "padel racket hire",
    "padel balls UK",
    "padel bags Scotland",
    "padel shop online UK",
    "itspadel pro shop",
  ],
  alternates: {
    canonical: "https://www.itspadel.co.uk/pro-shop",
  },
  openGraph: {
    title: "Padel Pro Shop | Rackets, Balls & Equipment – itspadel",
    description: "Shop premium padel rackets, balls, accessories, and hire gear at the itspadel Pro Shop in East Kilbride.",
    url: "https://www.itspadel.co.uk/pro-shop",
  },
  twitter: {
    title: "Padel Pro Shop | Rackets, Balls & Equipment – itspadel",
    description: "Shop premium padel rackets, balls, accessories, and hire gear at the itspadel Pro Shop in East Kilbride.",
  },
};

export default function ProShopPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <ProShopHero data={proShopData.hero} />
      <ProShopGallery data={proShopData.gallery} />
      <ProShopAccessories data={proShopData.accessories} />
      <ProShopHire data={proShopData.hire} />
      {/* <Footer /> */}
    </main>
  );
}
