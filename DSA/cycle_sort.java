import java.util.Arrays;

public class cyclesort {
    public static void main(String[] args) {
        int arr[]={5,2,1,3,4,6};
        cyclesort(arr);
        System.out.println(Arrays.toString(arr));
    }
    static void cyclesort(int[] arr){
        int i=0;
        while(i< arr.length){
            int correct=arr[i]-1;
            if(arr[i]!=arr[correct]){
                int temp=arr[i];
                arr[i]=arr[correct];
                arr[correct]=temp;
            }
            else{
                i++;
            }

        }
    }

}
