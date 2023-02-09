import Grid from "../Grid";
import Box from "../../atoms/Box";
import { faker } from '@faker-js/faker'
export default {
  title: 'Containers/Grids',
  component: Grid
}
const Template = (args) => <Grid {...args}>
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
</Grid>;

export const Default = Template;