var app = new function() {
  this.el = document.getElementById('tasks');
  // this.el2 = document.getElementById('date');

  this.tasks = [];
  this.date = [];
  
  
  this.FetchAll = function() {
    var data = '';

    if (this.tasks.length > 0) {
              for (i = 0; i < this.tasks.length; i++) {
                data += '<tr>';
                data += '<td>'+(i+1) +"." + '</td>';  // data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
                data += '<td>'+ this.tasks[i]+'</td>'
                data += '<td>'+  this.date[i]+'</td>'
                data += '<td><button onclick="app.Edit(' + i + ')" style="padding-right: 10px;" class="btn btn-warning">Edit</button>'  + '<button  style="margin-left: 2px;"onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
             
                data += '</tr>';
              }
            }

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('name');
    el2 = document.getElementById('date');
    // Get the value
    var task = el.value;
    var date = el2.value;
    if (task) {
      // Add the new value
      this.tasks.push(task.trim());
      this.date.push(date.trim());
      // Reset input value
      el.value = '';
      el2.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-todo');
    var el2 = document.getElementById('edit-todo2');
    // Display value in the field
    el.value = this.tasks[item];
    el2.value = this.date[item];
    // Display fields
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      // Get value
      var task = el.value;
      var date = el2.value;

      if (task) {
        // Edit value
        self.tasks.splice(item, 1, task.trim());
        self.date.splice(item, 1, date.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  
  // this.Edit = function (item) {
  //   var el = document.getElementById('name');
  //   var el2 = document.getElementById('date');
  //   // var el = document.getElementById('edit-todo');

  //   // Display value in the field
  //   el.value = this.tasks[item];
  //   el2.value = this.date[item2];
  //   // Display fields
  //   document.getElementById('name1').style.display = 'block';
  //   document.getElementById('date1').style.display = 'block';
  //   // self = this;

  //   document.getElementById('save-edit').onsubmit = function() {
  //     // Get value
  //     var task = el.value;
  //     var date = el2.value;
  //     if (task) {
  //       // Edit value
  //       this.tasks.splice(item, 1, task.trim());
  //       this.date.splice(item, 1, date.trim());
  //       // Display the new list
  //       self.FetchAll();
  //       // Hide fields
  //       CloseInput();
  //     }
  //   }
  // };
  
    this.Delete = function (item) {
      // Delete the current row
      this.tasks.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Employe';
  
      if (data) {
          if(data ==1){
              name = 'Employe'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }