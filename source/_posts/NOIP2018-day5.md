---
layout: post
title: NOIP 2018 集训 Day 5
date: 2018-10-24
updated: 2018-10-24
mathjax: true
categories: 即时笔记
tags: [笔记, 数学]
---

~~这是最后一篇即时笔记了呢~~

## 数学

<!-- more -->

### 数论

#### 数论各种神器算法

[线性递推逆元](https://www.luogu.org/problemnew/show/P3811)：$i^{-1}=(p-\lfloor p\div i\rfloor)\times (p\%i)^{-1}\% p$。

以及阶乘和阶乘的逆元的递推：$n!\equiv n\times (n-1)! \pmod{p},(n!)^{-1}\equiv n^{-1} \times ((n-1)!)^{-1}$。

可以用这个方法在$\text{O}(n)$预处理后，$\text{O}(1)$计算组合数。

[线性筛](https://www.luogu.org/problemnew/show/P3383)

这个线性筛不仅可以筛质数，还可以计算积性函数。$\varphi,\mu$等函数都可以用这种方法计算。详见[贾志鹏 线性筛](https://wenku.baidu.com/view/2d706761aa00b52acec7ca63.html)。

#### [随机数生成器](https://www.luogu.org/problemnew/show/P2044)

可以用矩阵，也可以用等比数列求和。

这里介绍一些等比数列求和的方法。

现在我们要求$s=\sum_{i=0}^{n}a^i=1+a+a^2+\cdots+a^n \pmod{p}$。

如果$p$是质数，我们就可以利用等比数列的求和公式$s=\frac{a^{n+1}-1}{a-1}\equiv (a^{n+1}-1)\times (a-1)^{-1} \pmod{p}$。时间复杂度$\text{O}(\log n)$。

如果$p$不是质数，则答案可以如下计算：$(a^{n+1}-1)\% ((a-1)p)\div (a-1)$。

上述方法可概括如下：若$c=\frac{a}{b}$是整数，那么$c\% p=(a\%(bp))\div b$。（注意$a$不能边算边模，$a$一定要保持原样，即必须保证参与计算的$b\mid a$。如果要涉及到更复杂的~~膜 蛤~~ 模合数，请参见[Virtual NOIP Day 2 总结](https://sweetlemon.blog.luogu.org/virtual-noip-2018-day2)。）

证明如下：设$c\equiv x \pmod{p},a\equiv t \pmod{bp}$。

由同余的性质得，$c-x=np,a-t=bmp$。

将$c$的定义带入得：$\frac{a}{b}-x=np$，知$a-bx=bnp$。得$a=bnp+bx$。

又知$a=bmp+t$，带入得$bnp+bx=bmp+t$，即$bx-t=bp(m-n)$，知$bx\equiv t \pmod{bp}$。

由$a-t=bmp$知$bc-t=bmp$，得$t=b(c-mp)$。令$k=c-mp$，则$t=bk$。

带入得$bx\equiv bk \pmod{bp}$，约去$b$得$x\equiv k\pmod{p}$。证毕。

当然还可以用分治。现在要求$s=\sum_{i=0}^{n}a^i=1+a+a^2+\cdots+a^n \pmod{p}$。

如果$n$是偶数，设$n=2k$，那么$s=1+a+\cdots+a^k+a^{k+1}+\cdots+a^{2k}=(1+a^{k})(1+\cdots+a^{k-1})+a^{2k}$

如果$n$是奇数，设$n=2k+1$，那么
$$s=1+a+\cdots+a^k+a^{k+1}+\cdots+a^{2k+1}=(1+a^{k+1})(1+\cdots+a^k)$$

取边界条件$k=0$，分治即可。

#### [解方程](https://www.luogu.org/problemnew/show/P2312)

系数这么大，怎么办？~~写高精~~ 

写高精是不可能的，这辈子都不会写高精的！

我们考虑把方程弱化为同余方程，取一个大数~~（比如某个数）~~，最好是$\text{long long}$级别的，读入时直接把系数模$p$，然后枚举解即可。

#### [Freda城堡的密码](http://www.joyoi.cn/problem/tyvj-1990)

取$\text{long long}$级别的Dark♂数，预处理出$F_1,F_2,\cdots,F_{100000}$模这个数的余数，枚举判断即可。

#### 随机数生成的方法

最简单的方法当然是直接`rand()`（是否`srand()`都可以）。

下面介绍一种生成（几乎）不可预测的随机数的方法，对于$\text{OI}$赛制来说没有什么用，但是对于$\text{Codeforces}$这种需要防$\text{hack}$的赛制，就很有用了。

```cpp
void *a=new char;
void *b=(void *)(NULL);
int x=a-b;
delete a;
```
上述代码会生成一个随机数$x$，请注意$x$一定是$8$的倍数。

#### [小凯的~~疑惑~~ 遗憾](https://www.luogu.org/problemnew/show/P3951)

考场上怎么办？数论打表找规律！千万不要像我一样蠢到手算，面前摆的可是一台高科技计算机呢，怎么能不写程序找规律呢？找找规律就发现是一次函数了w_w。

证明我有时间再补吧。

看一道推广题：[半质数的线性组合](https://projecteuler.net/problem=278)

结论是$2pqr-pq-pr-qr$。

#### 欧拉函数（$\varphi $函数）

$\varphi(x)=\sum_{i=1}^{x}[i \perp x]$，即$[1,x]$中与$x$互质的数的个数。

$\varphi(ab)=\varphi(a)\varphi(b) \  \text{ }(a\perp b)$

#### 中国~~生育~~剩余定理

#### $\text{long long} \text{ O}(1)$ 快速乘

有时候我们要计算$a\times b\% p$，其中$a,b,p$都是$\text{long long}$级别的数字，那么我们怎么办呢？

有一个玄学类型，叫做$\text{long double}$，它作为浮点数类型，可以保存相当大的数，误差相对不是很大。

再回顾一下模的概念：$x\%p=a-\lfloor\frac{x}{p}\rfloor \times p$。

于是我们的思路就是，用$\text{long double}$暂时算出积的值并除以$p$，加上一点微小的$\text{EPS}$，转换为$\text{long long}$后乘以$p$，再用$\text{long long}$下积的值减去上面计算的结果，加上$p$后再模$p$即可。

上面说起来比较抽象，让我们看看代码。

```cpp
ll mul(ll a,ll b,ll p){
	ll res;
	a%=p;
    b%=p;
    res=(ll)((long double)(a)*b/p+EPS);
    res=res*p;
    res=a*b-res;
    res+=p;
    res%=p;
    return res;
}
```

压行后的代码如下：

```cpp
ll mul(ll a,ll b,ll p){
    a%=p,b%=p;
    return (a*b-(ll)((long double)(a)*b/p+EPS)*p+p)%p;
}
```

注意这个方法在数字较大的时候很可能不准确，如果要保险，请使用龟速乘（$\text{O}(\log n)$）。

```cpp
ll mul(ll a,ll b,ll p){
    ll ans=0;
    while (b){
        if (b&1)
            ans=(ans+a)%p;
        a=(a<<1)%p;
        b>>=1;
    }
    return ans;
}
```

### 组合数学

#### $\text{Catalan}$数

可以用生成函数解（学长的方法），也可以用图形直接转化为组合数（米尔嘉的神奇方法）。

$C_{n}=\frac{(2n)!}{(n+1)!n!}$可以表示：

1. 有$n$个结点的不同形态的二叉树的个数  
2. 含$n$对括号的合法括号序列的个数  
3. 长度为$n$的入栈序列对应的合法出栈序列个数  
4. 通过连接顶点而将$n+2$边的凸多边形分成三角形的方法个数

根据$\text{Catalan}$数公式的推导过程，可以用$C_{n}=\text{C}^{2n}_{n}-\text{C}^{2n}_{n+1}$进行无除法的递推。

#### [合法括号序列](https://www.cnblogs.com/BriMon/p/9663254.html)

将问题分解为，按键$n$次输入一个长度为$m$的序列和长度为$m$的序列有多少个是合法括号序列。前者可以通过$\text{dp}$计算，而后者就是$\text{Catalan}$数，最后将这两个相乘再累加即得答案。

#### [子集选取](https://www.lydsy.com/JudgeOnline/problem.php?id=4475)

注意到每个元素的选取是独立的。

考虑某一个元素的选取，将选取方案转化为三角形上的折线，因此答案为$2^{nk}$。

#### [卢卡斯定理](https://www.luogu.org/problemnew/show/P3807)

应用：[愚蠢的组合数](https://www.luogu.org/problemnew/show/P1869)

### 概率论

#### [茶壶](https://www.luogu.org/problemnew/show/AT3635)

最优策略一定是选当前剩下的最贵的壶。将壶的价格从小到大排序为$a_1,a_2,\cdots,a_{2n}$。那么第$i$个壶被选中的概率是$p_i=\frac{i-1}{2n-1}$，于是总期望$\text{E}=\sum_{i=1}^{2n}p_{i}a_{i}$。

#### $\text{NOIP }2018$初赛$\text{T8}$

结论：在$[0,1]$内找$n$个数，其中最大数的期望是$\frac{n}{n+1}$，最小数的期望是$\frac{1}{n+1}$。

#### 期望

- 独立事件：若$\text{P}(AB)=\text{P}(A)\text{P}(B)$，则$A$和$B$是独立的。

- 期望的性质：线性性：$\text{Ex}(aX+bY)=a\text{Ex}(X)+b\text{Ex}(Y)$  
  独立随机变量的期望：若$X,Y$独立，则$\text{Ex}(XY)=\text{Ex}(X)\text{Ex}(Y)$

- 条件概率。
