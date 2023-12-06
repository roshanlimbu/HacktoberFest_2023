// Cycle Sort using CPP

#include <iostream>
using namespace std;

void cycleSort(int arr[], int n) {
    for (int start = 0; start < n - 1; ++start) {
        int element = arr[start];
        int pos = start;
        
        for (int i = start + 1; i < n; ++i) {
            if (arr[i] < element) {
                pos++;
            }
        }

        if (pos == start) {
            continue;
        }

        while (element == arr[pos]) {
            pos++;
        }

        if (pos != start) {
            swap(element, arr[pos]);
        }

        while (pos != start) {
            pos = start;
            for (int i = start + 1; i < n; ++i) {
                if (arr[i] < element) {
                    pos++;
                }
            }
            while (element == arr[pos]) {
                pos++;
            }
            if (element != arr[pos]) {
                swap(element, arr[pos]);
            }
        }
    }
}

int main() {
    int arr[] = {9, 98, 1, -54, 0, 45};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "UnSorted array is : ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    cycleSort(arr, n);

    cout << "Sorted array is : ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
