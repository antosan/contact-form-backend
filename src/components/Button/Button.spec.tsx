import { test, expect } from '@playwright/experimental-ct-react';
import Button from './Button';

test.use({ viewport: { width: 500, height: 500 } });

test.describe('Button', () => {
  test('works', async ({ mount }) => {
    let clicked = false;
    const component = await mount(<Button onClick={() => (clicked = true)}>Submit</Button>);
    await expect(component).toContainText('Submit');
    await component.click();
    expect(clicked).toBeTruthy();
  });
});
