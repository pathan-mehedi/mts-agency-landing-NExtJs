import Background from "@/components/Background";
import Footer from "@/components/Footer";
import ProjectList from "@/components/ProjectList";
import SubscriptionSection from "@/components/SubscriptionSection";

const Page = () => {
  return (
    <div>
      <Background currentPage="All Project" />
      <ProjectList />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Page;
