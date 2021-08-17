 const Set_ = require('../Data _Structures/Sets/Set');

test('Add and Delete set', ()=>{
    const set = new Set_();
    expect(set.add(1)).toBe(true);
    expect(set.add(1)).toBe(false);
    expect(set.delete(1)).toBe(true);
    expect(set.delete(1)).toBe(false);

})


test('size and values of set', ()=>{
    const set = new Set_();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.values()).toStrictEqual([1,2,3]);
    expect(set.size()).toBe(3)
});

test('unions',()=>{
    const set = new Set_();
    set.add(1);
    set.add(2);
    set.add(3);
    const set2 = new Set_();
    set2.add(1);
    set2.add(2);
    set2.add(4);
    const unionset = set.join(set2);

    expect(unionset.values()).toStrictEqual([1,2,3,4]);

});

test('intersection',()=>{
    const set = new Set_();
    set.add(1);
    set.add(2);
    set.add(3);
    const set2 = new Set_();
    set2.add(1);
    set2.add(2);
    set2.add(4);
    const intersectionSet = set.intersect(set2);

    expect(intersectionSet.values()).toStrictEqual([1,2]);

})

test('difference',()=>{
    const set = new Set_();
    set.add(1);
    set.add(2);
    set.add(3);
    const set2 = new Set_();
    set2.add(1);
    set2.add(2);
    set2.add(4);
    const differenceA = set.difference(set2);
    const differenceB = set2.difference(set);
    expect(differenceA.values()).toStrictEqual([3]);
    expect(differenceB.values()).toStrictEqual([4]);

})

test('Is subset of', ()=>{
    const set = new Set_();
    set.add(1);
    set.add(2); 
    set.add(5);
    set.add(7);
    set.add(9);
    const subset = new Set_();
    subset.add(1);
    subset.add(5);
    subset.add(9);
    const notSubSet = new Set_();
    notSubSet.add(1);
    notSubSet.add(5);
    notSubSet.add(9);
    notSubSet.add(10);
    expect(subset.isSubsetOf(set)).toBe(true);
    expect(notSubSet.isSubsetOf(set)).toBe(false);
})