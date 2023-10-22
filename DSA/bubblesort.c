#include<stdio.h>

void main(){
  int n,i,j,temp,f=0;
  printf("Enter n: ");
  scanf("%d",&n);
  int a[n];
  printf("Enter the elements: ");
  for (i=0;i<n;i++){
    scanf("%d",&a[i]);
  }

  for (i=0;i<n-1;i++){
    for (j=0;j<n-i-1;j++){
      if (a[j]>a[j+1]){
        temp=a[j];
        a[j]=a[j+1];
        a[j+1]=temp;
        f=1;
      }
    }
    if (!f)
        break;
  }
  
  printf("Elements after sorting: ");
  for (i=0;i<n;i++){
    printf("%d ",a[i]);
  }
}
