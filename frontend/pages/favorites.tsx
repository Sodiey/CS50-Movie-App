import { GetServerSideProps, NextPage } from "next";
import PageLayout from "layout/PageLayout";
import Navigation from "layout/navigation";
import { publicFetch } from "api";
import Footer from "layout/footer";
import FavoritesContent from "module/favorites";
import { FavoriteType } from "types";

type FavoriteProps = {
  data: FavoriteType[];
};

const Favorite: NextPage<FavoriteProps> = (props) => {
  return (
    <PageLayout customMetaType="movies">
      <Navigation />
      <FavoritesContent favoritesList={props.data} />
      <Footer />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const { data } = await publicFetch.get("/favorite", {
      headers: {
        Cookie: req.headers.cookie,
      },
    });

    return {
      props: {
        data: data.results,
      },
    };
  } catch (err) {
    return {
      props: {
        data: [],
      },
    };
  }
};

export default Favorite;
