describe("Gilded Rose", function() {

  // i'm not going to lie this took way too long to fix though I am going to add more tests to this
  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", function () {
    items = [ new Item("foo", -1, 5) ];
    update_quality();
    expect(items[0].quality).toEqual(3);
  }); 

  it("quality is never negative", function() {
    items = [ new Item("foo", 0, -1) ];
    update_quality();
    expect(items[0].quality).toBeGreaterThan(-1);
  });

  it("Aged Brie increases in Quality the older it gets", function() {
    items = [ new Item("Aged Brie", 0, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(1);
  });

  it("The Quality of an item is never more than 50", function() {
    items = [ new Item("foo", 0, 51) ];
    update_quality();
    expect(items[0].quality).toBeLessThan(51);
  });

  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", -1, 30) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(0);
  })

  it("Sulfurus always has item quality of 80")

  it("Backstage passes, increases in Quality as its SellIn value approaches, Quality increases by 2 when there are 10 days", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 7, 9) ];
    update_quality();
    expect(items[0].quality).toEqual(11);
  });

  it("Backstage passes, increases in Quality as its SellIn value approaches, Quality increases by 3 when there are 5 days", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 2, 9) ];
    update_quality();
    expect(items[0].quality).toEqual(12);
  });

  it("Backstage passes, increases in Quality as its SellIn value approaches, Quality drops to 0 after the concert", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", -1, 9) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("'Conjured' items degrade in Quality twice as fast as normal items", function() {
    items = [ new Item("Conjured Mana Cake", -1, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });

  it("'Conjured' items degrade in Quality twice as fast as normal items", function() {
    items = [ new Item("Conjured Sweet Roll", 10, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(4);
  });
});
