import Paragraph from "../Paragraph";
import { faker } from '@faker-js/faker'
export default {
  title: 'Atoms/Paragraphs',
  component: Paragraph
}

const Template = (args) => <Paragraph {...args}>{faker.lorem.paragraphs(3)}</Paragraph>;

export const Default = Template;