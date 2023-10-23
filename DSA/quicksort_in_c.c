#include<stdio.h>

void quicksort(int a[],int l,int h)
{
    int pivot,i,j,temp;
    if(l<h)
    {
        pivot=l;
        i=l;
        j=h;
        while(i<j)
        {
            while(a[i]<=a[pivot]&&i<h)
            {
                i++;
            }
            while(a[j]>a[pivot])
            {
                j--;
            }
            if(i<j)
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
        temp=a[pivot];
        a[pivot]=a[j];
        a[j]=temp;
        quicksort(a,l,j-1);
        quicksort(a,j+1,h);
    }
}

int main()
{
    int a[50],n,i;
    printf("Enter the size of array: ");
    scanf("%d",&n);
    printf("Enter the elements of array: ");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    quicksort(a,0,n-1);
    printf("Sorted array: ");
    for(i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }
    return 0;
}