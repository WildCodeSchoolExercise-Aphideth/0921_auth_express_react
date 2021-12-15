// Ce fichier contient toutes les routes disponibles c'est le ROUTER de notre serveur
// Il importe tous les controllers

import homeController from '../controllers/homeController.js';
import securityController from '../controllers/securityController.js';

// Il exporte toutes les routes de l'application
export const setupRoutes = (app) => {
    app.use('/home', homeController);
    app.use('/security', securityController);
    // ... les autres routes ...
}