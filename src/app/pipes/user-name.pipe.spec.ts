import { IUser } from '../interfaces';
import { UserNamePipe } from './user-name.pipe';

describe('UserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UserNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('returns user name', () => {
    // arrange
    const pipe = new UserNamePipe();
    const id = 111;
    const users = [{ id: 222 }, { id: 111, name: 'Victor' }] as IUser[];
    const expected = 'Victor';

    // act
    const actual = pipe.transform(id, users);

    // assert
    expect(actual).toEqual(expected);
  });
});
