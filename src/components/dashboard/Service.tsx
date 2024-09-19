import { Button } from "flowbite-react";

export default function Service() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-5 bg-white py-10 text-slate-900 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-5 lg:order-last lg:px-20">
        <h2 className="w-1/2 text-center text-lg font-semibold lg:w-3/4 lg:text-2xl xl:w-full">
          Miliki Website Portofolio Pribadi
        </h2>
        <p className="my-3 w-3/4 text-center text-xs lg:w-full lg:text-lg">
          Setelah membuat portofolio, bagikan portofolio online melalui link
          yang disediakan.
        </p>
        <Button className="w-full bg-cyan-950 font-semibold">
          Mulai membuat
        </Button>
      </div>
      <div>
        <img
          src="/hero-section.png"
          alt="Portfolio Desktop"
          className="w-full"
        />
      </div>
    </div>
  );
}
