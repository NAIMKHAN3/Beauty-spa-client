import HomePageBanner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import HomeSectionComponent from "@/components/HomeHero";
import Shoes from "@/components/Shoes";
import SunGlasses from "@/components/SunGlasses";
import VanityBag from "@/components/VanityBag";
import Watch from "@/components/Watch";

export default function Home() {
  return (
   <div>
    <HomePageBanner/>
    <Watch/>
    <SunGlasses/>
    <HomeSectionComponent/>
    <VanityBag/>
    <Shoes/>
    <ContactForm/>
   </div>
  )
}
