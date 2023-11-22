import { NavBar } from "@/components/ui/nav";
import Home from "@/features/HomePage";
import Footer from "@/features/HomePage/component/footer";

export default function Page() {
  return (
    <main>
      <NavBar />
      <Home />
      <Footer />
    </main>
  );
}
