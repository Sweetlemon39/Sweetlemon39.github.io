---
layout: post
title: 扩展欧几里得算法
date: 2018-08-16
updated: 2018-08-16
katex: true
categories: 算法浅解
tags: [算法浅解, 数学, gcd]
---

#### 用途
求解裴蜀方程$ax+by=(a,b)$的一组解，其中$a,b\in \mathbb{N_{+}}$。

<!-- more -->
#### 基本原理
扩展欧几里得算法基于这样一个原理：若$a=bq+r\ (q\in \mathbb{Z},r\in [0,b) \cap \mathbb{Z})$，且有$bx'+ry'=(b,r)\ (x,y\in \mathbb{Z})$，则有$x=y',y=x'-qy'$满足$ax+by=(a,b)$。证明如下：

$\because bx'+ry'=(b,r)\ , (a,b)=(b,r)$  
$\therefore bx'+ry'=(a,b)$  
$\because a=bq+r\ ,x=y',y=x'-qy'$  
$\therefore ax+by=(bq+r)y'+b(x'-qy')=bx'+ry'$  
$\therefore ax+by=(a,b)$  
#### 计算过程
先执行欧几里得算法的一般过程，得到$b=0$的一步时有平凡解$x=1,y=c$（$c$为任意整数），再依次回代计算$x$和$y$即可。值得注意的是，随着$c$取值的变化，计算出的一组解也会变化。
算法的时间复杂度为$O(log_{2} n)$。
#### 具体例子

|$a$   |$b$   |$q$   |$r$   |$x$   |$y$   |$(a,b)$ |方程 $ax+by=(a,b)$|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|$12345$|$678$|$18$|$141$|$101$|$-1839$|$3$|$12345\times 101+678\times (-1839)=3$|
|$678$|$141$|$4$|$114$|$-21$|$101$|$3$|$678\times(-21)+141\times101=3$|
|$141$|$114$|$1$|$27$|$17$|$-21$|$3$|$141\times 17+114\times (-21)=3$|
|$114$|$27$|$4$|$6$|$-4$|$17$|$3$|$114\times (-4)+27\times 17=3$|
|$27$|$6$|$4$|$3$|$1$|$-4$|$3$|$27\times 1+6\times (-4)=3$|
|$6$|$3$|$2$|$0$|$0$|$1$|$3$|$6\times 0+3\times 1=3$|
|$3$|$0$| | |$1$|$0$|$3$|$3\times 1+0\times 0=3$|

上述表格的前$4$列$a,b,q,r$是自上而下计算的，$x,y,\ (a,b)$是由下而上递推的。  
上述$a=12345,b=678$的例子中，不断改变$c$的取值，计算出的$x,y$的值如下表。  

|$c$|$x$|$y$|
|:--:|:--:|:--:|
|$-3$|$779$|$-14184$|
|$-2$|$553$|$-10069$|
|$-1$|$327$|$-5954$|
|$0$|$101$|$-1839$|
|$1$|$-125$|$2276$|
|$2$|$-351$|$6391$|
|$3$|$-577$|$10506$|
上表相邻两行$x$的差为$226$，恰为$\frac{678}{(12345,678)}$；$y$的差为$4115$，恰为$\frac{12345}{(12345,678)}$。

#### 解的特征

下面分析$c$的取值对解的影响。可以证明，若令取$c=0$时计算出的一组解为$(x_{0},y_{0})$，且辗转相除过程中进行除法运算的次数为$n$，则计算出的解为$x=(-1)^{n+1}c\frac{b}{(a,b)}+x_{0},y=(-1)^{n}c\frac{a}{(a,b)}+y_{0}$。

再来看解的符号。$x_{0}$的符号和$(-1)^{n}$相同，$y_{0}$的符号和$(-1)^{n+1}$相同。当$c<0$时，$x,y$的符号分别和$x_{0},y_{0}$相同；当$c>0$时，$x,y$的符号分别和$x_{0},y_{0}$相反。

#### 程序代码
下面程序中取$c=0$，即上表的情形。实际编写程序时只需使用工具函数`exgcd(a,b,x,y)`即可。

```cpp
#include <iostream>
using namespace std;
int exgcd(int a,int b,int &x,int &y);
int main(void){
    int a,b,d,x,y;
    cin >> a >> b;
    d=exgcd(a,b,x,y);
    cout << "裴蜀方程" << a << "x+" << b << "y=" << d;
    cout << "的一组解是" << "x=" << x << "y=" << y << endl; 
    return 0;
}
int exgcd(int a,int b,int &x,int &y){
    int xx,yy,d,q,r; //xx是x',yy是y',d是(a,b)
    if (b==0){
        x=1,y=0;
        return a;
    }
    q=a/b,r=a%b; //a=bq+r
    d=exgcd(b,r,xx,yy);
    x=yy,y=xx-q*yy;
    return d;
}
```