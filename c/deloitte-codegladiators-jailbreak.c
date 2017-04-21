#include <math.h>
#include <stdio.h>
#include <limits.h>

// may be we can use a lookup to optimize
int GetJumpCount(int input1,int input2,int input3_size, int* input3)
{
    int i=0, res = 0;
    int d = input1-input2;
    for(i=0;i<input3_size;++i) {
        res += (input3[i] <= input1 ? 0 : ceil((input3[i] - input1)/(float)d)) + 1;
    }
    return res;
}

int main() {
    int output = 0;
    int ip1;
    scanf("%d", &ip1);
    int ip2;
    scanf("%d", &ip2);
    int ip3_size = 0;
    int ip3_i;
    scanf("%d\n", &ip3_size);
    int ip3[ip3_size];
    for(ip3_i = 0; ip3_i < ip3_size; ip3_i++) {
        int ip3_item;
        scanf("%d", &ip3_item);        
        ip3[ip3_i] = ip3_item;
    }
    output = GetJumpCount(ip1,ip2,ip3_size,ip3);
    printf("%d\n", output);
    return 0;
}
