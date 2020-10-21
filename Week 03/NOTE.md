学习笔记

语法分析：

LL算法

 LR算法
<font color="blue">123</font>


四则运算分析

    词法定义:

    TokenNumber .0-9组合
    Operator + - * /之一
    WhiteSpace
    LineTerminator

    语法定义:

    Expression :=
        AdditiveExpression<EOF>

        AdditiveExpression :=
            MultiplicativeExpression    
            | AdditiveExpression + MultiplicativeExpression
            | AdditiveExpression - MultiplicativeExpression

        MultiplicativeExpression :=
            Number                 // 单独数字认为是特殊的乘法
            | MultiplicativeExpression * Number
            | MultiplicativeExpression /Number 
