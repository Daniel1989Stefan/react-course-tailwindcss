import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos
            voluptas, mollitia molestiae dolore sunt. Quos dolore voluptatibus
            placeat. Maiores atque, ducimus iusto porro quae delectus provident
            dolorem soluta voluptatum suscipit, minus aperiam illo, magni veniam
            voluptatibus esse pariatur. Nobis, modi! Quae dolor possimus eos
            corporis natus culpa atque nemo?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
