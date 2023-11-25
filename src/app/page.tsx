import { NavBar } from "@/components/ui/nav";
import Home from "@/features/home";
import Footer from "@/features/home/component/footer";

export default function Page() {
  return (
    <main>
      <NavBar />
      <Home />
      <Footer />
    </main>
  );
}
