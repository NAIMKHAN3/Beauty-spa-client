import HomePageBanner from "@/components/Banner";
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
    <VanityBag/>
    <Shoes/>
   </div>
  )
}
