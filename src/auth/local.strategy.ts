import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import * as bcrypt from "bcrypt";
import { Strategy } from "passport-local";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);

  constructor(
    private readonly prismaService: PrismaService
  ) {
    super();
  }

  public async validate(
    username: string, password: string
  ): Promise<any> {
    const user = await this.prismaService.userMaster.findMany({
      where: { username}
    });

    if (user.length < 1) {
      this.logger.debug(`User ${username} not found!`);
      throw new UnauthorizedException();
    }

    if (!(await bcrypt.compare(password, user[0].password))) {
      this.logger.debug(`Invalid credentials for user ${username}`);
      throw new UnauthorizedException();
    }

    return user;
  }
}