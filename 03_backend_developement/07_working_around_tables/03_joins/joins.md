# Joins

1. Write a query in SQL to display the first name, last name, department number, and department name for each employee.

select first_name, last_name, department_id, name from employee LEFT JOIN department ON employee.department_id = department.id


2. Write a query in SQL to display the first and last name, department, city, and state province for each employee.

select first_name, last_name, name, city, state_province
from (employee INNER JOIN department ON employee.department_id = department.id)
INNER JOIN location ON location_id = location.id


3. Write a query in SQL to display the first name, last name, salary, and job grade for all employees.

select first_name, last_name, salary, level from (employee LEFT JOIN job_grade ON (salary > lowest_salary AND salary < highest_salary))


4. Write a query in SQL to display the first name, last name, department number and department name, for all employees
for departments 8 or 4.

select first_name, last_name, department_id, name from (employee inner join department ON department_id = department.id ) where department_id = 8 OR department_id = 4



5. Write a query in SQL to display those employees who contain a letter z to their first name and also display their
last name, department, city, and state province.

select first_name, last_name, name, city, state_province from (employee INNER JOIN department ON department_id = department.id) INNER JOIN location ON location_id = location.id where first_name like '%z%'


6. Write a query in SQL to display all departments including those where does not have any employee.

select first_name, last_name, name, city, state_province from (employee LEFT JOIN department ON department_id = department.id) LEFT JOIN location ON location_id = location.id where first_name like '%z%'


7. Write a query in SQL to display the first and last name and salary for those employees who earn less than the
employee earn whose number is 83.

select first_name, last_name, salary from employee where salary < (select salary from employee where employee.id = 83);


8. Write a query in SQL to display the first name of all employees including the first name of their manager.

select employee.first_name, MG.first_name from employee
INNER JOIN employee AS MG ON MG.id = employee.manager_id


9. Write a query in SQL to display the department name, city, and state province for each department.

10. Write a query in SQL to display the first name, last name, department number and name, for all employees who have or
have not any department.

11. Write a query in SQL to display the first name of all employees and the first name of their manager including those
who does not working under any manager.

12. Write a query in SQL to display the first name, last name, and department number for those employees who work in the
same department as the employee who hold the last name as Taylor.

13. Write a query in SQL to display the job title, department name, full name (first and last name ) of employee, and
starting date for all the jobs which started on or after 1st January, 1993 and ending with on or before 31 August, 1997.

14. Write a query in SQL to display job title, full name (first and last name ) of employee, and the difference between
maximum salary for the job and salary of the employee.

15. Write a query in SQL to display the name of the department, average salary and number of employees working in that
department who got commission.

16. Write a query in SQL to display the full name (first and last name ) of employee, and job title of those employees
who is working in the department which ID is 8.

17. Write a query in SQL to display the name of the country, city, and the departments which are running there.

18. Write a query in SQL to display department name and the full name (first and last name) of the manager.

19. Write a query in SQL to display job title and average salary of employees.

20. Write a query in SQL to display the details of jobs which was done by any of the employees who is presently earning
a salary on and above 12000.

22. Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.

23. Write a query in SQL to display the employee ID, job name, number of days worked in for all those jobs in department
8.

24. Write a query in SQL to display the full name (first and last name), and salary of those employees who working in
any department located in London.

25. Write a query in SQL to display full name(first and last name), job title, starting and ending date of last jobs for
those employees with worked without a commission percentage.

26. Write a query in SQL to display the department name and number of employees in each of the department.

27. Write a query in SQL to display the full name (fisrt and last name ) of employee with ID and name of the country
presently where (s)he is working.
