
/* a. List the product name and supplier id for all products supplied by Exotic Liquids,
Grandma Kelly's Homestead, and Tokyo Traders. */
SELECT Products.ProductName, Products.SupplierID
FROM Products
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
WHERE Suppliers.CompanyName IN ('Exotic Liquids', 'Grandma Kelly''s Homestead', 'Tokyo Traders');

-- b. List all products by name that are in the Seafood category.
SELECT Products.ProductName
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID
WHERE Categories.CategoryName LIKE 'Seafood';

-- c. List all (customer) company names from France with the Id of the Orders that they made (if it exists).
SELECT Customers.CompanyName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Orders.CustomerID = Customers.CustomerID
WHERE Customers.Country = 'France';

-- d. List all company names from France who do not have any orders.
SELECT Customers.CompanyName
FROM Customers
LEFT JOIN Orders ON Orders.CustomerID = Customers.CustomerID
WHERE Customers.Country = 'France' AND OrderID IS NULL;

/* e. List the last name of the employees that report to someone. For each of these
employees show also the last name of the person to whom the employee reports. */
SELECT Employees.LastName, Bosses.LastName
FROM Employees
JOIN Employees AS Bosses ON Employees.ReportsTo = Bosses.EmployeeID;

-- f. List all (supplier) companies by name that sell products in CategoryID 8.
SELECT DISTINCT Suppliers.CompanyName
FROM Suppliers
JOIN Products ON Suppliers.SupplierID = Products.SupplierID
WHERE Products.CategoryID = 8;

-- g. List all (supplier) companies by name that sell products in the Seafood category.
SELECT DISTINCT Suppliers.CompanyName
FROM Suppliers
JOIN Products ON Suppliers.SupplierID = Products.SupplierID
JOIN Categories ON Products.CategoryID = Categories.CategoryID
WHERE Categories.CategoryName = 'Seafood';

/* h. List the Order ID, the name of the company that placed the order, and the first and
last name of the associated employee. Only show orders placed after January 1, 1998
that shipped after they were required. Sort by Company Name. */
SELECT Orders.OrderID, Customers.CompanyName, Employees.FirstName, Employees.LastName
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
WHERE Orders.OrderDate > '1998-01-01' AND Orders.ShippedDate > Orders.RequiredDate;

-- i. List which products are provided by which suppliers.
SELECT Suppliers.CompanyName AS 'Supplier', Products.ProductName AS 'Product' 
FROM Suppliers
JOIN Products ON Products.SupplierID = Suppliers.SupplierID;

-- j. List the order ids and the associated employee names for orders that shipped after the required date.
SELECT Orders.OrderID, CONCAT(Employees.FirstName, ' ', Employees.LastName) AS 'Employee'
FROM Orders
JOIN Employees ON Orders.EmployeeID = Orders.EmployeeID
WHERE Orders.ShippedDate > Orders.RequiredDate;

/* k. List the total number of orders by Customer since December 31, 1996. The report
should only return rows for which the number of orders is greater than 15. */
select * from Orders;
SELECT Customers.CompanyName, COUNT(*) AS NumOfOrders
FROM Customers
JOIN Orders ON Orders.CustomerID = Customers.CustomerID
WHERE Orders.OrderDate > '1996-12-31'
GROUP BY Customers.CompanyName
HAVING COUNT(*) > 15;

-- l. List the number of employees and customers from each city that has employees in it.
select * from employees;

SELECT COUNT(*), City FROM Employees
WHERE Employees.City IN (SELECT DISTINCT City FROM Employees)

SELECT COUNT(*) FROM Customers
WHERE Customers.City IN (SELECT DISTINCT City FROM Employees)
