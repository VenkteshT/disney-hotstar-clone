import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import moviesData from "../disneyPlusMoviesData.json";
import db from "../firebase.js";
const Home = (props) => {
  const dispatch = useDispatch();
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
  const userName = useSelector(selectUserName);

  useEffect(() => {
    // const moviesRef = collection(db, "movies");
    // onSnapshot(moviesRef, (snapshot) => {
    let data = moviesData.movies;
    let movies = Object.keys(data).map((el) => data[el]);

    movies.forEach((doc) => {
      switch (doc.type) {
        case "recommend":
          recommends = [...recommends, { ...doc }];
          break;

        case "new":
          newDisneys = [...newDisneys, { ...doc }];
          break;

        case "original":
          originals = [...originals, { ...doc }];
          break;

        case "trending":
          trending = [...trending, { ...doc }];
          break;
      }
    });

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
    // });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends recommends={recommends} />
      <NewDisney newDisneys={newDisneys} />
      <Originals originals={originals} />
      <Trending trending={trending} />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
