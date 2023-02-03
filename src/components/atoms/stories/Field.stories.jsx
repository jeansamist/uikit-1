import Field from "../Field";
import { FiUser, FiArrowDown } from 'react-icons/fi'
import { faker } from '@faker-js/faker'
export default {
  title: 'Atoms/Fields',
  component: Field
}
const Template = (args) => <Field {...args} />;

export const Default = Template;
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Error = Template.bind({});
Error.args = {
  error: faker.lorem.sentence(5)
};
export const IconLeft = Template.bind({});
IconLeft.args = {
  leftIcon: <FiUser />,
};
export const IconRight = Template.bind({});
IconRight.args = {
  rightIcon: <FiUser />,
};
export const IconLeftAndRight = Template.bind({});
IconLeftAndRight.args = {
  leftIcon: <FiUser />,
  rightIcon: <FiArrowDown />,
};