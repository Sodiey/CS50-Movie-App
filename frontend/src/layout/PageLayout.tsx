import { ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";

const spacing = {
  innerWidth: "1246px",
  pagePadding: {
    desktop: "20px",
    mobile: "16px",
  },
};

const FullWidthInner = styled.div`
  width: 100%;
  flex: 1 0 auto;
  max-width: calc(${spacing.innerWidth} + 2 * ${spacing.pagePadding.mobile});
  margin: auto;
  padding: 0 ${spacing.pagePadding.mobile};
  position: relative;
  ${({ theme }) => theme.media.md.up} {
    max-width: calc(${spacing.innerWidth} + 2 * ${spacing.pagePadding.desktop});
    padding: 0 ${spacing.pagePadding.desktop};
  }
`;

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.brand.silver};
`;

type LayoutProps = {
  customMetaType: string;
  description?: string;
  hasSidebar?: boolean;
  children: ReactNode;
};

const PageLayout = ({ children, customMetaType, description }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Head>
        <title>{customMetaType}</title>
        <meta property="og:title" content={customMetaType} />
        {description && (
          <meta property="og:description" content={description} />
        )}
        <meta property="og:type" content="website" />
      </Head>
      {children}
    </LayoutWrapper>
  );
};

export default PageLayout;
export { FullWidthInner };
