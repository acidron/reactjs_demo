var Store = fluxify.createStore({
	id: 'mainStore',
	initialState: {
		url: window.location.hash.substr(1),
		isSignedIn: null,
		errors: null,
		messages: [],
		profile: {
			firstname: '',
			lastname: ''
		}
	},
	actionCallbacks: {
		gotoUrl: function(updater, urlToGo) {
			updater.set({url: urlToGo});
		},

		checkAuth: function(updater) {
			$.get('auth/isLogin')
				.success(function(response) {
					updater.set({
						isSignedIn: (response.signed == true)
					});
					if (response.signed == true) {
						updater.set({
							profile: {
								firstname: response.firstname,
								lastname: response.lastname
							}
						});
					}
				});
		},

		signIn: function(updater, credentials) {
			$.post('auth/login', credentials)
				.success(function(response) {
					updater.set({
						isSignedIn: true,
						url: 'messages',
						profile: {
							firstname: response.firstname,
							lastname: response.lastname,
						}
					});
				})
				.fail(function(resp){
					updater.set({
						errors: true
					})
				});
		},

		signUp: function(updater, data) {
			data.password_confirmation = data.password;
			$.post('auth/register', data)
				.success(function() {
					updater.set({
						isSignedIn: true,
						url: 'messages',
						profile: {
							firstname: data.firstname,
							lastname: data.lastname,
						}
					});
				})
				.fail(function(resp) {
					updater.set({
						errors: true
					})
				})
		},

		signOut: function(updater) {
			$.get('auth/logout').success(function() {
				updater.set({isSignedIn: false});
			});
		},

		resetUserError: function(updater) {
			updater.set({errors: null});
		},
		getMessages: function(updater) {
			$.get('messages').success(function(response) {
				updater.set({messages: response})
			});
		},
		postMessage: function(updater, message) {
			$.post('messages', {message: message})
				.success(function() {
					// reload messages then
					this.trigger('messageHasBeenPosted');
					flux.doAction('getMessages');
					flux.doAction('gotoUrl', 'messages');
				}.bind(this))
				.fail(function() {
					updater.set({errors: 'Post message failed!'});
				});
		},
		deleteMessage: function(updater, id) {
			$.ajax('messages/' + id, {method: 'DELETE'})
				.then(function() {
					var index;
					for (var i in this.messages) {
						if (this.messages[i].id == id) {
							index = i;
							break;
						}
					}
					if (index != undefined) {
						var newMessages = this.messages.slice(); //slice is to clone array
						newMessages.splice(index, 1);
						updater.set({
							messages: newMessages
						});
					}
				}.bind(this))
				.fail(function(response){
					console.log('Error on deleting', response);
				});			
		},
		saveProfile: function(updater, firstname, lastname) {
			var payload = {
				firstname: firstname,
				lastname: lastname
			};
			$.ajax('profile', {method: 'PUT', data: payload})
				.then(function() {
					updater.set({profile: payload})
				})
				.fail(function(response) {
					console.log('Error on updating profile.', response);
				});
		},
		logout: function(updater) {
			$.get('auth/logout').success(function() {
				updater.set({
					isSignedIn: false,
					url: 'signin',
					profile: {}
				});
			});
		}

	}
});