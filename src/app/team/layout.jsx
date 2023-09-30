export async function generateMetadata() {
  // fetch SEO data
  return {
    title: "Team | Meet Our Team",
  };
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
