import { Button } from "flowbite-react";

export default function About() {
  return (
    <div className="w-full bg-cyan-700 grid grid-cols-1 items-center py-10 gap-5 lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center px-5 lg:px-20 xl:px-48">
        <h2 className="text-lg w-1/2 text-center font-semibold lg:text-2xl lg:w-3/4 xl:w-full">Edit Portofolio Sesuai Keinginan</h2>
        <p className="text-xs text-center w-3/4 my-3 lg:text-lg lg:w-full">Tampil unggul dalam lamaran kerja dengan portofolio yang menarik. Edit portofolio sesuai keinginan dengan mudah.</p>
        <Button className="bg-cyan-950 w-full font-semibold">Buat Portofolio Gratis</Button>
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
