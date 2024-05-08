package Lists;
import java.util.*;

public class Example_4 {
  public static void main(String[] args) {
    /*
      Stack
      =====
      The stack is a linear data structure that is used to store the collection of objects.
      It is based on Last-In-First-Out (LIFO). 
      Java collection framework provides many interfaces and classes to store the collection of objects. 
      One of them is the Stack class that provides different operations such as push, pop, search, etc.
      In this section, we will discuss the Java Stack class, its methods, and implement the stack data structure in a Java program.
      But before moving to the Java Stack class have a quick view of how the stack works.
      The stack data structure has the two most important operations that are push and pop. 
      The push operation inserts an element into the stack and pop operation removes an element from the top of the stack.

      Methods 
      =======

      !Important =>  it also provides all the methods of the Java Vector class.

      1) .push(<element>)   =>  Pushes an item onto the top of this stack. This has exactly the same effect as:

      2) .empty()           =>  The method checks the stack is empty or not.
                                ReturnType: boolean

      3) .pop()             =>  Removes the object at the top of this stack and returns that object as the value of this function.                 

      4) .peek()            =>  The method looks at the top element of the stack without removing it.

      5) .search(<Object>)  =>  The method searches the specified object and returns the position of the object.
     */

    Stack <Integer> stack = new Stack<>();
    stack.push(100);
    stack.push(200);
    stack.push(300);

    System.out.println("\nStack Elements: " + stack + "\n");

  }
}
