import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(id: number, users: IUser[]): string {
    return users.find(user => user.id === id)?.name ?? `${id}`;
  }

}
