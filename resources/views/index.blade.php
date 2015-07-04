<html>
	<head>
		<script src="js/routie.min.js"></script>
		<script src="js/react-with-addons.js"></script>
		<script src="js/JSXTransformer.js"></script>
		<script src="js/jquery.min.js"></script>
		<script src="js/fluxify.min.js"></script>
		<script type="text/jsx" src="js/Store.js"></script>
		<script type="text/jsx" src="js/components/Logo.js"></script>
		<script type="text/jsx" src="js/components/SignIn.js"></script>
		<script type="text/jsx" src="js/components/SignUp.js"></script>
		<script type="text/jsx" src="js/components/SignForm.jsx"></script>
		<script type="text/jsx" src="js/components/NewMessage.jsx"></script>
		<script type="text/jsx" src="js/components/Messages.js"></script>
		<script type="text/jsx" src="js/components/Message.js"></script>
		<script type="text/jsx" src="js/components/Profile.js"></script>
		<script type="text/jsx" src="js/components/App.jsx"></script>
		<script type="text/jsx" src="js/routes.js"></script>
		<script>
		var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
		$(function() {
			$.ajaxSetup({
		        headers: {
		            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		        }
		    });
		});
		var flux = fluxify;
		</script>
		<link rel="stylesheet" href="css/app.css">
		<meta name="csrf-token" content="{{ csrf_token() }}" />
	</head>
	<body>
	</body>
</html>