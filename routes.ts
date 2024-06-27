/**
 * An array of routes that are accessible to the public
 * These routes do not require authenitcation
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in user to homepage
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];
