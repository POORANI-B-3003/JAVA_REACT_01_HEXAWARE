-----------------------------------
-- Demo 1: Hello World
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  name VARCHAR2(20) := 'Poorani ';
BEGIN
  DBMS_OUTPUT.PUT_LINE('Your name is ' || name);
END;
/

-----------------------------------
-- Demo 2: Personal Details
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  name VARCHAR2(20) := 'Poorani';
  age INT := 21;
  dept VARCHAR(20) := 'CSE';
BEGIN
  DBMS_OUTPUT.PUT_LINE('Your name is ' || name || ' Age is ' || age || ' dept is ' || dept);
END;
/

-----------------------------------
-- Demo 3: Sum of two numbers
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  a NUMBER := &a;
  b NUMBER := &b;
  c NUMBER;
BEGIN
  c := a + b;
  DBMS_OUTPUT.PUT_LINE('Sum of two numbers: ' || c);
END;
/

-----------------------------------
-- Demo 4: Total Salary with Bonus Percentage
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  salary INT := &salary;
  bonus INT := &bonus;
  totalsalary INT;
BEGIN
  totalsalary := salary + (salary * bonus / 100);
  DBMS_OUTPUT.PUT_LINE('Your total salary is ' || totalsalary);
END;
/

-----------------------------------
-- Demo 5: Conditional Bonus Calculation
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  salary NUMBER := &salary;
  bonus NUMBER;
  tsal NUMBER;
BEGIN
  IF salary <= 5000 THEN
    bonus := salary * 5 / 100;
  ELSE
    bonus := salary * 10 / 100;
  END IF;
  tsal := bonus + salary;
  DBMS_OUTPUT.PUT_LINE('Your salary is ' || salary);
  DBMS_OUTPUT.PUT_LINE('Your bonus is ' || bonus);
  DBMS_OUTPUT.PUT_LINE('Your total salary is ' || tsal);
END;
/

-----------------------------------
-- Demo 6: User Verification
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  name VARCHAR2(100) := '&name';
  pwd  VARCHAR2(100) := '&pwd';
BEGIN
  IF name = 'Poorani' AND pwd = 'root' THEN
    DBMS_OUTPUT.PUT_LINE('USER VERIFIED');
  ELSE
    DBMS_OUTPUT.PUT_LINE('AUTHENTICATION FAILED');
  END IF;
END;
/

-----------------------------------
-- Demo 7: Factorial Calculation
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  n NUMBER := &enterANo;
  i NUMBER;
  fact NUMBER := 1;
BEGIN
  FOR i IN 1..n LOOP
    fact := fact * i;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('Factorial of number is ' || fact);
END;
/

-----------------------------------
-- Demo 8: Prime Number Check
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  n NUMBER := &n;
  i NUMBER;
BEGIN
  IF n <= 1 THEN
    DBMS_OUTPUT.PUT_LINE('Not prime');
    RETURN;
  END IF;
  FOR i IN 2..n - 1 LOOP
    IF MOD(n, i) = 0 THEN
      DBMS_OUTPUT.PUT_LINE('Not prime');
      RETURN;
    END IF;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('Prime');
END;
/

-----------------------------------
-- Demo 9: Update Student Fee
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  Roll NUMBER;
  Fee NUMBER;
BEGIN
  SELECT roll, fee INTO Roll, Fee FROM student WHERE roll = 101;
  IF Fee <= 200 THEN
    UPDATE student SET fee = fee + 100 WHERE roll = 101;
  ELSE
    UPDATE student SET fee = fee + 200 WHERE roll = 101;
  END IF;
  DBMS_OUTPUT.PUT_LINE(Roll || ' ' || Fee);
END;
/

-----------------------------------
-- Demo 10: Update Book Price
-----------------------------------
SET SERVEROUTPUT ON;

DECLARE
  sno NUMBER := &sno;
  price NUMBER;
  val VARCHAR2(1);
