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
					console.log('SUCCESS!', response);
					updater.set({
						isSignedIn: true,
						url: 'messages',
						profile: {
							firstName: response.firstname,
							lastName: response.lastname,
						}
					});
				})
				.fail(function(resp){
					console.log(resp.responseJSON);
					updater.set({
						errors: true
					})
				});
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
				.error(function(response){
					console.log('Error on deleting', response);
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