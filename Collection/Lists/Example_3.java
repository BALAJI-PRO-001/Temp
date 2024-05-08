package Lists;
import java.util.*;

public class Example_3 {
  public static void main(String[] args) {
      /*
        Vector 
        ======
        Vector is like the dynamic array which can grow or shrink its size. 
        Unlike array, we can store n-number of elements in it as there is no size limit.
        It is a part of Java Collection framework since Java 1.2. It is found in the java.util package and implements the List interface, 
        so we can use all the methods of List interface here.
        It is recommended to use the Vector class in the thread-safe implementation only. 
        If you don't need to use the thread-safe implementation, you should use the ArrayList, the ArrayList will perform better in such case.
        The Iterators returned by the Vector class are fail-fast. In case of concurrent modification, it fails and throws the ConcurrentModificationException.


        The important points about the Java Vector class are:
        =====================================================
        1) Vector is synchronized.
        2) Java Vector contains many legacy methods that are not the part of a collections framework.


        Constructor
        ===========

        1) Vector()   =>  t constructs an empty vector with the default size as 10.

        2) Vector(<initialCapacity>)  =>  It constructs an empty vector with the specified initial capacity and with its capacity increment equal to zero.

        3) Vector(<Collection>) =>  It constructs a vector that contains the elements of a collection,
        

        Methods
        =======
          
        Common Methods
        ==============
          1) add(<element>) 
          2) addAll(<Collection>)
          3) addAll(<index>, <Collection>)
          4) clone() 
          5) contains(<Object>)
          6) clear()
          7) get(<index>)
          8) removeIf(<Collection>)
          9) retainAll(<Collection>)
          10) set(<index>, <element>)
          11) size()
          12) sort()


        1) .addElement(<element>)   =>  Adds the specified component to the end of this vector, increasing its size by one. 
                                        The capacity of this vector is increased if its size becomes greater than its capacity.

        2) .capacity()              =>  Returns the current capacity of this vector.

        3) .containsAll(<Collection>)   =>  Returns true if this Vector contains all of the elements in the specified Collection.

        4) .copyInto(<ObjectArray>) =>  Copies the components of this vector into the specified array.

                                        Example
                                        -------
                                        Vector <Integer> vector = new Vector<>();
                                        vector.add(100);
                                        vector.add(200);
                                        vector.add(300);
       
                                        Integer[] arr = new Integer[3];

                                        vector.copyInto(arr);

                                        for (int element : arr) {
                                           System.out.println(element);
                                        }


        5) .ensureCapacity(<minCapacity>)  =>  Increases the capacity of this vector, 
                                               if necessary, to ensure that it can hold at least the number of
                                               components specified by the minimum capacity argument.   
                                               
        6) .equals(<Object>)      =>   Compares the specified Object with this Vector for equality

                                       Example
                                       -------    
                                       vector1.equals(vector2)       
                                       
        7) .firstElement()        =>   Returns the first component (the item at index 0) of this vector.
        
        9) .lastElement()         =>   Returns the last component of the vector.   
        
        10) .forEach(<Consumer>)   =>   Performs the given action for each element of the Iterable until all elements have been processed or the action throws an exception.

                                       Example
                                       ------- 
                                       vector.forEach((element) -> {
                                         System.out.println(element);
                                       });

        11) .hasCode()             =>   Returns the hash code value for this Vector.

        12) .elementAt(<index>)   =>   Returns the component at the specified index.

        13) .indexOf(<Object>)    =>   Returns the component at the specified index.
        
        14) .insertElementAt(<Object>, <index>)  =>  Inserts the specified object as a component in this vector at the specified index.

        15) .isEmpty()            =>   true if and only if this vector has no components, that is, its size is zero; false otherwise

        16) .iterator()           =>   Returns an iterator over the elements in this list in proper sequence.

                                       Example
                                       -------
                                       Iterator <Integer> iterator = vector.iterator();

                                       while (iterator.hasNext()) {
                                         System.out.println(iterator.next());
                                       } 

        17) .lastIndexOf(<Object>)  =>  Returns the index of the last occurrence of the specified element in this vector

        18) .removeAllElements()    =>  Removes all components from this vector and sets its size to zero.

        19) .removeElementAt(<index>)  =>  Deletes the component at the specified index.

        20) .removeElement(<Object>)   =>   Deletes the specified component in the list.

        21) .subList(<formIndex>, <toIndex>)  =>  Returns a view of the portion of this List between fromIndex, inclusive, and toIndex, exclusive.

        22) .toString()  =>  It is used to get a string representation of the vector.


      */

      Vector <Integer> vector = new Vector<>(10);
      vector.add(100);
      vector.add(200);
      vector.add(300);
      vector.add(400);
      vector.add(500);

      System.out.println(vector.toString());
                                       
                                       
      System.out.println("\nVector Elements: " + vector + "\n");
  } 
}
