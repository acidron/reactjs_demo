var Message = React.createClass({
	deleteAction: function() {
		if (confirm("Message will be deleted...")) flux.doAction('deleteMessage', this.props.data.id);
	},
	render: function() {
		return (
			<div className="message">
				<div className="date">{this.props.data.created_at.slice(11)}</div>
				<div className="text">{this.props.data.message}<img onClick={this.deleteAction} src="imgs/ico_delete.png" /></div>
			</div>
		);
	}
})