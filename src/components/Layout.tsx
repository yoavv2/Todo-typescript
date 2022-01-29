import Navbar from './Navbar';

const Layout = ({ children }: any) => {
  console.log(children);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
