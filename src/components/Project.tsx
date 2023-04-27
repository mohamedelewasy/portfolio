import tempImage from "../assets/img/portfolio/placeholder_370_x_300.jpg";

export interface Iproject {
  thumbnail: string | null;
  category: string[];
  title: string;
  description: string;
  url: string;
}

export const Project = (project: Iproject) => {
  return (
    <figure className={`grid-item mix all ${project.category.join(" ")} card`}>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img
              src={
                project.thumbnail
                  ? require(`../assets/img/portfolio/${project.thumbnail}.jpg`)
                  : tempImage
              }
              alt={project.title}
            />

            <span className="card_price">
              <span>{project.category.join(" - ")}</span>
            </span>
          </div>
          <div className="card_content">
            <h2 className="card_title">{project.title}</h2>
            <div className="card_text">
              <p>{project.description}</p>
              <hr />
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="smoothScroll btn btn-default white-yellow"
                style={{ marginTop: 0 }}
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </li>
    </figure>
  );
};
