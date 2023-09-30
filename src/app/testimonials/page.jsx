import Background from "@/components/Background";
import Footer from "@/components/Footer";
import SubscriptionSection from "@/components/SubscriptionSection";
import TestimonialList from "@/components/TestimonialList";

const Page = () => {
  return (
    <div>
      <Background currentPage="Testimonial List" />
      <TestimonialList />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Page;
