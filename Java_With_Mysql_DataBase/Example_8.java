package Java_With_Mysql_DataBase;

import java.sql.*;

public class Example_8 {
    
    public static void main(String[] args) {
        
         //select all records form database

         try{
            //step1 load the driver class  
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/java_mysql","root","root");  
  
            //step3 create the statement object  
            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery("SELECT * FROM USERS");

            while(resultSet.next()){
                
                System.out.println( 
                                        "ID : "   + resultSet.getInt("ID")       + "\t" +

                                        "NAME : " + resultSet.getString("NAME")  + "\t" +
                                        
                                        "AGE : "  + resultSet.getInt("AGE")       + "\t" + 

                                        "EMAIL : " + resultSet.getString("EMAIL") + "\t" + 

                                        "JOB : "   + resultSet.getString("JOB")   + "\t" + 

                                        "SALARY : " + resultSet.getInt("SALARY")
                
                                );
            }

            connection.close();
           
        }
        catch(Exception exception){
            System.out.println(exception);
        }

    }
}
