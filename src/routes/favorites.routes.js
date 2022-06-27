const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../controllers/favorites.controller');
const jwtCheck = require('../middlewares/jwtCheck');

/**
 * @swagger
 * /favorites/{email}:
 *   get:
 *     description: Use to request the favorites of a user.
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Favorites
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: email of the user
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/:email', jwtCheck, favoritesCtrl.getFavorites);

router.post('/', jwtCheck, favoritesCtrl.addFavorite);

router.delete('/', jwtCheck, favoritesCtrl.removeFavorite);

module.exports = router;