import Checkbox from "../Checkbox";

export default {
  title: 'Atoms/Checkboxes',
  component: Checkbox
}
const Template = (args) => <Checkbox {...args} />;

export const Default = Template;
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
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
  size: 'big  '
};