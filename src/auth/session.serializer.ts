import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import type { UserHttpPayload } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: UserHttpPayload, done: (err: Error, user: UserHttpPayload) => void): void {
    done(null, user);
  }

  deserializeUser(payload: string, done: (err: Error, payload: string) => void): void {
    done(null, payload);
  }
}