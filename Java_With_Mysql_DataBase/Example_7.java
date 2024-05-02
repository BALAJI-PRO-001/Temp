package Java_With_Mysql_DataBase;

import java.io.File;
import java.sql.*;
import java.util.Scanner;

public class Example_7 {
    
    public static void main(String[] args) {

        //read data from file
        File file = new File("Java_With_Mysql_DataBase\\Files\\UserRecords.csv");

        try{
            
            //step1 load the driver class  
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/java_mysql","root","root");  

            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO USERS VALUES (?,?,?,?,?,?)");

            //read data from file using scanner 
            Scanner scanner = new Scanner(file);

            int ID = 1; //create temporay id 
            
            while(scanner.hasNextLine()){

                //read each line from file and convert string array
                String rawdata[] = scanner.nextLine().split(",");
                
                preparedStatement.setInt(1, ID ++ );                         //insert id 

                preparedStatement.setString(2, rawdata[0]);                 //insert name

                preparedStatement.setInt(3,Integer.parseInt(rawdata[5]));   //insert age

                preparedStatement.setString(4, rawdata[2]);                 //insert email

                preparedStatement.setString(5, rawdata[6]);                 //insert job

                preparedStatement.setInt(6,Integer.parseInt(rawdata[8]));  //insert salary

                preparedStatement.executeUpdate(); //update changes
            
            }


            scanner.close(); //close the scanner

            connection.close(); //close the database connnection
        }
        catch(Exception exception){
            System.out.println(exception);
        }


        System.out.println("\n\nRecords Insert SuccessFully .....\n\n");

        System.out.println("\nNote : Check your Mysql Server ( QUERY ==> ' SELECT * FROM USERS ; '  )\n\n");


    }
}
