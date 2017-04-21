#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#define MAX 122
#define MIN 65

bool compare(int* arr1, int* arr2)
{
    int i;
    for (i=MIN; i<=90; i++)
        if (arr1[i] != arr2[i])
            return false;
    for (i=97; i<=MAX; i++)
        if (arr1[i] != arr2[i])
            return false;
    return true;
}

int appearanceCount(int input1,int input2,char* input3,char* input4)
{
    int countP[MAX+1] = {0}, countTW[MAX+1] = {0};
    int c = 0, i = 0;
    for (i = 0; i < input1; ++i)
    {
        ++(countP[input3[i]]);
        ++(countTW[input4[i]]);
    }
    for (i = input1; i < input2; i++)
    {
        if (compare(countP, countTW))
            ++c;
        ++(countTW[input4[i]]);
        --(countTW[input4[i-input1]]);
    }
    if (compare(countP, countTW))
        ++c;
    return c;
}

int main() {
    int output = 0;
    int ip1;
    scanf("%d", &ip1);
    int ip2;
    scanf("%d", &ip2);
    char* ip3;
    ip3 = (char *)malloc(512000 * sizeof(char));
    scanf("\n%[^\n]",ip3);
    char* ip4;
    ip4 = (char *)malloc(512000 * sizeof(char));
    scanf("\n%[^\n]",ip4);
    output = appearanceCount(ip1,ip2,ip3,ip4);
    printf("%d\n", output);
    return 0;
}
