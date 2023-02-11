import Card from "../Card";
import { faker } from "@faker-js/faker";
import Header from "../Header";
import Heading from "../../atoms/Heading";
import Footer from "../../atoms/Footer";
export default {
  title: "Molecules/Cards",
  component: Card,
};
const Template = (args) => <Card {...args}>{faker.lorem.paragraphs(3)}</Card>;

export const Default = Template;
export const Title = Template.bind({});
Title.args = {
  heading: <Heading>Title</Heading>,
};
export const Headed = Template.bind({});
Headed.args = {
  header: <Header />,
};
export const WithFooter = Template.bind({});
WithFooter.args = {
  footer: <Footer>Footer</Footer>,
};
// export const Radius = Template.bind({});
// Radius.args = {
//   raduis: true,
// };
// export const Border = Template.bind({});
// Border.args = {
//   border: true,
// };
