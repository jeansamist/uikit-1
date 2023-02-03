import Button from "../Button";
import { faker } from '@faker-js/faker'
export default {
  title: 'Atoms/Buttons',
  component: Button
}

const Template = (args) => <Button {...args} />;

export const Default = Template;
Default.args = {
  label: faker.lorem.word(),
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: faker.lorem.word(),
  disabled: true
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: faker.lorem.word(),
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: faker.lorem.word(),
};
export const Big = Template.bind({});
Big.args = {
  size: 'big',
  label: faker.lorem.word(),
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: faker.lorem.word(),
};
