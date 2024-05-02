// package Java_With_Mysql_DataBase;

import java.sql.*;

public class Example_2 {

    public static void main(String[] args) {
        
         //create table 

         try{
            //step1 load the driver class  
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/java_mysql","root","root");  
  
            //step3 create the statement object  
            Statement statement = connection.createStatement();

            statement.executeUpdate("CREATE TABLE USERS (ID INT, NAME VARCHAR(255), AGE INT, EMAIL VARCHAR(255), JOB VARCHAR(255), SALARY INT )");

            System.out.println("\n\nNote : Check your Mysql Server ( QUERY ==> ' DESC USERS ; ' ) \n\n");

            connection.close();
           
        }
        catch(Exception exception){
            System.out.println(exception);
        }


    }
    
}
