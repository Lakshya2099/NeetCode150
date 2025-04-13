import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Car{
  int position;
  int speed;
  public Car(int p,int s){
      position = p;
      speed = s;
  }
  
}

class Solution {
  public int carFleet(int target, int[] position, int[] speed) {
      List<Car> list = new ArrayList<>();
      
      //create list to sort based on position
      for(int i=0;i<position.length;i++){
          Car temp = new Car(position[i],speed[i]);
          list.add(temp);
      }
      
      Collections.sort(list,(Car a,Car b)->(b.position - a.position));
      
      // First car time taken to reach destination
      Car x = list.get(0);        
      float lastTime = ((float)(target-x.position)/(x.speed));
      
      //First car reached destination in lastTime hours
      int fleet = 1;
      
      //check for all others car if there in any car with less time than lastTime
      for(int i=1;i<position.length;i++){
          x = list.get(i);
          float currTime = ((float)(target-x.position)/(x.speed));
          if(lastTime<currTime){
              lastTime = currTime;
              fleet++;
          }
      }
      
      return fleet;
  }
}
