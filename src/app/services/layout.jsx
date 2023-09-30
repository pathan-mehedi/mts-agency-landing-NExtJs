export async function generateMetadata() {
  // fetch SEO data
  return {
    title: "Service | Better Agency",
  };
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
