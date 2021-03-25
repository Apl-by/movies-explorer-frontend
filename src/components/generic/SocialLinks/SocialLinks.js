import "./SocialLinks.css";
import cn from "classnames";

function SocialLinks({ links, modType }) {
  const classNames = cn("social-links", {
    [`social-links_type_${modType}`]: modType,
  });

  return (
    <ul className={classNames}>
      {links.map((i) => (
        <li key={i.id}>
          <a
            href={i.link}
            target="_blank"
            rel="noreferrer"
            className="social-links__link"
          >
            {i.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
