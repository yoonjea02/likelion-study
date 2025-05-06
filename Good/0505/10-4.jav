package my_java;

public class Main {
    
    public static void main(String[] args) {
        //TODO Auto-generated method stub

        Person person = new Person("철수", 20);


        person.getInfo();


        A a = new A();


    }

}


class A extends B{
    string aName = "a";
}

class B extends{
    string bName = "b";
}

class C{
    string cName = "c";
}



class Korea{
    String nationName="대한민국";
    String city ="서울";
    int population = 10000000;
    Strimg name = "철수";

    //+1000개 필드
}

class Person extends Korea{
    String name;
    int age;

   Void getInfo() {
        System.out.println(this.city);
    }


    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

}