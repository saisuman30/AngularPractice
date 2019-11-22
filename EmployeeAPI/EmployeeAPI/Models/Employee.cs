using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }

        public string LastName  { get; set; }

        public int Age { get; set; }

        public double Salary { get; set; }

        public string Gender { get; set; }
    }
}
