import Footer from "../Footer";
import { faker } from "@faker-js/faker";
export default {
  title: "Atoms/Footer",
  component: Footer,
};
const Template = (args) => <Footer {...args}>{faker.lorem.paragraphs(3)}</Footer>;

export const Default = Template;
