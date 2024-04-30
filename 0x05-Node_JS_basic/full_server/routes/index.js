import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Bind the route to appropriate handler in the given Express application
 * @param {Express} app The Express application.
 * @author El Azbi Fouad
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
