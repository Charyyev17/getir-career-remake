import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BeingAGetirian from "@/components/BeingAGetirian";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import GetriMean from "@/components/GetirMean";
import Technology from "@/components/Technology";
import WhereWeWork from "@/components/WhereWeWork";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <GetriMean />
      <BeingAGetirian />
      <Technology />
      <WhereWeWork />
      <Footer />
    </div>
  );
}
