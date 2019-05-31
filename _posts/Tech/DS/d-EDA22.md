
上一篇我们提到了数据类型和单变量分析，这一篇我们将从相关性、共线性  和其他类型的多变量三方面阐述多变量分析。

## 两个变量之间的关系:相关性 (Correlation)
### 1. 什么是变量间的相关性？
相关性是用于衡量两个变量之间相关方向以及相关程度的统计方法。一般用相关系数 r 来描述相关性。

#### 相关方向
当 r > 0时，说明两个变量的变化方向是一致的，例如学习时间和成绩的关系，则称两个变量正相关。
当 r < 0 时，说明两个变量的变化方向是相反的，例如体重和运动量的关系，则成两个变量负相关。
当 r = 0 时，成两个变量无线性相关。

#### 相关程度
r 的绝对值越大，则说明两个变量越相关，反之，则越不相关。

|r|>0.95 存在显著性相关；

|r|≥0.8 高度相关；

0.5≤|r|<0.8 中度相关；

0.3≤|r|<0.5 低度相关；

|r|<0.3 关系极弱，认为不相关

### 2. 相关性定量方法
对于两个变量而言，如果说两者存在着相关性，往往会说他们存在着线性相关性或非线性相关性。

#### 线性相关性方法
通俗地讲，如果两个变量组成的点可以用一条直线拟合，那么就说他们线性相关。如下图所示：



常用的度量线性相关性的系数有：

Person 相关系数：适用于对定距或定比变量。（通常说相关系数时都是指Person相关系数）

Spearman 相关系数：变量至少需要时有序的。

Kendall 相关系数: 适用于分类性变量，一般用于分析两个有序变量的相关性。

#### 非线性相关性方法
如果两个变量组成的点，可以用一条曲线去拟合（例如二次函数，三次函数等等），那么说他们非线性相关。 如下图所示：



常用的度量非线性相关性的系数有：

MIC 相关系数：适用于数值型数据

## 3. 相关性图形化方法
   相关性图形化分析方法通常使用散点图和热力图。

- 散点图（Scatter Plot）

散点图是分析数值型变量间相关性的最常用图，通过散点图我们可以直观发现变量间的相关程度和相关方法，另外可以也可以很直观地发现非线性相关性。

  



- 热力图(Heatmap Plot)

散点图展示出两两变量间的相关性。例如，下图就是一个，数值型变量间相关系数矩阵热力图：



## 多个数值型变量的关系:多重共线性 (Multicollinearity)
### 1. 什么是多重共线性
假设变量之间存在着  的关系，那么则说明 存在着严格意义上的共线性。然而实际中,精准的共线性是很少发生的。一般而言，只要变量间近似地满足多重共线性的公式，那么就可以说变量间有近似的共线性。

### 2. 多重共线性造成的问题
当变量间存在着共线性的时候，那么改变一个变量就会对其共线的变量造成影响。这样模型就很难评估每个自变量和因变量之间的关系，从而导致以下的一些问题。

线性模型的参数对模型中的微小变化非常敏感。

多重共线性降低了参数估计的精度，这削弱了回归模型的统计功效，这可能导致无法通过 p 值来识别具有统计意义的独立变量。

### 3. 检验多重共线性
统计学中，一般通过方差膨胀因子 (variance inflation factor, VIF) 来检测变量之间的多重共线性：



其中  表示把第 i 个变量  当成因变量，把除了第 i 个变量以外的其他全部变量当成自变量构成的一个新的线性回归模型得到的对应的 。如果  越大，则说明这个新的线性回归模型解释性越强，越能说明第 i 个变量可以被其他变量线性表示，也就是共线性越明显。而当  越大时，VIF 值也越大。

所以一般 VIF 值越大，我们认为共线性越强。在实际的使用过程中，一般认为，如果最大的 VIF 超过 10，则变量间存在着严重的共线性。

下面是使用 R 和 Python 计算 VIF 的代码：

    # R代码
    a<-c(1, 1, 2, 3, 4)
    b<-c(2, 2, 3, 2, 1)
    c<-c(4, 6, 7, 8, 9)
    d<-c(4, 3, 4, 5, 4)

    df<-data.frame(a, b, c, d)
    vif_df<-vif(df)
    print(vif_df)
    # Python代码
    # 需要安装statsmodels、pandas和sklearn
    fromstatsmodels.stats.outliers_influenceimportvariance_inflation_factor
    importpandasaspd
    fromsklearn.preprocessingimportStandardScaler

    df= pd.DataFrame(
    {'a': [1, 1, 2, 3, 4],
    'b': [2, 2, 3, 2, 1],
    'c': [4, 6, 7, 8, 9],
    'd': [4, 3, 4, 5, 4]}
    )
    X= StandardScaler().fit_transform(df)

    vif= pd.DataFrame()
    vif["VIF Factor"] = [variance_inflation_factor(X, i) foriinrange(X.shape[1])]
    vif['columns'] = df.columns
    print(vif)

### 4. 怎么解决多重共线性？
解决多种相关性的方法一般有以下三种：

向后消除法(Backward elimination)：每次循环，遍历当前还没有剔除的变量，依次计算对应的 VIF，再去除最差的那个变量（也就是VIF值最大的变量），一直循环，直至变量数目少于预期个数或者所有的变量VIF值都小于VIF阈值。一般而言 VIF > 10，认为存在共线性。

PCA降维：PCA降维后，所有提取的主成分间两两独立，所以不会再有共线性。

岭回归分析法：岭回归线性回归在线性回归的基础上新增了一个惩罚项，解决了共线性。

## 其他类型的多变量分析
### 1. 多个分类型变量之间：
- 马赛克图(Mosaic Plot)

马赛克图常常用于表示分类变量之间的数据可视化。下左图显示了泰坦尼克号事件中不同性别的存活情况，下右图显示了不同性别不同阶级的存活情况。

### 2. 一个分类型变量和一个数值型变量

- Side By Side Boxplot

Side By Side Boxplot 是一个将分类型变量和数值型变量一起分析的图。下图展示了齿轮的个数(分类型变量)和每千米耗油量(数值型变量)的关系。



### 3. 一个分类型变量 + 两个数值型变量
Scatter Plot with marker

下图表示不同类别间 petal_length 和 petal_width 的分布情况，其中 petal_length、petal_width 是数值型数据，类别是分类型数据。从图中可以看出，不同组之间存在着明显的线性边界。



## 总结
本文主要讲述多变量分析的方法，包括相关性、共线性和其他类型的多变量分析。同时，结合图形的方法往往可以直观地得出一些结论。综合上一篇中数据类型和单变量分析，完整的讲述了EDA中常用的方法。

Reference
- https://www.jianshu.com/p/6ff218cb5fe9
- https://www.jiqizhixin.com/articles/how-machines-make-predictions-finding-correlations-in-complex-data
- https://www.statisticssolutions.com/correlation-pearson-kendall-spearman/
- https://zhuanlan.zhihu.com/p/24178040
- https://statisticsbyjim.com/regression/multicollinearity-in-regression-analysis/
- https://en.wikipedia.org/wiki/Variance_inflation_factor

