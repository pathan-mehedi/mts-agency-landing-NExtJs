import Background from "@/components/Background";
import Footer from "@/components/Footer";
import SubscriptionSection from "@/components/SubscriptionSection";
import TeamList from "@/components/TeamList";

const Page = () => {
  return (
    <div>
      <Background currentPage="Team" />
      <TeamList />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Page;
