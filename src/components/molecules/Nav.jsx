import LinkNav from "../atoms/Link";
export default function Nav({ links = [], activePath }) {
  return (
    <nav className={`flex gap-2 text-white`}>
      {links.map((link, index) => {
        const isActive =
          link.href === "/"
            ? activePath === "/"
            : activePath?.startsWith(link.href);
        return (
          <LinkNav
            key={index}
            href={link.href}
            className={links.className}
            active={isActive}
          >
            {link.children}
          </LinkNav>
        );
      })}
    </nav>
  );
}
