import History from "@/components/about/History";
import JumbotronAbout from "@/components/about/Jumbotron";
import Location from "@/components/about/Location";
import Team from "@/components/about/Team";

export default function About() {
  return (
    <>
      <section className="my-16">
        <JumbotronAbout />
      </section>
      <section className="my-16">
        <Team />
      </section>
      <section className="my-16">
        <History />
      </section>
      <section className="my-16">
        <Location />
      </section>
    </>
  );
}
