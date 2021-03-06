declare module owl {
    /**
     * owl.Router
     */
    export class Router {
        constructor(routes: Array<Route>, defaultRoute: Route, controller?: new () => Controller);

        /**
         * Opens page by path
         * @return Function to destroy controller
         */
        open(path: string): void;

        /**
         * Calls resolve callback
         */
        resolve(route: Route): boolean;

        /**
         * Runs the route
         * @return Function to destroy controller
         */
        run(path: string, route: Route): Function;

        /**
         * Adds a route
         */
        addRoute(route: Route): void;

        /**
         * Returns the route by path
         */
        getRoute(path: string): Route;

        /**
         * Sets default route
         */
        setDefaultRoute(route: Route): void;

        /**
         * Gets default route
         */
        getDefaultRoute(): Route;

        /**
         * Sets controller
         */
        setController(controller: new () => Controller): void;
        /**
         * Gets controller
         */
        getController(): new () => Controller;
    }
}