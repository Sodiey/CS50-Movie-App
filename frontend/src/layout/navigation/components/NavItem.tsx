import AnchorLink from "components/AnchorLink";
import styled, { css } from "styled-components";

const NavItemLink = styled(AnchorLink)<{ isActive?: boolean }>`
  color: ${({ theme }) => theme.colors.brand.white};
  :hover {
    background-color: ${({ theme }) => theme.colors.gray["70"]};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      &:before {
        content: "";
        width: 50px;
        height: 4px;
        background-color: ${({ theme }) => theme.colors.brand.yellow};
        position: absolute;
        bottom: 0px;
      }
    `}
`;

const NavLink = styled(AnchorLink)<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.brand.white};
  padding: 8px 16px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.gray["70"] : "inherit"};
  border-left: 3px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.brand.yellow : "transparent"};
  :hover {
    border-left-color: ${({ theme }) => theme.colors.brand.yellow};
    background-color: ${({ theme }) => theme.colors.gray["70"]};
  }
`;

const Typography = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  font-style: normal;
  line-height: 1.75;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.brand.white};
`;

const NavItem = ({
  className,
  icon,
  title,
  href,
  onClick,
  pathname,
}: NavItemProps) => {
  return (
    <NavLink
      href={href || ""}
      isActive={pathname === href}
      className={className || ""}
      onClick={onClick}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Typography>{title}</Typography>
    </NavLink>
  );
};

type NavItemProps = {
  icon: JSX.Element;
  title: string;
  href?: string;
  pathname: string;
  className?: string;
  onClick?: () => void;
};

export default NavItem;
export { NavItemLink };
