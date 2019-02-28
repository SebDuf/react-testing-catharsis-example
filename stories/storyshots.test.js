import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import initStoryshots from '@storybook/addon-storyshots';
// eslint-disable-next-line import/no-extraneous-dependencies
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  test: imageSnapshot({
    // Image cropping from @osi-oswald: https://github.com/storybooks/storybook/issues/5132#issuecomment-451886986
    beforeScreenshot: async (page, { context }) => {
      // eslint-disable-next-line no-param-reassign
      context.clip = await page.evaluate(() => {
        // display 'table' is optional, but it prevents div's from using the full viewport width
        document.body.style.display = 'table';
        const { height, width, left: x, top: y } = document.body.getBoundingClientRect();
        return { x, y, height, width };
      });
    },
    getScreenshotOptions: ({ context: { clip } }) => {
      // omitBackground: true is optional, but I like to distinguish between white and transparent
      return { clip, omitBackground: true };
    },
    // Optional, organizes screenshots in folders
    getMatchOptions({ context: { kind, story } }) {
      return {
        customSnapshotsDir: path.join(
          __dirname,
          '__image_snapshots__',
          ...kind.split('/').map(sanitizeFileName),
        ),
        customSnapshotIdentifier: sanitizeFileName(story),
      };
    },
  }),
});

function sanitizeFileName(name) {
  return name.replace(/[<>:"\/\\\|\?\*]/g, '-');
}
