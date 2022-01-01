import { useEffect, useState } from "react";
import styled from "styled-components";
import PersonIcon from "icons/PersonIcon";
import NotificationIcon from "icons/NotificationIcon";
import LogoIcon from "icons/LogoIcon";
import BurgerButton from "./components/BurgerButton";
import NavItem, { NavItemLink } from "./components/NavItem";
import { useRouter } from "next/router";
import { FullWidthInner } from "layout/PageLayout";

const StyledFullWidthInner = styled(FullWidthInner)`
  ${({ theme }) => theme.media.md.down} {
    flex: 0;
  }
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.brand.black};
  color: ${({ theme }) => theme.colors.brand.white};
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.8); */
  box-shadow: 0px 2px 4px rgb(51, 51, 51);
  position: fixed;
  z-index: 1000;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "60px")};
  transition: height 0.2s ease-out;
  ${({ theme }) => theme.media.md.up} {
    height: 60px;
  }
`;

const ToolbarMargin = styled.div`
  height: 60px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  margin-left: auto;
  ${({ theme }) => theme.media.md.down} {
    display: none;
  }
`;
const Bar = styled.div`
  ${({ theme }) => theme.media.md.down} {
    justify-content: space-between;
  }
  flex: 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.brand.white};
`;

const BarIcons = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.md.up} {
    margin-left: 30px;
  }
  * {
    margin: 10px;
  }
`;

const Hideable = styled.div<{ isOpen: boolean }>`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 10px;
`;

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    const setBodyLock = (isLocked: boolean) => {
      document.body.style.overflow = isLocked ? "hidden" : "auto";
    };
    setBodyLock(isOpen);
    return () => {
      setBodyLock(false);
    };
  }, [isOpen]);

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <StyledFullWidthInner>
          <Bar>
            <BurgerButton onClick={toggleOpen} isOpen={isOpen} />
            <LogoIcon />
            <NavWrapper>
              <NavItemLink isActive={pathname === "/"} href="/">
                Movies
              </NavItemLink>
              <NavItemLink
                isActive={pathname === "/favorites"}
                href="/favorites"
              >
                Favorite
              </NavItemLink>
            </NavWrapper>
            <BarIcons>
              <NotificationIcon />
              <PersonIcon />
            </BarIcons>
          </Bar>
        </StyledFullWidthInner>
        <Hideable isOpen={isOpen}>
          <Content>
            <NavItem
              onClick={close}
              pathname={pathname}
              href="/"
              title={"Movies"}
              icon={<PersonIcon />}
            />
            <NavItem
              pathname={pathname}
              onClick={close}
              href="/favorites"
              title={"Favorite"}
              icon={<PersonIcon />}
            />
            <NavItem
              pathname={pathname}
              onClick={close}
              href="/about"
              title={"About"}
              icon={<PersonIcon />}
            />
          </Content>
        </Hideable>
      </Wrapper>
      <ToolbarMargin />
    </>
  );
};

export default Navigation;
