//package Java_With_Mysql_DataBase;

import java.sql.*;

public class Example_1 {
    
    public static void main(String[] args) {
        
        //create connection with mysql database

        try{
            //step1 load the driver class  
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306","root","root");  
  
            //step3 create the statement object  
            Statement statement = connection.createStatement();
                
            statement.executeUpdate("CREATE DATABASE JAVA_MYSQL");

            statement.executeUpdate("USE JAVA_MYSQL");

            System.out.println("\n\nNote : Check your Mysql Server ( QUERY ==> ' SHOW DATABASES ; ' ) \n\n");

            connection.close();
           
        }
        catch(Exception exception){
            System.out.println(exception);
        }

    }
}
