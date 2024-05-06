import java.util.*; 

public class Example_1 {
  public static void main(String[] args) {
    /*
      ArrayList 
      =========
      Java ArrayList class uses a dynamic array for storing the elements. 
      It is like an array, but there is no size limit. 
      We can add or remove elements anytime. So, it is much more flexible than the traditional array. 
      It is found in the java.util package. 
      It is like the Vector in C++.
      The ArrayList in Java can have the duplicate elements also. 
      It implements the List interface so we can use all the methods of the List interface here. 
      The ArrayList maintains the insertion order internally.
      It inherits the AbstractList class and implements List interface.

      Note
      ====
      non-synchronized: The resources are not ready to be accessed from multiple threads

      The important points about the Java ArrayList class are:
      ========================================================
      1) Java ArrayList class can contain duplicate elements.
      2) Java ArrayList class maintains insertion order.
      3) Java ArrayList class is non synchronized.
      4) Java ArrayList allows random access because the array works on an index basis.
      5) In ArrayList, manipulation is a little bit slower than the LinkedList in Java because a lot of shifting needs to occur if any element is removed from the array list.
      6) We can not create an array list of the primitive types, such as int, float, char, etc. It is required to use the required wrapper class in such cases.
     

      Constructor
      ===========
      1) ArrayList() => It is used to build an empty array list.

      2) ArrayList(<Collection>) =>   It is used to build an array list that is initialized with 
                                      the elements of the collection.

      3) ArrayList(<capacity>)   =>   It is used to build an array list that has the specified initial capacity.                          


      
      Methods
      =======

      1) .add(<element>)          =>  Appends the specified element to the end of this list.
                                      ReturnType: boolean

      2) .add(<index>, <element>) =>  Inserts the specified element at the specified position in this list.
                                      ReturnType: void

      3) .addAll(<Collection>)    =>  Appends all of the elements in the specified collection to the end of this list,
                                      ReturnType: boolean

      4) .addAll(<index>, <Collection>) => Inserts all of the elements in the specified collection into this list, 
                                           starting at the specified position.

      5) .remove(<index>)         =>  Removes the element at the specified position in this list.
                                      ReturnType: removed element from list

      6) .removeAll(<Collection>) =>  Removes from this list all of its elements that are contained in the specified collection.
                                      ReturnType: boolean

      7) .removeIf(<condition>)   =>  Removes all of the elements of this collection that satisfy the given predicate
                                      ReturnType: boolean

      8) .retainAll(<Collection>) =>  Removes from this list all of its elements that are not contained in the specified collection.                               
                                      ReturnType: boolean

      9) .size()                  =>  Returns the number of elements in this list.
                                      ReturnType: Number

      10) .clear()                 =>  Removes all of the elements from this list. 
                                      The list will be empty after this call returns.   
                                      
      11) .clone()                =>  Returns a shallow copy of this ArrayList instance. 
                                      (The elements themselves are not copied.)   

                                      Example
                                      --------
                                      ArrayList <Integer> list = new ArrayList<>();
                                      list.add(100);
                                      list.add(200);
                                      list.add(300);

                                      ArrayList <Integer> clonedList = new ArrayList<>(list);
      
      12) .contains(<Object>)     =>  Returns true if this list contains the specified element.    
      
      13) .containsAll(<Collection>)    =>  Returns true if this collection contains all of the elements in the specified collection.

      14) .isEmpty()              =>  Returns true if this list contains no elements.

      15) .equals(<Collection>)   =>  Compares the specified object with this list for equality
                                      ReturnType: boolean

      16) .hasCode()              =>  It returns the hash code number of the collection.    
      
      17) .iterator()             =>  Returns an iterator over the elements in this list in proper sequence
                                      
                                      Example
                                      -------
                                      ArrayList <Integer> list = new ArrayList<>();
                                      list.add(100);
                                      list.add(200);
                                      list.add(300);
                                      Iterator <Integer> iterator = list.iterator();
                                    
                                      while (iterator.hasNext()) {
                                        System.out.println(iterator.next());
                                      }

      18) .toArray()              =>  Returns an array containing all of the elements 
                                      in this list in proper sequence (from first to last element).  
                                      
                                      Example
                                      -------
                                      ArrayList <Integer> list = new ArrayList<>();
                                      list.add(100);
                                      list.add(200);
                                      list.add(300);

                                      Object[] arr =  list.toArray();

                                      for (Object element : arr) {
                                        System.out.println(element);
                                      }

      19) .get(<index>)           =>  It is used to fetch the element from the particular position of the list. 

      20) .set(<index>, <element>)  =>  Replaces the element at the specified position in this list with the specified element                                                  
      
      21) .replaceAll(UnaryOperator<E> operator)  => Replaces each element of this list with the result of applying the operator to that element.
                                                  
                                                    Example For Integer
                                                    -------------------
                                                    list.replaceAll((element) -> {
                                                      return element * element;
                                                    });

      22) .sort(<Comparator>)     =>  It is used to sort the elements of the list on the basis of the specified comparator.                                              

      23) .subList(<fromIndex>, <endIndex>)   =>  Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive. 
                                                  (If fromIndex and toIndex are equal, the returned list is empty.) 

    */                    

   
    ArrayList <Integer> list = new ArrayList<>();
    list.add(200);
    list.add(100);
    list.add(300);
    
    System.out.println("\nList Elements: " + list + "\n");
  }
}
