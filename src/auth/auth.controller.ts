import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth-guard.jwt';
import { AuthService } from './auth.service';
import {
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBody,
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import {  LoginUserDto } from 'src/user/dto/login-user.dto';
import { LocalGuard } from './auth-guard.local';
import { SessionGuard } from './session.guard';
@Controller('auth')
@ApiTags('Authentication api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @ApiOkResponse({ description: 'User Login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @UseGuards(LocalGuard)
  @ApiBody({ type: LoginUserDto })
  async login(@Request() req) {
    const token = await this.authService.generateToken(req.user);
    return {
      userId: req.user._id,
      access_token: token,
    };
  }
  @Get('profile')
  @UseGuards(SessionGuard)
  @ApiBearerAuth()
  getProfile(@Request() req) {
    console.log(req.user);
    return req.user;
  }
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' };
  }
}
