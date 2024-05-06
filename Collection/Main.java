import java.util.ArrayList;

class User {
  String name = null;
  String email = null;
  String password = null;

  User(String name, String email, String password) {
    this.name = name;
    this.email = email;
    this.password =password;
  }

  public void printUserInfo() {
    System.out.println("\nName: " + name);
    System.out.println("Email: " + email);
    System.out.println("Password: " + password);
  }
}


public class Main {
  public static void main(String[] args) {

    User user1 = new User("Ram", "ram@gmail.com", "ram1234");
    User user2 = new User("Sam", "sam@gmail.com", "sam1234");
    User user3 = new User("kumar", "kumar@gmail.com", "kumar1234");
    
    ArrayList <User> users = new ArrayList<>();
    users.add(user1);
    users.add(user2);
    users.add(user3);

    for (User user : users) {
      user.printUserInfo();
    }

  }
}
