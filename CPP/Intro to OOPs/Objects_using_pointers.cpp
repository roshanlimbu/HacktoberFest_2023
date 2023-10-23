#include <algorithm>
#include <iostream>
using namespace std;
class Rectangle {
public:
  int length, breadth;
  int area() { return length * breadth; }
  int Perimeter();
};
int Rectangle::Perimeter() { return 2 * (length + breadth); }

int main() {
  Rectangle r;
  Rectangle *p = new Rectangle();
  
  p->length = 10;
  p->breadth =5;
  cout << p-> area() <<endl;
  cout << p->Perimeter() << endl;
  delete p; // delocating memory here for mem leaks issue
  return 0;
}
