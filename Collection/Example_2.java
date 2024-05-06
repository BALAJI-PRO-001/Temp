import java.util.*;

public class Example_2 {
  public static void main(String[] args) {
    /*
        LinkedList
        ==========
        Java LinkedList class uses a doubly linked list to store the elements. 
        It provides a linked-list data structure. 
        It inherits the AbstractList class and implements List and Deque interfaces.

        The important points about the Java LinkedList class are:
        ========================================================
        1) Java LinkedList class can contain duplicate elements.
        2) Java LinkedList class maintains insertion order.
        3) Java LinkedList class is non synchronized.
        4) In Java LinkedList class, manipulation is fast because no shifting needs to occur.
        5) Java LinkedList class can be used as a list, stack or queue.


        Constructor
        ===========

        1) LinkedList()  =>  It is used to construct an empty list.

        2) LinkedList(<Collection>)   =>  It is used to construct a list containing the elements of the specified collection, 
                                          in the order, they are returned by the collection's iterator.


            
        Methods
        =======  
        
        Common Methods
        ==============
          1) add(<element>) 
          2) addAll(<Collection>)
          3) addAll(<index>, <Collection>)
          4) clone() 
          5) contains(<Object>)
          6) get()
          7) remove(<index>)
          8) set(<index>, <element>)
          9) toArray()
          10) size()
          11) clear()


        1) .addFirst(<element>) =>  It is used to insert the given element at the beginning of a list.

        2) .addLast(<element>)  =>  It is used to append the given element to the end of a list.  

        3) .descendingIterator()  => It is used to return an iterator over the elements in a deque in reverse sequential order.
                                     
                                     Example
                                     -------
                                     Iterator <Integer> iterator = list.descendingIterator();
     
                                     while (iterator.hasNext()) {
                                        System.out.println(iterator.next());
                                     }

        4) .element()           =>  It is used to retrieve the first element of a list.                            

        5) .getFirst()          =>  It is used to return the first element in a list.

        6) .getLast()           =>  It is used to return the last element in a list.

        7) .indexOf(<Object>)   =>  It is used to return the index in a list of the first occurrence of the specified element, 
                                    or -1 if the list does not contain any element.

        8) .lastIndexOf(<Object>) => It is used to return the index in a list of the last occurrence of the specified element,
                                     or -1 if the list does not contain any element.                             
     */

     LinkedList <Integer> list = new LinkedList<>();
     list.addLast(100);
     list.addLast(200);
     list.addLast(300);
     

     System.out.println(list.indexOf(200));


     System.out.println("\nList Elements: " + list + "\n");
  }
}
