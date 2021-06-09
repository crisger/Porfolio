import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaCertificate } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  description,
  feature,
  github,
  id,
  index,
  slug,
  stack,
  title,
  url,
  image,
}) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image)}
        className="project-img"
        alt={title}
      />

      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(stack => (
            <span key={stack.id}>{stack.title}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github}>
            <p className="paragraph">GitHub Code</p>
            <FaGithubSquare className="project-icon" />
          </a>

          <a href={url}>
            <p className="paragraph">View Page</p>
            <FaCertificate className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
