import DataCard from "../DataCard";
import { faker } from "@faker-js/faker";
// import Header from "../Header";
// import Heading from "../../atoms/Heading";
// import Footer from "../../atoms/Footer";
import Grid from "../../containers/Grid";
export default {
  title: "Molecules/DataCards",
  component: DataCard,
};
const Template = (args) => (
  <Grid columns={4}>
    <DataCard {...args} color="dark">
      {faker.lorem.paragraphs(1)}
    </DataCard>
    <DataCard {...args}>{faker.lorem.paragraphs(1)}</DataCard>
    <DataCard {...args} color="dark">
      {faker.lorem.paragraphs(1)}
    </DataCard>
    <DataCard {...args}>{faker.lorem.paragraphs(1)}</DataCard>
  </Grid>
);

export const Default = Template;
