export async function generateMetadata() {
  // fetch SEO data
  return {
    title: "Projects |  Better Agency",
  };
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
