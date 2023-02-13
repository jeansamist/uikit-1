import Toast from "../Toast";
export default {
  title: "Molecules/Toasts",
  component: Toast,
};

const Template = (args) => <Toast {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Toast>;

export const Default = Template;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Success = Template.bind({});
Success.args = {
  type: "success",
};
export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};
export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
};
