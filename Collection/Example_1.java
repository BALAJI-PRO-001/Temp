import java.util.ArrayList;

public class Example_1 {
  public static void main(String[] args) {
    /*
      ArrayList Methods
      -----------------
      1) .add(<element>)          =>  Appends the specified element to the end of this list.
                                      ReturnType: boolean

      2) .add(<index>, <element>) =>  Inserts the specified element at the specified position in this list.
                                      ReturnType: void

      3) .addAll(<Collection>)    =>  Appends all of the elements in the specified collection to the end of this list,
                                      ReturnType: boolean

      4) .remove(<index>)         =>  Removes the element at the specified position in this list.
                                      ReturnType: removed element from list

      5) .removeAll(<Collection>) =>  Removes from this list all of its elements that are contained in the specified collection.
                                      ReturnType: boolean

      6) .removeIf(<condition>)   =>  Removes all of the elements of this collection that satisfy the given predicate
                                      ReturnType: boolean

      7)                                
    */                    

   
    ArrayList <Integer> list = new ArrayList<>();
    list.add(100);
    list.add(200);
    list.add(300);
    
    list.clear();

    System.out.println("\nList Elements: " + list + "\n");
  }
}

