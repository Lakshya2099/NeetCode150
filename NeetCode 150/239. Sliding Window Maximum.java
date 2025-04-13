import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;

class Solution {
  public int[] maxSlidingWindow(int[] nums, int k) {
      List<Integer> res = new ArrayList<>();
      Deque<Integer> deque = new LinkedList<>();

      for (int idx = 0; idx < nums.length; idx++) {
          int num = nums[idx];

          while (!deque.isEmpty() && deque.getLast() < num) {
              deque.pollLast();
          }
          deque.addLast(num);

          if (idx >= k && nums[idx - k] == deque.getFirst()) {
              deque.pollFirst();
          }

          if (idx >= k - 1) {
              res.add(deque.getFirst());
          }
      }

      return res.stream().mapToInt(i -> i).toArray();        
  }
}