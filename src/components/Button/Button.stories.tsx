import Button from './Button';

const options = {
  title: 'Components',
};

Story.storyName = 'Button';

export default options;

export function Story() {
  return <Button>Example Button</Button>;
}
