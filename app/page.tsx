import { Main } from "./Main";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className="w-[376px] md:w-[768px] lg:w-[1440px] shrink-0 lg:text-[18px]">
      <Header />
      <Main />
      <Footer className="mt-[57px] mb-16" />
    </div>
  );
}
