function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

const brie = 'Aged Brie';
const backstage_pass= backstage => backstage.toLowerCase().includes('backstage passes');
const conjured= conjured => conjured.toLowerCase().includes('conjured');
const sulfurus = 'Sulfuras, Hand of Ragnaros';

function update_quality() {
  const reduce_quality = items.filter(item => item.name !== brie && !backstage_pass(item.name) && item.name!== sulfurus && item.quality > 0);
  const increase_quality_by_one = items.filter(item => ((item.name === brie || backstage_pass(item.name) || item.name=== sulfurus)) && item.quality < 50 );
  const increase_quality_by_more = items.filter(item => backstage_pass(item.name) && item.sell_in <= 10);
  const decrease_sell_in = items.filter(item => (item.name !== sulfurus));
  const reduce_quality_twice_as_fast = reduce_quality.filter(item => (item.sell_in < 0 && item.quality > 0) || conjured(item.name));
  const reduce_quality_to_zero = items.filter(item => item.sell_in < 0 && backstage_pass(item.name));
  const quality_never_negative = items.filter(item => item.quality <0);
  const sulfurus_sellin_quality_inconsequential = items.filter(item => item.name === sulfurus);

  // reduce quality if it isn't brie, backstage pass or sulfurus and quality isn't 0
  reduce_quality.forEach(item => {
    item.quality--
  });

  // increase quality if it brie, backstage pass or sulfurus and quality isn't 50
  increase_quality_by_one.forEach(item => {
    item.quality++
  });

  // increase quality of concert ticket if its 10 days closer by 2, and 5 days close by 3
  increase_quality_by_more.forEach(item => {
    item.sell_in <= 6 ? item.quality = item.quality +2 : item.quality = item.quality +1;
  })

  //reduce sell in unless you got that beautiful legendary two handed weapon ;)
  decrease_sell_in.forEach(item => item.sell_in - 1);

  //reduce quality one more time to double the degredation
  reduce_quality_twice_as_fast.forEach(item => {
    item.quality--;
    if (conjured(item.name) && item.sell_in < 0){
      item.quality = item.quality - 2;
    }
  });

  // if a concert has passed quality is 0
  reduce_quality_to_zero.forEach(item => {
    console.log(item);
    item.quality = 0
  })

  // make sure quality of an item is never -1
  quality_never_negative.forEach(item => item.quality = 0);

  //change the sellin date to 0 for sulfurus
  sulfurus_sellin_quality_inconsequential.forEach(item => {
    item.sell_in = 0;
    item.quality = 80;
  });

}
