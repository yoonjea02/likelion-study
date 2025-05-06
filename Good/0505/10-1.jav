package my_java;

public class Main {
    
    public static void main(String[] args) {
        //TODO Auto-generated method stub

        //System.out.println("Hello, World!");

        int a = 10;
        int b;
        b=20;

        int c = a + b;

        System.out.println(c);




        String name = "철수";
        String first = "김";

        String full = first + name;
        System.out.println(full);

        boolean check = true;
        boolean check2 = false;

        float pi = 3.14f;


        string [] team = {"철수", "영희", "짱구", "유리"};
        
        string one = team[2];
        System.out.println(one);

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("name", "윤재");
        map.put("address", 부산);


        string myName = (string) map.get("name");




    }

}