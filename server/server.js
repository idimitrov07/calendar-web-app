if (Meteor.isServer) {
	CalEvents = new Meteor.Collection('calevents'); 
	//remove all events method
	Meteor.startup(function() {
		return Meteor.methods({
			removeAllEvents: function() {
				return CalEvents.remove({});
			}
		});
	});
}