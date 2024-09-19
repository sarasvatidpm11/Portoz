import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Buat portofolio mu dengan mudah!
        </h1>
        <p className="mb-4 text-gray-600">
          Buat dan bagikan portofolio dengan mudah berkat PortoZ.
        </p>
      </div>

      <Link
        href="/register"
        className="w-full rounded-md bg-cyan-700 px-8 py-2 text-center font-semibold text-white shadow-lg transition duration-300 hover:bg-cyan-800 lg:w-1/3"
      >
        Daftar Disini
      </Link>

      <div className="mt-10 flex items-center">
        <div className="flex items-center justify-center">
          <img
            src="/hero-section.png"
            alt="Portfolio Desktop"
            className="w-full sm:w-2/3"
          />
        </div>
      </div>
    </div>
  );
}
