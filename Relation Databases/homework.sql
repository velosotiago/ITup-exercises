/* 1. List the product name and supplier id for all products supplied by Exotic Liquids, Grandma
Kelly's Homestead, and Tokyo Traders. */
SELECT ProductName, p.SupplierID
FROM Products p
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE CompanyName IN ('Exotic Liquids', 'Grandma Kelly''s Homestead', 'Tokyo Traders');

-- 2. List all products by name that are in the Seafood category.
SELECT ProductName FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID
WHERE CategoryName = 'Seafood';

-- 3. List all companies by name that sell products in CategoryID 8.
SELECT CompanyName FROM Suppliers s
JOIN Products p ON s.SupplierID = p.SupplierID
WHERE CategoryID = 8;

-- 4. List all companies by name that sell products in the Seafood category.
SELECT CompanyName FROM Suppliers s
JOIN Products p ON s.SupplierID = p.SupplierID
JOIN Categories c ON p.CategoryID = c.CategoryID
WHERE CategoryName = 'Seafood';

/* 5. List the Order ID, the name of the company that placed the order, and the first and last
name of the associated employee. Only show orders placed after January 1, 1998 that
shipped after they were required. Sort by Company Name. */
SELECT OrderID, CompanyName, CONCAT(FirstName, ' ', LastName) EmployeeName FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Employees e ON o.EmployeeID = e.EmployeeID
WHERE o.OrderDate > '1998-1-1' AND o.ShippedDate > RequiredDate;

-- 6. List which products are provided by which suppliers.
SELECT ProductName, CompanyName FROM Products p
JOIN Suppliers s ON p.SupplierID = s.SupplierID;

/* 7. List the order ids and the associated employee names for orders that shipped after the
required date. */
SELECT * from orders;
SELECT OrderID, CONCAT(FirstName, ' ', LastName) EmployeeName FROM Orders o
JOIN Employees e ON o.EmployeeID = e.EmployeeID
WHERE ShippedDate > RequiredDate;

/* 8. List the total quantity of products (from the Order_Details table) ordered. Only show records
for products for which the quantity ordered is fewer than 200. */
SELECT ProductName, SUM(Quantity) AS Quantity FROM "Order Details" od
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY ProductName
HAVING SUM(Quantity) < 200;

/* 9. List the total number of orders by Customer since December 31, 1996. The report should only
return rows for which the number of orders is greater than 15. */
SELECT COUNT(*) AS Orders, CompanyName FROM Customers c
JOIN Orders o ON o.CustomerID = c.CustomerID
GROUP BY CompanyName
HAVING COUNT(*) > 15;

/* 10.List the company name, order id, and total price of all products of which Northwind has sold
more than $10,000 worth. There is no need for a GROUP BY clause in this report. */
select * from products;
select * from "Order Details";
SELECT CompanyName, o.OrderID, od.UnitPrice*Quantity AS TotalPrice FROM Customers c
JOIN Orders o ON o.CustomerID = c.CustomerID
JOIN "Order Details" od ON od.OrderID = o.OrderID
WHERE od.UnitPrice*Quantity > 10000;

-- 11.List the number of employees and customers from each city that has employees in it.
SELECT c.City, COUNT(*) AS 'NumOfCustomers', ec.NumOfEmployees FROM Employees e
RIGHT JOIN Customers c ON c.City = e.City
FULL JOIN (
SELECT City, COUNT(*) AS 'NumOfEmployees' FROM Employees
GROUP BY City
) AS ec ON ec.City = c.City
GROUP BY c.City, NumOfEmployees;
-- DOESNT WORK --

/* 12. List the company names and faxes for all customers. If the customer doesn't have a fax, the
report should show "No Fax" in that field. */
SELECT CompanyName, 
  CASE WHEN Fax IS NOT NULL THEN Fax
  ELSE 'No Fax' 
END AS Fax
FROM Customers;

/* 13. Number of products that were bought by customers from the same country as their supplier. */
SELECT SUM(od.Quantity) AS ProductsSoldInSupplyCountry
FROM "Order Details" od
JOIN Orders o ON od.OrderID = o.OrderID
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Suppliers s ON p.SupplierID = s.SupplierID
WHERE c.Country = s.Country;

-- 14.Total list of known countries.
SELECT DISTINCT Country FROM Customers
UNION
SELECT DISTINCT Country FROM Suppliers
UNION
SELECT DISTINCT Country FROM Employees;

-- 15.Supplier countries that haven't sold any product.
SELECT DISTINCT Country
FROM Suppliers s
JOIN Products p ON p.SupplierID = s.SupplierID
LEFT JOIN "Order Details" od ON od.ProductID = p.ProductID;

-- 16.Supplier countries that did not supply clients in their own country.
SELECT DISTINCT Country


