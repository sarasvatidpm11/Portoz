import { Button } from "flowbite-react";

export default function Location() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-5 bg-slate-200 px-4 py-10 text-slate-900 lg:grid-cols-2 lg:gap-14">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-lg font-semibold md:text-2xl lg:text-2xl">
          Our Office
        </h2>
        <p className="mt-3 text-center text-xs md:text-lg lg:w-full lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          modi obcaecati? Eum enim eius sapiente vero dolores quae impedit,
          molestiae distinctio laudantium vel itaque repellat veritatis ipsa
          eaque corporis ad.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8460861052695!2d115.2379689732128!3d-8.706162488723074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sen!2sid!4v1726649718451!5m2!1sen!2sid"
          className="rounded-lg md:h-64 md:w-[550px]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
