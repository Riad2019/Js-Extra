const students =[
    {id: 21, name: 'manna'},
    {id: 31, name: 'mouyuri'},
    {id: 41, name: 'omor sunny '},
    {id: 71, name: 'dipjol'}

];
 const name = students.map (s=> s.name);
 const ids = students.map(s=>s.id);
 const bigger = students.filter(s=> s.id>40);
 const biggerOne= students.find(s=> s.id>40);
 console.log(biggerOne);
