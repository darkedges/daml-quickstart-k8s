import { Injectable } from '@angular/core';

import * as jwt from 'jsonwebtoken';

@Injectable({
    providedIn: 'root'
})
export class JWTHelperService {

    create(value: string): string {
        return jwt.sign(value, 'secret', { header: { typ: 'JWT' } });
    }
}
