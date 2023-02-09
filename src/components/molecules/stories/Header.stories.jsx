import Header, { Brand } from "../Header";
import Button from "../../atoms/Button";
import Flexbox from "../../containers/Flexbox";
import logo from "./../../../assets/images/silva-logo-colors-png.png";
export default {
  title: "Molecules/Headers",
  component: Header,
};
const Template = (args) => (
  <Header {...args}>
    <Flexbox className="aic" gap>
      <Button type="secondary">Sing In</Button>
      <Button>Sing Up</Button>
    </Flexbox>
  </Header>
);
let brandUndelined = new Brand();
brandUndelined.underlined = true;
let brandRight = new Brand();
brandRight.position = "right";
let brandImage = new Brand("left", "image", logo, null, 100);
let brandImageAtRight = new Brand("right", "image", logo, null, 100);
export const Default = Template;
export const HeaderBordered = Template.bind({});
HeaderBordered.args = {
  border: true,
};
export const HeaderDark = Template.bind({});
HeaderDark.args = {
  dark: true,
};
export const BrandUndelined = Template.bind({});
BrandUndelined.args = {
  brand: brandUndelined,
};
export const BrandAtRight = Template.bind({});
BrandAtRight.args = {
  brand: brandRight,
};
export const BrandImage = Template.bind({});
BrandImage.args = {
  brand: brandImage,
};
export const BrandImageAtRight = Template.bind({});
BrandImageAtRight.args = {
  brand: brandImageAtRight,
};
