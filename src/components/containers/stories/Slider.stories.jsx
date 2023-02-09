import Slider from "../Slider";
import Box from "../../atoms/Box";
import { faker } from '@faker-js/faker'
export default {
  title: 'Containers/Sliders',
  component: Slider
}
const Template = (args) => <Slider {...args}>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
</Slider>;

export const Default = Template;