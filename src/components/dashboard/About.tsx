import { Button } from "flowbite-react";

export default function About() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-5 bg-cyan-700 py-10 text-white lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-5 lg:px-20 xl:px-48">
        <h2 className="w-1/2 text-center text-lg font-semibold lg:w-3/4 lg:text-2xl xl:w-full">
          Edit Portofolio Sesuai Keinginan
        </h2>
        <p className="my-3 w-3/4 text-center text-xs lg:w-full lg:text-lg">
          Tampil unggul dalam lamaran kerja dengan portofolio yang menarik. Edit
          portofolio sesuai keinginan dengan mudah.
        </p>
        <Button className="w-full bg-cyan-950 font-semibold">
          Buat Portofolio Gratis
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
