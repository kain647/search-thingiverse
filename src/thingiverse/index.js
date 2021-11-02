import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import {
  Container,
  Header,
  Logo,
  InputContainer,
  Content,
  ThingsBox,
  HeaderBox,
  Name,
  Image,
  Avatar,
  FooterBox,
  LeftContainer,
  RightContainer,
  LikeBox,
  ShareBox,
} from "./styled";

class Thingiverse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      name: "",
      searchStarted: false,
      result: [],
    };
  }
  getThings = async (search) => {
    // const { search } = this.state
    const key = "ae6c52eefd0966579dfdc38f92de95e7";
    const api = await fetch(
      `https://api.thingiverse.com/search/${search}?access_token=${key}`
    );
    const response = await api.json();
    //console.log(response);
    this.setState({
      result: response.hits === 0 ? [] : response.hits,
      searchStarted: true,
    });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.getThings(this.state.search);
    }
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  };

  render() {
    const { search, result, searchStarted } = this.state;
    return (
      <Container>
        <Header>
          <Logo>
            <img src={`upload/logo.svg`} />
          </Logo>
          <InputContainer>
            <FiSearch />
            <input
              placeholder="Search Thingiverse"
              value={search}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPress}
            />
            {search !== "" && (
              <IoIosClose
                className={`Close`}
                onClick={() => {
                  this.setState({ search: "" });
                }}
              />
            )}
          </InputContainer>
        </Header>
        <Content>
          {result.map((item) => {
            return <ThingiverseSearchBox item={item} />;
          })}
          {searchStarted && result.length === 0 && <p>Nothing found...</p>}
        </Content>
      </Container>
    );
  }
}

const ThingiverseSearchBox = (props) => {
  const { item } = props;
  //console.log({ item });
  return (
    <ThingsBox key={item.id}>
      <HeaderBox>
        <Avatar>
          <a href={item.creator.public_url} target={"_blank"}>
            <img src={item.thumbnail} />
          </a>
        </Avatar>
        <Name>{item.name}</Name>
      </HeaderBox>
      <a href={item.public_url} target="_blank">
        <Image>
          <img src={item.preview_image} />
        </Image>
      </a>
      <FooterBox>
        <LeftContainer>
          <HiOutlinePlus />
          <p>Collect Thing</p>
        </LeftContainer>
        <RightContainer>
          <LikeBox>
            <AiOutlineHeart />
            <p>{item.like_count}</p>
          </LikeBox>
          <ShareBox>
            <IoShareOutline />
            <p>Share</p>
          </ShareBox>
        </RightContainer>
      </FooterBox>
    </ThingsBox>
  );
};

export default Thingiverse;
