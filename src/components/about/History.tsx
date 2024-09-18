export default function History() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-14 px-4 text-slate-900 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center lg:order-last">
        <h2 className="text-center text-lg font-semibold md:text-2xl lg:text-2xl">
          Our History
        </h2>
        <p className="mt-3 text-center text-xs md:text-lg lg:w-full lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          modi obcaecati? Eum enim eius sapiente vero dolores quae impedit,
          molestiae distinctio laudantium vel itaque repellat veritatis ipsa
          eaque corporis ad.
        </p>
      </div>
      <div className="rounded-md bg-slate-300 p-1 shadow-xl">
        <img src="/our-team.png" alt="Our Team" className="rounded-md" />
      </div>
    </div>
  );
}
