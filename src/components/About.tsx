import { skills } from "../fetch";

import profile from "../assets/img/team/team_member_02.png";
import facebook from "../assets/img/svg/facebook.svg";
import linkedin from "../assets/img/svg/linkedin.svg";
import github from "../assets/img/svg/github.svg";
import pdf from "../assets/img/svg/pdf.svg";
import { facebookURL, githubURL, linkedinURL } from "../urls";

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="title-content">
              <h2 className="section-title">About me</h2>
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}

      <div className="about-team slider-container">
        <div className="team-member grabbable">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="img-container">
                  <img src={profile} alt="profile" />
                </div>
              </div>

              <div className="col-md-8">
                <div className="description">
                  <span className="h4">Mohamed Mostafa Elewasy</span>

                  <p className="position">
                    <i>Backend web developer</i>
                  </p>

                  <div className="biography">
                    <p>
                      Greeting, I am Mohamed Mostafa , a recent graduate from
                      the Faculty of Computer and Informatics. I specialized in
                      Computer Science, graduate (May 2020) with a good grade
                      and an excellent graduation project. Coding has been my
                      passion since a very young age, and I aspire to become a
                      great software engineer. I am well-versed in frameworks
                      such as Express, React and Python. I possess a strong
                      understanding of databases, including PostgreSQL and
                      MongoDB.
                      <br /> <br />I am currently seeking an opportunity to work
                      as a backend web developer to enhance my skills further
                      and become an exceptional developer.
                    </p>
                  </div>

                  <ul className="social-list">
                    <li>
                      <a href={linkedinURL} target="_blank" rel="noreferrer">
                        <img
                          className="si"
                          src={linkedin}
                          alt="linkedin"
                          width="25px"
                          style={{
                            filter:
                              "invert(25%) sepia(8%) saturate(1522%) hue-rotate(157deg) brightness(97%) contrast(95%)",
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href={githubURL} target="_blank" rel="noreferrer">
                        <img
                          className="si"
                          src={github}
                          alt="github"
                          width="25px"
                          style={{
                            filter:
                              "invert(25%) sepia(8%) saturate(1522%) hue-rotate(157deg) brightness(97%) contrast(95%)",
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href={facebookURL} target="_blank" rel="noreferrer">
                        <img
                          className="si"
                          src={facebook}
                          alt="facebook"
                          width="25px"
                          style={{
                            filter:
                              "invert(25%) sepia(8%) saturate(1522%) hue-rotate(157deg) brightness(97%) contrast(95%)",
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href={require("../assets/pdf/24042023.pdf")}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="si"
                          src={pdf}
                          alt="pdf"
                          width="25px"
                          style={{
                            filter:
                              "invert(25%) sepia(8%) saturate(1522%) hue-rotate(157deg) brightness(97%) contrast(95%)",
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.desctiption --> */}
              </div>
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </div>
        {/* <!-- /.team-member --> */}
      </div>
      {/* <!-- /.about-team --> */}

      <div className="skills-company-subsection" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="skills-subsection">
                <h4>Skills</h4>

                {skills.map((skill) => (
                  <div className="col-md-6">
                    <p>{skill.title}</p>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: `${skill.range}%` }}
                      >
                        <span className="sr-only">90% Complete</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <!-- /.skills-subsection --> */}
            </div>
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.skills-company-subsection --> */}
    </section>
  );
};
