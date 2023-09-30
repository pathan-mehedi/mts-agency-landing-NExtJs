export async function generateMetadata() {
  // fetch SEO data
  return {
    title: "Testimonials | See What Our Clients Say About Us",
  };
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
