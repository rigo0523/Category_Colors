import { Container } from "@chakra-ui/react";
import LeftUpperCard from "./LeftUpperCard";
import LeftBottomCard from "./LeftBottomCard";

function SidebarContainer() {
  return (
    <Container gridArea={"sidebar"} p={4} h={"100%"} overflow={"scroll"}>
      <LeftUpperCard />
      <LeftBottomCard />
    </Container>
  );
}

export default SidebarContainer;
