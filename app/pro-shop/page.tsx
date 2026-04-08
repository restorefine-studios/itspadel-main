import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProShopHero from "../components/ProShop/ProShopHero";
import ProShopGallery from "../components/ProShop/ProShopGallery";
import ProShopAccessories from "../components/ProShop/ProShopAccessories";
import ProShopHire from "../components/ProShop/ProShopHire";
import proShopData from "../../languages/padelproshop.json";

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
