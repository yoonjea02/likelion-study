package my_java;

public class Main2 {

    //함수 선언 with 매개변수
    static int addTwoNumbers(int num1, int num2) {
        int sum = num1 + num2;

        return sum;
    }

    //함수 선언
    static void add10_20() {
        int a = 10;
        int b = 20;
        int c = a + b;
        System.out.println(c);
    }
    
    public static void main(String[] args) {
        //TODO Auto-generated method stub

        
        int score = addTwoNumbers(50, 50);

        if (score == 100) {
            System.out.println("100 입니다.");
        } else if (score > 0) {
            System.out.println("0보다 큽니다.");;
        } else {
            System.out.println("100이 아닙닙니다.");
        }




        if (score > 0) {
            System.out.println("0보다 큽니다.");
        }




        //반복문
        strinn[] members = {"a", "b", "c"};
        for (int i = 0; i < members; i++) {
            
            string members = members[i];
            System.out.println(i);
        }


        //System.out.println(result);