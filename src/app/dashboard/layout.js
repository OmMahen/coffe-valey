import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
