import LinkNav from "../atoms/Link";
export default function Nav({ links = [] }) {
  return (
    <nav className="flex gap-2 text-white">
      {links.map((link, index) => {
        return (
          <LinkNav key={index} href={link.href}>
            {link.children}
          </LinkNav>
        );
      })}
    </nav>
  );
}
