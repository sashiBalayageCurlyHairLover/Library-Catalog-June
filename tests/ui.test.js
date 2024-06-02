const { test, expect } = require("@playwright/test")
const appUrl = "http://localhost:3000";

test('Verify "All Books" link is visible', async ( { page } ) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test('Verify "Login" link is visible', async ( { page } ) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const loginLink = await page.$('a[href="/login"]');
    const isLinkVisible = await loginLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test('Verify "Register" link is visible', async ( { page } ) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const registerLink = await page.$('a[href="/register"]');
    const isLinkVisible = await registerLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test('Verify "Register" link text', async ( { page } ) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const registerLink = await page.$('a[href="/register"]');
    const registerLinkText = await registerLink.textContent();
    expect(registerLinkText).toEqual("Register");
});

test('Verify valid user can login', async ( { page } ) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const loginLink = await page.$('a[href="/login"]');
    await loginLink.click();
    await page.fill("#email", "peter@abv.bg")
    await page.fill("#password", "123456")
    const loginButton = await page.$('#login-form > fieldset > input');
    await loginButton.click();
    const logoutButton = await page.$('#logoutBtn');
    const logoutButtonText = await logoutButton.textContent();
    expect(logoutButtonText).toEqual("Logout");
});