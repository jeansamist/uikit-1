import Input from "../Input";

export default {
  title: 'Atoms/Input',
  component: Input
}
const Template = (args) => <Input {...args} />;

export const Default = Template;
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Error = Template.bind({});
Error.args = {
  error: true
};
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