import Button from "../Button";

export default {
  title: 'Atoms/Buttons',
  component: Button
}

const Template = (args) => <Button {...args} />;

export const Default = Template;
Default.args = {
  label: 'Button',
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};
export const Big = Template.bind({});
Big.args = {
  size: 'big',
  label: 'Button',
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
