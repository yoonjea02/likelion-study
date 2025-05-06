package my_java;

public class Main {
    
    public static void main(String[] args) {
        //TODO Auto-generated method stub
        SoccerPlayer sp = new SoccerPlayer("손흥민");
        GolfPlayer gp = new GolfPlayer("타이거 우즈");
        BaseballPlayer bp = new BaseballPlayer("이대호");
        
        sp.run();
        gp.run();
        bp.run();

        sp.eat("사과");
        gp.eat("바나나");   
        bp.eat("포도");
    }

}


interface Action{
    void run();
    void eat(String food);
}

//운동선수 프로젝트 협업

class SoccerPlayer {
	String name;

    @Override
    public void run() {
        System.out.println(name + "runs...");
    }

    @Override
    public void eat(String food) {
        System.out.println(name +"eats"+food);
    }

    

	SoccerPlayer(String name){
		this.name=name;
	}
}


class GolfPlayer {
	String name;

@Override
    public void run() {
        System.out.println(name + "runs...");
    }

    @Override
    public void eat(String food) {
        System.out.println(name +"eats"+food);
    }

   
	GolfPlayer(String name){
		this.name=name;
	}
}



class BaseballPlayer {
	String name;

    @Override
    public void run() {
        System.out.println(name + "runs...");
    }

    @Override
    public void eat(String food) {
        System.out.println(name +"eats"+food);
    }


	BaseballPlayer(String name){
		this.name=name;
	}
}