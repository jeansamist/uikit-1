import { SelectSearch as Select } from "../Select";

export default {
  title: 'Atoms/Selects',
  component: Select
}

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      label: 'Option 1'
    },
    {
      label: 'Option 2'
    },
  ]
}