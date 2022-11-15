#include <iostream>
#include <bits/stdc++.h>
using namespace std;

template <class T> struct str{
    ostream &ob;
    str(ostream & o):ob(o){}    
    void operator()(const T&v){
        ob<<v<<" ";
    }
};
struct argq{
    int start;
    argq(int start):start(start){}
    int operator()(){
        return ++start +5;
    }
};
int main(){
    vector<int> v1(10);
    generate(v1.rbegin(),v1.rend(),argq(10));
    rotate(v1.begin(),v1.begin()+2,v1.end());
    for_each(v1.begin(),v1.end(),str<int>(cout));
    cout<<endl;
    return 0;  
}
