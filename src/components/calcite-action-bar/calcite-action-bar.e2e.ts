import { newE2EPage } from '@stencil/core/testing';

describe.skip('calcite-action-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<calcite-action-bar></calcite-action-bar>');
    const element = await page.find('calcite-action-bar');
    expect(element).toHaveClass('hydrated');
  });
});
