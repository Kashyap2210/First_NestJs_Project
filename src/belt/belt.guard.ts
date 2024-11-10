import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // Validate request
    const hasBeltHeader = request.headers['belts'];
    console.log(hasBeltHeader)
        const belts = hasBeltHeader ? hasBeltHeader.split(',') : [];

    const hasBlackBelt = hasBeltHeader.includes('black') || hasBeltHeader.includes('red')
    console.log(hasBlackBelt)
    return hasBlackBelt;
  }
}
