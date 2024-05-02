// package Java_With_Mysql_DataBase;

import java.sql.*;

public class Example_6 {
    
    public static void main(String[] args) {
        
        //delete record from database

         try{
            //step1 load the driver class  
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/java_mysql","root","root");  
  
            //step3 create the statement object  
            Statement statement = connection.createStatement();

            statement.executeUpdate("DELETE FROM USERS WHERE NAME = 'BALAJI'");

            System.out.println("\n\nNote : Check your Mysql Server ( QUERY ==> ' SELECT * FROM USERS ; ' ) \n\n");

            connection.close();
           
        }
        catch(Exception exception){
            System.out.println(exception);
        }
        
    }
}
