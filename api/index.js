import serverless from 'serverless-http';
import app from '../backend/index.js'; // your Express app that exports "app"
export default serverless(app);
