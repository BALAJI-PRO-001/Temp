package Queues;
import java.util.*;

public class Example_1 {
  public static void main(String[] args) {
    /*
      Queue
      =====
      The interface Queue is available in the java.util package and does extend the Collection interface.
      It is used to keep the elements that are processed in the First In First Out (FIFO) manner.
      It is an ordered list of objects, where insertion of elements occurs at the end of the list, and removal of elements occur at the beginning of the list.
      Being an interface, the queue requires, for the declaration, a concrete class, and the most common classes are the LinkedList and PriorityQueue in Java. 
      Implementations done by these classes are not thread safe. 
      If it is required to have a thread safe implementation, PriorityBlockingQueue is an available option.

      The important points about the Java Queue class are:
      ====================================================
      1) FIFO concept is used for insertion and deletion of elements from a queue.
      2) PriorityQueue, ArrayBlockingQueue and LinkedList are the implementations that are used most frequently
      3) The NullPointerException is raised, if any null operation is done on the BlockingQueues
      4) Those Queues that are present in the util package are known as Unbounded Queues.
      5) Those Queues that are present in the util.concurrent package are known as bounded Queues.
      6) All Queues barring the Deques facilitates removal and insertion at the head and tail of the queue; respectively. In fact, deques support element insertion and removal at both ends.


      Methods
      =======

      !Important =>  The Java Queue provides support for all of the methods of the Collection interface including deletion, insertion, etc.

      1) .add(<element>)  =>   It is used to insert the specified element into this queue and return true upon success.
                               ReturnType: boolean

      2) .offer(<element>)  =>  It is used to insert the specified element into this queue.
                                ReturnType: boolean

      3) .remove()        =>  It is used to retrieves and removes the head of this queue. 
      
      4) .poll()          =>  It is used to retrieves and removes the head of this queue, or returns null if this queue is empty.

      5) .element()       =>  It is used to retrieves, but does not remove, the head of this queue.

      6) .peek()          =>   	It is used to retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
  
     */

    Queue <Integer> queue = new LinkedList<>();
    queue.add(100);
    queue.add(200);
    queue.add(300);
    queue.add(400);

    System.out.println("\nQueue Elements: " + queue + "\n");

  }
}
