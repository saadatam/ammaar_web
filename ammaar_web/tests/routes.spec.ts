// integration unit test file for Ammaar's portfilio website. 


import { test, expect } from '@playwright/test';

// const object for the routs. 
const routes = [
  '/',
  '/projects',
  '/contact',
  '/about',
  '/plants',
  '/Fashion',
  '/Books',
  '/Hobbies',
  '/rasprojects',
  '/sample',
  '/tictactoe',
];


// for every route in the object, 
for (const route of routes) {

    // cal the test function 
  test(`${route} loads successfully`, async ({ page }) => {

    // data structure to store error messages
    const consoleErrors: string[] = [];

    page.on('console', msg => {

        // if error is found in the message type, aka the red message, push to data structure. 
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }

    });

    await page.goto(`http://localhost:4173${route}`);

    // waits for page to locate a body tag and it's visible. This is the rendering check. 
    await expect(page.locator('body')).toBeVisible();

    // asserts if the console errors == [], an empty datastructure. if not, assertion fails, test fails. 
    expect(consoleErrors).toEqual([]);
  });
}