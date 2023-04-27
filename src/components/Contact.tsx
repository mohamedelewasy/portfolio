import phone from "../assets/img/svg/phone.svg";
import whatsapp from "../assets/img/svg/whatsapp.svg";
import email from "../assets/img/svg/email.svg";
import location from "../assets/img/svg/location.svg";
import facebook from "../assets/img/svg/facebook.svg";
import github from "../assets/img/svg/github.svg";
import linkedin from "../assets/img/svg/linkedin.svg";
import { linkedinURL, facebookURL, githubURL } from "../urls";

const contactStyleOption = {
  filter: "invert(100%)",
  width: "15px",
  margin: "5px",
};

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="title-content">
              <h2 className="section-title">Contact me</h2>

              <p>
                <span style={{ display: "block" }}>
                  <img src={phone} alt="call" style={contactStyleOption} />
                  +201032205904
                </span>
                <span style={{ display: "block" }}>
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    style={contactStyleOption}
                  />
                  +201552159359
                </span>
                <span style={{ display: "block" }}>
                  <img src={email} alt="call" style={contactStyleOption} />
                  eng.m.elewasy@gmail.com
                </span>
                <span style={{ display: "block" }}>
                  <img
                    src={location}
                    alt="location"
                    style={contactStyleOption}
                  />
                  Giza, Haram
                </span>
                <p>
                  <a href={linkedinURL} target="_blank" rel="noreferrer">
                    <img
                      src={linkedin}
                      alt="linkedin"
                      style={{ filter: "invert(100%)", width: "25px" }}
                    />
                  </a>
                  <a href={githubURL} target="_blank" rel="noreferrer">
                    <img
                      src={github}
                      alt="github"
                      style={{
                        filter: "invert(100%)",
                        width: "25px",
                        marginRight: "20px",
                        marginLeft: "20px",
                      }}
                    />
                  </a>
                  <a href={facebookURL} target="_blank" rel="noreferrer">
                    <img
                      src={facebook}
                      alt="facebook"
                      style={{ filter: "invert(100%)", width: "25px" }}
                    />
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}

        {/* <Email /> */}
        {/* <!-- /.contact-form --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};
