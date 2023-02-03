import Avatar from "../Avatar";
import avatar from './../../../assets/images/avatar-default.jpg'
export default {
  title: 'Atoms/Avatars',
  component: Avatar
}

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: avatar,
}
export const Disabled = Template.bind({});
Disabled.args = {
  image: avatar,
  disabled: true
}
export const Small = Template.bind({});
Small.args = {
  image: avatar,
  size: 'small'
}
export const Medium = Template.bind({});
Medium.args = {
  image: avatar,
  size: 'medium'
}
export const Big = Template.bind({});
Big.args = {
  image: avatar,
  size: 'big'
}
export const Large = Template.bind({});
Large.args = {
  image: avatar,
  size: 'large'
}
export const HyperLarge = Template.bind({});
HyperLarge.args = {
  image: avatar,
  size: 'hyperlarge'
}