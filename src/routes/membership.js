const memberships = require('express').Router()
const {createMembership, listMembership} = require('../controllers/memberships')

memberships.post('/', createMembership)
memberships.get('/', listMembership)

module.exports = memberships