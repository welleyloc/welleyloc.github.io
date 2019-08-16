var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage) {
        this.certList = [];
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.PhoneNumber = phoneNumber;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
        this.HourlyWage = hourlyWage;
    }
    Employee.prototype.details1 = function () {
        return "Name: " + this.FirstName + " " + this.LastName + "<br>Occupation: " + this.Occupation;
    };
    Employee.prototype.details2 = function () {
        return "Name: " + this.FirstName + " " + this.LastName + "<br>Phone: " + this.PhoneNumber + "<br> State: " + this.State + ", " + this.ZipCode;
    };
    Employee.prototype.details3 = function () {
        return "Name: " + this.FirstName + " " + this.LastName + "<br>Age: " + this.Age + "<br>Occupation: " + this.Occupation;
    };
    Employee.prototype.details4 = function () {
        return "Name: " + this.FirstName + " " + this.LastName + "<br>Phone: " + this.PhoneNumber + "<br>State: " + this.State;
    };
    Employee.prototype.weeklywage = function (workHours) {
        if (workHours)
            return String(workHours * this.HourlyWage * 7);
        else
            return String(this.HourlyWage * 40);
    };
    Employee.prototype.addCerts = function (cert) {
        this.certList.push(cert);
        return cert;
    };
    Employee.prototype.iEmployee = function (interf) {
        return new Employee(interf.FirstName, interf.LastName, interf.Age, interf.PhoneNumber, interf.State, interf.ZipCode, interf.Occupation, interf.HourlyWage);
    };
    return Employee;
}());
var person1 = new Employee("John ", "Doe", 30, "(438) 383-8383", "New York", 10002, "Software Developer", 40);
var person2 = new Employee("Amy", "Johnson", 32, "(229) 322-2829", "Alabama", 93828, "Associate Professor", 35);
var person3 = new Employee("Timmy", "Higgins", 50, "(289) 939-2829", "California", 91210, "Plumber", 15);
var person4 = new Employee("Johnny", "Apple", 45, "(848) 828-2818", "Oregon", 99999, "High School Teacher", 25);
person2.addCerts("PhD");
person2.addCerts("MS");
person3.addCerts("BS");
person4.addCerts("BA");
document.getElementById("main1").innerHTML = person1.details1();
document.getElementById("main2").innerHTML = person2.details2() + "<br>Weekly wage: $" + person2.weeklywage(8);
document.getElementById("main3").innerHTML = person3.details3() + "<br>Degree: " + person3.certList[0];
document.getElementById("main4").innerHTML = person4.details4() + "<br>Weekly wage: $" + person4.weeklywage(8);
var person5i = { FirstName: "Megan", LastName: "Fox", Occupation: "Astronaut" };
var person5 = person4.iEmployee(person5i);
document.getElementById("main5").innerHTML = "Johnny Apple's illegal second identity<br>" + person5.details1();
