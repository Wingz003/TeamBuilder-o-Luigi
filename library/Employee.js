class Employee {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getCard() {

        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${this.name}
            <h5>${this.getRole()}</h5>
          </h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: ${this.email}</li>
          <li class="list-group-item">${this.getRoleSpecificInfo()}</li>
        </ul>
      </div>`
    }
    getRoleSpecificInfo() {

        return "";
    }
    getEmail() {

        return this.email;
    }

    getId() {

        return this.id;
    }

    getName() {

        return this.name;
    }

    getRole() {

        return "Employee";
    }
}

module.exports = Employee;


