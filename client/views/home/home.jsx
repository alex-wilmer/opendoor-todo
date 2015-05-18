Template.home.helpers({
  tasks: function () {
    return Tasks.find()
  }
})

Template.home.events({
  'submit #submitTask': function (event) {
    event.preventDefault()

    let task = {
      title: event.target.taskTitle.value,
      description: event.target.taskDescription.value
    }

    Tasks.insert(task)
  },

  'change .completeTask': function (event) {
    //event.preventDefault()

    Tasks.update(event.target.id, {
      $set: {
        completed: event.target.checked
      }
    })
  },

  'click .fa-close': function (event) {
    Tasks.remove(event.target.id)
  }
})
