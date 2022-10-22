import { test, expect } from '@playwright/experimental-ct-react';
import About from './index.page';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('about', () => {
  test('renders heading', async ({ mount }) => {
    const component = await mount(<About />);
    await expect(component).toContainText('About!');
  });
});
