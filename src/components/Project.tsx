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
          <div className="card_content">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#637988" }}
            >
              <h2 className="card_title">{project.title}</h2>
            </a>
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