BEGIN
  SELECT IT_NONIT, price INTO val, price FROM books WHERE id = sno;
  IF val = 'Y' THEN
    UPDATE books SET price = price * 1.05 WHERE id = sno;
  ELSE
    UPDATE books SET price = price * 1.10 WHERE id = sno;
  END IF;
  DBMS_OUTPUT.PUT_LINE('Updated');
END;
/

-----------------------------------
-- Demo 11: Procedure Valid Age
-----------------------------------
CREATE OR REPLACE PROCEDURE validAge(age IN NUMBER) AS
BEGIN
  IF age > 18 THEN
    DBMS_OUTPUT.PUT_LINE('Valid');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Not valid');
  END IF;
END;
/

-----------------------------------
-- Demo 12: Procedure Total Salary
-----------------------------------
CREATE OR REPLACE PROCEDURE totalsal(sal IN NUMBER) AS
  bonus NUMBER;
  totalsalary NUMBER;
BEGIN
  IF sal = 5000 THEN
    bonus := sal * 5 / 100;
  ELSE
    bonus := sal * 10 / 100;
  END IF;
  totalsalary := sal + bonus;
  DBMS_OUTPUT.PUT_LINE('Total salary is ' || totalsalary);
END;
/

-----------------------------------
-- Demo 13: Function Total Salary
-----------------------------------
CREATE OR REPLACE FUNCTION totalsalfunc(sal IN NUMBER) RETURN NUMBER AS
  bonus NUMBER;
  totalsalary NUMBER;
BEGIN
  IF sal = 5000 THEN
    bonus := sal * 5 / 100;
  ELSE
    bonus := sal * 10 / 100;
  END IF;
  totalsalary := sal + bonus;
  RETURN totalsalary;
END;
/

-----------------------------------
-- Demo 14: Function Factorial
-----------------------------------
CREATE OR REPLACE FUNCTION factfind(num IN NUMBER) RETURN NUMBER AS
  fact NUMBER := 1;
  i NUMBER;
BEGIN
  FOR i IN 1..num LOOP
    fact := fact * i;
  END LOOP;
  RETURN fact;
END;
/

-----------------------------------
-- Demo 15: Procedure Total Salary with OUT params
-----------------------------------
CREATE OR REPLACE PROCEDURE totsal(salary IN NUMBER, bonus OUT NUMBER, total OUT NUMBER) AS
BEGIN
  bonus := salary * 0.05;
  total := salary + bonus;
END;
/

SET SERVEROUTPUT ON;

DECLARE
  bonus NUMBER;
  total NUMBER;
  s NUMBER := 5000;
BEGIN
  totsal(s, bonus, total);
  DBMS_OUTPUT.PUT_LINE('Total salary is: ' || total);
  DBMS_OUTPUT.PUT_LINE('Bonus is: ' || bonus);
END;
/

-----------------------------------
-- Demo 16: Procedure Find Salary by Dept
-----------------------------------
CREATE OR REPLACE PROCEDURE findsal(dept IN VARCHAR2, salary OUT NUMBER) AS
BEGIN
  IF dept = 'sales' THEN
    salary := 20000;
  ELSIF dept = 'admin' THEN
    salary := 30000;
  ELSE
    salary := 0;
  END IF;
END;
/

SET SERVEROUTPUT ON;

DECLARE
  dept VARCHAR2(20) := 'admin';
  salary NUMBER;
BEGIN
  findsal(dept, salary);
  DBMS_OUTPUT.PUT_LINE('Salary is ' || salary);
END;
/

-----------------------------------
-- Demo 17: Trigger Bank Transaction
-----------------------------------
CREATE OR REPLACE TRIGGER BankTr
AFTER INSERT ON transaction
FOR EACH ROW
WHEN (NEW.TRANS_TYPE = 'deposit')
BEGIN
  UPDATE customer
  SET balance = balance + :NEW.amount
  WHERE cust_id = :NEW.cust_id;
END;
/
