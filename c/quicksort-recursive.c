#include <stdio.h>

void print(int* arr, int sI, int eI) {
    printf("[%d %d] : ", sI, eI);
    for(;sI<=eI;++sI)
        printf("%d ", arr[sI]);
    printf("\n");
}

void swap(int* a, int* b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

int Partition(int* arr, int sI, int eI)
{
    int i = sI-1, j, p = arr[eI];
    for(j=sI;j<=eI;++j) {
        if(arr[j] <= p) 
            swap(&arr[j], &arr[++i]);
    }
    return i;
}

void QuickSort(int* arr, int sI, int eI)
{
    if(sI >= eI) return;
    int pI;
    pI = Partition(arr, sI, eI);
    QuickSort(arr, sI, pI-1);
    QuickSort(arr, pI+1, eI);
}


int main() {
    int arr[] = {10, 80, 30, 90, 40, 50, 70};
    int n = sizeof(arr)/sizeof(arr[0]);
    printf("before: ");
    print(arr, 0, n-1);
    QuickSort(arr, 0, n-1);
    printf("after : ");
    print(arr, 0, n-1);
}
