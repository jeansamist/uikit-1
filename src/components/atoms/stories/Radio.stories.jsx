import Radio from "../Radio";

export default {
  title: 'Atoms/Radio',
  component: Radio
}

const Template = (args) => <Radio {...args} />;

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