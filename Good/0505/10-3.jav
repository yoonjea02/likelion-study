package my_java;

public class Main {
    
    public static void main(String[] args) {
        //TODO Auto-generated method stub

        Animal dog = new Animal("강아지", "멍멍이", 3);
        Animal cat = new Animal("고양이", "야옹이", 2);

        dof.sayAge();
        cat.sayAge();


    }

}


class Animal {
    String type;
    Strimg name;
    int age;


    //매소드 (함수)
    void sayAge() {
        System.out.println(name+"의 나이는"+age);
    }


    // 생성자
    Animal(String a, String b, int c) {
        type = a;
        name = b;
        age = c;
    }
}