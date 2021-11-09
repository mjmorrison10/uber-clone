import { useEffect, useState, React } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  console.log(pickup, dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibWptb3JyaXNvbjEwIiwiYSI6ImNrdnIxY2RvcTRucDUydm55bml4b2VqdGgifQ.nTLAwuRQ9JcdqHPQ7E7tKg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          
          access_token:
            "pk.eyJ1IjoibWptb3JyaXNvbjEwIiwiYSI6ImNrdnIxY2RvcTRucDUydm55bml4b2VqdGgifQ.nTLAwuRQ9JcdqHPQ7E7tKg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Link href="/search">
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      >
        <RideSelector />

        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex
flex-col
h-screen
`;

const RideContainer = tw.div`
flex-1
flex
flex-col
h-1/2
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmButton = tw.div`
bg-black
text-white
text-center
m-4
py-4
text-xl
`;

const BackButton = tw.img`
h-12
cursor-pointer
transition
transform
hover:scale-105
fixed
left-3 
top-3
bg-white
rounded-full
shadow-2xl
z-10
`;
