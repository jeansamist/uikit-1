import Heading from "../Heading";
export default {
  title: 'Atoms/Headings',
  component: Heading
}
const Template = (args) => <Heading {...args}>Heading Title</Heading>;

export const Default = Template;
export const HeadingUnderline = Template.bind({});
HeadingUnderline.args = {
  underline: true
};
export const Heading1 = Template.bind({});
Heading1.args = {
  type: '1'
};
export const Heading2 = Template.bind({});
Heading2.args = {
  type: '2'
};
export const Heading3 = Template.bind({});
Heading3.args = {
  type: '3'
};
export const Heading4 = Template.bind({});
Heading4.args = {
  type: '4'
};
export const Heading5 = Template.bind({});
Heading5.args = {
  type: '5'
};
export const Heading6 = Template.bind({});
Heading6.args = {
  type: '6'
};