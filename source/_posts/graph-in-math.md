---
layout: post
title: 组合数学中的图论笔记
date: 2019-02-28
updated: 2019-02-28
mathjax: true
categories: 算法浅解
tags: [算法浅解, 数学, 图论]
---

1. 设$G$为一个$n(n\ge 5)$阶图，且$G$的任意$n-2$阶子图的边数为一定值$3^{k}(k\in \mathbb{N_{+}})$。求$n$的所有可能取值。  

<!-- more -->

解：设$G$的边数为$m(m\in \mathbb{N_{+}})$。  
$G$的所有$n-2$阶子图共有$\text{C}^{n-2}_{n}=\text{C}^{2}_{n}$个，这些子图的边数之和即为$\text{C}^{2}_{n}\times 3^{k}$，设这个值为 $y=\text{C}^{2}_{n}\times 3^{k}$。  
另一方面，考虑每一条边$e$，$e$所在的$n-2$阶子图共有$\text{C}^{n-4}_{n-2}=\text{C}^{2}_{n-2}$个，因此$e$被计算入答案的次数为$\text{C}^{2}_{n-2}$次。因此，$y=m\times \text{C}^{2}_{n-2}$。  
于是得到$\text{C}^{2}_{n}\times 3^{k}=m\times \text{C}^{2}_{n-2}$，整理得$m=\frac{n(n-1)3^{k}}{(n-2)(n-3)}\in \mathbb{N_+}$。  

若$(n-2)(n-3)$有质因子$p(p\ge 5)$，则知$p\mid n-2$或$p\mid n-3$，从而$p\nmid n(n-1)3^k$，得$m\not \in \mathbb{N_+}$，矛盾。  
若$4\mid(n-2)(n-3)$，则知$4\mid n-2$或$4\mid n-3$，从而$4\nmid n(n-1)3^k$，得$m\not \in \mathbb{N_+}$，矛盾。  
而$n-2$和$n-3$中必有一个为偶数，于是得$(n-2)(n-3)=2\times 3^t(t\in \mathbb{N})$。  
由于$\gcd(n-2,n-3)=1$，得$n-2=2,n-3=3^t$或$n-3=2,n-2=3^t$。  
结合条件知$n=5$为唯一满足条件的$n$值。