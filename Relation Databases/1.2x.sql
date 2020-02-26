
-- a. Insert a new Region named "Faraway" with id equal to 6.
select * from region;
INSERT INTO Region 
VALUES(6, 'Faraway');

-- b. Insert a new Product named "Beach Ball" from Supplier with Id 1 and with Category 2. Leave the rest of the attributes empty.
select * from Products;
INSERT INTO Products (ProductName, SupplierID, CategoryID)
VALUES ('Beach Ball', 1, 2);
 
/* c. Change the name of the Region "Faraway" to "Very Near".
Note: The region inside of Suppliers and Customers is a RegionId. */
select * from region;
UPDATE Region
SET RegionDescription = 'Very Near'
WHERE RegionID = 6;

/* d. Update the UnitsInStock of Products by adding it the value of the UnitsInOrder. Then
update the UnitsInOrder to 0 (zero). */
select * from products;
UPDATE Products
SET UnitsInStock = UnitsInStock + UnitsOnOrder, UnitsOnOrder = 0;

-- e. Delete Region "Eastern".
select * from region;
DELETE FROM Region
WHERE RegionDescription = 'Eastern';

-- f. Delete Category "Condiments".
select * from categories;
DELETE FROM Categories
WHERE CategoryName = 'Condiments';