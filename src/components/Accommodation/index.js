import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import Button from "../Form/Button";

import EachHotel from "./EachHotel";

export default function Accommodation() {
  const hotelsAvailables = [
    {
      id: 1,
      name: "Driven Resort",
      accommodationsType: ["Single", "Double"],
      beds: 103,
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    },
    {
      id: 2,
      name: "Driven Palace",
      accommodationsType: ["Single", "Double", "Triple"],
      beds: 25,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f7/8b/38/exterior.jpg?w=900&h=-1&s=1",
    },
    {
      id: 3,
      name: "Driven World",
      accommodationsType: ["Single", "Double"],
      beds: 2,
      image:
        "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",
    },
  ];
  const [chosenHotel, setChosenHotel] = useState(0);

  return (
    <>
      <StyledTypography variant="h4">
        Escolha de hotel e quarto
      </StyledTypography>
      <StyledTypography variant="h6" type={"hotelChoice"}>
        Primeiro, escolha seu hotel
      </StyledTypography>
      <HotelContainer>
        {hotelsAvailables.map((n) => (
          <StyledButton onClick={() => setChosenHotel(n.id)} state={chosenHotel === n.id? true: false}>
            <EachHotel
              key={n.id}
              hotelInformation={n}
            />
          </StyledButton>
        ))}
      </HotelContainer>
      <StyledTypography variant="h6" type={"roomChoice"} hidden={!chosenHotel}>
        Ótima pedida! Agora escolha seu quarto:
      </StyledTypography>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin: ${(props) => (props.type === "roomChoice" ? "52px 0 33px 0" : null)}!important;
  margin-bottom: ${(props) =>
    props.type === "hotelChoice" ? "-18px" : "20px"} !important;
  color: ${(props) => (props.variant === "h6" ? "#8E8E8E" : null)};
`;

const HotelContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;
  >button{
    margin: 0 19px 0 0 !important;
    box-shadow: none;
    padding: 14px 16px 0px 16px!important;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${(props) => (props.state? "#FFEED2" : "#f1f1f1")}!important;
`;
