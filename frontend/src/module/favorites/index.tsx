import { FullWidthInner } from "layout/PageLayout";
import {
  Wrapper,
  Card,
  Description,
  Title,
  Inner,
  People,
  PeopleWrapper,
  Person,
  ButtonWrapper,
} from "./styled";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import { colors } from "theme";
import { FavoriteType } from "types";
import Button from "components/Button";
import { publicFetch } from "api";
import { useRouter } from "next/router";

type FavoriteProps = {
  favoritesList: FavoriteType[];
};

const FavoritesContent = ({ favoritesList }: FavoriteProps) => {
  const router = useRouter();
  const handleClick = async () => {
    const { data } = await publicFetch.delete("/favorite");
    if (data.status === "Success") {
      router.reload();
    }
  };
  return (
    <FullWidthInner>
      <Wrapper>
        {favoritesList.length > 0 && (
          <ButtonWrapper>
            <Button onClick={handleClick}>Clear all</Button>
          </ButtonWrapper>
        )}
        {favoritesList.length > 0 ? (
          favoritesList.map((item, i) => {
            return (
              <Card key={i}>
                {item.detail.url_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${item.detail.url_path}`}
                    width={180}
                    height={100}
                  />
                ) : (
                  <Image width={180} height={100} src="/no-image.jpeg" />
                )}
                <Inner>
                  <Description>
                    <Title>{item.detail.title}</Title>
                    <ReactStars
                      edit={false}
                      count={5}
                      value={item.ratings[0]?.rating / 2 || 0}
                      size={24}
                      activeColor={colors.brand.yellow}
                    />
                  </Description>
                  <People>
                    <span>Director</span>
                    <PeopleWrapper>
                      <Person>{item.people.director[0]?.name}</Person>
                    </PeopleWrapper>
                  </People>
                  <People>
                    <span>Stars </span>
                    <PeopleWrapper>
                      {item.people.stars.map((star, i) => (
                        <Person key={i}>{star.name}, </Person>
                      ))}
                    </PeopleWrapper>
                  </People>
                </Inner>
              </Card>
            );
          })
        ) : (
          <h1>You haven't add any favourite movie yet</h1>
        )}
      </Wrapper>
    </FullWidthInner>
  );
};
export default FavoritesContent;
