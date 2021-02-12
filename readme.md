# Singleton Design Patttern

The objectives of this pattern are;
- To Ensure that a class has only one/a single instance.

- To provide a global access point to that instance.

In this program, we created a program in which only one user is allowed to login at a time. This instance can be seen on social media sites such as facebook, instagram and different webbrowsers. Only one user is allowed per browser

## Steps followed to achieve this

Step 1: Created a class to turn into the singleton class.
 
Step 2: Specify all the class data members (variables).

Step 3: Specify all the class operations or methods.

Step 4: Create a static member of the class to store the very first instance of the class to be created.

Step 5: Within and at the end of the constructor of the class, assign the static property (created in step 4) a value, which values is an instance of the class (singleton class)

Step 6 also happens within the constructor: Check for whether there exists any created instance of the singleton class. if there is an instance of the current class already created, then return that instance.

Step 7: Test for whether the singleton class works as expected. The class creates only one instance irrespective of how many times it is instantiated.

**Private Note:** It is  Not recommended to make the phonenumber datatype a number due to the instance of needing the country codes and for example in numbers 07896546891 = 7896546891 but "0786453298" != "786453298". Also we are not going to use it for any calculations

# Strategy Design Pattern


        