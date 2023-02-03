import Box from "../Box";
import { faker } from '@faker-js/faker'
export default {
  title: 'Atoms/Boxes',
  component: Box
}
const Template = (args) => <Box {...args}> {faker.lorem.paragraphs(3)}</Box>;

export const Default = Template;
export const Padding = Template.bind({});
Padding.args = {
  padding: true
};
export const Radius = Template.bind({});
Radius.args = {
  raduis: true
};
export const Border = Template.bind({});
Border.args = {
  border: true
};