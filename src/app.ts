import * as express from 'express';

/**
 * Controllers (route handlers).
 */
import * as empController from "./controllers/employee-controller";

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

/**
 * Primary app routes.
 */
app.get("/GetAllEmployees", empController.getAllEmployees);

module.exports = app;