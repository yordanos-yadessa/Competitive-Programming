int select(int arr[], int i)
{
    // code here such that selecionSort() sorts arr[]
   
}


void selectionSort(int arr[], int n)
{
   int temp;
       for(int i=0; i<n; i++){
           int smallest = i;
           for(int j=i+1; j<n; j++)
           {
               if(arr[j]<arr[smallest])
                smallest=j;
           }
           temp = arr[i];
           arr[i]=arr[smallest];
           arr[smallest]= temp;
       }
    }
