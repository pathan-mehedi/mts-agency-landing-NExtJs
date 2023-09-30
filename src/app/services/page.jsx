import Background from "@/components/Background";
import Footer from "@/components/Footer";
import ServiceList from "@/components/ServiceList";
import SubscriptionSection from "@/components/SubscriptionSection";

const Page = () => {
  return (
    <div>
      <Background currentPage="Our Services" />
      <ServiceList />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Page;
