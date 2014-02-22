CalEvents = new Meteor.Collection('calevents');
Session.setDefault('editing_event', null);
Session.setDefault('showEditEvent', false);
Session.setDefault('lastMod', null);
Meteor.Router.add({
  '/':'homepage',
  '/calendar':'calendar'
})
Template.calendar.rendered = function() {
  $('#calendar').fullCalendar({
      dayClick:function(date, allDay, jsEvent, view) {
        CalEvents.insert({title:'New Event', start:date, end:date});
        Session.set('lastMod', new Date());
      },
      eventClick:function(calEvent, jsEvent, view){

      },
      events:function(start, end, callback){
        var events = [];
        calEvents = CalEvents.find();
        calEvents.forEach(function(evt){
          events.push({
            id:evt._id,
            title:evt.title,
            start:evt.start,
            end:evt.end
          });
        });
        callback(events);
      }
  });
}
Template.calendar.lastMod = function(){
  return Session.get('lastMod');
}