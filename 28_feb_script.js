let a=[
    {name:"ABC",
    mark: [2,3,4,5]},
    
    {
    name: "XYZ",
    mark: [4,3,6,2]
    }];
    
    var sum_mark=0;
    for (var i=0;i<a.length;i++)
    {
    var mark =a[i].mark
    
    for (var j=0;j<mark.length;j++)
    {
    sum_mark=sum_mark+mark[j]
    }
    console.log(`name:${a[i].name} Total marks: ${sum_mark}`);
    }