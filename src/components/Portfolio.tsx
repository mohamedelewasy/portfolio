import { Project } from "./Project";
import { projects } from "../fetch";
import "../assets/css/card.css";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="title-content">
              <h2 className="section-title">Portfolio</h2>

              <p>
                I am excited to share with you some of the projects I have
                created in various categories such as RESTful APIs, frontend
                development, and web design. <br />
                In my RESTful API projects, I have focused on building scalable
                and efficient APIs using popular frameworks like Node.js and
                Express. My frontend projects showcase my skills in creating
                responsive and user-friendly interfaces using modern
                technologies like React. Additionally, my web design projects
                demonstrate my ability to create visually appealing websites
                that are both functional and aesthetically pleasing.{" "}
                <hr style={{ maxWidth: "200px" }} />I am proud of the work I
                have done in these areas and look forward to sharing them with
                you.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}

        <div className="row">
          <nav id="portfolio-navigation" className="navbar">
            {/* <!-- Section title --> */}
            <h1 className="sr-only">Portfolio navigation</h1>

            <ul className="nav navbar-nav">
              <li>
                <button
                  className="filter mixitup-control-active"
                  type="button"
                  data-mixitup-control
                  data-filter="all"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className="filter"
                  type="button"
                  data-mixitup-control
                  data-filter=".api"
                >
                  API
                </button>
              </li>
              <li>
                <button
                  className="filter"
                  type="button"
                  data-mixitup-control
                  data-filter=".frontend"
                >
                  Frontend
                </button>
              </li>
              <li>
                <button
                  className="filter"
                  type="button"
                  data-mixitup-control
                  data-filter=".design"
                >
                  web design
                </button>
              </li>
            </ul>
          </nav>
          {/* <!-- /#portfolio-navigation --> */}
        </div>
        {/* <!-- /.row --> */}

        <div className="cards-container">
          <ul className="cards portfolio-grid" id="portfolio-grid">
            {projects.map((project, i) => (
              <Project
                category={project.category}
                description={project.description}
                thumbnail={project.thumbnail}
                title={project.title}
                url={project.url}
                key={i}
              />
            ))}
          </ul>
        </div>
        <a
          href="\"
          className="btn btn-default yellow-white"
          style={{ display: "none" }}
        >
          Show More
        </a>
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};
