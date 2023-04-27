export const Home = () => {
  return (
    <section id="home">
      <h1 className="sr-only">Home</h1>

      <div id="carousel-hero" className="carousel slide" data-ride="carousel">
        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="overlay"></div>

            <div className="carousel-caption">
              <span className="h4">
                Hello,I am <span className="text-yellow">Mohamed</span>, and
                this is my
              </span>

              <span className="h1">portfolio</span>

              <p>
                I am a backend web developer, fresh graduated from computer
                science, familiar with express, react frameworks and aws
                services. Seeking for an opportunity to gain deep knowledge in
                web development.
              </p>

              <a
                href="#about"
                className="smoothScroll btn btn-default white-yellow"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
