// package Java_With_Mysql_DataBase;

import java.sql.*;

public class Example_3 {
    
    public static void main(String[] args) {
        
        //insert single record into table

         try{
            //step1 load the driver class  
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/java_mysql","root","root");  
  
            //step3 create the statement object  
            Statement statement = connection.createStatement();

            statement.executeUpdate("INSERT INTO USERS(ID,NAME,AGE,EMAIL,JOB,SALARY) VALUES (1,'RAM KUMAR',20,'ramkumar@gmail.com','Pro',10000)");

            System.out.println("\n\nNote : Check your Mysql Server ( QUERY ==> ' SELECT * FROM USERS ; ' ) \n\n");

            connection.close();
           
        }
        catch(Exception exception){
            System.out.println(exception);
        }
    }
}
