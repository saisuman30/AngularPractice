using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public List<Employee> GetEmployees()
        {
            var employees = new List<Employee>();

            employees.Add(new Employee { Id = 101, FirstName = "abcOne", LastName = "xyzOne", Age = 23, Salary = 72000.343, Gender = "Male" });
            employees.Add(new Employee { Id = 102, FirstName = "abcTwo", LastName = "xyzTwo", Age = 33, Salary = 132000.4333, Gender = "Male" });
            employees.Add(new Employee { Id = 103, FirstName = "abcThree", LastName = "xyzthree", Age = 26, Salary = 20300.6533, Gender = "Female" });
            employees.Add(new Employee { Id = 104, FirstName = "abcFour", LastName = "xyzFour", Age = 29, Salary = 52000.3773, Gender = "Male" });
            employees.Add(new Employee { Id = 105, FirstName = "abcFive", LastName = "xyzFive", Age = 22, Salary = 52000.33333, Gender = "Female" });
            employees.Add(new Employee { Id = 106, FirstName = "abcSix", LastName = "xyzSix", Age = 21, Salary = 72000.33663, Gender = "Male" });

            return employees;

        }
    }
}