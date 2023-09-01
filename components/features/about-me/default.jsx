// import getProperties from 'fusion:properties'
import { useAppContext } from "fusion:context";
import Phrase from "./_children/phrase/default";
import "./index.css";

const AboutMe = () => {
  const { globalContent } = useAppContext();

  const { content_elements: elements } = globalContent;
  const data = {};

  return (
    <section className="about-me">
      <Phrase />
      <article className="about-me__wrapp">
        <div className="about-me__content">
          <div className="about-me__image">
            <img src={elements[3]?.url} alt="" />
          </div>
          <div className="about-me__description">
            <div className="about-me__text">
              <h1 className="about-me__title">
                {globalContent?.headlines?.meta_title}
              </h1>
              <p>{elements[0]?.content}</p>
              <p>{elements[1]?.content}</p>
              <p>{elements[2]?.content}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

AboutMe.label = "Sobre mi";
export default AboutMe;
