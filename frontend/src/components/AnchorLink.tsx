import Link from "next/link";

const AnchorLink = ({
  href,
  children,
  className,
  onClick,
}: AnchorLinkProps) => (
  <Link href={href} passHref>
    <a className={className} onClick={onClick}>
      {children}
    </a>
  </Link>
);

type AnchorLinkProps = {
  href: string;
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  onClick?: () => void;
};

export default AnchorLink;
