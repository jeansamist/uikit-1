import Flexbox from "../Flexbox";
import Box from "../../atoms/Box";
import { faker } from '@faker-js/faker'
export default {
  title: 'Containers/Flexboxes',
  component: Flexbox
}
const Template = (args) => <Flexbox {...args}>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
  <Box padding border>{faker.lorem.paragraphs(3)}</Box>
</Flexbox>;

export const Default = Template;