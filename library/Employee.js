class Employee {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getCard() {

        return `<div class="card m-3" style="width: 16rem;">

            <div class="card-body ">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.getRole()}</p>
            </div>
            <ul class="list-group m-4">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
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


