const _ = require('../dist/index');
// console.log(_.cloneDeep([1]));
// console.log(_.uniq([1, 2, 1, 3, 4, 5, 6, 5, 2]));
// console.log(_.uniqBy([{ a: 1 },  { a: 2 }, { a: 1, s: {} }], 'a'));
// console.log(_.regPhone("13112345678"));
// console.log(_.regMail("zhangffff@qq.com"));
// console.log(_.regCardNumGreen("粤BF1"));
// console.log(_.getURLParams('/?1=1&a={a:1}'));
// console.log(_.regPasswordStrong('123AsO@'));
// console.log(_.dateToMs(new Date()));
console.log(
  _.treeToList(
    [
        {
          id: 1, parentId: null, children: [{
            id: 2,
            parentId: 1,
            children: [
              {
                id: 3,
                parentId: 2,
                children: [
                ]
              }
            ]
          }]
        },
        {
          id: 2, parentId: 1, children: [{
            id: 3,
            parentId: 2,
            children: []
          }]
        },
        { id: 3, parentId: 2, children: [] }
      ]
    ,'children'
  )
);
