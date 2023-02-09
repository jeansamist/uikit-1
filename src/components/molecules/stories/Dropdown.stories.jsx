import Dropdown from "../Dropdown";
import Button from "../../atoms/Button";
export default {
  title: "Molecules/Dropdowns",
  component: Dropdown,
};

const Template = (args) => (
  <Dropdown {...args}>
    <Button>Dropdown</Button>
  </Dropdown>
);

export const Default = Template;
