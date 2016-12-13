/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/tickets              ->  index
 */

'use strict';

// Gets a list of Tickets
export function index(req, res) {
  res.json([]);
}
