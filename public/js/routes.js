routie({
	'': function() {
		flux.doAction('gotoUrl', '');
	},
	'signin': function() {
		flux.doAction('gotoUrl', 'signin');
	},
	'signup': function() {
		flux.doAction('gotoUrl', 'signup');
	},
	'messages': function() {
		flux.doAction('gotoUrl', 'messages');
	},
	'new': function() {
		flux.doAction('gotoUrl', 'new');
	},
	'profile': function() {
		flux.doAction('gotoUrl', 'profile');
	},
	'*': function() {
		routie('');
	}
});