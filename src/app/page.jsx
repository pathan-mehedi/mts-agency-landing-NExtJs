import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import HeroList from "@/components/HeroList";
import OurPartners from "@/components/OurPartners";
import StatList from "@/components/StatList";
import SubscriptionSection from "@/components/SubscriptionSection";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <div>
      <HeroList />
      <OurPartners />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <SubscriptionSection />
      <Footer />
    </div>
  );
}
