import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="container grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 items-center gap-4 w-full lg:max-w-[1280px] mt-[96px]">
      <div className="flex flex-col gap-8 col-span-4 md:col-span-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral-900 font-noto font-semibold">
            Well crafted abstract images
          </h1>
          <p className="text-lg font-noto text-neutral-600">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>
        </div>
        <div className="flex gap-4 sm:gap-8">
          <button className="btn btn-secondary">Learn More</button>
          <button type="button" className="btn btn-primary">
            See pricing
          </button>
        </div>
      </div>
      <div className="col-span-4 md:col-span-6 w-full">
        <img src="/hero-section-simple/prism.png" alt="" loading="lazy" />
      </div>
    </div>
  );
}
