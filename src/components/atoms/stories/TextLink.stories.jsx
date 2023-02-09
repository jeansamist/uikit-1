import TextLink from "../TextLink";
export default {
  title: 'Atoms/TextLinks',
  component: TextLink
}
const Template = (args) => <TextLink {...args}>Go to page</TextLink>;

export const Default = Template;
export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};
export const Big = Template.bind({});
Big.args = {
  size: 'big'
};