'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
		mongoose = require('mongoose'),
		User = mongoose.model('User'),
		faker = require('faker');

/**
 * Globals
 */
var user, user2;

/**
 * Unit tests
 */
describe('User Model Unit Tests:', function() {
	before(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			preferences: {
				beaches: []
			},
			provider: 'local'
		});
		user2 = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			preferences: {
				beaches: []
			},
			provider: 'local'
		});

		done();
	});

	describe('Method Save', function() {
		it('should begin with no users', function(done) {
			User.find({}, function(err, users) {
				users.should.have.length(0);
				done();
			});
		});

		it('should be able to save without problems', function(done) {
			user.save(done);
		});

		it('should fail to save an existing user again', function(done) {
			user.save();
			return user2.save(function(err) {
				should.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without first name', function(done) {
			user.firstName = '';
			return user.save(function(err) {
				should.exist(err);
				done();
			});
		});

		it('should add a beach object to user preferences', function(done) {
			// create beach preference object
			var beach = {
				name: faker.address.streetName(),
				latitude: faker.address.latitude(),
				longitude: faker.address.longitude(),
				state: faker.address.state(),
			};			
			
			// save the user
			user.save(function(){
				// push new beach selection to preferences
				user.preferences.beaches.push(beach);
				// set assertion
				user.preferences.beaches[0].name.should.match(beach.name);
				done();
			});
		})

	});

	after(function(done) {
		User.remove().exec();
		done();
	});
});