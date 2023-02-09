import Badge from "../Badge";
export default {
  title: "Atoms/Badges",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Default = Template;
Default.args = {
  label: "Badge",
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Badge",
  disabled: true,
};
export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Badge",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Badge",
};
export const Big = Template.bind({});
Big.args = {
  size: "big",
  label: "Badge",
};
