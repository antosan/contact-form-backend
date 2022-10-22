import About from './index.page';

const options = {
  title: 'Pages',
};

Story.storyName = 'About';

export default options;

export function Story() {
  return <About />;
}
