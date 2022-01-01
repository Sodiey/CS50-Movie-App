import { GetServerSideProps, NextPage } from "next";
import PageLayout from "layout/PageLayout";
import Navigation from "layout/navigation";
import { publicFetch } from "api";
import MoviesContent from "module/movies";
import Footer from "layout/footer";
import { MovieType } from "types";

type ShopProps = {
  data: {
    results: MovieType[];
    total: number;
  };
  filterOptions: number[];
};

const Index: NextPage<ShopProps> = (props) => {
  return (
    <PageLayout customMetaType="movies">
      <Navigation />
      <MoviesContent
        moviesList={props?.data?.results}
        filterOptions={props.filterOptions}
        totalMovies={props.data.total}
      />
      <Footer />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await publicFetch.get("/movies?year=2021");
    const filterOptions = await publicFetch.get("/filterOptions");

    return {
      props: {
        data,
        filterOptions: filterOptions.data.filterOptions,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default Index;
