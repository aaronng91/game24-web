import { CardPipe } from './card.pipe';

describe('Pipe: Card', () => {
  it('should return an appropriate card value', () => {
    let pipe = new CardPipe();
    expect(pipe.transform(1)).toEqual('A');
    expect(pipe.transform(2)).toEqual('2');
    expect(pipe.transform(10)).toEqual('10');
    expect(pipe.transform(11)).toEqual('J');
  });
});
