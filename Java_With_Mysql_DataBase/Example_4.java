// package Java_With_Mysql_DataBase;

import java.sql.*;

public class Example_4 {
    
    public static void main(String[] args) {
        
        //select record from database

         try{
            //step1 load the driver class  
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/java_mysql","root","root");  
  
            //step3 create the statement object  
            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery("SELECT * FROM USERS");

            resultSet.next();

            System.out.println( 
                                    "ID : "   + resultSet.getInt("ID")       + "  " +

                                    "NAME : " + resultSet.getString("NAME")  + "  " +
                                    
                                    "AGE : "  + resultSet.getInt("AGE")       + "  " + 

                                    "EMAIL : " + resultSet.getString("EMAIL") + "  " + 

                                    "JOB : "   + resultSet.getString("JOB")   + "  " + 

                                    "SALARY : " + resultSet.getInt("SALARY")
             
                              );

            connection.close();
           
        }
        catch(Exception exception){
            System.out.println(exception);
        }

    }
}
