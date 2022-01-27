import Navbar from './Navbar';

const Layout = ({ children }) => {
  console.log(children);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
