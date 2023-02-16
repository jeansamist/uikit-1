import Alert from "../Alert";
export default {
  title: "Molecules/Alerts",
  component: Alert,
};

const Template = (args) => (
  <Alert title="Alert !" {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Alert>
);

export const Default = Template;

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
