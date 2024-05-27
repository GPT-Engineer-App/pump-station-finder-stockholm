import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Sample data for bike pump stations
const bikePumpStations = [
  { id: 1, name: "Station 1", position: [59.3293, 18.0686] },
  { id: 2, name: "Station 2", position: [59.3325, 18.0649] },
  { id: 3, name: "Station 3", position: [59.3311, 18.0708] },
];

// Custom icon for the markers
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.600" w="100%" p={4} color="white">
        <Heading as="h1" size="lg" textAlign="center">
          Bike Pump Stations in Stockholm
        </Heading>
      </Box>
      <VStack spacing={4} mt={4}>
        <MapContainer
          center={[59.3293, 18.0686]}
          zoom={13}
          style={{ height: "80vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePumpStations.map((station) => (
            <Marker
              key={station.id}
              position={station.position}
              icon={bikePumpIcon}
            >
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </VStack>
    </Container>
  );
};

export default Index;